class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.references :user, foreign_key: true
      t.references :shop, foreign_key: true
      t.string :coffee
      t.string :donut
      t.boolean :wifi

      t.timestamps
    end
  end
end
