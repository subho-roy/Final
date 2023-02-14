import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  dish_id:any=[];
   Plate:any=[];
     image:any=[];
     Price:any=[];
     rate:any=[];
     dish:any;
     item:any;
     img:any;
     prc:any;
     rating:any;
     price:any;
     imagP:any;
     dish_ID:any;
     s1:any='';
     s:any=[];
     val:any=[];
  constructor() {}

  setData(first_name: string, last_name: string, email: string, token: string) {
    window.localStorage.setItem('f_name', first_name);
    window.localStorage.setItem('l_name', last_name);
    window.localStorage.setItem('email', email);
    window.localStorage.setItem('token', token);
  }

  setTotal(total:any)
  {
    window.sessionStorage.setItem('total',total)
  }
  getTotal() :any{
     return window.sessionStorage.getItem('total');
  }

  setCart(
    Dish_id: string,
    plate: string,
    imgP: string,
    price: string,
    Tprice:number
  ) {
    let obj={
      dishId:Dish_id,
      plateName:plate,
      image:imgP,
      Price:price,
      totalP:Tprice
    }
   this.val.push(obj);
   console.log(this.val);
   
    window.sessionStorage.setItem('arr',JSON.stringify(this.val))

    // this.dish_id.push(Dish_id);
    // this.Plate.push(plate);
    // this.image.push(imgP);
    // this.Price.push(price);
    // this.rate.push(rating);
    // window.sessionStorage.setItem('dishid', JSON.stringify(this.dish_id));
    //   window.sessionStorage.setItem('plate', JSON.stringify(this.Plate)),
    //   window.sessionStorage.setItem('image', JSON.stringify(this.image)),
    //   window.sessionStorage.setItem('price', JSON.stringify(this.Price)),
    //   window.sessionStorage.setItem('rating', JSON.stringify(this.rate));
  }

  getCart() {
    // let alldata = [];
    // let data = {
    //   this.dish=window.sessionStorage.getItem('dishid');
    //   this.item= window.sessionStorage.getItem('plate');
    //   this.imagP= window.sessionStorage.getItem('image'),
    //   this.price= window.sessionStorage.getItem('price'),
    //   this.rating= window.sessionStorage.getItem('rating'),
    // };
    // alldata=[this.dish,this.item,this.imagP,this.price,this.rating];
    // return alldata;
  this.s1=sessionStorage.getItem('arr');
  this.s=JSON.parse(this.s1);
  return this.s;
  }

  getData() {
    const allData = [];
    let Data = {
      first_name: window.localStorage.getItem('f_name'),
      last_name: window.localStorage.getItem('l_name'),
      email: window.localStorage.getItem('email'),
    };
    allData.push(Data);
    return allData;
  }

  getToken() {
    return window.localStorage.getItem('token');
  }

  getDestroy() {
    return window.localStorage.clear();
  }
  totalCartDestroy()
  {
    return window.sessionStorage.clear();
  }
}
