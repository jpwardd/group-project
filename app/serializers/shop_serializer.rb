class ShopSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :state, :zip, :phone_number
  has_many :reviews
end
