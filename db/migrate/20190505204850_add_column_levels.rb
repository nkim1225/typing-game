class AddColumnLevels < ActiveRecord::Migration[5.2]
  def change
    add_column :levels, :description, :text
    add_column :levels, :level, :integer, null: false
  end
end
