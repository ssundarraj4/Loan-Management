import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
status:boolean=false;
status1:boolean=false;


  constructor() { 
    if(localStorage.getItem('token')=="admin"||localStorage.getItem('token')=="test"){
      this.status=true;
      console.log("1234");
    }else{
      this.status1=true;
      console.log("2222");
    }

  }
  

  ngOnInit(): void {
  }

}
