class AddUniqueToDoots < ActiveRecord::Migration[5.2]
  def change
    add_index :doots, [:user_id, :review_id, :user_doot], unique: true
  end
end
