"use strict";
// create variable called map that is any
var map;
// We are defining coordinates AS a LatLng type (aka with interface)
// Letting coordinates be typed to LatLng interface. That means that it is using LatLng as a template for how it will be typed. Can't declare any other properties.
var coordinates = {
    lat: 43,
    lng: -79.38
};
var initMapConfig = {
    center: coordinates,
    zoom: 8
};
function initMap() {
    // center the map around toronto
    map = new google.maps.Map(document.getElementById("map"), initMapConfig);
}
