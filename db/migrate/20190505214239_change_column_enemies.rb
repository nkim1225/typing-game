class ChangeColumnEnemies < ActiveRecord::Migration[5.2]
  def up
    change_column :enemies, :value, :string, null: false
    add_column :enemies, :key, :string, null: false
  end

  def down
    change_column :enemies, :value, :integer, null: false
  end
end
