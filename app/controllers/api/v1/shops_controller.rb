class Api::V1::ShopsController < ApplicationController

 	def index
		render json: Shop.all
	end

	def show
		render json: Shop.find(params[:id])
	end

 end