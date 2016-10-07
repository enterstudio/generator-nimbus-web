;(function(ng) {
  'use strict';

  ng.module('<%= appName %>')
    .controller('DashboardController', [
      '$scope',
      'Evento',
      'DashboardService',   
      'AltSelectService',   
      'AltCarregandoInfoService',   
      'AltAlertaFlutuanteService',
      'AltPassaporteUsuarioLogadoManager',   
      'altSanitizeMensagemErroBackend',      
      'moment',   
      function($scope, evento, dashboardService, selectService, carregandoService, alertaService, usuarioLogadoManager, sanitizeErroBackend, moment) {
        this.oi = 'oi :D';
      }
    ]);      
}(window.angular));
