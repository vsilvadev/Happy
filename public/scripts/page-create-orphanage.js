//create map
const map = L.map("mapid").setView([-23.566465,-46.6390699], 17);

//create and add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);


//create icon 
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

//create popup overlay
const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240
}).setContent(`Lar das Crianças <a href="/orphanage?id=1" class="choose-orphanage"> <img src="/images/arrow-white.svg"> </a>`)

let marker;

// Create and add marker
map.on("click", (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector("[name=lat]").value = lat;
    document.querySelector("[name=lng]").value = lng;

    //remove icon
    marker&& map.removeLayer(marker);

    //add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map);
});

//add photo field
function addPhotoField() {
    //catch photos container
    const container = document.querySelector("#images");
    //catch container to duplicate .new-image
    const fieldsContainer = document.querySelectorAll(".new-upload");
    //duplicate the last image
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1 ].cloneNode(true);
    //If the field is empty doesn't duplicate
    const input = newFieldContainer.children[0];

    if(input.value == "") {
        alert("Preencha o primeiro link antes de adicionar outro!");
        return;
    }
    //clean the field 
    input.value = "";
    //add the clone to the images container
    container.appendChild(newFieldContainer);
}

function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll(".new-upload");

    if(fieldsContainer.length < 2) {
        span.parentNode.children[0].value = "";
        return;
    }

    //delete field
    span.parentNode.remove();
}

//Select Yes and No 
function toggleSelect(event) {
    //remove class .active (both buttons)
    document.querySelectorAll(".button-select button")
    .forEach(function(button) {
        button.classList.remove("active");
    })
    //put class .active
    const button = event.currentTarget;
    button.classList.add("active");

    //att the input hidden
    const input = document.querySelector('[name="open_on_weekends"]');
    
    input.value = button.dataset.value;
}