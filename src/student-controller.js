(function(angular) {
    'use strict';
    angular.module('invoice3', [])
        .controller('studentController', function($scope) {
            $scope.reset = function(){
                $scope.firstName = "Mahesh";
                $scope.lastName = "Parashar";
                $scope.email = "MaheshParashar@tutorialspoint.com";
            };
            $scope.reset();
        });
})(window.angular);