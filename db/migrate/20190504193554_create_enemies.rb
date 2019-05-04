class CreateEnemies < ActiveRecord::Migration[5.2]
  def change
    create_table :enemies do |t|
      t.string :name, null: false
      t.integer :value, null: false

      t.belongs_to :level

      t.timestamps null:false
    end
  end
end