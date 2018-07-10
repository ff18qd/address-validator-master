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
        var token = "Pd8sde6pDbrh2Qd-s0lWhKyx8wwSsgkFisjOz7bdRiaTafAxokjWYVQKb2VcSUkuk_YYA_A5AADu4oYvumC2_hccdZP9ktXRVWO_Zo14Ieywc8aKTBJNc8ORb72e2W1RVl-oy-HQZLS5emQIBZaB3g.."
        var url = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?singleLine=" + singleadd +"&maxLocations=1&forStorage=true&outFields=AddNum,StName,StType,StPreDir,StDir,UnitType,UniteName,City,RegionAbbr,Postal&token=" + token +"&f=pjson"

        fetch(url)
          .then((resp) => resp.json())
          .then(function(data) {
              // return this data to backend and try to persist
              $("input[id='street_address']").val('');
              $("input[id='city']").val('');
              $("input[id='state']").val('');
              $("input[id='zip_code']").val('');
              
              if (data["candidates"][0]["score"] < 95) {
                alert("not valid, please input again");
              } else {
                fetch('http://ec2-18-222-196-89.us-east-2.compute.amazonaws.com:8080/addresses', {
                    mode: 'same-origin',
                    method: 'post',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data["candidates"][0])
                  }).then(res=>res.json())
                    .then(res => console.log(res));
                // return data["candidates"][0];
              }
              
          })
      
    });
});

