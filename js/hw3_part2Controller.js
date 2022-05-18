// create module called myApp
angular.module('myApp', [])
    //create controller
    .controller('HelloController', function ($scope) {
        //initialize scope variables
        $scope.greeting = "Angular is awesome";
        $scope.delim = '#';
    }
    );
