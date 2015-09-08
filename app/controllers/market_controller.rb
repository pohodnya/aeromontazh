class MarketController < ApplicationController
  respond_to :js, :html

  def create
    @order = order_params
    if ClientMailer.send_order(@order).deliver_now
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
  def order_params
    params.require(:order).permit :first_name, :last_name, :third_name, :phone, :email, :street, :house, :flat
  end
end
