import {Component, Input} from 'angular2/core';
import {TranslatePipe} from 'ng2-translate/ng2-translate';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouterLink, RouteDefinition} from 'angular2/router';

@Component({
    selector: 'ca-category-dropdown',
    templateUrl: 'app/components/category/categoryDropdown/category-dropdown.component.html',
    styleUrls: [
        '../assets/css/components/category-dropdown.css'
    ],
    directives: [RouterLink, CORE_DIRECTIVES],
    pipes: [TranslatePipe]
})
export class CategoryDropDownComponent {
    public isDropdownOpen: boolean = false;
    @Input() routes: RouteDefinition[];
    clickDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
    }
}
