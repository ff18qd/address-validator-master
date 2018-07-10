class AddressesController < ApplicationController
  def index
    render 'new'
  end

  def new
    
  end

  def create
    # @address = params["street_address"] + ", " + params["city"] + ", " + params["state"] + ", " + params["zip_code"]
    binding.pry
    # @address = Address.new(:zip_5 params[:zip_code])
    # binding.pry
    # @address.save

    # render 'new'
  end
  
  
  def show
  end

  private

  def address_params
    params.permit(:house_number,:street_name,:street_type,:street_predirection,:street_postdirection,:unit_number,:unit_type,:city, :state, :zip_code)
  end
end
