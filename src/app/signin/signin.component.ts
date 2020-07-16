import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  constructor(private router: Router) { }

login(username, password){
  console.log(username.value);
  console.log(password.value);
  if((username.value ==='admin' && password.value ==='pass')||(username.value ==='test' && password.value ==='pass')){
    localStorage.setItem('token',username.value)
   
    console.log("success");
    this.router.navigate(['./home']);
  }
  else{
    console.log("failure");


  }
  
}
  ngOnInit(): void {
  }

}
