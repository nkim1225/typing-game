class ChangeColumnEnemies < ActiveRecord::Migration[5.2]
  def change
    change_column :enemies, :value, :string, null: false
  end
end
