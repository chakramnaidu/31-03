System.register(['angular2/core', 'ng2-translate/ng2-translate', 'angular2/router', './cv.routes', '../category/category.component'], function(exports_1, context_1) {
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
    var core_1, ng2_translate_1, router_1, cv_routes_1, category_component_1;
    var CVComponent;
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
            function (cv_routes_1_1) {
                cv_routes_1 = cv_routes_1_1;
            },
            function (category_component_1_1) {
                category_component_1 = category_component_1_1;
            }],
        execute: function() {
            CVComponent = (function () {
                function CVComponent() {
                    this.categoryRoutes = cv_routes_1.CATEGORY_ROUTES;
                }
                CVComponent = __decorate([
                    core_1.Injectable(),
                    core_1.Component({
                        selector: 'ca-my-cv',
                        templateUrl: 'app/components/cv/cv.component.html',
                        directives: [router_1.RouterOutlet, category_component_1.CategoryComponent],
                        pipes: [ng2_translate_1.TranslatePipe]
                    }),
                    router_1.RouteConfig(cv_routes_1.CATEGORY_ROUTES), 
                    __metadata('design:paramtypes', [])
                ], CVComponent);
                return CVComponent;
            }());
            exports_1("CVComponent", CVComponent);
        }
    }
});

//# sourceMappingURL=cv.component.js.map
