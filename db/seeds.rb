# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


shop1 = Shop.create(name: 'Dunkin\' Donuts', address: '101 Summer Street', city: 'Boston', state: 'MA', zip: '02110', phone_number: '6173388141', )
shop2 = Shop.create(name: 'Blackbird Doughnuts', address: '492 Tremont St', city: 'Boston', state: 'MA', zip: '02116', phone_number: '6174829000', )
shop3 = Shop.create(name: 'Holy Donut', address: '7 Exchange St', city: 'Portland', state: 'ME', zip: '04101', phone_number: '2077757776', )