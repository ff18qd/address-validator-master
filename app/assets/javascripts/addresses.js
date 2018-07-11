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
        var token = "YwnlcGlz5qmtcE0PTC6T82YfXPwac_kBUiqlwuceTqCW48QxxOuR1JtIfb4LjSit3wznWl7PMokTYw78HDIHzAUuy5z7tPhr_lDOIvosPTdxLTg2hhiuVANFRKvSd17LHfo2I2jzEaxcY8wvtj-1gQ.."
        var url = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?singleLine=" + singleadd +"&maxLocations=1&forStorage=true&outFields=AddNum,StName,StType,StPreDir,StDir,UnitType,UnitName,City,RegionAbbr,Postal&token=" + token +"&f=pjson"

        fetch(url)
          .then((resp) => resp.json())
          .then(function(data) {
            $.post("http://ec2-18-191-248-3.us-east-2.compute.amazonaws.com:8080/addresses", { address: data["candidates"][0] })
              
          })
      
    });
});

