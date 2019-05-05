class Level < ApplicationRecord
  validates :name, presence: true
  validates :level, presence: true

  has_many :enemies
end