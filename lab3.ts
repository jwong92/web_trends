// create variable called map that is any
let map: any;

// Define an interface with two properties
// Purposes of interfaces is to define shape to your code - this won't be seen in your js file
interface LatLng {
    lat : number;
    lng : number;
}

// We are defining coordinates AS a LatLng type (aka with interface)
// Letting coordinates be typed to LatLng interface. That means that it is using LatLng as a template for how it will be typed. Can't declare any other properties.
let coordinates : LatLng = {
    lat : 43,
    lng : -79.38
}

// can define another structure/interface that contains other interfaces
interface GoogleMapsConfig {
    center: LatLng,
    zoom: number
}

let initMapConfig : GoogleMapsConfig = {
    center: coordinates,
    zoom: 8
}

function initMap() {
    // center the map around toronto
    map = new google.maps.Map(document.getElementById("map"), initMapConfig)
}