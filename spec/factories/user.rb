FactoryBot.define do
  factory :user do
    first_name "Amelia"
    last_name "Kim"
    email "ameliamjkim@gmail.com"
    password "thisismypassword.123"
    city "Boston"
    state "MA"
    # avatar "#{Rails.root}/app/assets/images/pexels-photo.jpg"
  end
end
