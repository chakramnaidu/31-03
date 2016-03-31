import {RouteDefinition} from 'angular2/router';
import {HomeComponent} from './components/home/home.component';
import {CVComponent} from './components/cv/cv.component';

export var APP_ROUTES: RouteDefinition[] = [
    { path: '/my-page', name: 'My Page', component: HomeComponent, useAsDefault: true },
    { path: '/my-cv/...', name: 'My CV', component: CVComponent }
];
