class CreateCredits < ActiveRecord::Migration[5.1]
  def change
    create_table :credits do |t|
      t.integer :score
      t.references :student, foreign_key: true

      t.timestamps
    end
  end
end
