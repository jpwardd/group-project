FactoryBot.define do
  factory :location do
    address { "MyString" }
    city { "MyString" }
    state { "MyString" }
    zip { "MyString" }
    phone_number { "MyString" }
    shop { nil }
  end
end
