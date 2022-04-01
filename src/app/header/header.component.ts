import { Component } from "@angular/core";
import { withLatestFrom } from "rxjs";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent {
    collapsed=true;
}