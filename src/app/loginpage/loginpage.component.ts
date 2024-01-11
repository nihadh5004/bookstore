import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginserviceService } from '../services/loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {

  username:string = ''

  password:string=''

  constructor(private loginservice:LoginserviceService, private router:Router){}

  onSubmit(form:NgForm){
    this.loginservice.login(form.form.value).subscribe((res)=>{
      this.router.navigate(['home'])
      localStorage.setItem('refresh',res.refresh)
      localStorage.setItem('access',res.access)
      localStorage.setItem('username',this.username)
      console.log(res)


    })
    console.log(form.form.value);
    
    
  }

}
