var myApp=angular.module('myApp', []);

myApp.controller('myController', ($scope, $http)=>{

    $scope.pokemon = {};

    $http.get('localhost:8081/getPokemon').then((data)=>{
        $scope.pokemon = data;
    })

})