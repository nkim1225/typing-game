class Api::V1::LevelsController < ApplicationController
  protect_from_forgery with: :exception

  def show
    binding.pry
  end
end