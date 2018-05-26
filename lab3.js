"use strict";
// create variable called map that is any
var map;
// initialize your empty array with an empty array - if you don't, it will be undefined
var coolLocations = [];
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


// PART 2
$.ajax({
    url: 'locations.json',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        //data is an aray of objects in this context
        // push into your cool locations array
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var cl = data_1[_i];
            // have an array of objects, and assign markers to each of those objects - use the address property
            coolLocations.push(cl);
        }
    }
});


function initMap() {
    // center the map around toronto
    map = new google.maps.Map(document.getElementById("map"), initMapConfig);
}
