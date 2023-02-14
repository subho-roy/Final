import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MethodService } from 'src/app/Service/method.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  addForm!: FormGroup;
  selectedImg: any;
  formValues:any;
  
  click:boolean=false

  constructor(private ins:MethodService, private route:Router) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      profile_pic: new FormControl(''),
    });
  }
  onFileSelected(event: any) {
    console.log(event);
    this.selectedImg = event.target.files[0];
  }

  submit() {
    console.log(this.addForm.value);
    this.formValues=this.addForm.value;
    const obj:FormData=new FormData();
    obj.append('first_name',this.formValues.first_name);
    obj.append('last_name',this.formValues.last_name);
    obj.append('email',this.formValues.email);
    obj.append('password',this.formValues.password);
    obj.append('profile_pic',this.selectedImg,this.selectedImg.name);
    console.log(obj,'object value');
    
    this.ins.postData(obj).subscribe((res:any)=>{
      console.log(res,"Response after posting");
      alert('Registration Done');
      this.route.navigateByUrl("/log");
    })
  }

}
