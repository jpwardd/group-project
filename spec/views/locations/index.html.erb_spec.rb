require 'rails_helper'

RSpec.describe "locations/index", type: :view do
  before(:each) do
    assign(:locations, [
      Location.create!(
        :address => "Address",
        :city => "City",
        :state => "State",
        :zip => "Zip",
        :phone_number => "Phone Number",
        :shop => nil
      ),
      Location.create!(
        :address => "Address",
        :city => "City",
        :state => "State",
        :zip => "Zip",
        :phone_number => "Phone Number",
        :shop => nil
      )
    ])
  end

  it "renders a list of locations" do
    render
    assert_select "tr>td", :text => "Address".to_s, :count => 2
    assert_select "tr>td", :text => "City".to_s, :count => 2
    assert_select "tr>td", :text => "State".to_s, :count => 2
    assert_select "tr>td", :text => "Zip".to_s, :count => 2
    assert_select "tr>td", :text => "Phone Number".to_s, :count => 2
    assert_select "tr>td", :text => nil.to_s, :count => 2
  end
end
