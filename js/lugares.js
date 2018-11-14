lugaresModulo = (function () {
  var servicioLugares // Servicio para obtener lugares cercanos e información de lugares(como fotos, puntuación del lugar,etc).

    // Completa las direcciones ingresadas por el usuario a y establece los límites
    // con un círculo cuyo radio es de 20000 metros.
  function autocompletar () {
        /* Completar la función autocompletar(): autocompleta los 4 campos de texto de la página (las direcciones ingresables por el usuario).
        Para esto creá un círculo con radio de 20000 metros y usalo para fijar
        los límites de la búsqueda de dirección. El círculo no se debe ver en el mapa. */
        var inputDireccion = document.querySelector('#direccion');
        var limite = new google.maps.Circle({
          radius: 20000,
          center: mapa.center,
          bounds: posicionCentral,
          map: mapa,
          strokeColor: 'transparent',
          fillColor: 'transparent',
        })
        completando = new google.maps.places.Autocomplete(inputDireccion);
        completando.setBounds(limite.getBounds());
  }

    // Inicializo la variable servicioLugares y llamo a la función autocompletar
  function inicializar () {
    servicioLugares = new google.maps.places.PlacesService(mapa)
    autocompletar()
  }

    // Busca lugares con el tipo especificado en el campo de TipoDeLugar

  function buscarCerca (posicion) {
        /* Completar la función buscarCerca  que realice la búsqueda de los lugares
    del tipo (tipodeLugar) y con el radio indicados en el HTML cerca del lugar
    pasado como parámetro y llame a la función marcarLugares. */
    var lugar = document.querySelector('#tipoDeLugar').value;
    console.log(lugar);
    var radio = document.querySelector('#radio').value;
    console.log(radio);
    servicioLugares.nearbySearch({
      location: posicion,
      radius: radio,
      type: lugar,
    }, marcadorModulo.marcarLugares);
  }

  return {
    inicializar,
    buscarCerca
  }
})()
