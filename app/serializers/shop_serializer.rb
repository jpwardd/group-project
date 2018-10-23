class ShopSerializer < ActiveModel::Serializer
  attributes :id, :current_user_id, :users, :reviews, :name, :address, :city, :state, :zip#add the rest of the shop attribtes

  def current_user_id
    scope.id
  end

end
