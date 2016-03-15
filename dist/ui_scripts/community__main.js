(function(app){
	app
	.controller('TestCtrl', ['$scope', '$http', function($scope, $http){

		$http.get('/api/now/table/sys_user', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-UserToken': window.g_ck
                }
            }).then(function(response) {
                $scope.response = response.data.result;
            });
	}])
}(angular.module("sample_app", [])));