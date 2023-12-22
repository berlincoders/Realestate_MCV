(function() {

  const lat = 52.5220823;
  const lng = 13.413397;
  const mapa = L.map('mapa').setView([lat, lng ], 12);


  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mapa);


})()
