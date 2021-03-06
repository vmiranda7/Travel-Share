angular.module('MainApp', [])

function mainController($scope, $http, $filter) {
    var orderBy = $filter('orderBy');
    //$scope.newEvent = {};
    $scope.routes = {};
    $scope.selected = false;

    //GET LISTA RUTAS EN CONCURSO
    $http.get('http://147.83.7.201:3000/events/').success(function(data) {
        $scope.events = data;
        console.log(data);
    })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    //GET LISTA FECHA
    $scope.orderEvent = function() {
        $http.get('http://147.83.7.201:3000/events/date').success(function (data) {
            $scope.events = data;
            console.log(data);
        })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    }

    //DELETE element
    $scope.borrarEvent = function(newEvent) {
        $http.delete('http://147.83.7.201:3000/event/' + $scope.newEvent._id)
            .success(function(data) {
                $scope.notchange=false;
                $scope.newEvent = {};
                $scope.selected = false;
                $scope.events = null;

                $http.get('http://147.83.7.201:3000/event/').success(function(data) {
                    $scope.events = data;
                })
                    .error(function(data) {
                        console.log('Error: ' + data);
                    });

            })
            .error(function(data) {
                console.log('Error: ' + data);
                window.alert('Error:' + data);
            });
    };


    //POST LISTA
    $scope.registrarEvent = function() {
        $http.post('http://147.83.7.201:3000/event/', $scope.newEvent)
            .success(function(data) {
                $scope.notchange=false;
                $scope.newEvent = {};
                $scope.events.push(data);
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
                window.alert('Error: ' + data);
            });
    };

    //PUT ELEMENTO
    $scope.modificarEvent = function(newEvent) {
        $http.put('http://147.83.7.201:3000/event/' + $scope.newEvent._id, $scope.newEvent)
            .success(function(data) {
                $scope.newEvent = {}; // Borramos los datos del formulario
                $scope.event = data;
                $scope.selected = false;
            })
            .error(function(data) {
                console.log('Error: ' + data);
                window.alert('Error:' + data);
            });
    };

    // Función para coger el objeto seleccionado en la tabla
    $scope.selectEvent = function(event) {
        $scope.newEvent = event;
        $scope.selected = true;
        $scope.notchange=true;
        console.log($scope.newEvent, $scope.selected);
    };

}