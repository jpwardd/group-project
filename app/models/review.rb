
class Review < ApplicationRecord

	belongs_to :shop
	belongs_to :user
	has_many :doots
	has_many :user_doots, through: :doots, class_name: "User"

	validates_presence_of :donut_review, :coffee_review, :shop_review

end
