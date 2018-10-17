class Api::V1::ShopsController < ApplicationController

 	def index
		render json: Shop.all
	end

  def search
    query = "%#{params[:shops]}%"
    shops_query = Shop.where('name ilike ? or address ilike ? or city ilike ?', query, query, query)

    render json: shops_query
  end

end
