import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Ngo } from '../model/Ngo';

@Component({
  selector: 'app-ngo-request-details',
  templateUrl: './ngo-request-details.component.html',
  styleUrls: ['./ngo-request-details.component.css']
})
export class NgoRequestDetailsComponent implements OnInit {

  details: any;
  request:any=[];
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: UserService) { }


  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('req_id');
    this.details = this.service.getRequestDetails(id);
    console.log(this.details);

    //this.details = JSON.stringify(this.service.ngoRequestDetails(id));
  }

  /*gotoRequestList(list:Ngo) {
    let ngoId = list ? JSON.parse(sessionStorage.getItem('ngoid')).ngo_id : null;
  
    this.router.navigate(['/heroes', { id: ngoId, foo: 'foo' }]);
  }*/

}
