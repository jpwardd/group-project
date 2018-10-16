require "rails_helper"


feature "profile avatar" do
  scenario "user uploads a profile avatar" do
    user = FactoryBot.create(:user)

    visit root_path
    click_link "Sign Up"

    fill_in "First Name", with: user.first_name
    fill_in "Last Name", with: user.last_name
    fill_in "City", with: user.city
    select user.state, from: "State"
    fill_in "Email", with: "foo@foobar.com"
    fill_in "Password", with: user.encrypted_password
    fill_in "Password confirmation", with: user.encrypted_password
    attach_file :avatar, "#{Rails.root}/spec/support/images/photo.jpg"
    click_button "Sign up"

    expect(page).to have_css("img[src*='photo.jpg']")
  end
end
