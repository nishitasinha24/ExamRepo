import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-parentnotification',
  templateUrl: './parentnotification.component.html',
  styleUrls: ['./parentnotification.component.css']
})
export class ParentnotificationComponent implements OnInit {

   notification:any;
  constructor() { }
   

  ngOnInit() {

    this.notification = sessionStorage.getItem('childShow');
    this.notification = JSON.parse(this.notification);
    console.log(this.notification);
  }


  
}
