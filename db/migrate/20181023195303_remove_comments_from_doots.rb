class RemoveCommentsFromDoots < ActiveRecord::Migration[5.2]
  def up
    remove_column :doots, :comment
  end

  def down
    add_column :doots, :comment
  end
end
