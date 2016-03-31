System.register(['angular2/core', 'angular2/common', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1;
    var Collapse, NavbarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Collapse = (function () {
                function Collapse() {
                }
                Object.defineProperty(Collapse.prototype, "collapse", {
                    set: function (value) {
                        if (value !== undefined && !value) {
                            console.log(value);
                            this.isCollapsed = false;
                        }
                        else {
                            this.isCollapsed = true;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.HostBinding('class.in'), 
                    __metadata('design:type', Boolean)
                ], Collapse.prototype, "isCollapsed", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean), 
                    __metadata('design:paramtypes', [Boolean])
                ], Collapse.prototype, "collapse", null);
                Collapse = __decorate([
                    core_1.Directive({
                        selector: '[collapse]'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Collapse);
                return Collapse;
            }());
            exports_1("Collapse", Collapse);
            NavbarComponent = (function () {
                function NavbarComponent() {
                    this.isCollapsed = false;
                    this.activePageName = '';
                }
                NavbarComponent.prototype.pageActived = function (route) {
                    this.activePageName = route.name;
                    this.isCollapsed = false;
                };
                NavbarComponent.prototype.clickOnButton = function () {
                    this.isCollapsed = true;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], NavbarComponent.prototype, "routes", void 0);
                NavbarComponent = __decorate([
                    core_1.Component({
                        selector: 'ca-navigation',
                        templateUrl: 'app/components/navigation/navigation.component.html',
                        styleUrls: [
                            '../assets/css/components/navigation.css'
                        ],
                        directives: [router_1.RouterLink, common_1.CORE_DIRECTIVES, Collapse]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NavbarComponent);
                return NavbarComponent;
            }());
            exports_1("NavbarComponent", NavbarComponent);
        }
    }
});

//# sourceMappingURL=navigation.component.js.map
