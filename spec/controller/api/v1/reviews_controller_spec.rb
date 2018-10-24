require 'rails_helper'

 RSpec.describe Api::V1::ReviewsController, type: :controller do

 	let!(:first_shop) { Shop.create(name: 'Union Square Donuts', address: '20 Bow St', city: 'Somerville', state: 'MA', zip: '02143', phone_number: '6172092257') }
	let!(:user) { User.create(first_name: 'Timothy', last_name: 'Johnson', city: 'Birmingham', state: 'AL', email: 'tj@gmail.com', password: 'helloworld') }
  let!(:review) { Review.create(user: user, shop: first_shop, donut_review: 'Yum yum', coffee_review: 'Good good', shop_review: 'Everything was fantastic, my experience was superb and the staff went above and beyond the requirements set by social standards') }

 	describe 'GET#index' do

		it 'should return a list of all the shops' do
 			get :index, params: {shop_id: first_shop.id}

			returned_json = JSON.parse(response.body)

 			expect(response.status).to eq 200
			expect(response.content_type).to eq 'application/json'
 			expect(returned_json.length).to eq 1
			expect(returned_json[0]['donut_review']).to eq review.donut_review
			expect(returned_json[0]['coffee_review']).to eq review.coffee_review
			expect(returned_json[0]['shop_review']).to eq review.shop_review

 		end
	end

  describe "POST#create" do
     it "creates a new review" do
       allow(controller).to receive(:current_user).and_return(user)
       post_json = { review: {donut_review: "yum", coffee_review: "yummy", shop_review: "nice ambiance" }, shop_id: first_shop.id }
       expect{post(:create, params: post_json)}.to change{Review.count}.by 1
     end

     it "returns the json of the new review" do
       allow(controller).to receive(:current_user).and_return(user)
       post_json = { review: {donut_review: "yum", coffee_review: "yummy", shop_review: "nice ambiance" }, shop_id: first_shop.id }
       post(:create, params: post_json)

       returned_json = JSON.parse(response.body)
       expect(response.status).to eq 200
       expect(response.content_type).to eq("application/json")
       expect(returned_json).to be_kind_of(Hash)
       expect(returned_json).to_not be_kind_of(Array)
       expect(returned_json["donut_review"]).to eq "yum"
     end
   end
 end
