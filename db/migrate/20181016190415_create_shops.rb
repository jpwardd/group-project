class CreateShops < ActiveRecord::Migration[5.2]
  def change
    create_table :shops do |t|
    	t.string :name, null: false
    	t.string :address, null: false
    	t.string :city, null: false
    	t.string :state, null: false
    	t.string :zip, null: false
    	t.string :phone_number

     	t.timestamps null: false
    end
  end
end
