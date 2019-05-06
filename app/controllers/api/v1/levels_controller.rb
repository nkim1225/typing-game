class Api::V1::LevelsController < ApplicationController
  protect_from_forgery with: :exception

  def show
    level = Level.find_by(level: params[:id])
    render json: level.enemies
  end
end