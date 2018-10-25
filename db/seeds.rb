# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

shop1 = Shop.create(name: 'Dunkin\' Donuts', address: '101 Summer Street', city: 'Boston', state: 'MA', zip: '02110', phone_number: '6173388141', image_url: "https://www.mbicearena.com/images/default-source/shutterstock-image/dd-concessions-(002).jpg?sfvrsn=de8a2eda_0")
shop2 = Shop.create(name: 'Blackbird Doughnuts', address: '492 Tremont St', city: 'Boston', state: 'MA', zip: '02116', phone_number: '6174829000', image_url: 'https://s3.amazonaws.com/nomzplz-userfiles-mobilehub-1220713660/public/instagram/26340610_2051601188417429_2017504051993772032_n%20BeT9DfEFZBB%202018-01-29T09:24:01.963615')
shop3 = Shop.create(name: 'Holy Donut', address: '7 Exchange St', city: 'Portland', state: 'ME', zip: '04101', phone_number: '2077757776', image_url: "https://i1.wp.com/s3.amazonaws.com/kabbage-media-user/blog/wp-content/uploads/2017/05/01163004/holy-donut.jpeg?ssl=1")

user1 = User.create(first_name: 'Timothy', last_name: 'Johnson', city: 'Birmingham', state: 'AL', email: 'tj@gmail.com', password: 'movegetouttheway')
user2 = User.create(first_name: 'Flying', last_name: 'Narwhals', city: 'Boston', state: 'MA', email: 'fn@aol.com', password: '123456')
user3 = User.create(first_name: 'Flying', last_name: 'Narwhals', city: 'Boston', state: 'MA', email: 'fnn@aol.com', password: '123456', role: 'admin')


review1 = Review.create(user_id: 1, shop_id: 2, donut_review: 'Yum yum', coffee_review: 'Good good', shop_review: 'Everything was fantastic, my experience was superb and the staff went above and beyond the requirements set by social standards')

doots1 = Doot.create(user_id: 1, review_id: 1, user_doot: nil)
doots1 = Doot.create(user_id: 2, review_id: 1, user_doot: nil)
