import { Component } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:any
  constructor(private dataService:DataService) { }
    ngOnInit(): void {
        this.dataService.getData().subscribe(data=>{
            if(data.sections)
                this.data = data
          })
     }
}



