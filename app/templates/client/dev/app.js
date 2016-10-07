;(function(ng) {
  'use strict';

  ng.module('alt.sistema.adminApp', [
      'ngResource',
      'ngRoute',
      'emd.ng-xtorage',
      'n4AuthenticationInterceptor',

      'alt.select-service',
      'alt.carregando-info',
      'alt.alerta-flutuante',
      'alt.passaporte-usuario-logado',
      'alt.passaporte-listagem-produtos',
      'alt.rota-reload',
      'alt.passaporte-acessos-usuario',
      'alt.erro-servidor-parser',
      'alt.endpoint-ping'
    ]);
}(window.angular));
