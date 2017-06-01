homepointsApp.config(['$routeProvider',

  function($routeProvider) {
    $routeProvider.
      when('/single', {
        templateUrl: 'single.html',
        controller: 'SingleController'
      }).
      when('/multiple', {
        templateUrl: 'multiple.html',
        controller: 'MultipleController'
      }).
      when('/convert', {
        templateUrl: 'convert.html',
        controller: 'ConvertController'
      }).
      otherwise({
        redirectTo: '/single'
      });
  }]);
