var myModule = angular.module('myModules',['ngRoute'])


myModule.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/store',{
        templateUrl: 'view/store.html',
        controller: 'FilterController'
    })
    .when('/about',{
        templateUrl: 'view/about.html',
    })
    .when('/contact',{
        templateUrl: 'view/contact.html',

    })
    .when('/login',{
        templateUrl: 'view/login.html',

    })
    .when('/home',{
        templateUrl: 'view/home.html',
        controller: 'FilterController'

    })

    .otherwise({
        redirectTo: '/home'
    })


    
}])

//formController

myModule.controller('FilterController' ,['$scope' ,function($scope){
    $scope.name= ""
     $scope.goods=
    
       [ {
            name: "TV",
            price: 5000,
            available: true,
            country: "Nigeria",
            thumb: "/stupid/content/img/room-2559790_640.jpg"
        },
        {
            name: "Remote",
            price: 2000,
            available: true,
            country: "Togo",
            thumb: "/stupid/content/img/room-2559790_640.jpg"

        },
        {
            name: "Rice",
            price: 1500,
            available: false,
            country: "London",
            thumb:"/stupid/content/img/rice-960627_640.jpg"
        },
        {
            name: "Beans",
            price: 7000,
            available: false,
            country: "Brazil",
            thumb:"/stupid/content/img/kidney-beans-732x549-thumbnail.jpg"
        },
        {
            name: "Bread",
            price: 3000,
            available: true,
            country: "Dortmound",
            thumb:"/stupid/content/img/bread-4642686_640.jpg"

        }
    ]




$scope.removeGood = function(good){
    const x = $scope.goods.indexOf(good)
    $scope.goods.splice(x,1)
}
$scope.addNew = function(){
    $scope.goods.push({
        name: $scope.newgood.name,
        price: $scope.newgood.price,
        country: $scope.newgood.country,
        thumb: $scope.newgood.thumb,
       
    })
    $scope.newgood.name = "";
    $scope.newgood.price ="";
    $scope.newgood.country = "";
    $scope.newgood.thumb = "";
}
}])

//  $http.get(http/data/goods.json).success(function (data) {
//      $scope.users = data;
//  })


