'use strict';

module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
        'client/dev/bower_components/alt-ambiente-url/dist/alt-ambiente-url.min.js',
        'client/dev/bower_components/jquery/dist/jquery.js',
        'client/dev/bower_components/bootstrap/dist/js/bootstrap.js',
        'client/dev/bower_components/select2/dist/js/select2.js',
        'client/dev/bower_components/lodash/lodash.js',
        'client/dev/bower_components/moment/moment.js',
        'client/dev/bower_components/angular/angular.js',
        'client/dev/bower_components/angular-route/angular-route.js',
        'client/dev/bower_components/angular-resource/angular-resource.js',
        'client/dev/bower_components/highcharts/highcharts.js',
        'client/dev/bower_components/ng-xtorage/ng-xtorage.min.js',
        'client/dev/bower_components/alt-carregando-info/dist/alt-carregando-info.min.js',
        'client/dev/bower_components/alt-alerta-flutuante/dist/alt-alerta-flutuante.min.js',
        'client/dev/bower_components/alt-passaporte-acessos-usuario/dist/alt-passaporte-acessos-usuario.min.js',
        'client/dev/bower_components/alt-select-service/dist/alt-select-service.min.js',
        'client/dev/bower_components/alt-modal-service/dist/alt-modal-service.min.js',
        'client/dev/bower_components/alt-passaporte-usuario-logado/dist/alt-passaporte-usuario-logado.min.js',
        'client/dev/bower_components/alt-passaporte-listagem-produtos/dist/alt-passaporte-listagem-produtos.min.js',
        'client/dev/bower_components/alt-passaporte-informacoes-autorizacao/dist/alt-passaporte-informacoes-autorizacao.min.js',
        'client/dev/bower_components/alt-rota-reload/dist/alt-rota-reload.min.js',
        'client/dev/bower_components/alt-rotas-listener/dist/alt-rotas-listener.min.js',
        'client/dev/bower_components/alt-erro-servidor-parser/dist/alt-erro-servidor-parser.min.js',
        'client/dev/bower_components/alt-endpoint-ping/dist/alt-endpoint-ping.min.js',
        'client/dev/bower_components/n4authenticationinterceptor/dist/n4authenticationinterceptor.min.js',

        'client/dev/bower_components/angular-mocks/angular-mocks.js',

        'client/dev/app.js',
        'client/dev/app.acessos.js',
        'client/dev/app.constant.js',
        'client/dev/app.config.js',
        'client/dev/app.route.js',
        'client/dev/!(bower_components)/**/*.js',
        
        'tests/client/**/*_test.js',
        
        'client/dev/**/*.html' 
    ],
    exclude: [],
    reporters: ['dots', 'coverage'],
    preprocessors: {
      'client/dev/!(bower_components)/**/*.js': ['coverage'],
      'client/dev/**/*.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'client/dev/',
      moduleName: 'my.includes'
    },
    coverageReporter: {
      type : 'lcov',
      dir : 'unit_coverage/'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'Firefox', 'FirefoxNightly', 'ChromeCanary', 'IE', 'Safari', 'PhantomJS'],
    captureTimeout: 120000,
    singleRun: true
  });
};
