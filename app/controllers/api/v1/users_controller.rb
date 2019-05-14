class Api::V1::UsersController < ApplicationController
  protect_from_forgery with: :exception

  def index
    users = User.all
    users.order(:top_score)
    render json: users[0...9]
  end

  def update
    binding.pry
  end
end