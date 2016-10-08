'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','$location',function($scope,$location) {
  $scope.userData={name:'',email:''}
  $scope.saveUser=function () {
    if($scope.userData.name&&$scope.userData.name!=''&&$scope.userData.email&&$scope.userData.email!='')
    {
      window.localStorage['user']=angular.toJson($scope.userData);
      $location.path( "/view1" );
    }
  }
}]);