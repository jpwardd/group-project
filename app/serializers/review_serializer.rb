class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :donut_review, :coffee_review, :shop_review, :user, :current_user_id, :current_user_role

  def current_user_id
    scope.id
  end

  def current_user_role
    scope.role
  end
end
