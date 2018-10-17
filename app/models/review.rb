
class Review < ApplicationRecord

	belongs_to :shop
	belongs_to :user

	validates :donut_review, presence: true
	validates :coffee_review, presence: true
	validates :shop_review, presence: true

end