(function(){
    "use strict";

    var MapsApp = function(){

        if(MapsApp.instance){
            return MapsApp.instance;
        }
        MapsApp.instance = this;

        this.container = null;
        this.map = null;

        this.init();

    };

    window.MapsApp = MapsApp;

    MapsApp.prototype = {

        init: function(){

            console.log('MapsApp started');

            this.container = document.querySelector('#map-container');

            var options ={
              center: {
                lat: 59.4390793,
                lng: 24.7734649
              },
              zoom: 7,
              styles: [ { "elementType": "labels", "stylers": [ { "visibility": "off" } ] },{ "featureType": "road", "stylers": [ { "color": "#ffffff" } ] },{ "featureType": "water", "stylers": [ { "color": "#8080ff" } ] },{ } ],
              mapTypeControl: false,
            };


            this.map = new google.maps.Map(this.container, options);
            this.map.addListener('click', function(e){
              console.log(e.latLng.lat());
              MapsApp.instance.createMarker(e.latLng.lat(), e.latLng.lng());
            });
        },
        createMarker: function(newLat, newLng){
          var markerOptions = {
            map: this.map,
            position: {lat: newLat, lng: newLng},

          };

          var newMarker = new google.maps.Marker(markerOptions);

          var infoOptions = {
            content: "<strong>Tere</strong>"
          };
          var infoWindow = new google.maps.InfoWindow(infoOptions);
          //seome markeriga
          infoWindow.open(this.map, newMarker);
        }
    };

    window.onload = function(){
        var app = new MapsApp();
    };

})();
