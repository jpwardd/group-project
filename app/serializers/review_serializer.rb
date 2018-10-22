class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :donut_review, :coffee_review, :shop_review, :shop, :user
end
