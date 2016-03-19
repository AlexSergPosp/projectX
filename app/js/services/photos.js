app.factory('photos', ['$http', function($http) {tos.json'
    return $http.get('http://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/pho)
        .success(function(data) {
            return data;
        })
        .error(function(data) {
            return data;
        });
}]);