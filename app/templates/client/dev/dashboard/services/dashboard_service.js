;(function(ng) {
  'use strict';

  ng.module('<%= appName %>')
    .factory('DashboardService', [
      '$q',
      'DashboardResource',
      '_',
        function($q, DashboardResource, _) {
          class DashboardService {
              obterInfo() {                
                return DashboardResource.obterInfo()
                  .$promise
                  .then((info) => {
                    return info;
                  });
              }
          }

          return new DashboardService();
        }
      ]);
}(window.angular));
