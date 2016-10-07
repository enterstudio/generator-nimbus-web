;(function(ng) {
  'use strict';

  ng.module('<%= appName %>')
    .config([
      '$routeProvider',
      function($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'dashboard/templates/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dashboardCtrl'
          })
          .otherwise({
            redirectTo: '/'
          });
      }
    ]);
}(window.angular));
