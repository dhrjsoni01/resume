import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
    selector: 'app-full-card',
    templateUrl: './fullcard.component.html',
})
export class FullCardComponent implements OnInit {
    @Input('data')
    fullCard:any
    constructor() { }
    ngOnInit(): void {
        console.log(this.fullCard)
    }
}
