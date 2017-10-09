class CreateSurveys < ActiveRecord::Migration[5.1]
  def change
    create_table :surveys do |t|
      t.string :name
      t.text :description
      t.string :href
      t.datetime :start_at
      t.datetime :end_at

      t.timestamps
    end
  end
end
