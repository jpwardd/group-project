
class Api::V1::ShopsController < ApplicationController
	protect_from_forgery unless: -> { request.format.json? }

 	def index
		render json: Shop.all
	end

<<<<<<< HEAD
	def show
		render json: Shop.find(params[:id])
	end

 end
=======
end
>>>>>>> 47fbba7b3296d965d8128d0cad3f24b7d951f069
