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
})

let marker;

// Create and Add Marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // Removing icon from map
    marker && map.removeLayer(marker) // && verifica se o elemento é true e realiza a function seguinte

    // Add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

// Uploading Photos
function addPhotoField() {
    const container = document.querySelector('#images');

    const fieldContainer = document.querySelectorAll('.new-upload');

    const newFieldContainer = fieldContainer[fieldContainer.length - 1].cloneNode(true)

    const input = newFieldContainer.children[0];

    if(input.value == "") {
        return // Finish function action
    }
    
    input.value = '';
    
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget;

    const fieldContainer = document.querySelectorAll('.new-upload');

    if(fieldContainer.length < 2) {
        span.parentNode.children[0].value = ""
        return
    }
    
    span.parentNode.remove();
    
}

// Select availability of weekend service
function toggleSelect(event) {
    document.querySelectorAll('.button-select button')
    .forEach((button) => {
        button.classList.remove('active')
    })

    const button = event.currentTarget;
    button.classList.add('active');

    const input = document.querySelector('[name="open_on_weekends"]');

    input.value = button.dataset.value;

}