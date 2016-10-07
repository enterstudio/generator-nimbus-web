;(function(ng) {
  'use strict';

  ng.module('alt.sistema.adminApp')
    .constant('BASE_API_SISTEMA_ADMIN', '/sistema-rest-api/privado/admin/')
    .constant('SISTEMA_ADMIN_URL_LOGOUT', altAmbienteUrl.getEndpoint('https://sistema-admin__ambiente__.alterdata.com.br/sistema-rest-api/logout.html'))
    .constant('Evento', {
      notificacao: {
        USUARIO_PODE_FAZER_ALGO: 'sistema.admin:usuario_pode_fazer_algo',
        USUARIO_NAO_PODE_FAZER_ALGO: 'sistema.admin:usuario_nao_pode_fazer_algo'
      }
    })
    .constant('moment', moment)
    .constant('_', _);
}(window.angular));
