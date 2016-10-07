describe('root -> RootController', function() {
    var _rootScope, _scope, _httpBackend, _sistemaAdminAcessos, _Evento, _altPassaporteAcessosUsuario, _AltPassaporteUsuarioLogadoManager;
    var NOME_CONTROLLER = 'RootController as ctrl';
    var URL_PING = '/sistema-rest-api/ping';

    beforeEach(module('alt.sistema.adminApp'));

    beforeEach(inject(function($injector) {
        _rootScope = $injector.get('$rootScope');
        _scope = _rootScope.$new();
        _httpBackend = $injector.get('$httpBackend');
        
        _sistemaAdminAcessos = $injector.get('sistemaAdminAcessos');
        _Evento = $injector.get('Evento');

        _altPassaporteAcessosUsuario = $injector.get('altPassaporteAcessosUsuario');
        _AltPassaporteUsuarioLogadoManager = $injector.get('AltPassaporteUsuarioLogadoManager');
        
        spyOn(_altPassaporteAcessosUsuario, 'inicializa').and.callFake(angular.noop);
    }))

    describe('criação', function() {
        it('deve criar a controller corretamente', inject(function($controller) {
            $controller(NOME_CONTROLLER, {$scope: _scope});
        }));
        
        it('deve ter o altPassaporteAcessosUsuario setado corretamente', inject(function($controller) {
            $controller(NOME_CONTROLLER, {$scope: _scope});
            
            expect(_scope.ctrl.altPassaporteAcessosUsuario).toEqual(_altPassaporteAcessosUsuario);
        }))
        
        it('deve ter o sistemaAdminAcessos setado corretamente', inject(function($controller) {
            $controller(NOME_CONTROLLER, {$scope: _scope});
            
            expect(_scope.ctrl.sistemaAdminAcessos).toEqual(_sistemaAdminAcessos);
        }))
    });

    describe('onLoad', function() {
        it('deve chamar o ping corretamente', inject(function($controller) {
            _httpBackend.expectPOST(URL_PING).respond(200);

            $controller(NOME_CONTROLLER, {$scope: _scope});
            
            _httpBackend.flush();
        }))
    })
})