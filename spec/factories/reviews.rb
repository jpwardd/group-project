FactoryBot.define do
  factory :review do
    user { nil }
    shop { nil }
    coffee { "MyString" }
    donut { "MyString" }
    wifi { false }
  end
end
