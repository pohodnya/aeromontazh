class ClientController < ApplicationController

  def create
    ClientMailer.send_to_admin(client_params).deliver_now
    redirect_to "https://aeromontazh.herokuapp.com"
  end

  private
  def client_params
    params.require(:client).permit :name, :phone, :email, :from_form
  end
end