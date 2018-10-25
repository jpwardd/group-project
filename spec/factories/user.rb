FactoryBot.define do
  factory :user do
    first_name "Amelia"
    last_name "Kim"
    email "ameliamjkim@gmail.com"
    password "thisismypassword.123"
    role "member"
    city "Boston"
    state "MA"
  end
end
