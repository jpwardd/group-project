
class Api::V1::DootsController < ApplicationController

  def update
    review = Doot.find(params[:review_id])
    doots = review.doots

    render json: doots
  end

end
