class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    top_users = User.all.order(:top_score).reverse
    render json: top_users[0...9]
  end

  def update
    user = User.find(params[:id])
    if user[:top_score] == nil
      user[:top_score] = params[:score]
    elsif user[:top_score] <= params[:score]
      user.top_score = params[:score]
    end
    if user.save
      render json: user
    elsif
      render json: {error: "invalid score"}
    end
  end
end