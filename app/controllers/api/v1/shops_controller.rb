class Api::V1::ShopsController < ApplicationController
	protect_from_forgery unless: -> { request.format.json? }

 	def index
		render json: Shop.all
	end

	def show
		shop = Shop.find(params[:id])
		render json: ShopSerializer.new(shop, { scope: current_user })
		# render json: Shop.find(params[:id])
	end

 end
