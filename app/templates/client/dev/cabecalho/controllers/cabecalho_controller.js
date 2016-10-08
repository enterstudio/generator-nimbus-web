;(function(ng) {
    "use strict";

    ng.module('<%= appName %>')
      .controller('CabecalhoController', [
        '$rootScope',
        '$window',
        'AltPassaporteUsuarioLogadoManager',
        'AltPassaporteListagemProdutosService',
        'AltAlertaFlutuanteService',
        'altSanitizeMensagemErroBackend',
        'SISTEMA_ADMIN_URL_LOGOUT',
          function($rootScope, $window, AltPassaporteUsuarioLogadoManager, AltPassaporteListagemProdutosService, AltAlertaFlutuanteService, altSanitizeMensagemErroBackend, URL_LOGOUT) {
          this.SISTEMA_ADMIN_URL_LOGOUT = URL_LOGOUT;
          this.usuario = AltPassaporteUsuarioLogadoManager.retorna();
          this.produtos = [];
          
          this.redirecionaLogout = function(urlLogout) {
            $window.location.replace(urlLogout);
          };

          this._init = function() {
            AltPassaporteListagemProdutosService
                  .getProdutosHabilitados()
                  .then((produtos) => {
                      this.produtos = produtos;
                  })
                  .catch((erro) => {
                      const MSG_DEFAULT = 'Houve um erro ao recuperar a listagem de produtos';
                      AltAlertaFlutuanteService.exibe({msg : altSanitizeMensagemErroBackend(erro, MSG_DEFAULT)});
                  });
          };

          ;(() => {
            this._init();
          })();
        }]);
}(window.angular));
