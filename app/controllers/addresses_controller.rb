class AddressesController < ApplicationController
  def index
    render 'new'
  end

  def new
    
  end

  def create
    ref = params[:address][:attributes];

    @address = Address.new(:house_number => ref[:AddNum], :street_name => ref[:StName], :street_type => ref[:StType],:street_predirection =>ref[:StPreDir],:street_postdirection => ref[:StDir],:unit_number => ref[:UnitName],:unit_type => ref[:UnitType],:city => ref[:City], :state => ref[:RegionAbbr],:zip_5 => ref[:Postal])
    # binding.pry
    if @address.save
      redirect_to @address
    else
      render json: @address.errors, status: :bad_request
    end

  end
  
  
  def show
    @address=Address.find_by(id: params[:id])
  end

  private

  def address_params
    params.permit(:house_number,:street_name,:street_type,:street_predirection,:street_postdirection,:unit_number,:unit_type,:city, :state, :zip_5)
  end
end
