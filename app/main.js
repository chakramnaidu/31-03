System.register(['angular2/core', 'angular2/platform/browser', 'angular2/http', 'ng2-translate/ng2-translate', 'angular2/router', './app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, browser_1, http_1, ng2_translate_1, router_1, app_component_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                core_1.provide(router_1.APP_BASE_HREF, { useValue: '/' }),
                core_1.provide(ng2_translate_1.TranslateLoader, {
                    useFactory: function (http) { return new ng2_translate_1.TranslateStaticLoader(http, 'app/i18n', '.json'); },
                    deps: [http_1.Http]
                }),
                // use TranslateService here, and not TRANSLATE_PROVIDERS (which will define a default TranslateStaticLoader)
                ng2_translate_1.TranslateService
            ]);
        }
    }
});

//# sourceMappingURL=main.js.map
