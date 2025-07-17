var map = L.map("map", {
  center:[19.8987,-155.6659], 
  zoom: 7
  
});
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


let circleMarker01 = L.circle([19.8987,-155.6659], {
  color: "black",
  fillColor: "yellow",
  fillOpacity:0.5,
  radius: 500
}).bindPopup(`<center>
               <h3>Hello from Hawaii!</h3>
              <iframe width="1206" height="315" src="https://www.youtube.com/embed/J_4leOeH9Lc" title="FLYING OVER HAWAII (4K UHD) - Relaxing Music Along With Beautiful Nature Videos(4K Video Ultra HD)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
               </center>`).addTo(map);

let volcanoMarker = L.circle([19.4069, -155.2834], {
  color: "black",
  fillColor: "red",
  fillOpacity:0.5,
  radius: 500
}}.bindPopup("<p>Kīlauea Volcano</p>").addTo(map);
let honoluluMarker= L.circle([21.2793,-157.8292], {title: "Honolulu "}).bindPopup("<p>Wakiki Beach</p>").addTo(map);
let pearlharborMarker = L.circle([21.349270, -157.943970], {title: "Pearl Harbor "}).bindPopup("<p>Pearl Harbor Naval Base </p>").addTo(map);

