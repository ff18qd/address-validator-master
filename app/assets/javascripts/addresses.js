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
        var token = "aBFOf-5JAvAhrHDDG0Bd-MCCAYbQ3alIXV9VEFjDdEGpxtyUfO2OIEfey3BBDmnBP01LJQArMt4eu4IWcuZPFWx70M5DnBiaMB85xhXg4BGKhK1hjuU7way102Rpuv5QyxBp5LQNNTAYBRV6dT9jaQ.."
        var url = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?singleLine=" + singleadd +"&maxLocations=1&forStorage=true&outFields=AddNum,StName,StType,StPreDir,StDir,UnitType,UnitName,City,RegionAbbr,Postal&token=" + token +"&f=pjson"

        fetch(url)
          .then((resp) => resp.json())
          .then(function(data) {
            $.post("http://ec2-18-191-134-35.us-east-2.compute.amazonaws.com:8080/addresses", { address: data["candidates"][0] }, function(err) {
              console.log(err);
            })
            .fail(function(data) {
              // alert( "error" );
              if (data["responseJSON"]) {
                  console.log(data["responseJSON"]);
                  var popError = [];
                  for(let ele in data["responseJSON"]) {
                    popError.push(ele +":" + data["responseJSON"][ele][0] + ";");
                  }
                  alert(popError);
              } else {
                alert('Please make sure you have filled out all the content');
              }
              
            })
              
          })
      
    });
});

