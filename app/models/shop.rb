class Shop < ApplicationRecord
	has_many :reviews
	has_many :users, through: :reviews

	validates_presence_of :name, :address, :city, :state, :zip
end
