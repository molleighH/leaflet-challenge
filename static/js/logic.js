
// Store our API endpoint
//let queryURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";
//let tectonicplatesUrl = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json"


//let myMap = L.map("map", {
  //  center: [37.09, -95.71],
    //zoom: 5
//});

// Define a baseMaps object to hold our base layers
//let baseMaps = {
  //  "Satellite": L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/256/{z}/{x}/{y}?" +
   // "access_token=<KEY>"),
   // "Grayscale": L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}?" +
   // "access_token=<KEY>")
//};

// Create overlay object to hold our overlay layer
//let overlayMaps = {
  //  "Earthquakes": L.geoJSON(null, {
   //     pointToLayer: function(feature, latlng) {
    //        return L.circleMarker(latlng, {
     //           radius: markerSize(feature.properties.mag),
      //          color: chooseColor(feature.geometry.coordinates[2]),
       //         fillOpacity: 0.75,
        //        fillColor: chooseColor(feature.geometry.coordinates[2])
          //  });
       // },
      //  onEachFeature: function(feature, layer) {
        //    layer.bindPopup("<h3>" + feature.properties.place +
       //     "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
       // }
  //  })
// };

// Create our map, giving it the streetmap and earthquakes layers to display on load
// L.map("map", {
//    center: [37.09, -95.71],
//    zoom: 5,
//    layers: [baseMaps.Satellite, overlayMaps.Earthquakes]
//});

// Create a layer control
// Pass in our baseMaps and overlayMaps
// Add the layer control to the map
//L.control.layers(baseMaps, overlayMaps, {
//    collapsed: false
//}).addTo(myMap);

// Perform a GET request to the query URL
// d3.json(queryURL).then(function(data){
    // Create a GeoJSON layer containing the features array on the earthquakeData object
//    L.geoJSON(data.features, {
        // Define a function that will determine the color of a given feature
        // Give each feature a popup with the name of the place and time of the earthquake
//        pointToLayer: function(feature, latlng) {
//            return L.circleMarker(latlng, {
//                radius: markerSize(feature.properties.mag),
//                color: chooseColor(feature.geometry.coordinates[2]),
//                fillOpacity: 0.75,
//                fillColor: chooseColor(feature.geometry.coordinates[2])
//           });
//        },
//        onEachFeature: function(feature, layer) {
//            layer.bindPopup("<h3>" + feature.properties.place +
//            "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
//        }
//    }).addTo(overlayMaps.Earthquakes);

    // Send our earthquakes layer to the createMap function/
//    createMap(overlayMaps.Earthquakes);
// });

// Perform a GET request to the query URL
//d3.json(tectonicplatesUrl).then(function(data){
//    console.log(data.features);
// 
//
    // Create a GeoJSON layer containing the features array on the tectonicplates object
//    L.geoJSON(data.features, {
//        color: "orange",
//        weight: 2
//    }).addTo(myMap);
// });

// Create a legend to display information about our map
//function createLegend() {
//    let legend = L.control({position: "bottomright"});
//    legend.onAdd = function() {
//        let div = L.DomUtil.create("div", "info legend");
//        let grades = [0, 10, 30, 50, 70, 90];
//        let colors = ["#00FF00", "greenyellow", "yellow", "orange", "orangered", "#FF0000"];
//        for (let i = 0; i < grades.length; i++) {
//            div.innerHTML += "<i style='background: " + colors[i] + "'></i> " +
//            grades[i] + (grades[i + 1]? "&ndash;" + grades[i + 1] + "<br>" : "+");
//        }
//        return div;
//    };
//    legend.addTo(myMap);

//    return legend;
// -------------------------------------------------------------------------------------------------------------------------------
// Use D3 to perform GET request to queryURL
//d3.json(queryURL).then(function(data){
    // Console log data retrieved 
  //  console.log(data);
    // After respone, send data.features object to createFeatures function
    //createFeatures(data.features);
//});

// Function determine marker size
// function

//function markerSize(magnitude) {
//    return magnitude * 2000;
//}

// Function determine marker color according to depth 
// function chooseColor(depth) {
//    if (depth < 10) return "#00FF00";
//    else if (depth < 30) return "greenyellow";
//    else if (depth < 50) return "yellow";
//    else if (depth < 70) return "orange";
//    else if (depth < 90) return "orangered";
//    else return "#FF0000";
// }

// function createFeatures(earthquakeData) {
    
    // Define function to run once through each feature in features array
    // Give each feature a popup describing place and time of earthquake
//    function onEachFeature(feature, layer) {
//        layer.bindPopup(`<h3>Location: ${feature.properties.place}</h3><hr><p>Date: ${new Date(feature.properties.time)}</p><p>Magnitude: ${feature.properties.mag}</p><p>Depth: ${feature.geometry.coordinates[2]}</p>`);
//    }

    // Create GeoJSON layter containing features array on earthquakeData object
    // Run the onEachFeature function for each piece of data in array
//    let earthquakes = L.geoJSON(earthquakeData, {
//        onEachFeature: onEachFeature, 

        // Point to layer altering markers
//        pointToLayer: function(feature, latlng) {

            // Based on properties, determine style of markers
//            let markers = {
//                radius: markerSize(feature.properties.mag),
//                fillColor: chooseColor(feature.geometry.coordinates[2]),
//                fillOpacity: 0.7,
//                color:"black", 
//                stroke: true, 
//                weight: 0.5
//            };
//            return L.circle(latlng, markers);
//        }
//    });

    // Send earthquakes layer to createMap function
//    createMap(earthquakes);
// }

// function createMap(earthquakes) {

    // Create tile layers

//    let geoLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{style}/tiles/{z}/{x}/{y}?access_token={access_token}', {
//        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//        style:    'mapbox/outdoors-v12',
//        access_token: api_key
//      });
    

//    let satelliteLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{style}/tiles/{z}/{x}/{y}?access_token={access_token}', {
//        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//        style:    'mapbox/satellite-v9',
//        access_token: api_key
//      });

//    let grayscaleLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{style}/tiles/{z}/{x}/{y}?access_token={access_token}', {
//        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//        style:    'mapbox/light-v11',
//        access_token: api_key
//      });

      // Creater layer for tectonic plates
//      tectonicPlates = new L.layerGroup(); 

      // Using D3, send GET request to tectonicPlatesURL
//      d3.json(tectonicplatesUrl).then(function (plates) {

        // Console log retrieved tectonicPlates data
//        console.log(plates);
//        L.geoJSON(plates, {
//            color: "orange",
//            weight: 2
//        }).addTo(tectonicPlates);
//    });

    // Create baseMaps object
//    let baseMaps = {
//        "Satellite": satelliteLayer,
//        "GrayScale": grayscaleLayer,
//       "Outdoors": geoLayer
//    };

    // Create overlay object to hold overlay
//    let overlayMaps = {
//        "Earthquakes": earthquakes, 
//        "Tectonic Plates": tectonicPlates
//    };

    // Create map with satellite map & earthquakes layers displayed at load
//    let myMap = L.map("map", {
//        center: [37.09, -95.71],
//        zoom: 5,
//        layers: [satelliteLayer, earthquakes, tectonicPlates]
//      });

      // Add legend 
//      let legend = L.control({position: "upperright"});
//      legend.onAdd = function() {
//        let div = L.DomUntil.create("div", "info legend");
//            depth = [-10, 10, 30, 50, 70, 90];

//            div.innerHTML += "<h3 style='text-align: center'>Depth</h3>"

//        for(let i = 0; i < depth.length; i++) {
//        div.innerHTML += '<i style="background:' + chooseColor(depth[i] + 1) + '"></i> ' + depth[i] + (depth[i + 1] ? '&ndash;' + depth[i + 1] + '<br>' : '+');
//        }
//        return div;
//      };

//      legend.addTo(myMap)

      // Create a layer control & pass baseMaps & overlayMaps
      // Add layer control to the map.
//      L.control.layers(baseMaps, overlayMaps, {
//        collapsed: false
//      }).addTo(myMap);
//    };

// Define URL for the GeoJSON earthquake data
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

// Create the map
let myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
});

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Retrieve & add earthquake data to map   
d3.json(url).then(function (data) {
    function mapStyle(feature) {
        return {
            opacity: 1,
            fillOpacity: 1,
            fillColor: mapColor(feature.geometry.coordinates[2]),
            color: "black",
            radius: mapRadius(feature.properties.mag),
            stroke: true,
            weight: 0.5
        };
    }

    // Establish colors for depth 
    function mapColor(depth) {
        switch (true) {
            case depth > 90:
                return "red";
            case depth > 70:
                return "orangered";
            case depth > 50:
                return "orange";
            case depth > 30:
                return "gold";
            case depth > 10:
                return "yellow";
            default:
                return "lightgreen";
        }
    }

    // Establish magnitude size
    function mapRadius(magnitude) {
        if (magnitude === 0) {
            return 1;
        }
        return magnitude * 4;
    }

    // Add earthquake data to map 
    L.geoJSON(data, {

        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng);
        },

        style: mapStyle,

        // Activate popup when circles clicked
        onEachFeature: function (feature, layer) {
            layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place + "<br>Depth:" + feature.geometry.coordinates[2]);

        }
    }).addTo(myMap);

// Setup legend
    let legend = L.control({ position: "bottomright" });
    
    legend.onAdd = function () {
        let div = L.DomUtil.create("div", "info legend"); 
        let depths = [-10, 10, 30, 50, 70, 90];
        let colors = ["red", "orangered", "orange", "gold", "yellow", "lightgreen"];
        let labels = [];

        for (let i = 0; i < depths.length; i++) {
            legend += '<div><li style="background:' + colors[i] + '"></li> ' +
      depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+') + '</div>';
  }

        // Add min & max
        let legendInfo = "<h3>Earthquake Depth (km)</h3>" +
        "<div class=\"labels\">" +
        "<div class=\"min\">" + depths[0] + "</div>" +
        "<div class=\"max\">" + depths[depths.depths - 1] + "</div>" +
        "</div>";
        
        div.innerHTML = legendInfo;
        depths.forEach(function (depths, index) {
            labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
        });

        div.innerHTML += "<ul>" + labels.join("") + "</ul>";
        return div;

    };

    // Add legend to map
    legend.addTo(myMap);
}); 


    // Add legend with colors to corrolate w/depth 
//    let legend = L.control({ position: "bottomright" });
//    legend.onAdd = function () {
//        let div = L.DomUntil.create("div", "info legend"),
//        let depth = [-10, 10, 30, 50, 70, 90];
//        div.innerHTML += "<h3 style='text-align: center'>Depth</h3>"
//        for (let i = 0; i < depth.length; i++) {
//            div.innerHTML += '<i style="background:' + mapColor(depth[i] + 1) + '"></i> '
//        }
//        return div;
//
        // Add legend with colors to corrolate w/depth
//        for (let i = 0; i < depth.length; i++) {
//            div.innerHTML += '<i style="background:' + mapColor(depth[i] + 1) + '"></i> '
//        }
//       return div;
//    };
//    legend.addTo(myMap);
//})
//    ;