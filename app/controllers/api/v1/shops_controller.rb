
class Api::V1::ShopsController < ApplicationController
	protect_from_forgery unless: -> { request.format.json? }

 	def index
		render json: Shop.order(:name)
	end

	def show
		shop = Shop.find(params[:id])
		render json: shop
	end

 end
