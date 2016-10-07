describe('app', function() {
  var _URL_LOGOUT;
  var _BASE_API;
  var _lodash;
  var _moment;
  var _sistemaAdminAcessos;
  var _Evento;

  beforeEach(module('alt.sistema.adminApp'));

  beforeEach(inject(function($injector) {
      _URL_LOGOUT = $injector.get('SISTEMA_ADMIN_URL_LOGOUT');
      _BASE_API = $injector.get('BASE_API_SISTEMA_ADMIN');
      _lodash = $injector.get('_');
      _moment = $injector.get('moment');
      _sistemaAdminAcessos = $injector.get('sistemaAdminAcessos');
      _Evento = $injector.get('Evento');
  }))   

  describe('constantes', function() {
      it('deve ter os valores de Evento.notificacao corretos', function() {
        expect(_Evento.notificacao.USUARIO_PODE_FAZER_ALGO).toEqual('sistema.admin:usuario_pode_fazer_algo');
        expect(_Evento.notificacao.USUARIO_NAO_PODE_FAZER_ALGO).toEqual('sistema.admin:usuario_nao_pode_fazer_algo');
      })

      it('deve ter o lodash setado', function() {
        expect(_lodash).toEqual(_);
      })

      it('deve ter o moment setado', function() {
        expect(_moment).toEqual(moment);
      })
      
      it('deve ter os acessos setados corretamente', function() {
        var _acessos = {
          FAZER_ALGO: "999999"
        }

        expect(_sistemaAdminAcessos).toEqual(_acessos);
      })

      it('deve ter o valor correto para BASE_API_SISTEMA', function() {
          expect(_BASE_API).toEqual('/sistema-rest-api/privado/admin/');
      })

      it('deve ter o valor correto para SISTEMA_ADMIN_URL_LOGOUT', function() {
          expect(_URL_LOGOUT).toEqual('https://sistema-admin.alterdata.com.br/sistema-rest-api/logout.html');
      })
  })
})