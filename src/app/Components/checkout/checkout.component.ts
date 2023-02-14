import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
action:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  payment()
  {
    // alert('Payment Action Completed');
     this.action=true;
  }
close()
{
  this.action=false;
}
}
