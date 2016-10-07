;(function(ng) {
  'use strict';

  ng.module('alt.sistema.adminApp')
    .factory('DashboardResource', [
      '$resource',
        function($resource) {
          var _url = '/sistema-rest-api/endpoint-qualquer';

          var _params = {

          };
          
          var _methods = {
            obterInfo: {
              method: 'GET',
              isArray: true
            }
          };

          return $resource(_url, _params, _methods);
        }
    ]);
}(window.angular));
