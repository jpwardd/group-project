class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :donut_review, :coffee_review, :shop_review, :shop, :user, :current_user_role,:current_user_id

  def current_user_id
    scope.id
  end

  def current_user_role
    scope.role
  end
end
