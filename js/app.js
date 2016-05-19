$(document).ready(function(){
    initMap();
   $("#add").click(addstop);
});

function addstop(){
    console.log("this works");
}

function initMap(){
    var latvar = 32.7157;
    var lngvar = -117.1611;
    var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv,{
            center:{lat:32.7157,lng:-117.1611},
            zoom: 8
        });
        
        var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer({
    draggable: true,
    map: map,
    panel: document.getElementById('right-panel')
  });
        
      displayRoute('7527 Celata Court, San Diego, CA', '9500 Gilman Drive, La Jolla, CA', directionsService,
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

function computeTotalDistance(){
    //
}