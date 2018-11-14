var address = "";
var promotionZone;
var geocoder;
var map;
var input;
var button;
var result;
var loader;
//var address = document.getElementById("searchTxt").value;    
//document.getElementById("output").innerHTML = "Hello " + prompt("E-mail");
//alert("Hello " + name);    

// This example creates a simple polygon representing the Bermuda Triangle.
function initMap() {
    console.log("init ran");
    map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 40.723709, lng: -74.0152319},
    mapTypeId: 'terrain'
    });

    //Initializing geocoder
    geocoder = new google.maps.Geocoder();

    //Initializing elements
    input = document.getElementById("address");
    button = document.getElementById("findOut");
    result = document.getElementById("result");
    loader = document.getElementById("loader");


    //Hidden elements at first
    loader.style.visibility = "hidden";
    result.style.visibility = "visible";

    // Define the LatLng coordinates for the polygon's path (promo zone limits).

    //promotion zone codes//
    var promoZoneCoords = promoCoords;

    // Construct the polygon for promotion zone.
    promotionZone = new google.maps.Polygon({
    paths: promoZoneCoords,
    strokeColor: '#3F45F5',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#B3ACE8',
    fillOpacity: 0.35
    });
    promotionZone.setMap(map);

    // enterKeyListener();
}

// function enterKeyListener(){
//     input.addEventListener("keyup", function(event) {
//         event.preventDefault();
//         if (event.keyCode === 13) {
//             console.log("ran from enter key");
//             alert("ran here");
//             //button.click();
//         }
//     });
// }

function findAddsLocation(){
    if (input.value != ""){
        //there is some value
        loader.style.visibility = "visible";
        result.style.visibility = "hidden";
            var address = input.value;
            geocoder.geocode( {'address': address}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    console.log("ran till here");
                    map.setCenter(results[0].geometry.location);

                    /*
                    if(marker)
                        marker.setMap(null);
                    */        

                    /*
                    var resultColor =
                    google.maps.geometry.poly.containsLocation(results[0].geometry.location, promotionZone) ?
                    'green' :
                    'red';
                    */

                    //This way I have more control over what happends when address is within or not promo zone
                    var resultColor;
                    if (google.maps.geometry.poly.containsLocation(results[0].geometry.location, promotionZone)){
                        resultColor = 'green';
                        changeOutputText("Address inside promotion zone :)");
                        loader.style.visibility = "hidden";
                        result.style.visibility = "visible";
                    }else{
                        resultColor = 'red';
                        changeOutputText("Address NOT inside promotion zone :(");
                        loader.style.visibility = "hidden";
                        result.style.visibility = "visible";
                    }
                
                    var resultPath = google.maps.SymbolPath.CIRCLE;

                    new google.maps.Marker({
                        map: map,
                        position: results[0].geometry.location,
                        draggable: true,
                        icon: {
                            path: resultPath,
                            fillColor: resultColor,
                            fillOpacity: .2,
                            strokeColor: 'white',
                            strokeWeight: .5,
                            scale: 10
                        }
                    });
                }else{
                    changeOutputText("Not an address :(");
                        loader.style.visibility = "hidden";
                        result.style.visibility = "visible";
                }
            })
    }else{
        //there is nothing
        alert("Field cannot be empty");
    }
}

function changeOutputText(txtChanged){
    result.innerHTML = txtChanged;
}

/*
function markerLocator() {
    var resultColor =
        google.maps.geometry.poly.containsLocation(e.latLng, promotionZone) ?
        'blue' :
        'red';

    var resultPath =
        google.maps.geometry.poly.containsLocation(e.latLng, promotionZone) ?
        // A triangle.
        "m 0 -1 l 1 2 -2 0 z" :
        google.maps.SymbolPath.CIRCLE;

    new google.maps.Marker({
        position: e.latLng,
        map: map,
        icon: {
            path: resultPath,
            fillColor: resultColor,
            fillOpacity: .2,
            strokeColor: 'white',
            strokeWeight: .5,
            scale: 10
        }
    })
}
*/