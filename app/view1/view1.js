'use strict';

angular.module('myApp.view1', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/view1', {
			templateUrl: 'view1/view1.html',
			controller: 'View1Ctrl'
		});
	}])

	.controller('View1Ctrl', ['$scope', '$location','$http', function ($scope, $location,$http) {
		var userData = window.localStorage['user'];
		if (!userData) {
			$location.path("/view2");
			return;
		}

		var mainString = " ناموا في أحضان والديهم ولم يستيقظوا ومن بقي على قيد الحياة كاد قهره يقتله ليلعن العالم أجمع بلا إستثناء في ذلك اليوم كانت الجثث مترامية على مدى البصر في كل ثانية تلقى جثة برقم مجهولة في الارض معروفة في السماء لفناء عائلات بأكملها كان كرنفالا وحشيا أقصى ما صنعه أنه تسبب بقلق أممي لم يكن يرقى لحجم المأساة التي وقعت فتتالت اللعنات على صانعي الحقوق والمبادىء المزعومة بعد موقفهم الاستنكاري ليبقى مبدأنا هو الباقي لزوال شيء";
		$scope.text = mainString.split(' ');
		$scope.selected = {};
		$scope.idea='الفكرة';
		$scope.select = function (index) {
			if ($scope.selected[index]) {
				delete $scope.selected[index];
			}
			else {
				$scope.selected[index] = true;
			}
		};
		$scope.saveData = function () {
			var dataToDb = {userData: angular.fromJson(userData),selected:$scope.selected,text:$scope.text,idea:$scope.idea};


			$http.post('https://echochrome.herokuapp.com/api/model',
				{data:dataToDb}
				, {
					headers: {
						"Content-Type":"application/json"
					}
				}).success(function (data) {
					$scope.selected={};
				$scope.idea='الفكرة';
			}).error(function (msg, code) {
				//   $log.error(msg, code);
			});
		}
		$scope.isSelected = function (index) {
			if ($scope.selected[index]) {
				return 'red'
			}
			else {
				'none'
			}
		};

	}]);