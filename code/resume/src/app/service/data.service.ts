import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn:"root"
})
export class DataService {
    private data:any = {}
    private dataSubject:BehaviorSubject<any> = new BehaviorSubject<any>(this.data);
    constructor(private http:HttpClient){
        this.http.get<any>('./assets/data.json').subscribe(Response=>{
            this.data = Response
            this.dataSubject.next(this.data)
        },err=>{
            console.log(err)
        })
    }

    getData():BehaviorSubject<any>{
        return this.dataSubject
    }
}