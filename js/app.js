// my key: AIzaSyCTleyvmwLLUaGO42VlyfdVkC_eVUqWhTQ

//#2d5be3
$(document).ready(readyFunction);

function readyFunction(){
    console.log("Ready!");
    initMap();
    $("#search").click(function(){
      addlocation;
    });
}

function addlocation(){
    var place ={
        name: $("#search-query").val()
    };
    $("#foursquare-output").append(
        "<img src=img-src.jpg>" + "</img>" +
        "<li>" + place.name + "</li>" +
        "<li>" + "address of location" + "</li>" +
        "<li>" + "rating"
    );
}

function createListItem(venue,address,rating){
    
}
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 6
  });
  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      console.log(pos);
      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}

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

function displayRoute(origin, destination, service, display){

  service.route({
    origin: origin,
    destination: destination,
    waypoints:
      [{
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

}
function displayFSquareOutput(item){
    
}

function getFSquareinput(){
$.getJSON('https://api.foursquare.com/v2/venues/search?ll=32.7153,-117.1564&limit=14&radius=1000&client_id=KIG3G11STJJ03SUXC2ZVCDPKEWGTI0LSQSZEZ3Y2YFY2YNL1&client_secret=ZWS32KM4WZE4PD3X5QEIV4Q3HGCJPDTOE1HB2QZ1FS03K2TN&v=20120101'
,function(data) {
console.log(data); 
});
  
  
  
  
  
}

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

var searchTerms = ['Coffee','Mall','Nightclub','Library','Fast Food'];

$('#search-query').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'searchTerms',
  source: substringMatcher(searchTerms)
});