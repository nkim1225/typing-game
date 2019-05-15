class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :top_score, presence: true

  def date
    updated_at.strftime("%B %e, %Y, %l:%M %P")
  end

  def topscore
    top_score
  end
end
