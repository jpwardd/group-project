require 'rails_helper'

RSpec.describe "reviews/index", type: :view do
  before(:each) do
    assign(:reviews, [
      Review.create!(
        :user => nil,
        :shop => nil,
        :coffee => "Coffee",
        :donut => "Donut",
        :wifi => false
      ),
      Review.create!(
        :user => nil,
        :shop => nil,
        :coffee => "Coffee",
        :donut => "Donut",
        :wifi => false
      )
    ])
  end

  it "renders a list of reviews" do
    render
    assert_select "tr>td", :text => nil.to_s, :count => 2
    assert_select "tr>td", :text => nil.to_s, :count => 2
    assert_select "tr>td", :text => "Coffee".to_s, :count => 2
    assert_select "tr>td", :text => "Donut".to_s, :count => 2
    assert_select "tr>td", :text => false.to_s, :count => 2
  end
end
