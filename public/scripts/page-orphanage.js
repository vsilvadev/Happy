const options = {
    dragging: false,
    toutchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
};

const spanLat = document.querySelector("span[data-lat]").dataset.lat;
const spanLng = document.querySelector("span[data-lng]").dataset.lng;

//create map
const map = L.map("mapid", options).setView([spanLat, spanLng], 17);

//create and add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);


//create icon 
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

//create and add marker
L.marker([spanLat, spanLng], { icon })
  .addTo(map)


/*Image Gallery*/

function selectImage(event) {
    const button = event.currentTarget;

    //remover classes active
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach(removeActiveClass);

    function removeActiveClass(button) {
        button.classList.remove("active");
    }

    //selecionar imagem  clicada
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");

    //atualizar o container de imagem
    imageContainer.src = image.src;

    //adicionar a classe .active para este botao
    button.classList.add("active");
}