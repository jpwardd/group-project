class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.string :address
      t.string :city
      t.string :state
      t.string :zip
      t.string :phone_number
      t.references :shop, foreign_key: true

      t.timestamps
    end
  end
end
