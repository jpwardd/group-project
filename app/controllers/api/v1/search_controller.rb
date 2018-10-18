class Api::V1::SearchController < ApplicationController

  def index
    query = "%#{params[:shops]}%"
    shops_query = Shop.where('name ilike ? or address ilike ? or city ilike ?', query, query, query)

    render json: shops_query
  end

end
