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