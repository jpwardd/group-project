
class Api::V1::ReviewsController < ApplicationController
	protect_from_forgery unless: -> { request.format.json? }

	def show
		shop = Shop.find(params[:shop_id])
		reviews = shop.reviews

		render json: reviews
	end

	def create
		review = Review.new(review_params)
		review.shop = Shop.find(params[:shop_id])
		review.user = current_user

		if review.save
			render json: {review: review}
		else
			render json: {error: review.errors.full_messages.join(', ') }, status: :unprocessable_entity
		end

	end


	private

	def review_params
		params.require(:review).permit(:donut_review, :coffee_review, :shop_review)
	end


end