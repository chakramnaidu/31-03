System.register(['angular2/core', '../uploadFile/upload-file.component', 'ng2-translate/ng2-translate'], function(exports_1, context_1) {
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
    var core_1, upload_file_component_1, ng2_translate_1;
    var PersonalInfoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (upload_file_component_1_1) {
                upload_file_component_1 = upload_file_component_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            }],
        execute: function() {
            PersonalInfoComponent = (function () {
                function PersonalInfoComponent() {
                    this.personalInfo = {
                        fullName: 'Chakram Naidu', imagePath: '../../assets/images/avatar-default.jpg',
                        email: 'chakramnaidu@gmail.com', mobilePhone: '009112515636', address: 'India', cv: {}
                    };
                }
                PersonalInfoComponent = __decorate([
                    core_1.Component({
                        selector: 'ca-personal-info',
                        templateUrl: 'app/components/personalInfo/personal-info.component.html',
                        directives: [upload_file_component_1.UploadFileComponent],
                        pipes: [ng2_translate_1.TranslatePipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PersonalInfoComponent);
                return PersonalInfoComponent;
            }());
            exports_1("PersonalInfoComponent", PersonalInfoComponent);
        }
    }
});

//# sourceMappingURL=personal-info.component.js.map
