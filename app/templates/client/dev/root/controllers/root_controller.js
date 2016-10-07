;(function(ng) {
    "use strict";

    ng.module('<%= appName %>')
      .controller('RootController', [
        '$scope',
        '$timeout',
        'Evento',
        'altPing',
        'altPassaporteAcessosUsuario',
        'sistemaAdminAcessos',
        'AltPassaporteUsuarioLogadoManager',
        '_',
          function($scope, $timeout, evento, ping, altPassaporteAcessosUsuario, sistemaAdminAcessos, usuarioLogadoManager, _) {
              this.altPassaporteAcessosUsuario = altPassaporteAcessosUsuario;
              this.sistemaAdminAcessos = sistemaAdminAcessos;
              
              ;(() => {                
                ping();
              })();
        }]
      );
}(window.angular));
