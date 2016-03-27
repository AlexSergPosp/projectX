pictures.factory('photos', ['$http', function($http) {
    return $http.get('http://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json')
       .success(function(data) {
            return data[0];
        })
        .error(function(data) {
            return data;
        });
}]);