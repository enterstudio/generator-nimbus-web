;(function(ng) {
  'use strict';

  ng.module('alt.sistema.adminApp')
    .constant('BASE_API_SISTEMA_ADMIN', '/sistema-rest-api/privado/admin/')
    .constant('SISTEMA_ADMIN_URL_LOGOUT', altAmbienteUrl.getEndpoint('https://sistema-admin__ambiente__.alterdata.com.br/sistema-rest-api/logout.html'))
    .constant('Evento', {
      notificacao: {
        USUARIO_PODE_CONSULTAR_TODOS_ASSINANTES: 'sistema.admin:usuario_pode_consultar_todos_assinantes',
        USUARIO_NAO_PODE_CONSULTAR_TODOS_ASSINANTES: 'sistema.admin:usuario_nao_pode_consultar_todos_assinantes'
      }
    })
    .constant('IdentificacaoGraficos', {
      ID_BILHETAGEM: '#grafico-bilhetagem'
    })
    .constant('moment', moment)
    .constant('_', _);
}(window.angular));
