

class EnemySerializer < ActiveModel::Serializer
  attributes :id, :name, :value, :key, :word

  def word
    return RandomWord.adjs(not_shorter_than: 3, not_longer_than: 6).next
  end

end