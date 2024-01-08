
(function () {

  const lat = 52.5220823;
  const lng = 13.413397;
  const mapa = L.map('mapa').setView([lat, lng], 12);
  let marker;

  // use provider and   geocoder
  const geocodeService = L.esri.Geocoding.geocodeService();

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mapa);

  // Adding the pin
  marker = new L.marker([lat, lng], {
    draggable: true,
    autoPan: true,
  })
    .addTo(mapa);

  // pintpoint the marker, or pin
  marker.on('moveend', function (event){
    marker = event.target

    const position = marker.getLatLng();
    console.log(position);
    mapa.panTo(new L.LatLng(position.lat, position.lng));

    // get the information of the street, when we drop the marker
    geocodeService.reverse().latlng(position, 13).run(function(error, result) {
      // console.log(resultado)

      marker.bindPopup(result.address.LongLabel)

      // fill out the ddbb
      document.querySelector('.street').textContent = result?.address?.Address ?? '';
      document.querySelector('#streat').value = result?.address?.Address ?? '';
      document.querySelector('#lat').value = result?.latlng?.lat ?? '';
      document.querySelector('#lng').value = result?.latlng?.lng ?? '';



    })

  });
})();
