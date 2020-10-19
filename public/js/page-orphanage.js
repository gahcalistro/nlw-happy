// Options to lock map 
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// Create Map
const map = L.map('mapid', options).setView([-21.4608322,-49.9510259], 15);

// Create and Add TileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Create and Add Icon
const icon = L.icon({
    iconUrl:"/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})

// Create and Add Marker
L.marker([-21.4608322,-49.9510259], { icon: icon })
    .addTo(map)


// Image Gallery 
function selectImage(event) {
    // Actual button
    const button = event.currentTarget

    // Selecting All button 
    const buttons = document.querySelectorAll(".images button")
    // Removing active class
    buttons.forEach((button) => {
        button.classList.remove("active")
    })

    // Adding active class in the clicked button
    button.classList.add("active")

    // Changing image shown
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    imageContainer.src = image.src
}