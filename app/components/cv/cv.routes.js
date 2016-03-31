System.register(['../personalInfo/personal-info.component', '../skill/skill.component', '../summary/summary.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var personal_info_component_1, skill_component_1, summary_component_1;
    var CATEGORY_ROUTES;
    return {
        setters:[
            function (personal_info_component_1_1) {
                personal_info_component_1 = personal_info_component_1_1;
            },
            function (skill_component_1_1) {
                skill_component_1 = skill_component_1_1;
            },
            function (summary_component_1_1) {
                summary_component_1 = summary_component_1_1;
            }],
        execute: function() {
            exports_1("CATEGORY_ROUTES", CATEGORY_ROUTES = [
                { path: '/personal-info', name: 'Personal Info', component: personal_info_component_1.PersonalInfoComponent, useAsDefault: true },
                { path: '/skill', name: 'Skills', component: skill_component_1.SkillComponent },
                { path: '/summary', name: 'Summary', component: summary_component_1.SummaryComponent },
            ]);
        }
    }
});

//# sourceMappingURL=cv.routes.js.map
