class Doot < ApplicationRecord
  belongs_to :user
  belongs_to :review

  validates :user_doot, presence: true, allow_nil: true

end
