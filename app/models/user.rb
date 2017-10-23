class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable,
  :registerable,
  :recoverable,
  :rememberable, :trackable, :validatable

  ROLE = {admin: "admin", member: "member", superadmin: "superadmin"}
end
