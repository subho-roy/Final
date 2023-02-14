import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/Service/store.service';
import { faLocationArrow,faPhone,faMailBulk } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  token: any;
  name: any;
  location=faLocationArrow;
  phone=faPhone;
  mail=faMailBulk;
  constructor(private stre: StoreService, private route: Router) {}

  ngOnInit(): void {}
  logout() {
    this.stre.getDestroy();
    alert('logout succesfully');
    this.route.navigateByUrl('/cuis');
  }

  islogout() {
    this.token = window.localStorage.getItem('token');
    return this.token;
  }
  isName() {
    this.name = localStorage.getItem('f_name');
    return this.name;
  }
}
