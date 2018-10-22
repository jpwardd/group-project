class AddDootsToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column(:reviews, :doots, :integer, null: false, default: 0)
  end
end
