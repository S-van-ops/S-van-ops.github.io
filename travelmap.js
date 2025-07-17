var map = L.map("map", {
  center:[19.8987,-155.6659], 
  zoom: 5
  
});
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



let volcanoMarker = L.marker([19.4069, -155.2834], {title: "Kīlauea Volcano"}).bindPopup("<p>Kīlauea Volcano</p>").addTo(map);
let honoluluMarker= L.marker([21.2793,-157.8292], {title: "Honolulu "}).bindPopup("<p>Wakiki Beach</p>").addTo(map);
let pearlharborMarker = L.marker([21.349270, -157.943970], {title: "Pearl Harbor "}).bindPopup("<p>Pearl Harbor Naval Base </p>").addTo(map);

