class Api::V1::LevelsController < ApplicationController
  protect_from_forgery with: :exception

  def show
    enemies = Level.find_by(level: params[:id]).enemies
    render json: enemies
  end
end