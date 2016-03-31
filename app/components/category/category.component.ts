import {Component, Input} from 'angular2/core';
import {TranslatePipe} from 'ng2-translate/ng2-translate';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouterLink, RouteDefinition} from 'angular2/router';
import {CategoryDropDownComponent} from './categoryDropdown/category-dropdown.component';

@Component({
    selector: 'ca-category-bar',
    templateUrl: 'app/components/category/category.component.html',
    directives: [RouterLink, CORE_DIRECTIVES, CategoryDropDownComponent],
    pipes: [TranslatePipe]
})
export class CategoryComponent {
    @Input() routes: RouteDefinition[];
}

