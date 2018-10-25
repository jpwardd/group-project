class RenameDootsColumn < ActiveRecord::Migration[5.2]
  def up
    rename_column(:reviews, :doots, :doot_score)
  end

  def down
    rename_column(:reviews, :doot_score, :doots)
  end
end
