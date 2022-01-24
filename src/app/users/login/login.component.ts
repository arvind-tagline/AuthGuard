import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public token: string = 'mixToken1234545adsfadsfadfasoiuweirtlkjshdubjbhsd';
  // public customerToken: string = 'customerToken455564uiyausdhsiudiusdjkowueiriuljad';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public sellerLogin() {
    localStorage.setItem('token', this.token);
    this.router.navigate(['sellerHome']);
  }

  public customerLogin() {
    localStorage.setItem('token', this.token);
    this.router.navigate(['customerHome'])
  }
}
