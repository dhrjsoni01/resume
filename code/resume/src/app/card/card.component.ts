import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
    @Input('data')
    cardData:any
    constructor() { }
    ngOnInit(): void {
    }
}
