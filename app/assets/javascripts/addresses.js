// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?singleLine= &maxLocations=1&forStorage=true&outFields=AddNum,StName,StType,StPreDir,StDir,UnitType,UniteName,City,RegionAbbr,Postal&token=<token>&f=pjson
// http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?singleLine=380 New York St, Redlands, California, 92373&forStorage=true&token=<YOUR TOKEN>&f=pjson
$(document).ready(function () {
  //your code here
  $("#add_form").submit(function(e) {
        // alert('being clicked');
        e.preventDefault();
        var st = $("input[id='street_address']").val();
        var city =  $("input[id='city']").val();
        var state =  $("input[id='state']").val();
        var zip =  $("input[id='zip_code']").val();
        var singleadd = `${st},  ${city}, ${state}, ${zip}`;
        var token = "nn14gp-ix5OTDbhf4W5hox9GQq-z_dutggVIhgwOTiZ_ICffJ5n6qW5Nz17Oi-cxN5nL5j7e3oZmJeuaQbNjaHt5HlyopZpPGkMPHk9Xhcv3lP7TF8oa4rzPcO0IEtkjRwMAD86ejLN-m-Qq74vcnA.."
        var url = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?singleLine=" + singleadd +"&maxLocations=1&forStorage=true&outFields=AddNum,StName,StType,StPreDir,StDir,UnitType,UnitName,City,RegionAbbr,Postal&token=" + token +"&f=pjson"

        fetch(url)
          .then((resp) => resp.json())
          .then(function(data) {
            $.post("http://ec2-18-219-94-25.us-east-2.compute.amazonaws.com:8080/addresses", { address: data["candidates"][0] })
              
          })
      
    });
});

