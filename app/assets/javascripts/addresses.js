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
        var token = "xSgC8zbk8SfEAUJaattzPe0Q2nuB4eeX8q1YB95eam--tujj2Ezn5T58yrdcZJtPu8_9PIU1akW-BPCqm-4SxVMjKOiL2kEgYPdFNZi3DVPeGnHA1heeJBXmZab02CjNFOUdn4jHVokN7lQTQ0L7Hw.."
        var url = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?singleLine=" + singleadd +"&maxLocations=1&forStorage=true&outFields=AddNum,StName,StType,StPreDir,StDir,UnitType,UniteName,City,RegionAbbr,Postal&token=" + token +"&f=pjson"

        fetch(url)
          .then((resp) => resp.json())
          .then(function(data) {
          // return this data to backend and try to persist
          if (data["candidates"][0]["score"] < 95) {
            $("input[id='street_address']").val('');
            $("input[id='city']").val('');
            $("input[id='state']").val('');
            $("input[id='zip_code']").val('');
            alert("not valid, please input again");
          } else {
            return data["candidates"][0];
            
          }
          // console.log(data["candidates"][0]);
          
          })
      
    });
});

