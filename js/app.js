$(document).ready(function(){
    initMap();
   $("#add").click(addstop);
});

function addstop(){
    console.log("this works");
}

function initMap(){
    var latvar = 44.540;
    var lngvar = -78.546;
    var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv,{
            center:{lat:44.540,lng:-78.546},
            zoom: 8
        });
    /*
    This creates a new Map.
    */
}

function displayRoute(){
    //This shows the route on the map
}

function computeTotalDistance(){
    //
}