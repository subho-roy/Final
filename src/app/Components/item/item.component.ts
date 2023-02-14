import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/Service/cart.service';
import { StaticService } from 'src/app/Service/static.service';
import { StoreService } from 'src/app/Service/store.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(private inst:StaticService, 
    private activ:ActivatedRoute,
    private cart:CartService,
    private store:StoreService) { }
  big_id:any;
  sub_id:any;
  item_id:any;
  big_obj:any={};
  sub_obj:any={};
  item_obj:any={};
  grandTotal:any;
  ngOnInit(): void {
    this.activ.paramMap.subscribe(params=>{
      this.big_id = params.get('id');
      this.big_obj = this.inst.AllFood.find((d:any)=>d.id == this.big_id)
    });
    this.activ.paramMap.subscribe(params=>{
      this.sub_id= params.get('sub_id');
      this.sub_obj=this.big_obj.Sub.find((e:any)=>e.sub_id == this.sub_id)
    });
    this.activ.paramMap.subscribe(params=>{
      this.item_id = params.get('Dish_id');
      this.item_obj = this.sub_obj.sub1.find((f:any)=>f.Dish_id == this.item_id);
      console.log('last obj',this.item_obj);
      
    })
  }
  // addtocart(item:any)
  // {
  //   this.cart.addToCart(item);
  //   // this.store.setCart(item.Dish_id,item.plate,item.imgP,item.price,item.Rating);
  // }

  addtocart(item:any)
  {
    this.cart.addToCart(item);
    this.grandTotal=this.cart.getTotalPrice();
    this.store.setTotal(this.grandTotal);
    this.store.setCart(item.Dish_id,item.plate,item.imgP,item.price,this.grandTotal);
  }

}
