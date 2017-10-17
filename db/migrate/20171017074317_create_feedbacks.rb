class CreateFeedbacks < ActiveRecord::Migration[5.1]
  def change
    create_table :feedbacks do |t|
      t.text :description
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
