;(function(ng) {
  'use strict';

  ng.module('<%= appName %>')
    .factory('DashboardResource', [
      '$resource',
        function($resource) {
          const _url = '/sistema-rest-api/endpoint-qualquer';

          const _params = {

          };
          
          const _methods = {
            obterInfo: {
              method: 'GET',
              isArray: true
            }
          };

          return $resource(_url, _params, _methods);
        }
    ]);
}(window.angular));
