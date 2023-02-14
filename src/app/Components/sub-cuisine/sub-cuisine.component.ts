import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticService } from 'src/app/Service/static.service';
import { NgForm } from '@angular/forms';
import {faFire} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-sub-cuisine',
  templateUrl: './sub-cuisine.component.html',
  styleUrls: ['./sub-cuisine.component.scss']
})
export class SubCuisineComponent implements OnInit {
type:any;
val:any;
obj: any | undefined;
searchVal: string = '';
fire=faFire;
  constructor(private activ:ActivatedRoute,private ins:StaticService) { }

  ngOnInit(): void {this.activ.paramMap.subscribe((params: any) => {
    this.val = params.get('id');
    console.log(this.val);
    this.obj = this.ins.AllFood.find(
      (d: any) => d.id == this.val
    );
    console.log(this.obj,'sub-cuisine');
    console.log(this.obj.Sub[0],'CATEGORY');
    
  });
  }

}
