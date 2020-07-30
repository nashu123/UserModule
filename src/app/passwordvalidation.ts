import { FormGroup } from '@angular/forms';

export function passwordvalidation(password:string, confpassword:string){
  
    return (formgroup:FormGroup)=>{
       const  getpassword = formgroup.get(password)
       const  getcnfpassword = formgroup.get(confpassword)
       if(getpassword.value != getcnfpassword.value){
        getcnfpassword.setErrors({ mustMatch: true });
       }
else{
    getcnfpassword.setErrors(null);
}
    }
}