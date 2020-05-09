import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-section',
    templateUrl: './section.component.html',
})
export class SectionComponent implements OnInit {
    @Input('data')
    sectionData:any
    
    constructor() { }
    ngOnInit(): void {
    }
}
