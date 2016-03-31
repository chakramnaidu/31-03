System.register(['angular2/core', 'ng2-translate/ng2-translate', 'angular2/router', './app.routes', './components/navigation/navigation.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ng2_translate_1, router_1, app_routes_1, navigation_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (navigation_component_1_1) {
                navigation_component_1 = navigation_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(translate) {
                    this.appRoutes = app_routes_1.APP_ROUTES;
                    var userLang = navigator.language.split('-')[0];
                    userLang = /(fr|en)/gi.test(userLang) ? userLang : 'en';
                    translate.getTranslation(userLang);
                    translate.use(userLang);
                }
                AppComponent = __decorate([
                    core_1.Injectable(),
                    core_1.Component({
                        selector: 'main-app',
                        templateUrl: 'app/app.component.html',
                        directives: [router_1.RouterOutlet, navigation_component_1.NavbarComponent],
                        pipes: [ng2_translate_1.TranslatePipe]
                    }),
                    router_1.RouteConfig(app_routes_1.APP_ROUTES), 
                    __metadata('design:paramtypes', [ng2_translate_1.TranslateService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=app.component.js.map
