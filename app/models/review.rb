class Review < ApplicationRecord
	belongs_to :shop
	belongs_to :user
	has_many :doots
	has_many :user_doots, through: :doots, class_name: "User"

<<<<<<< HEAD
	validates_presence_of :donut_review, :coffee_review, :shop_review

=======
	validates :donut_review, presence: true
	validates :coffee_review, presence: true
	validates :shop_review, presence: true
>>>>>>> 1b1299fab7042dfb4c30f79b0dff5cc924325ca1
end
