class AddColumUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :top_score, :integer, default: 0
  end
end
