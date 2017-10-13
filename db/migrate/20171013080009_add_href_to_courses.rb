class AddHrefToCourses < ActiveRecord::Migration[5.1]
  def change
    add_column :courses, :href, :string, :after => :description
    add_column :courses, :img, :string, :after => :description
  end
end
