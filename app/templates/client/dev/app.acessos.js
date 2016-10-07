;(function(ng) {
    "use strict";
    
    ng.module('alt.sistema.adminApp')
      .provider('sistemaAdminAcessos', [function() {
          this.acessos = {
              FAZER_ALGO: "999999"
          };
          
          this.$get = [function() {
              return this.acessos;
          }];
      }])
}(window.angular));
