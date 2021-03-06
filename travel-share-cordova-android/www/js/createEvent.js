$("#createBtn").click(function () {
    var eventName = $("#eventName").val();
    var eventDescription = $("#eventDescription").val();
    var eventTag = "";
    var eventDate = $("#date").val();
    var pl = $("#location").val();
    var place = new Array();
    place[0] = pl.split(', ')[0];
    place[1] = pl.split(', ')[1];

    if (document.getElementById("sport").checked) {
        eventTag = "Deporte";
    } else if (document.getElementById("music").checked) {
        eventTag = "Musica";
    } else if (document.getElementById("job").checked) {
        eventTag = "Trabajo";
    } else if (document.getElementById("culture").checked) {
        eventTag = "Cultura";
    }

    var event = new Object();
    event.eventname = eventName;
    event.tag = eventTag;
    event.date = eventDate;
    event.description = eventDescription;
    event.owner = window.localStorage.getItem("userID");
    event.place = place;
    var data = JSON.stringify(event);

    $.ajax({
        url: "http://147.83.7.201:3000/event",
        type: 'POST',
        crossDomain: true,
        contentType: 'application/json',
        data: data,
        success: function () {
            window.location.href = 'index.html';
        },
        error: function () {
            window.alert("FAIL");
        }
    });
});

$("#cancelBtn").click(function () {
    window.location.href = 'index.html';
});

//$('#datetimepicker').datetimepicker();

$('#datetimepicker').datetimepicker({
    inline: true,
    lang: 'es',
    minDate: '0',
    onSelectDate: function (ct, $i) {
        $("#date").val(ct.dateFormat('Y-m-d H:i'))
    },
    onSelectTime: function (ct, $i) {
        $("#date").val(ct.dateFormat('Y-m-d H:i'))
    }
});

// Google Maps - Geocoding
var geocoder;
var map;
function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(41.275493, 1.986945);
    var mapOptions = {
        zoom: 11,
        center: latlng
    }
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

function codeAddress() {
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            $("#location").val(results[0].geometry.location.A + ", " + results[0].geometry.location.F);
            console.log(results[0].geometry.location);
            map.setCenter(results[0].geometry.location);
            map.setZoom(15);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

google.maps.event.addDomListener(window, 'load', initialize);