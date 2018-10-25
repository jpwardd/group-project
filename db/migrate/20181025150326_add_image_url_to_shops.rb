class AddImageUrlToShops < ActiveRecord::Migration[5.2]
  def change
		add_column :shops, :image_url, :string
  end
end
