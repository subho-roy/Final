import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MethodService } from 'src/app/Service/method.service';
import { StoreService } from 'src/app/Service/store.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  addForm1!: FormGroup;
  formVal: any;
  arr1: any = [];
  response:any;

  constructor(private ins: MethodService,private ins1:StoreService,private route:Router) { }

  ngOnInit(): void {
    this.addForm1 = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  LogIn() {
    this.formVal = this.addForm1.value;
    console.log(this.formVal, 'FormValue');
    this.ins.postData1(this.formVal).subscribe((res:any)=>{
      console.log('login Response :',res); 
      this.response=res;
      if(res.status==200)
      {
        alert('Logged In Succesfull ')
        
      this.ins1.setData(this.response.data.first_name,
        this.response.data.last_name,
        this.response.data.email,
        this.response.token);
        this.route.navigateByUrl("/cuis");
      }
      else{
        alert('Logged In unsuccesfull');
        this.addForm1.reset();
      }
      
    });

  }

}
