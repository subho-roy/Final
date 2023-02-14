import { Component, OnInit } from '@angular/core';
import{faYahoo,faYoutube,faInstagram,faTwitter,faFacebook}from '@fortawesome/free-brands-svg-icons';
import{faFire}from '@fortawesome/free-solid-svg-icons'





@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
face=faFacebook;
yahoo=faYahoo;
youtube=faYoutube;
twitter=faTwitter;
insta=faInstagram;
flame=faFire;

  constructor() { }

  ngOnInit(): void {
  }

}
