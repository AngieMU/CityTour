function initialize() {
  var marcadores = [
    ['Catedral de Puebla', 'img/catedral.jpg', 'C. 16 de Septiembre s/n, Centro, 72000 Puebla, Pue.', 'https://es.wikipedia.org/wiki/Catedral_de_Puebla', 19.042563, -98.198502],
    ['Volcán Cuexcomate', 'img/cuexcomate.jpg', 'Libertad, 72130 Puebla, Pue.', 'https://es.wikipedia.org/wiki/Cuexcomate_(Puebla)', 19.070393, -98.235021],
    ['Estrella de Puebla', 'img/estrella.jpg', 'Osa Mayor 2520, Reserva Territorial Atlixcáyotl, Centros Comerciales Desarrollo Atlixcayotl, 72190 Puebla, Pue.', 'https://es.wikipedia.org/wiki/Estrella_de_Puebla', 19.034408, -98.232401],
    ['Fuertes de Loreto y Guadalupe', 'img/fuertes_loreto.jpg', 'Ejércitos de Oriente S/N, Los Fuertes, 72270 Puebla, Pue.', 'https://es.wikipedia.org/wiki/Estrella_de_Puebla', 19.058023, -98.187171],
    ['Estadio Cuauhtémoc', 'img/cuauhtemoc.jpg', 'Calzada Ignacio Zaragosa 666, Parque Industrial Puebla 2000, 72220 Puebla, Pue.', 'https://es.wikipedia.org/wiki/Estadio_Cuauht%C3%A9moc', 19.077768, -98.164410],
    ['Museo del Ferrocarril', 'img/museo_tren.jpg', '11 Norte 1005, Colonia Centro, 72000 Puebla, Pue.', 'http://www.museoferrocarriles.cuadriga.com.mx/', 19.053150, -98.202946],
    ['Bazar los Sapos', 'img/bazar_sapos.jpg', 'Calle 6 Sur 309, Centro, 72000 Puebla, Pue.', 'https://www.mexicodesconocido.com.mx/los-sapos.-un-mundo-de-curiosidades-en-el-centro-de-puebla.html', 19.041152, -98.193458]
  ];
  
  var map = new google.maps.Map(document.getElementById('mapa'), {
    zoom: 13,
    center: new google.maps.LatLng(19.055730, -98.210821),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();
  var marker, i;
  
  for (i = 0; i < marcadores.length; i++) {  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(marcadores[i][4], marcadores[i][5]),
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent('<div id="msj"><table><tr><td rowspan="3"><img src="'+marcadores[i][1]+'" alt="Catedral de Puebla."></td><td><label id="titulo">'+marcadores[i][0]+'</label></td></tr><tr><td><label id="titulo_direc">DIRECCIÓN:</label><br /><label id="direc">'+marcadores[i][2]+'</label></td></tr><tr><td><a id="info" href="'+marcadores[i][3]+'">Conocer más sobre este lugar...</a></td></tr></table></div>');
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}

google.maps.event.addDomListener(window, 'load', initialize);