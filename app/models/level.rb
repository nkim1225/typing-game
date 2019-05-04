class Level < ApplicationRecord
  validates :name, presence: true

  has_many :enemies
end