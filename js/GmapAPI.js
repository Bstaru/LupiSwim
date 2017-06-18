   function initMap() {
            var uluru = {lat: 25.718110, lng:  -100.241247};
            var map = new google.maps.Map(document.getElementById('map'), {
              zoom: 17,
              center: uluru
            });
            var marker = new google.maps.Marker({
              position: uluru,
              map: map
            });
          }