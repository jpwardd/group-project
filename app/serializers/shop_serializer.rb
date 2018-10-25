class ShopSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :state, :zip, :phone_number, :image_url
  has_many :reviews
end
