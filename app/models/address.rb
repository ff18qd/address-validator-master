class Address < ApplicationRecord
  validates :zip_5, length: { is: 5 }, numericality: { only_integer: true }, presence: true
  validates :street_name, :house_number, :city, presence: true
  validates :state, length: { is: 2 }, presence: true, format: { with: /\A[a-zA-Z]+\z/, message: "only allows letters" }
  
  def to_s
    # TODO: override the to_s method so that it prints out the address components as follows
    # house_number street_predirection street_name street_type street_postdirection unit_type unit_number, city, state, zip_5
    self.house_number + " " + self.street_predirection + " " + self.street_name + " " + self.street_type + " " ++ self.street_postdirection + " " + self.unit_type + " " + self.unit_number + ", " + self.city + ", " + self.state + " " + self.zip_5;
  end
end


# - state (saved as 2 letter state abbreviation)
# - 5 digit zip code (only numbers) 