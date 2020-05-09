import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
    @Input('data')
    sectionData:any
    
    constructor() { }
    ngOnInit(): void {
        console.log(this.sectionData)
    }
}
