import {Component} from 'angular2/core';
import {TranslatePipe} from 'ng2-translate/ng2-translate';

@Component({
    selector: 'my-upload-file',
    templateUrl: 'app/components/uploadFile/upload-file.component.html',
    styleUrls: [
        '../assets/css/components/upload-file.css'
    ],
    pipes: [TranslatePipe]
})

export class UploadFileComponent {
}
