require 'random_word_generator'

class EnemySerializer < ActiveModel::Serializer
  attributes :id, :name, :value, :key, :word

  def word
    RandomWordGenerator.of_length(5)
  end

end