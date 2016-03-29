main.controller('CategoryController', ['$scope', 'CategoryService', function ($scope, service) {
    $scope.categories = [];
    service.getAllCategory().success(function (data) {
        $scope.categories = data;
    });

}]);   