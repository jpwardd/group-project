require 'rails_helper'

RSpec.describe "reviews/show", type: :view do
  before(:each) do
    @review = assign(:review, Review.create!(
      :user => nil,
      :shop => nil,
      :coffee => "Coffee",
      :donut => "Donut",
      :wifi => false
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(//)
    expect(rendered).to match(//)
    expect(rendered).to match(/Coffee/)
    expect(rendered).to match(/Donut/)
    expect(rendered).to match(/false/)
  end
end
