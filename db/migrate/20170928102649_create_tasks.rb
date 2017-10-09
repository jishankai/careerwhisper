class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :name
      t.text :description
      t.datetime :start_at
      t.datetime :end_at
      t.text :answer
      t.text :keys

      t.timestamps
    end
  end
end
