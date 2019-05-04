class Enemey < ApplicationRecord
  validates :name, presence: true
  validates :value, presence: true

  belongs_to :level
end