import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Parent } from '../model/Parent';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  ngo:any=[];
  registerForm: FormGroup;
  submitted = false;
  public id: string;
  payement:any;
  constructor(private service:UserService,private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
    status:['',[Validators.required]],
    maleName:['',[Validators.required]],
    femaleName:['',[Validators.required]],
    mnationality:['',[Validators.required]],
    fnationality:['',[Validators.required]],
    mdate:['',[Validators.required]],
    fdate:['',[Validators.required]],
    mrdstatus:['',[Validators.required]],
    moccupation:['',[Validators.required]],
    foccupation:['',[Validators.required]],
    mworkPlace :['',[Validators.required]],
    fworkPlace:['',[Validators.required]],
    mincome:['',[Validators.required]],
   fincome:['',[Validators.required]],
   noChild:['',[Validators.required]],
   total:['',[Validators.required]],
   residenceAddress:['',[Validators.required]],
    state:['',[Validators.required]],
    district:['',[Validators.required]],
     pincode:['',[Validators.required]],
    mobileNo:['',[Validators.required]],
     email:['',[Validators.required, Validators.email]],
     aadharNo:['',[Validators.required]],
    
  })
}
get f() { return this.registerForm.controls; }

  onSubmit()
  {
    this.submitted = true;
  
          // stop here if form is invalid
          if (this.registerForm.invalid) {
              return;
          }
         
          console.log(this.registerForm.value.status+this.registerForm.value.maleName+this.registerForm.value.femaleName+this.registerForm.value.moccupation+this.registerForm.value.foccupation+this.registerForm.value.district+this.registerForm.value.address+this.registerForm.value.mdate+this.registerForm.value.fdate+this.registerForm.value.noChild+this.registerForm.value.mobileNo+this.registerForm.value.email+this.registerForm.value.aadharNo);
          
  
         console.log(this.registerForm.value);
         this.payement={
          status:this.registerForm.value.status,
          mrgdate:this.registerForm.value.mrgdate,
          mrdstatus:this.registerForm.value.mrdstatus,
          maleName:this.registerForm.value.maleName,
          femaleName:this.registerForm.value.femaleName,
          moccupation:this.registerForm.value.moccupation,
          foccupation:this.registerForm.value.foccupation,
          mdate:this.registerForm.value.mdate,
          fdate:this.registerForm.value.fdate,
          mincome:this.registerForm.value.mincome,
          fincome:this.registerForm.value.fincome,
          mworkPlace:this.registerForm.value.mworkPlace,
          fworkPlace:this.registerForm.value.fworkPlace,
          noChild:this.registerForm.value.noChild,
          total:this.registerForm.value.total,
          residenceAddress:this.registerForm.value.residenceAddress,
          district:this.registerForm.value.district,
         
         
          pincode:this.registerForm.value.contact,
          mobileNo:this.registerForm.value.mobileNo,
          email:this.registerForm.value.email,
          aadharNo:this.registerForm.value.aadharNo,

         

}

    
  }

  register(user)
  {
    this.service.signUp(user).then(response=>{
      let parent = new Parent(response);
      console.log(parent);
      this.router.navigate(['/profile']);
    }).catch(error=>{
      console.log(error);
    });
  }

}
