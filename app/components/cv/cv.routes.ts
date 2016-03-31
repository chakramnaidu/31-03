import {RouteDefinition} from 'angular2/router';
import {PersonalInfoComponent} from '../personalInfo/personal-info.component';
import {SkillComponent} from '../skill/skill.component';
import {SummaryComponent} from '../summary/summary.component';

export var CATEGORY_ROUTES: RouteDefinition[] = [
    { path: '/personal-info', name: 'Personal Info', component: PersonalInfoComponent, useAsDefault: true},
    { path: '/skill', name: 'Skills', component: SkillComponent},
    { path: '/summary', name: 'Summary', component: SummaryComponent},
];
