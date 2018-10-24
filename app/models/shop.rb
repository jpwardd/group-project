class Shop < ApplicationRecord
	has_many :reviews
	has_many :users, through: :reviews

 	validates :name, presence: true
	validates :address, presence: true
	validates :city, presence: true
	validates :state, presence: true
	validates :zip, presence: true
<<<<<<< HEAD

=======
>>>>>>> 1b1299fab7042dfb4c30f79b0dff5cc924325ca1
end
