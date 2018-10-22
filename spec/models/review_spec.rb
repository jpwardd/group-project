require 'rails_helper'

describe Review do

  let!(:shop) {Shop.create(name: 'Holy Donut', address: '7 Exchange St', city: 'Portland', state: 'ME', zip: '04101', phone_number: '2077757776') }
  let!(:user) {User.create(first_name: 'Timothy', last_name: 'Johnson', city: 'Birmingham', state: 'AL', email: 'tj@gmail.com', password: 'movegetouttheway') }

  it { should have_valid(:donut_review).when("Good") }
  it { should_not have_valid(:donut_review).when(nil, "") }

  it { should have_valid(:coffee_review).when("Yum") }
  it { should_not have_valid(:coffee_review).when(nil, "") }

  it { should have_valid(:shop_review).when("Delish") }
  it { should_not have_valid(:shop_review).when(nil, "") }
  
  it { should have_valid(:shop).when(shop) }
  it { should_not have_valid(:shop).when(nil) }

  it { should have_valid(:user).when(user) }
  it { should_not have_valid(:user).when(nil) }

end
