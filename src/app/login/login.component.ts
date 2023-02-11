import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 container:any = document.querySelector('#container'); 
 id:any = 1;
  constructor() { }

  ngOnInit(): void {
    
  }

  signUp() {
    this.id += 1
  };
   signIn() {
    this.id += 1
  };
  

}
