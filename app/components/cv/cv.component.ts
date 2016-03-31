import {Component, Injectable} from 'angular2/core';
import {TranslatePipe} from 'ng2-translate/ng2-translate';
import {RouteConfig, RouterOutlet, RouteDefinition} from 'angular2/router';
import {CATEGORY_ROUTES} from './cv.routes';
import {CategoryComponent} from '../category/category.component';

@Injectable()
@Component({
    selector: 'ca-my-cv',
    templateUrl: 'app/components/cv/cv.component.html',
    directives: [RouterOutlet, CategoryComponent],
    pipes: [TranslatePipe]
})
@RouteConfig(CATEGORY_ROUTES)
export class CVComponent {
    public categoryRoutes: RouteDefinition[];
    constructor() {
        this.categoryRoutes =  CATEGORY_ROUTES;
    }
}

