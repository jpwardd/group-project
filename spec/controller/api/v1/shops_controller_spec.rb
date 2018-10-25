require 'rails_helper'

 RSpec.describe Api::V1::ShopsController, type: :controller do

	let!(:first_shop) {Shop.create(name: 'Dunkin\' Donuts', address: '101 Summer Street', city: 'Boston', state: 'MA', zip: '02110', phone_number: '6173388141' )}
	let!(:second_shop) { Shop.create(name: 'Kane\'s Donuts in Boston', address: '90 Oliver St', city: 'Boston', state: 'MA', zip: '02110', phone_number: '8573172654, ') }
	let!(:third_shop) { Shop.create(name: 'Sip-N-Dip Donuts', address: '2175 S Main St', city: 'Fall River', state: 'MA', zip: '02724', phone_number: '5086774847') }
	let!(:fourth_shop) { Shop.create(name: 'Towne Donut Shop', address: '864 State Rd', city: 'North Dartmouth', state: 'MA', zip: '02747', phone_number: '5089922145') }
	let!(:fifth_shop)  { Shop.create(name: 'Union Square Donuts', address: '20 Bow St', city: 'Somerville', state: 'MA', zip: '02143', phone_number: '6172092257, ') }


 	describe 'GET#index' do
		it 'should return a list of all the shops' do
 			get :index

			returned_json = JSON.parse(response.body)

 			expect(response.status).to eq 200
			expect(response.content_type).to eq 'application/json'
 			expect(returned_json.length).to eq 5

			expect(returned_json[0]['name']).to eq 'Dunkin\' Donuts'
			expect(returned_json[0]['address']).to eq '101 Summer Street'

 			expect(returned_json[1]['address']).to eq '90 Oliver St'
			expect(returned_json[1]['state']).to eq 'MA'

 			expect(returned_json[2]['name']).to eq 'Sip-N-Dip Donuts'
			expect(returned_json[2]['city']).to eq 'Fall River'

 			expect(returned_json[3]['address']).to eq '864 State Rd'
			expect(returned_json[3]['phone_number']).to eq '5089922145'
 		end
	end

	describe "GET#show" do
		it 'should return a single shop with the name, address, city, state, zip, phone number' do
		get :show, params: {id: fifth_shop.id}

		returned_json = JSON.parse(response.body)
			expect(response.status).to eq 200
			expect(response.content_type).to eq ('application/json')
			expect(returned_json["id"]).to eq fifth_shop.id
			expect(returned_json["name"]).to eq fifth_shop.name
			expect(returned_json["address"]).to eq fifth_shop.address
			expect(returned_json["city"]).to eq fifth_shop.city
			expect(returned_json["state"]).to eq fifth_shop.state
			expect(returned_json["zip"]).to eq fifth_shop.zip
			expect(returned_json["phone_number"]).to eq fifth_shop.phone_number
		end
	end
end
