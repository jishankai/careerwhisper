class Course < ApplicationRecord
  has_attached_file :avatar, styles: { medium: "300x200>", thumb: "150x100>" }, default_url: "/images/courses.jpg"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  has_paper_trail
end
