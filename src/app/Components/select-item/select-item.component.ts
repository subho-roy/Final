import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/Service/cart.service';
import { StaticService } from 'src/app/Service/static.service';
import { StoreService } from 'src/app/Service/store.service';
import{faSearch,faCartArrowDown,faFire}from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.scss'],
})
export class SelectItemComponent implements OnInit {
  ID: any;
  id: any;
  obj: any;
  obj1: any;
  arrobj: any | undefined;
  fire=faSearch;
  logo=faFire;
  cartSign=faCartArrowDown;
  searchVal: string = '';
  val:any=[];
  public f_arr: any = [];
  public dropdownArr: any[] = ['High to low', 'Low to high'];
  grandTotal:any;

  constructor(private activ: ActivatedRoute, 
    private stat: StaticService,
    private cart:CartService,
    private store:StoreService,
    private route:Router) {}

  ngOnInit(): void {
    this.activ.paramMap.subscribe((params) => {
      this.ID = params.get('id');
      console.log('big id ', this.ID);

      this.id = params.get('sub_id');
      console.log('sub id', this.id);
      this.obj = this.stat.AllFood.find((d: any) => d.id == this.ID);
      console.log('big object', this.obj);

      this.obj1 = this.obj.Sub.find((e: any) => e.sub_id == this.id);
      console.log('sub object', this.obj1);
    });
  }

  sortItem(eve: any) {
    if (eve.target.outerText == 'High to low') {
      this.obj1.sub1.sort(function (a: any, b: any) {
        return b.price > a.price ? 1 : a.price > b.price ? -1 : 0;
      });
    } else if (eve.target.outerText == 'Low to high') {
      this.obj1.sub1.sort(function (a: any, b: any) {
        return a.price > b.price ? 1 : b.price > a.price ? -1 : 0;
      });
    }
  }

  addtocart(item:any)
  {
    this.cart.addToCart(item);
    this.grandTotal=this.cart.getTotalPrice();
    this.store.setTotal(this.grandTotal);
    this.store.setCart(item.Dish_id,item.plate,item.imgP,item.price,this.grandTotal);
    this.route.navigateByUrl('/cart');
  }

}
