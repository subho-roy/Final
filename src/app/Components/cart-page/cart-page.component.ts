import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';
import{faTrash, faFire}from '@fortawesome/free-solid-svg-icons';
import { StoreService } from 'src/app/Service/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  cartProd:any=[];
  storeProd:any=[];
  trash=faTrash;
  tax:number=75;
  // public grandTotal !: number;
  grandTotal!:any;
  dish:any;
  dishID:any;
  arr:any;
  dishName:any;
  dishPrice:any;
  dishRate:any;
  fire=faFire;
  total:any;

  constructor(private cart:CartService,private store:StoreService,private route:Router) { }

  ngOnInit(): void {
    this.cart.getProducts().subscribe(res=>{
      this.cartProd=res;
      console.log(this.cartProd,'cart value from cart service');
      
      this.grandTotal=this.store.getTotal();
      console.log(this.grandTotal,'grandTotal value from cart service');
      this.arr=this.store.getCart();
      console.log(this.arr);
      
      // this.dishID=JSON.parse(this.arr[0]);
      // this.dishName=JSON.parse(this.arr[1]);
      // this.dishPrice=JSON.parse(this.arr[3]);
      // this.dishRate=JSON.parse(this.arr[4]);
      // console.log('dish id in array :',this.dishID);
      // console.log(this.storeProd);
      
      // console.log(JSON.parse(this.storeProd));
      
      console.log(this.grandTotal);
      this.total=parseInt(this.grandTotal);
      console.log(typeof(this.total));
      
    })

  }
  removeItem(index:any,item:any)
{
  this.cart.removeCartItem(item);
  console.log('after removing one item',this.cartProd);
  
  // window.localStorage.removeItem(item)
  // this.arr=this.store.getCart();
  //  this.grandTotal=this.store.getTotal();
  // window.sessionStorage.clear();
  this.arr=this.store.getCart();
  this.arr.splice(index,1);
  this.grandTotal=0;
  for(let a of this.arr)
  {
    this.grandTotal+=a.Price;
  }
  this.total= parseInt(this.grandTotal)
  this.store.setTotal(this.total);
  window.sessionStorage.setItem('arr',JSON.stringify(this.arr))

}

// clearCart()
// {
//   this.cart.removeAllCart();
//   this.store.totalCartDestroy();
// }

order(){
this.route.navigateByUrl('/cuis');
}


}
