describe('cabecalho -> CabecalhoController', function () {
    var _rootScope, _scope, _q, _windowMock, _AltPassaporteUsuarioLogadoManager, _AltPassaporteListagemProdutosService,
        _AltAlertaFlutuanteService;

    var _SISTEMA_ADMIN_URL_LOGOUT;
    var NOME_CONTROLLER = 'CabecalhoController as ctrl';

    beforeEach(module('alt.sistema.adminApp', function($provide) {
        $provide.constant('$window', {
            location: {
                replace: jasmine.createSpy()
            },
            localStorage: {
                getItem: angular.noop
            }
        })
    }));

    beforeEach(inject(function($injector) {
        _rootScope = $injector.get('$rootScope');
        _q = $injector.get('$q');
        _windowMock = $injector.get('$window');
        _scope = _rootScope.$new();
        _AltPassaporteUsuarioLogadoManager = $injector.get('AltPassaporteUsuarioLogadoManager');
        _AltPassaporteListagemProdutosService = $injector.get('AltPassaporteListagemProdutosService');
        _AltAlertaFlutuanteService = $injector.get('AltAlertaFlutuanteService');

        _SISTEMA_ADMIN_URL_LOGOUT = $injector.get('SISTEMA_ADMIN_URL_LOGOUT');

        spyOn(_AltAlertaFlutuanteService, 'exibe').and.callFake(angular.noop);
    }));

    describe('criação', function() {
        it('deve ser criada corretamente', inject(function($controller) {
            $controller(NOME_CONTROLLER, {$scope: _scope});
        }));

        it('deve ter usuario definido', inject(function($controller) {
            $controller(NOME_CONTROLLER, {$scope: _scope});

            expect(_scope.ctrl.usuario).toBeDefined();
        }));

        it('deve ter produtos como um array vazio', inject(function($controller) {
            $controller(NOME_CONTROLLER, {$scope: _scope});

            expect(_scope.ctrl.produtos).toEqual([]);
        }));

        it('deve ter SISTEMA_ADMIN_URL_LOGOUT com o valor correto', inject(function($controller) {
            $controller(NOME_CONTROLLER, {$scope: _scope});

            expect(_scope.ctrl.SISTEMA_ADMIN_URL_LOGOUT).toEqual(_SISTEMA_ADMIN_URL_LOGOUT);
        }));
    });

    describe('onLoad', function() {
        it('deve ter o usuario logado com o que é retornado do storage manager', inject(function($controller) {
            var _usuario = {a: true};

            spyOn(_AltPassaporteUsuarioLogadoManager, 'retorna').and.returnValue(_usuario);

            $controller(NOME_CONTROLLER, {$scope: _scope});

            expect(_scope.ctrl.usuario).toEqual(_usuario);
        }));

        it('deve tentar buscar os produtos, mas o service retorna erro', inject(function($controller) {
            var message = 'Bad Request';

            spyOn(_AltPassaporteListagemProdutosService, 'getProdutosHabilitados').and.callFake(function() {
                return _q.reject({status: 400, mensagem: message});
            });

            $controller(NOME_CONTROLLER, {$scope: _scope});

            _rootScope.$digest();

            expect(_AltAlertaFlutuanteService.exibe).toHaveBeenCalledWith({msg: message});
            expect(_scope.ctrl.produtos).toEqual([]);
        }));

        it('deve tentar buscar os produtos, mas o service retorna erro (SEM MENSAGEM DO SERVIDOR)', inject(function($controller) {
            var message = 'Houve um erro ao recuperar a listagem de produtos';

            spyOn(_AltPassaporteListagemProdutosService, 'getProdutosHabilitados').and.callFake(function() {
                return _q.reject({status: 400});
            });

            $controller(NOME_CONTROLLER, {$scope: _scope});

            _rootScope.$digest();

            expect(_AltAlertaFlutuanteService.exibe).toHaveBeenCalledWith({msg: message});
            expect(_scope.ctrl.produtos).toEqual([]);
        }));

        it('deve buscar os produtos corretamente', inject(function($controller) {
            var _produtos = {habilitados: [], disponiveis: []};

            spyOn(_AltPassaporteListagemProdutosService, 'getProdutosHabilitados').and.callFake(function() {
                return _q.when(_produtos);
            });

            $controller(NOME_CONTROLLER, {$scope: _scope});

            _rootScope.$digest();

            expect(_scope.ctrl.produtos).toEqual(_produtos);
        }));
    });
    
    describe('redirecionaLogout', function() {
        it('deve chamar o location com o que é passado corretamente', inject(function($controller) {
            $controller(NOME_CONTROLLER, {$scope: _scope});
            
            var _urlLogout = 'http://abc.com/123';
            
            _scope.ctrl.redirecionaLogout(_urlLogout);
            
            expect(_windowMock.location.replace).toHaveBeenCalledWith(_urlLogout);
        }))
    })
});
