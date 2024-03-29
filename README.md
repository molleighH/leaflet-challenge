# leaflet-challenge
## <ins> Module 15 Homework </ins>
### Earthquake Dashboard

[Link to Earthquake Dashboard](https://molleighH.github.io/leaflet-challenge/)


<img align="right" width="550" height="350" src="https://github.com/molleighH/leaflet-challenge/blob/main/Images/Snapshot%20of%20Active%20Dashboard.png?raw=true">

<code style="color : aqua"> <samp>The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.
<br>
The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.</samp> </code>


 ### Built With 
* Leaflet
* HTML
* CSS
* JavaScript
* D3

### Prerequisites
#### Make sure the following prerequisites are installed
* Code Editor (e.g. vscode, etc.)
* Browser (e.g. Google Chrome, etc.)
* [A mapbox API key](https://www.mapbox.com/)

### Installation
* Close repo and save to local directory
* Git clone the repo
* Open repo in code editor
* Add and save your mapbox API key in <code style="color : aqua">config.js</code> file inside of <code style="color : aqua">static/js</code> folder 
    * export <code style="color : aqua">const api_key = ' YOUR API KEY ';</code>
* Visit [local host](http://localhost:5000/) in your browser

## Features

### Interactive Map
Map is centered at GeoCoordinates [37.09, -95.71] (the United States), with a zoom level of 2.5. The size of each marker on the map is proportional to the magnitude of the earthquake. Earthquakes with higher magnitudes appear larger and earthquakes with lower magnitudes appear smaller. The legend on the map provides the earthquake's depth in kilometers; red indicates the depth is greater than 90km, yellow indicates the depth is greater than 70km, and green indicates the depth less than 10 km. Clicking on a marker will display the earthquake's location, date, time, depth (km), and magnitude (Richter). The map can be moved to explore different parts of the world by clicking and dragging. Their is a legend showing the depth (km) and the earthquakes corresponding depth color. 

## Credits
* Leaflet
* d3
* USGS