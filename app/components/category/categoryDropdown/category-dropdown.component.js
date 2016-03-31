System.register(['angular2/core', 'ng2-translate/ng2-translate', 'angular2/common', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, ng2_translate_1, common_1, router_1;
    var CategoryDropDownComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            CategoryDropDownComponent = (function () {
                function CategoryDropDownComponent() {
                    this.isDropdownOpen = false;
                }
                CategoryDropDownComponent.prototype.clickDropdown = function () {
                    this.isDropdownOpen = !this.isDropdownOpen;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], CategoryDropDownComponent.prototype, "routes", void 0);
                CategoryDropDownComponent = __decorate([
                    core_1.Component({
                        selector: 'ca-category-dropdown',
                        templateUrl: 'app/components/category/categoryDropdown/category-dropdown.component.html',
                        styleUrls: [
                            '../assets/css/components/category-dropdown.css'
                        ],
                        directives: [router_1.RouterLink, common_1.CORE_DIRECTIVES],
                        pipes: [ng2_translate_1.TranslatePipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CategoryDropDownComponent);
                return CategoryDropDownComponent;
            }());
            exports_1("CategoryDropDownComponent", CategoryDropDownComponent);
        }
    }
});

//# sourceMappingURL=category-dropdown.component.js.map
