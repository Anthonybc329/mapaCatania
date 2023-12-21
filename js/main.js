
mapboxgl.accessToken = 'pk.eyJ1IjoiYW50aG9ueWJjMzI5IiwiYSI6ImNscWU0YmhndzBqdG4ya20za3YwdW9pMHMifQ.BikfzZWYmWXuO1xIB-1_Hg';

const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/mapbox/streets-v12', // style URL
	center: [-75.54159321140948, 10.404782353858465], // Cordenadas Cartagena
	zoom: 13, // starting zoom   
});
/* {"lng":-75.54159321140948,"lat":10.404782353858465} */
/* Agregar ubicación del usuario */
map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.FullscreenControl());
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));

/* Visualizar coordendas */
map.on('mousemove', function (e) {
    document.getElementById('coordenadas').innerHTML =
        JSON.stringify(e.lngLat);
});