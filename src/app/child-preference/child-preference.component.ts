import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child-preference',
  templateUrl: './child-preference.component.html',
  styleUrls: ['./child-preference.component.css']
})
export class ChildPreferenceComponent implements OnInit {

  constructor(private service:UserService, private router:Router) { }

  ngOnInit() {


  }

  childShow(user)
  {
    console.log(user);
    this.service.childShow(user).then(
      data=>{
        sessionStorage.setItem('childShow',JSON.stringify(data));
        this.router.navigate(['/parentnotification']);
      }
    )

  }

}
