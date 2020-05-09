import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
    selector: 'app-icon',
    templateUrl: './icons.component.html',
})
export class IconsComponent implements OnInit {
    @Input('data')
    icons:any
    constructor() { }
    ngOnInit(): void {
    }
}
