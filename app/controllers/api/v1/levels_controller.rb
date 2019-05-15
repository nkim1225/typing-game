class Api::V1::LevelsController < ApplicationController
  protect_from_forgery with: :exception

  def show
    enemies = Level.find_by(level: 1).enemies
    player = current_user
    if current_user === nil
      player = {username: "PLAYER 1", id: nil}
    end
    render json: {enemies: enemies, player: player}
  end
end