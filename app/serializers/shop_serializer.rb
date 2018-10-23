class ShopSerializer < ActiveModel::Serializer
  attributes :id, :users, :reviews, :name, :address, :city, :state, :zip, :phone_number
end
