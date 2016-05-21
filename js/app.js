// my key: AIzaSyCTleyvmwLLUaGO42VlyfdVkC_eVUqWhTQ

//#2d5be3
$(document).ready(readyFunction);

function readyFunction(){
    initMap();
    accessFourSquare();
    $("#add").click(addlocation);
}

function addlocation(){
    var place ={
        name: $("#search-query").val()
    };
    $("#times").append(
        "<img src=img-src.jpg>" + "</img>" +
        "<li>" + place.name + "</li>" +
        "<li>" + "address of location" + "</li>" +
        "<li>" + "rating"
    );
}

function createListItem(venue,address,rating){
    
    
}


function initMap(){
    var myLatLng = {lat: 32.7157, lng: -117.1611};
    var mapDiv = document.getElementById('map');
    var start = '9878 Carmel Mountain Rd (at Paseo Cardiel), San Diego';
    var end = '9878 Carmel Mountain Rd (at Paseo Cardiel), San Diego';
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
function displayFoursquareOutput(){
    
}


function accessFourSquare(){
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








