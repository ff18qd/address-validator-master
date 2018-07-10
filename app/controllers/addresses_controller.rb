class AddressesController < ApplicationController
  def index
    render 'new'
  end

  def new
    
  end

  def create
    @address = params["street_address"] + ", " + params["city"] + ", " + params["state"] + ", " + params["zip_code"]
    # binding.pry
    # @address = Address.new(address_params)
    # binding.pry
    # @address.save

    # render 'new'
  end
  
  
  def show
  end

  private

  def address_params
    params.permit(:city, :state, :zip_code)
  end
end
