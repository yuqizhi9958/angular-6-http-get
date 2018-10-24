import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

//使用rxjs
import {Observable} from "rxjs";
// import 'rxjs/add/operator/map';
import { map } from"rxjs/operators";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public newsList:any

  constructor(private http:HttpClient ) { }

  ngOnInit() {
    console.log(this.newsList);
    
  }
  getData(){
    let url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=3";
    this.http.get(url).subscribe(res=>{
      // console.log(res);
      this.newsList = res
      
      // console.log(this.newsList);
    })
    
  }


}
