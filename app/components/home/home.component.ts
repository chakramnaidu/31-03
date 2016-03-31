import {Component} from 'angular2/core';
import {TranslatePipe} from 'ng2-translate/ng2-translate';

@Component({
    selector: 'ca-home',
    templateUrl: 'app/components/home/home.component.html',
    styleUrls: [
        '../assets/css/components/home.css'
    ],
    pipes: [TranslatePipe]
})
export class HomeComponent {}
