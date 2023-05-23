
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -33.4489, lng: -70.6693 },
        zoom: 15,
        mapTypeId: "satellite",
    });

    map.setTilt(45);
}

window.initMap = initMap;