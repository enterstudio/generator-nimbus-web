;(function(ng) {
  'use strict';

  ng.module('<%= appName %>')
    .config([
      '$routeProvider',
      function($routeProvider) {
        $routeProvider
          .when('/dashboard', {
            templateUrl: 'dashboard/templates/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dashboardCtrl'
          })
          .otherwise({
            redirectTo: '/dashboard'
          });
      }
    ]);
}(window.angular));
