class Api::V1::ReviewsController < ApplicationController
	protect_from_forgery unless: -> { request.format.json? }


	def index
		shop = Shop.find(params[:shop_id])
		reviews = shop.reviews

		render json: reviews
	end

	def show
		reviews = Review.find(params[:id])
		render json: reviews
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

	def destroy
		authorize_delete
		Review.destroy(params[:id])
	end


	private

	def authorize_delete
		if current_user != Review.find(params[:id]).user
			raise ActionController::RoutingError.new("Not Found")
		end
	end

	def review_params
		params.require(:review).permit(:donut_review, :coffee_review, :shop_review, user: current_user)
	end

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      raise ActionController::RoutingError.new("Not Found")
    end
  end

end
