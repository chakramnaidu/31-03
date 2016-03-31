System.register(['./components/home/home.component', './components/cv/cv.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var home_component_1, cv_component_1;
    var APP_ROUTES;
    return {
        setters:[
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (cv_component_1_1) {
                cv_component_1 = cv_component_1_1;
            }],
        execute: function() {
            exports_1("APP_ROUTES", APP_ROUTES = [
                { path: '/my-page', name: 'My Page', component: home_component_1.HomeComponent, useAsDefault: true },
                { path: '/my-cv/...', name: 'My CV', component: cv_component_1.CVComponent }
            ]);
        }
    }
});

//# sourceMappingURL=app.routes.js.map
