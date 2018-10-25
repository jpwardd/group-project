class CreateDoots < ActiveRecord::Migration[5.2]
  def change
    create_table :doots do |t|
      t.belongs_to :user, null: false
      t.belongs_to :review, null: false

      t.boolean :user_doot, null: false
      t.text :comment

      t.timestamps null: false
    end
  end
end
