import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  data:any={}
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data=>{
      this.data = data
    })
  }

}
