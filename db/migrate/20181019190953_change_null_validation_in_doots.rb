class ChangeNullValidationInDoots < ActiveRecord::Migration[5.2]
  def up
    change_column_null(:doots, :user_doot, true)
  end

  def down
    change_column_null(:doots, :user_doot, false)
  end
end
