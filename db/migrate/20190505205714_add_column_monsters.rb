class AddColumnMonsters < ActiveRecord::Migration[5.2]
  def change
    add_column :enemies, :word, :string, null: false
  end
end
