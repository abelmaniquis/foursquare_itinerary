// my Google Maps key: AIzaSyCTleyvmwLLUaGO42VlyfdVkC_eVUqWhTQ
//#2d5be3
$(document).ready(readyFunction);

function readyFunction(){
    initMap();
    $("#search").click(function(){
      addlocation();
    });
}

//Creates map and geotags current location.
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 0.00, lng: 0.00},
    zoom: 8
  });
  
  var infoWindow = new google.maps.InfoWindow({map: map});              //This element will point to the location on the map
  if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(function(position) {
       var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      infoWindow.setPosition(pos);
      infoWindow.setContent('Your Location.');
      map.setCenter(pos);
      
      getFSquareinput(pos);
      
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
  
  
  
};

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
  'Error: The Geolocation service failed.' :
  'Error: Your browser doesn\'t support geolocation.');
  
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer({
    map: map,
    panel: document.getElementById('directions')
  });
      displayRoute(pos, pos, directionsService,
      directionsDisplay);
}

//This function finds relevant venues within a radius of 10,000 meters around the current area.
function getFSquareinput(coord){
  $.getJSON('https://api.foursquare.com/v2/venues/explore?ll=' 
  + coord.lat.toString() + ',' + coord.lng.toString() + 
  '&limit=14&radius=10000&client_id=KIG3G11STJJ03SUXC2ZVCDPKEWGTI0LSQSZEZ3Y2YFY2YNL1&client_secret=ZWS32KM4WZE4PD3X5QEIV4Q3HGCJPDTOE1HB2QZ1FS03K2TN&v=20160523'
  ,function(data) {
  console.log(data); 
  console.log(data.response);
  //Use this to get the address of the next location
  });
}


/*function displayRoute(origin, destination, service, display){
  console.log("in the displayRoute function");
  service.route({
    origin: origin,
    destination: destination,
    waypoints:
      [
         { 
          location: 'East Village, San Diego, CA'
         }
      ],
    travelMode: google.maps.TravelMode.DRIVING,
    avoidTolls: true
    
  }, 

  function(response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
      display.setDirections(response);
      } else {
      alert('Could not display directions due to: ' + status);
      }
      
  });

}*/







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

var searchTerms = ['Coffee','Mall','Nightclub','Library','Fast Food']; //These search terms are for testing only

$('#search-query').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'searchTerms',
  source: substringMatcher(searchTerms)
});