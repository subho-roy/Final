import { Component, OnInit } from '@angular/core';
import { StaticService } from 'src/app/Service/static.service';


@Component({
  selector: 'app-cuisine',
  templateUrl: './cuisine.component.html',
  styleUrls: ['./cuisine.component.scss']
})
export class CuisineComponent implements OnInit {
store:any=[];
token:any;
  constructor(private ins:StaticService) { }

  ngOnInit(): void {
    this.store = this.ins.AllFood;
  }
  isLogin()
  {
    this.token=localStorage.getItem('token');
    return this.token;
  }

}
