var address = "";

//var address = document.getElementById("searchTxt").value;    
//document.getElementById("output").innerHTML = "Hello " + prompt("E-mail");
//alert("Hello " + name);    
function findAddsLocation(){
    if (document.getElementById("searchTxt").value != ""){
        alert("There is something");
        address = document.getElementById("searchTxt").value;
    }else{
        alert("Field cannot be empty");
    }
}
// This example creates a simple polygon representing the Bermuda Triangle.
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 40.723709, lng: -74.0152319},
    mapTypeId: 'terrain'
    });

    // Define the LatLng coordinates for the polygon's path (promo zone limits).

    //promotion zone codes//
    var promoZoneCoords = [
        {lat: 40.775856, lng: -73.995345},
        {lat: 40.772508, lng: -73.993614},
        {lat: 40.772880, lng: -73.987676},
        {lat: 40.767900, lng: -73.985729},
        {lat: 40.7681574, lng: -73.9820848},
        {lat: 40.764240, lng: -73.975658},
        {lat: 40.764665, lng: -73.969332},
        {lat: 40.760999, lng: -73.965609},
        {lat: 40.761503, lng: -73.958000},
        {lat: 40.756610, lng: -73.955922},
        {lat: 40.750661, lng: -73.960950},
        {lat: 40.747882, lng: -73.957517},
        {lat: 40.743207, lng: -73.959909},
        {lat: 40.739951, lng: -73.956506},
        {lat: 40.739478, lng: -73.949175},
        {lat: 40.736004, lng: -73.947965},
        {lat: 40.735998, lng: -73.940656},
        {lat: 40.731920, lng: -73.938890},
        {lat: 40.732706, lng: -73.932228},
        {lat: 40.728406, lng: -73.929148},
        {lat: 40.729162, lng: -73.923435},
        {lat: 40.724022, lng: -73.920066},
        {lat: 40.719846, lng: -73.924255},
        {lat: 40.716508, lng: -73.922663},
        {lat: 40.711369, lng: -73.924334},
        {lat: 40.709008, lng: -73.921277},
        {lat: 40.704130, lng: -73.924633},
        {lat: 40.700267, lng: -73.920966},
        {lat: 40.695206, lng: -73.922871},
        {lat: 40.696072, lng: -73.931261},
        {lat: 40.691609, lng: -73.935935},
        {lat: 40.691699, lng: -73.945004},
        {lat: 40.687996, lng: -73.947814},
        {lat: 40.685029, lng: -73.941168},
        {lat: 40.679244, lng: -73.941945},
        {lat: 40.679941, lng: -73.949558},
        {lat: 40.675498, lng: -73.951913},
        {lat: 40.675914, lng: -73.957040},
        {lat: 40.671682, lng: -73.960801},
        {lat: 40.667679, lng: -73.968394},
        {lat: 40.668118, lng: -73.977240},
        {lat: 40.673153, lng: -73.979444},
        {lat: 40.673351, lng: -73.985347},
        {lat: 40.668898, lng: -73.989018},
        {lat: 40.668465, lng: -73.994469},
        {lat: 40.664742, lng: -73.997031},
        {lat: 40.665077, lng: -74.003773},
        {lat: 40.668483, lng: -74.008536},
        {lat: 40.668988, lng: -74.014192},
        {lat: 40.664965, lng: -74.017166},
        {lat: 40.665665, lng: -74.022469},
        {lat: 40.682397, lng: -74.033373},
        {lat: 40.743171, lng: -74.017291},
        {lat: 40.763936, lng: -74.011597},
        {lat: 40.775856, lng: -73.995345}
    ];    

    // Construct the polygon for promotion zone.
    var promotionZone = new google.maps.Polygon({
    paths: promoZoneCoords,
    strokeColor: '#3F45F5',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#B3ACE8',
    fillOpacity: 0.35
    });
    promotionZone.setMap(map);
}