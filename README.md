# Address Validator Coding Challenge

Having accurate addresses is important for Vote.org. In this challenge you will be given a 
very basic rails app that consists of a form with a field for 
- street address 
- city
- state 
- zip

The goal is to have the form validate the input to see if it forms a valid address
and if so, save the address components in the respective columns.

While not all addresses will have a value for every column it is important not to lose any
address information provided. For example if an address post direction value or unit value
is provided, those must be saved. Additionally any addresses that are not real addresses 
should not be saved. As a rule, all addresses should have
 - house number
 - street name 
 - city 
 - state (saved as 2 letter state abbreviation)
 - 5 digit zip code (only numbers) 

It is your job to update the Address model and controller so that all validated 
addresses are saved to the database and no invalid addresses are saved. The Address model
also has a `#to_s` method that needs to be filled in so that it returns the address as 
a string. 
 
While front end validation and feedback to the user is expected, you should not rely only on 
front end validations. Additionally a suggested layout has been included in a file labeled 
"wireframe.png". Feel free to use this mock or come up with a different design of the frontend. 

A few test cases have been provided to help get you started. You are encouraged to write more
tests as you go, but DO NOT delete any of the existing tests. Also, you may not change the
schema.

## Prerequisites

You'll need the following installed on your system:
1. ruby
2. rails
3. sqlite3

Instructions can be found here: http://guides.rubyonrails.org/getting_started.html#installing-rails

## Getting started

To run the project as is:
1. `bundle install`
2. `rake db:create`
3. `rake db:migrate`
4. `rails s`

To run the tests:
1. `rails generate rspec:install`
  (When prompted to overwrite spec/spec_helper.rb enter `n`)
2. `rspec` (or `bundle exec rspec`)

If everything is set up properly you should see `10 examples, 7 failures` to start. 
 
Here are some useful resources for Ruby On Rails:
- https://www.tutorialspoint.com/ruby-on-rails/rails-controllers.htm
- http://guides.rubyonrails.org/active_model_basics.html
- http://guides.rubyonrails.org/action_controller_overview.html
- http://guides.railsgirls.com/app
- https://www.railstutorial.org/book/toy_app
- https://relishapp.com/rspec/rspec-rails/v/3-7/docs (docs for rspec testing)

Information on Address standards / validations:
- https://pe.usps.com/text/pub28/28c1_001.htm

Here are some services that can be used for address validation:
- https://developers.google.com/maps/documentation/geocoding/intro
- https://wiki.openstreetmap.org/wiki/Nominatim
- https://developers.arcgis.com/rest/geocode/api-reference/overview-world-geocoding-service.htm
If you need an api key or are interested in using another service please let us know.

Your finished project should:
- validate addresses
- not save any invalid addresses
- be styled on the front end
- validate fields on the front end
- display feedback to the user
- be well-tested

When submitting the project please answer the following questions:
 1. What gems if any did you choose to use and why?
 I have applied pry for test and debug my code. I also applied jquery-rails gem to use jQuery to interacte with frontend.

 2. Were there any specific challenges or struggles you faced along the way?
 I think the project was meant to find a way to get the input to the Address model and create a new address object. This step I haven't 
thought it out cause the input of street address needs to be broken down into Address columns. After broken down and tried to save the address
the validation step will take place. 

As you could see, I didn't realize the app in the above way. I used Geocoder to first validate the input address then break down each part and 
persist it to database. Because geocoder api can provide the break down function of the address.

 3. Is there anything you'd want to improve or optimize if you had more time?
I would like to provide a function which when user input an address, a list of similar addresses are provided for user to select from. These
addresses list can be provided by geocoder api. The goal is sometimes user input address format is not very accurate, and the popup list can 
help them select a more accurate address.  

Maybe an auto fill after user has selected one address from the list.
 4. If you were to take this project to production, what would be on your list of things to do?
Unit test, code review, system test, regression test, UAT, go no-go decision.

 5. How my application works?
In question 2 I said I realized my app in a different way. So here I would like to explain my solution. To run my application, please change the 
token in address.js line 16 app/assets/javascripts to your token of geocode api (https://developers.arcgis.com/get-started/). Then in the app's index
page, input street address, city, state and zip code. Clicking validate address button. This action will trigger a fetch request to geocode api
the api will findAddressCandidates for user's input address and send back data["responseJSON"] a JSON object. The keys of this object have the 
corresponding match with address schema. Create method will create a new address object with this JSON object. It will take no matter what JSON gives.

Then when persisting to database, the validation of format will happen. jQuery post function will use a callback function to deal with error 
messages from failed persistance. I used alert to display the error messages. If the user input can be found by geocode, geocode can fill 
certain missing part this is why alert seems not include all the errors.

If the data can be saved successfully user will be redirect to show page which will use to_s method to display the full address that user has input.








