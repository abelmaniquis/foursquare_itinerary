// my Google Maps key: AIzaSyCTleyvmwLLUaGO42VlyfdVkC_eVUqWhTQ
//#2d5be3
$(document).ready(initMap);

/*==========================
Map Functions
=============================*/

//Creates map and geotags current location.
function initMap() {
  var venues = [];

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 0.00, lng: 0.00},
    zoom: 8
  });
  var infoWindow = new google.maps.InfoWindow({map: map});  
  
  if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(function(position) {
       var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      
      infoWindow.setPosition(pos);
      infoWindow.setContent('Your Location.');
      map.setCenter(pos);
      
      var openVenues = getFSquareinput(pos,venues);
      console.log(openVenues);
      typeterms(openVenues);
      var waypoints =
       [];
      mapDisplay(pos,map,waypoints);
      
      
      $("#addbutton").click(function(){
        var userinput = $('#search-query').val();
        console.log(userinput);
        addWaypoint(pos,map,waypoints,userinput);
        });
      
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
};

function addWaypoint(pos,map,waypoints,userinput){
      waypoints.push({
        location: userinput
      });
    var i = 0;
    while(i < waypoints.length){
      $("#foursquare-output").append("<p>" + waypoints[i].location + "</p>");
      i += 1;
    };
    console.log(waypoints);
    $("#directions").empty();
    mapDisplay(pos,map,waypoints);
    
}

function displayRoute(origin, destination, service, display,waypoints){
  service.route({
    origin: origin,
    destination: destination,
    
    waypoints: waypoints,
      
    travelMode: google.maps.TravelMode.DRIVING,
    avoidTolls: true
    }, function(response, status) {
       if (status === google.maps.DirectionsStatus.OK) {
       display.setDirections(response);
      } else {
      alert('Could not display directions due to: ' + status);
      }
  });
}

function mapDisplay(initialposition,directionmap,waypoints){
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer({
    map: directionmap,
    panel: document.getElementById('directions')
  });
     displayRoute(initialposition, initialposition, directionsService, directionsDisplay,waypoints);
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
  'Error: The Geolocation service failed.' :
  'Error: Your browser doesn\'t support geolocation.');
}


/*=============================================
FourSquare Functions
===============================================*/

//This function finds relevant venues within a radius of 100,000 meters around the current area.
//limit: returns up to 100 results

function getFSquareinput(coord,array){
  $.getJSON('https://api.foursquare.com/v2/venues/explore?ll=' 
  + coord.lat.toString() + ',' + coord.lng.toString() + 
  '&limit=100' +
  '&radius=30000' +
  '&openNow=1' +
  '&client_id=KIG3G11STJJ03SUXC2ZVCDPKEWGTI0LSQSZEZ3Y2YFY2YNL1' +
  '&client_secret=ZWS32KM4WZE4PD3X5QEIV4Q3HGCJPDTOE1HB2QZ1FS03K2TN' +
  '&v=20160523'
  ,
    function(data){

    var i = 0
    
    while(i < (data.response.groups[0].items.length - 1)){
      
      var venueName = data.response.groups[0].items[i].venue.name;
      var venueAddress = data.response.groups[0].items[i].venue.location.formattedAddress[0];
      var venueCity = data.response.groups[0].items[i].venue.location.formattedAddress[1];
      var venueCoordinates = [data.response.groups[0].items[0].venue.location.lat,data.response.groups[0].items[i].venue.location.lng];
      
      array.push(venueName + "\n " + venueAddress +", " + venueCity);
      
      i++
    };
    
  });
return array
}
function createFSquareObject(name,address1,address2,coordinates,array){
  var info =
  {
    name: name,
    address1: address1,
    address2: address2,
    coordinates: coordinates,
  }
  
  return info;
}



/*==============================================
Typeahead Functions
================================================*/


function substringMatcher(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

function typeterms(array){
var searchTerms = array; 
$('#search-query').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'searchTerms',
  source: substringMatcher(searchTerms)
});
}