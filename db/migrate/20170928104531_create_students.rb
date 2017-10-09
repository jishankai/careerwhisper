class CreateStudents < ActiveRecord::Migration[5.1]
  def change
    create_table :students do |t|
      t.string :name
      t.boolean :gender
      t.integer :age
      t.string :major
      t.string :school
      t.string :company
      t.integer :period
      t.string :email
      t.string :mobile

      t.timestamps
    end
  end
end
