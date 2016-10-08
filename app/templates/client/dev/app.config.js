;(function(ng) {
  'use strict';
  
  const URL_PASSAPORTE_AUTH = altAmbienteUrl.getEndpoint('https://passaporte2__ambiente__.alterdata.com.br');

  ng.module('<%= appName %>')
    .config([
      '$locationProvider',
      function($locationProvider) {        
        $locationProvider.html5Mode(true);
      }
    ])
    .config(['altPingProvider', function(ping) {
      ping.url = '/sistema-rest-api/ping';
    }])
    .config(['AltPassaporteUrlBaseListagemProdutosProvider', function(AltPassaporteUrlBaseListagemProdutosProvider) {
        AltPassaporteUrlBaseListagemProdutosProvider.url = URL_PASSAPORTE_AUTH;
    }])
    .config(['n4AuthenticationInterceptorProvider', function(n4AuthenticationInterceptorProvider) {
        n4AuthenticationInterceptorProvider.cb = function() {
          window.localStorage.removeItem('pass_usuario_auth');
        };

        n4AuthenticationInterceptorProvider.redirectURL = URL_PASSAPORTE_AUTH + 
                                                          altAmbienteUrl.getEndpoint('?continue=https://sistema-admin__ambiente__.alterdata.com.br/auth.html&nomeProduto=Sistema%20Admin&idProduto=CHAVE_PRODUTO');
    }])
    .config([
      'AltRotasProvider',
      'sistemaAdminAcessosProvider',
      function(rotasProvider, sistemaAdminAcessosProvider) {
        
        rotasProvider.rotas = [
          {
            nome: 'Dashboard',
            url: '/dashboard',
            active: false,
            idAcesso: sistemaAdminAcessosProvider.FAZER_ALGO
          }
        ]
    }]);
}(window.angular));
