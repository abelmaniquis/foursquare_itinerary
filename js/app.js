// my key: AIzaSyCTleyvmwLLUaGO42VlyfdVkC_eVUqWhTQ

//#2d5be3
$(document).ready(readyFunction);

function readyFunction(){
    initMap();
    $("#add").click(addlocation);
}

function addlocation(){
    var place ={
        name: $("#search-query").val()
    };
    $("#times").append(
        "<img src=www.test-image-link.com>" + "</img>" +
        "<li>" + place.name + "</li>" +
        "<li>" + "address of location" + "</li>" +
        "<li>" + "rating"
    );
}

function initMap(){
    var myLatLng = {lat: 32.7157, lng: -117.1611};
    var mapDiv = document.getElementById('map');
    var start = '7527 Celata Court, San Diego, CA';
    var end = '9500 Gilman Drive, La Jolla, CA';
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
          location: '7930 Park Village Rd, San Diego, CA, 92129'
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
        data:request,
        dataType:"jsonp",
        type:"GET",
    })
}








