// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?singleLine= &maxLocations=1&forStorage=true&outFields=AddNum,StName,StType,StPreDir,StDir,UnitType,UniteName,City,RegionAbbr,Postal&token=<token>&f=pjson
// http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?singleLine=380 New York St, Redlands, California, 92373&forStorage=true&token=<YOUR TOKEN>&f=pjson
$(document).ready(function () {
  //your code here
  $("#add_form").submit(function(e) {
        // alert('being clicked');
        console.log("d");
        e.preventDefault();
        var st = $("input[id='street_address']").val();
        var city =  $("input[id='city']").val();
        var state =  $("input[id='state']").val();
        var zip =  $("input[id='zip_code']").val();
        var singleadd = `${st},  ${city}, ${state}, ${zip}`;
        var token = "sR6MmbgOOS7IgU3R68PYBhqRLg41glqXEgwTPirDar3K60x9BVwDcEFStrN5ybpj6hdTeZ4ePZWFskwxWNItxlu3GEy97KEM1taOIo33cWeeVwBBxQeUkSsj5hqi3cYX69DFh7QqC8G4nCstRsaYag.."
        var url = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?singleLine=" + singleadd +"&maxLocations=1&forStorage=true&outFields=AddNum,StName,StType,StPreDir,StDir,UnitType,UniteName,City,RegionAbbr,Postal&token=" + token +"&f=pjson"
        console.log(url);
        fetch(url)
          .then((resp) => resp.json())
          .then(function(data) {
          // Create and append the li's to the ul
          console.log(data);
          })
      
    });
});

// (function( $ ) {
//     'use strict';
 
//     $(function() {
//         alert( 'JavaScript Loaded!' );
//     });
 
// })( jQuery );

// $(document).ready(function(){
//   $(".form_submit").click(function() {
//     var apiid = $('#apiid').val();
//     var apikey = $('#apikey').val();
//     var email = $('#email').val();

//     $.ajax(path_to_api_action, {
//       data: { apiid: apiid, apikey: apikey, email: email }
//       // Add other options
//     })
//   });  
// });