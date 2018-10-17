require 'rails_helper'

RSpec.describe "reviews/edit", type: :view do
  before(:each) do
    @review = assign(:review, Review.create!(
      :user => nil,
      :shop => nil,
      :coffee => "MyString",
      :donut => "MyString",
      :wifi => false
    ))
  end

  it "renders the edit review form" do
    render

    assert_select "form[action=?][method=?]", review_path(@review), "post" do

      assert_select "input[name=?]", "review[user_id]"

      assert_select "input[name=?]", "review[shop_id]"

      assert_select "input[name=?]", "review[coffee]"

      assert_select "input[name=?]", "review[donut]"

      assert_select "input[name=?]", "review[wifi]"
    end
  end
end
