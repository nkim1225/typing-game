class Enemy < ApplicationRecord
  validates :name, presence: true
  validates :value, presence: true
  validates :word, presence: true
  validates :level_id, presence: true

  belongs_to :level

end