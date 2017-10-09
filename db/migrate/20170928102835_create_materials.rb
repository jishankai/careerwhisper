class CreateMaterials < ActiveRecord::Migration[5.1]
  def change
    create_table :materials do |t|
      t.string :name
      t.text :description
      t.string :href
      t.integer :downloads

      t.timestamps
    end
  end
end
