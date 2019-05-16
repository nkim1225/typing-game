class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :score

  def score
    object.top_score
  end
end