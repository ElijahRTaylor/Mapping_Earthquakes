// // Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.5, -122.5], 10);

// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// // Grabbing our GeoJSON data.
// // L.geoJSON(sanFranAirport).addTo(map);

// // // mapbox/streets-v11
// // // mapbox/outdoors-v11
// // mapbox/light-v10
// // mapbox/dark-v10
// // mapbox/satellite-v9
// // mapbox/satellite-streets-v11


// // We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// // // let circle= L.circle([34.0522, -118.2437], {
// // //   radius: 100
// // // }).addTo(map);

// // // L.circleMarker(
// // //   [34.0522, -118.2437], {
// // //     radius: 300,
// // //     color: "black",
// // //     fillColor: '#ffffa1'
// // //   }).addTo(map);
// // // // Then we add our 'graymap' tile layer to the map.
// // // streets.addTo(map);

// // // An array containing each city's location, state, and population.

// // // Get data from cities.js
// // // let cityData = cities;

// // // // Loop through the cities array and create one marker for each city.
// // // cities.forEach(function(city) {
// // //   console.log(city)
// // //  });

// // // Loop through the cities array and create one marker for each city.
// // // cityData.forEach(function(city) {
// // //   console.log(city)
// // //   L.marker(city.location).addTo(map);
// // // });

// // //  L.circleMarker(
// // //   [34.0522, -118.2437], {
// // //     radius: 300,
// // //     color: "black",
// // //     fillColor: '#ffffa1'
// // //   }).addTo(map);
// // // Then we add our 'graymap' tile layer to the map.


// // // Loop through the cities array and create one marker for each city.
// // // cityData.forEach(function(city) {
// // //   console.log(city)
// // //   L.circleMarker(city.location, {
// // //     radius: city.population/100000
// // //   })
// // //   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
// // // .addTo(map);
// // // });

// // // Coordinates for each point to be used in the line.
// // // let line = [
// // //   [33.9416, -118.4085],
// // //   [37.6213, -122.3790]
// // // ];

// // // // Coordinates for each point to be used in the polyline.
// // // let line = [
// // //   [33.9416, -118.4085],
// // //   [37.6213, -122.3790],
// // //   [40.7899, -111.9791],
// // //   [47.4502, -122.3088]
// // // ]

// // // // Create a polyline using the line coordinates and make the line red.
// // // L.polyline(line, {
// // //   color: "red"
// // // }).addTo(map);

// // // Grabbing our GeoJSON data.
// // L.geoJSON(sanFranAirport, {
// //   // We turn each feature into a marker on the map.
// //   pointToLayer: function(feature, latlng) {
// //     console.log(feature);
// //     return L.marker(latlng)
// //     .bindPopup("<h2>" + feature.properties.city + "</h2>");
// //   }

// // }).addTo(map);

// // Grabbing our GeoJSON data.
// // L.geoJSON(sanFranAirport, {
// //   // We turn each feature into a marker on the map.
// //   pointToLayer: function(feature, latlng) {
// //     console.log(feature);
// //     return L.marker(latlng);
// //   }

// // }).addTo(map);

// L.geoJSON(sanFranAirport, {
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup();
//    }
// }).addTo(map);





// streets.addTo(map);

// Create the map object with center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [streets]
})

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/ElijahRTaylor/Mapping_Earthquakes/main/torontoRoutes.json";

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// //Then we add our 'streets; tile layer to the map
// streets.addTo(map)

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/ElijahRTaylor/Mapping_Earthquakes/Mapping_GeoJSON_Points/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);

  let myStyle = {
    color: "#ffffa1",
    weight: 2
}

  

  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
    style: myStyle,
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3> <hr><h3> Destinations: "
      + feature.properties.dst + "</h3>");
    }
  })
.addTo(map);
});