class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :doot_score, :donut_review, :coffee_review, :shop_review, :user, :current_user_id, :current_user_role

  def current_user_id
    if scope
      scope.id
    else
      nil
    end
  end

  def current_user_role
    if scope
      scope.role
    else
      nil
    end
  end
end
