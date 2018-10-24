class Shop < ApplicationRecord
	has_many :reviews
	has_many :users, through: :reviews

 	validates :name, presence: true
	validates :address, presence: true
	validates :city, presence: true
	validates :state, presence: true
	validates :zip, presence: true
end
