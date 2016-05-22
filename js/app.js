// my key: AIzaSyCTleyvmwLLUaGO42VlyfdVkC_eVUqWhTQ

//#2d5be3
$(document).ready(readyFunction);

function readyFunction(){
    console.log("Ready!");
    initMap();
    $("#search").click(addlocation);
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
function initMap(){
    var location = '9878 Carmel Mountain Rd (at Paseo Cardiel), San Diego';
    var myLatLng = {lat: 32.7157, lng: -117.1611};
    var mapDiv = document.getElementById('map');
    var start = location;
    var end = location;
        var map = new google.maps.Map(mapDiv,{
            center: myLatLng,
            zoom: 8
        });
        
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer({
    map: map,
    panel: document.getElementById('directions')
  });
        
      displayRoute(start, end, directionsService,
      directionsDisplay);
}

function displayRoute(origin, destination, service, display){

  service.route({
    origin: origin,
    destination: destination,
    waypoints:
      [{
          location: 'East Village, San Diego, CA'
      },{
          location: '8375 Entreken Way, San Diego, CA, 92129'
      },{
          location: '13500 Camino Del Sur, San Diego, CA, 92129'
      }],
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
function displayFSquareOutput(item){
    
}


function getFSquareOutput(){
    $.ajax({
        url:'https://api.foursquare.com/v2/venues/explore',
        dataType:"jsonp",
        type:"GET"
    }).done(function(result){
        console.log("look at this");
    });
    $.ajax({
        url:'https://api.foursquare.com/v2/venues/VENUE_ID',
        dataType:"jsonp",
        type:"GET"
    }).done(function(result){
       console.log("and this too"); 
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