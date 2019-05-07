class EnemySerializer < ActiveModel::Serializer
  attributes :id, :name, :value, :key, :word


  # def word
  #   $randomWord.next
  #   $randomWord.close
  # end

end