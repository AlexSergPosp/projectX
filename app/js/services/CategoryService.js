main.factory('CategoryService', ['$http', function ($http) {
    function getAllCategory() {
        return $http.get(URL_GET_ALL_CATEGORIES);
    }
    return {
        getAllCategory : getAllCategory
    }
}]);