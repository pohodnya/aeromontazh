class ClientController < ApplicationController

  def create
    ClientMailer.send_to_admin(client_params).deliver
    redirect_to "localhost:3000"
  end

  private
  def client_params
    params.require(:client).permit :name, :phone, :email, :from_form
  end
end