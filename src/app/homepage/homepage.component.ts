import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { passwordvalidation } from '../passwordvalidation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  shownup=false;
  fetchvalues: any[];
  errormsg: any;
  loginsucess: boolean;
  // userform: any;

  constructor(private fb:FormBuilder, private userservice:UserService,private route:Router) { }
  userform = this.fb.group({
   
    firstname:['',[Validators.required]],
    lastname :['',[Validators.required]],
    emailid :['',[Validators.required]],
    mobileno:['',[Validators.required]],
    gender:['',[Validators.required]],

    address:['',[Validators.required]],
    password:['',[Validators.required]],
    confpwd:['',[Validators.required]]

},{validators:passwordvalidation('password','confpwd')})

get firstname() { return this.userform.get('firstname'); }
get lastname() { return this.userform.get('lastname'); }
get emailid() { return this.userform.get('emailid'); }
get mobileno() { return this.userform.get('mobileno'); }
get gender() { return this.userform.get('gender'); }
get address() { return this.userform.get('address'); }
get password() { return this.userform.get('password'); }
get confpwd() { return this.userform.get('confpwd'); }

loginform = this.fb.group({
   
  email:['',[Validators.required]],
  password:['',[Validators.required]]

})


  ngOnInit() {
   
  }
  AddUser(userform:any){
if(userform.invalid){
  return;

}

else{

  const firstname =userform.get('firstname').value
  const lastname =userform.get('lastname').value
  const email =userform.get('emailid').value
  const mobile =userform.get('mobileno').value
  const gender =userform.get('gender').value
  const address =userform.get('address').value
  const password =userform.get('password').value
  this.userservice.StoreUser(firstname,lastname,email,mobile,gender,address,password)
  this.loginsucess=true
  console.log(userform.value)
}
  }


  Login(){
    const email =this.loginform.get('email').value
    const password =this.loginform.get('password').value
    this.userservice.FetchUsers().subscribe(res=>{
    
      this.fetchvalues =Object.values(res)
      console.log(res)
      this.fetchvalues.filter(data=>{
        if(email==data.emailid && password==data.password ){
      
         this.route.navigate(['users'])
         localStorage.setItem('email',email)
        }

        else{
          this.errormsg=true;
        }
      })
    })
  }
}
