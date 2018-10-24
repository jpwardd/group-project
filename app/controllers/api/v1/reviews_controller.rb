class Api::V1::ReviewsController < ApplicationController
	protect_from_forgery unless: -> { request.format.json? }
	skip_before_action :authenticate_user!

	def index
		shop = Shop.find(params[:shop_id])
		reviews = shop.reviews

		render json: reviews
	end

	def show
		reviews = Review.find(params[:id])
		render json: ReviewSerializer.new(reviews, { scope: current_user })
	end

	def create
		review = Review.new(review_params)
		review.shop = Shop.find(params[:shop_id])
		review.user = current_user

		if review.save
			render json: review
		else
			render json: {error: review.errors.full_messages.join(', ') }, status: :unprocessable_entity
		end
	end

	def update
		review = Review.find(params[:id])
		review.user = current_user

		if review.update(review_params)
			render json: review
		end
	end

	def destroy
		if authorize_delete?
			Review.destroy(params[:id])
		else
			render json: {error: "You are not authorized!"}
		end
	end


	private
	def authorize_delete?
		current_user == Review.find(params[:id]).user || current_user.admin?
	end

	def review_params
		params.require(:review).permit(:doot_score, :donut_review, :coffee_review, :shop_review, user: current_user)
	end

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      raise ActionController::RoutingError.new("Not Found")
    end
  end

end
