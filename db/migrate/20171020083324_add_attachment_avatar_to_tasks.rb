class AddAttachmentAvatarToTasks < ActiveRecord::Migration[5.1]
  def self.up
    change_table :tasks do |t|
      t.attachment :avatar
    end
  end

  def self.down
    remove_attachment :tasks, :avatar
  end
end
