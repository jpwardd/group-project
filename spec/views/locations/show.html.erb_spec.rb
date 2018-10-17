require 'rails_helper'

RSpec.describe "locations/show", type: :view do
  before(:each) do
    @location = assign(:location, Location.create!(
      :address => "Address",
      :city => "City",
      :state => "State",
      :zip => "Zip",
      :phone_number => "Phone Number",
      :shop => nil
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Address/)
    expect(rendered).to match(/City/)
    expect(rendered).to match(/State/)
    expect(rendered).to match(/Zip/)
    expect(rendered).to match(/Phone Number/)
    expect(rendered).to match(//)
  end
end
