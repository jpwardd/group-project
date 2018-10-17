json.extract! location, :id, :address, :city, :state, :zip, :phone_number, :shop_id, :created_at, :updated_at
json.url location_url(location, format: :json)
