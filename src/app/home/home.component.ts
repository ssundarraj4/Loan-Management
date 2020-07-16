import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 name='';
 
  constructor() { 
    this.name=localStorage.getItem('token');
  }

  ngOnInit(): void {
  }

}
