app.config(['$routeProvider', function($routeProvider){

    $routeProvider
    .when('/', {
        templateUrl: 'app/views/home.html',
    })

    .when('/purchaseRequests', {
        templateUrl : 'app/views/purchaseRequests.html',
        controller  : 'PurchaseRequestsController',
    })

    .when('/storekeeperRequests', {
        templateUrl : 'app/views/storekeeperRequests.html',
        controller  : 'PurchaseRequestsController',
    })

    .when('/requests', {
        templateUrl : 'app/views/requests.html',
        controller  : 'PurchaseRequestsController',
    })

    .otherwise ({ redirectTo: '/' });
}]);