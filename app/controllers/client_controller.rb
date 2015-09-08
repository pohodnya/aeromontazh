class ClientController < ApplicationController
  respond_to :js, :html

  def create
    @client = client_params
    if ClientMailer.send_to_admin(@client).deliver_now
      success = true
      message = 'Message send.'
    else
      success = false
      message = 'Error.'
    end
    # redirect_to Rails.application.config.host
    # respond_with(@client, :status=> :ok, :location => root_path)
    respond_to do |format|
      format.html {
        if success
          flash[:success] = message
          redirect_to root_path
        else
          flash[:error] = message
          redirect_to root_path
        end
      }
      format.json { render :json => { :success => success, :message => message }.to_json }
    end
  end

  private
  def client_params
    params.require(:client).permit :name, :phone, :email, :from_form
  end
end