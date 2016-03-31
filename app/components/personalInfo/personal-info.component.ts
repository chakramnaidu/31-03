import {Component} from 'angular2/core';
import {UploadFileComponent} from '../uploadFile/upload-file.component';
import {TranslatePipe} from 'ng2-translate/ng2-translate';

@Component({
    selector: 'ca-personal-info',
    templateUrl: 'app/components/personalInfo/personal-info.component.html',
    directives: [UploadFileComponent],
    pipes: [TranslatePipe]
})

export class PersonalInfoComponent {
    public personalInfo: any = {
        fullName: 'Chakram Naidu', imagePath: '../../assets/images/avatar-default.jpg',
        email: 'chakramnaidu@gmail.com', mobilePhone: '009112515636', address: 'India', cv: {}
    };
}
