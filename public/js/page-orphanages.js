// Create Map
const map = L.map('mapid').setView([-21.4608322,-49.9510259], 15);

// Create and Add TileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Create and Add Icon
const icon = L.icon({
    iconUrl:"./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})

// Create Popup Overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent(`Lar Santa Luzia 
    <a href="orphanage.html" class="choose-orphanage"/> 
    <img src="./public/images/arrow-white.svg">`)

// Create and Add Marker
L.marker([-21.4608322,-49.9510259], { icon: icon })
    .addTo(map)
    .bindPopup(popup)
