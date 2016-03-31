import {Component, Input, Directive, HostBinding} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouterLink, RouteDefinition, Route} from 'angular2/router';

@Directive({
    selector: '[collapse]'
})
export class Collapse {
    @HostBinding('class.in')
    private isCollapsed: boolean;
    @Input()
    private set collapse(value: boolean) {
        if (value !== undefined && !value) {
            console.log(value);
            this.isCollapsed = false;
        } else {
            this.isCollapsed = true;
        }
    }
}
@Component({
    selector: 'ca-navigation',
    templateUrl: 'app/components/navigation/navigation.component.html',
    styleUrls: [
        '../assets/css/components/navigation.css'
    ],
    directives: [RouterLink, CORE_DIRECTIVES, Collapse]
})

export class NavbarComponent {
    @Input() routes: RouteDefinition[];
    public isCollapsed: boolean = false;
    private activePageName: string = '';
    pageActived(route: Route) {
        this.activePageName = route.name;
        this.isCollapsed = false;
    }
    clickOnButton() {
        this.isCollapsed = true;
    }
}
