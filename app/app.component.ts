import {Component, Injectable} from 'angular2/core';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';
import {RouterOutlet, RouteConfig, RouteDefinition} from 'angular2/router';
import {APP_ROUTES} from './app.routes';
import {NavbarComponent} from './components/navigation/navigation.component';

@Injectable()
@Component({
    selector: 'main-app',
    templateUrl: 'app/app.component.html',
    directives: [RouterOutlet, NavbarComponent],
    pipes: [TranslatePipe]
})
@RouteConfig(APP_ROUTES)
export class AppComponent {
    public appRoutes: RouteDefinition[];

    constructor(translate: TranslateService) {
        this.appRoutes = APP_ROUTES;
        let userLang: string = navigator.language.split('-')[0];
        userLang = /(fr|en)/gi.test(userLang) ? userLang : 'en';
        translate.getTranslation(userLang);
        translate.use(userLang);
    }
}
