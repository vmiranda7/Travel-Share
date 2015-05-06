var tabs = document.querySelector('paper-tabs');
var list = document.querySelector('event-list');
tabs.addEventListener('core-select', function () {
    list.show = tabs.selected;
});
addEvent = function () {
    window.location.href = 'createEvent.html';
}

// Manage the tags chosen by the user
var arrayTags = ["Deporte", "Musica", "Trabajo", "Cultura"];

document.querySelector("#sportBtn").addEventListener('change', function () {
    if (this.checked) {
        arrayTags.push("Deporte");
        window.alert(arrayTags);
    } else {
        var index = arrayTags.indexOf("Deporte");
        if (index > -1) {
            arrayTags.splice(index, 1);
        }
        window.alert(arrayTags);
    }
});

document.querySelector("#musicBtn").addEventListener('change', function () {
    if (this.checked) {
        arrayTags.push("Musica");
        window.alert(arrayTags);
    } else {
        var index = arrayTags.indexOf("Musica");
        if (index > -1) {
            arrayTags.splice(index, 1);
        }
        window.alert(arrayTags);
    }
});

document.querySelector("#jobBtn").addEventListener('change', function () {
    if (this.checked) {
        arrayTags.push("Trabajo");
        window.alert(arrayTags);
    } else {
        var index = arrayTags.indexOf("Trabajo");
        if (index > -1) {
            arrayTags.splice(index, 1);
        }
        window.alert(arrayTags);
    }
});

document.querySelector("#cultureBtn").addEventListener('change', function () {
    if (this.checked) {
        arrayTags.push("Cultura");
        window.alert(arrayTags);
    } else {
        var index = arrayTags.indexOf("Cultura");
        if (index > -1) {
            arrayTags.splice(index, 1);
        }
        window.alert(arrayTags);
    }
});

$("#filterBtn").click(function () {
    // PRUEBAS DE CÓDIGO

    //window.alert("HOLA");

    //var element = document.querySelector('event-service');
    //element.tags = {'name':'Web Guru','email':'guru@example.com'};

    //Otro posible código

    //var data = [{"tag": "Deporte"}, {"tag": "Trabajo"}];
    //var tags = {"tags": data};
    ////window.alert(JSON.stringify(tags));
    //
    //var ajax = document.querySelector('event-service');
    //
    //ajax.method = 'POST';
    //ajax.handleAs = 'JSON';
    //ajax.contentType = 'application/json';
    //ajax.params = JSON.stringify(tags);
    //
    //ajax.go();
});