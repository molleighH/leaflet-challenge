
// Store our API endpoint
let queryURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";
let tectonicplatesUrl = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json"

// Use D3 to perform GET request to queryURL
d3.json(queryURL).then(function(data){
    // Console log data retrieved 
    console.log(data);
    // After respone, send data.features object to createFeatures function
    createFeatures(data.features);
});

// Function determine marker size
function markerSize(magnitude) {
    return magnitude * 2000;
}

// Function determine marker color according to depth 
function chooseColor(depth) {
    if (depth < 10) return "#00FF00";
    else if (depth < 30) return "greenyellow";
    else if (depth < 50) return "yellow";
    else if (depth < 70) return "orange";
    else if (depth < 90) return "orangered";
    else return "#FF0000";
}

function createFeatures(earthquakeData) {
    
    // Define function to run once through each feature in features array
    // Give each feature a popup describing place and time of earthquake
    function onEachFeature(feature, layer) {
        layer.bindPopup(`<h3>Location: ${feature.properties.place}</h3><hr><p>Date: ${new Date(feature.properties.time)}</p><p>Magnitude: ${feature.properties.mag}</p><p>Depth: ${feature.geometry.coordinates[2]}</p>`);
    }

    // Create GeoJSON layter containing features array on earthquakeData object
    // Run the onEachFeature function for each piece of data in array
    let earthquakes = L.geoJSON(earthquakeData, {
        onEachFeature: onEachFeature, 

        // Point to layer altering markers
        pointToLayer: function(feature, latlng) {

            // Based on properties, determine style of markers
            let markers = {
                radius: markerSize(feature.properties.mag),
                fillColor: chooseColor(feature.geometry.coordinates[2]),
                fillOpacity: 0.7,
                color:"black", 
                stroke: true, 
                weight: 0.5
            };
            return L.circle(latlng, markers);
        }
    });

    // Send earthquakes layer to createMap function
    createMap(earthquakes);
}

function createMap(earthquakes) {

    // Create tile layers

    let geoLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{style}/tiles/{z}/{x}/{y}?access_token={access_token}', {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        style:    'mapbox/outdoors-v12',
        access_token: api_key
      });
    

    let satelliteLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{style}/tiles/{z}/{x}/{y}?access_token={access_token}', {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        style:    'mapbox/satellite-v9',
        access_token: api_key
      });

    let grayscaleLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{style}/tiles/{z}/{x}/{y}?access_token={access_token}', {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        style:    'mapbox/light-v11',
        access_token: api_key
      });

      // Creater layer for tectonic plates
      tectonicPlates = new L.layerGroup(); 

      // Using D3, send GET request to tectonicPlatesURL
      d3.json(tectonicplatesUrl).then(function (plates) {

        // Console log retrieved tectonicPlates data
        console.log(plates);
        L.geoJSON(plates, {
            color: "orange",
            weight: 2
        }).addTo(tectonicPlates);
    });

    // Create baseMaps object
    let baseMaps = {
        "Satellite": satelliteLayer,
        "GrayScale": grayscaleLayer,
        "Outdoors": geoLayer
    };

    // Create overlay object to hold overlay
    let overlayMaps = {
        "Earthquakes": earthquakes, 
        "Tectonic Plates": tectonicPlates
    };

    // Create map with satellite map & earthquakes layers displayed at load
    let myMap = L.map("map", {
        center: [37.09, -95.71],
        zoom: 5,
        layers: [satellite, earthquakes, tectonicPlates]
      });

      // Add legend 
      let legend = L.control({position: "upperright"});
      legend.onAdd = function() {
        let div = L.DomUntil.create("div", "info legend");
            depth = [-10, 10, 30, 50, 70, 90];

            div.innerHTML += "<h3 style='text-align: center'>Depth</h3>"

        for(let i = 0; i < depth.length; i++) {
        div.innerHTML += '<i style="background:' + chooseColor(depth[i] + 1) + '"></i> ' + depth[i] + (depth[i + 1] ? '&ndash;' + depth[i + 1] + '<br>' : '+');
        }
        return div;
      };

      legend.addTo(myMap)

      // Create a layer control & pass baseMaps & overlayMaps
      // Add layer control to the map.
      L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
      }).addTo(myMap);
    };