import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-apply-app',
  standalone: true,
  imports: [MaterialModule,RouterModule],
  templateUrl: './apply-app.component.html',
  styleUrl: './apply-app.component.scss'
})
export class ApplyAppComponent implements OnInit{
  public packages=['10000 for 1 year','6000 for 6 months','1500 or a month'];
  public decision=['Yes','No'];
  public trainerGender=['Male','Female','None'];

  public registerForm!:FormGroup;

  constructor(private fb: FormBuilder, private api :ApiService){
    
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.registerForm=this.fb.group({
      name:[''],
      age:[''],
      address1:[''],
      address2:[''],
      mobile:[''],
      email:[''],
      trainerGender:[''],
      package:[''],
      decision:[''],
      weeks:[''],
      totalprice :[''],
    });
    this.registerForm.controls['weeks'].valueChanges.subscribe(res=>{
      this.calculateTotal(res);
    });
  }
  submit(){
    // console.log(this.registerForm.value);
    this.api.postRegistration(this.registerForm.value)
    .subscribe(res=>{
      this.registerForm.reset();
      console.log("added details to db.json")
    });
  }
  calculateTotal(now: number){
    // const now= this.registerForm.value.weeks;

    let tot=now*100;
    let need=this.registerForm.value.decision;
    if(need=='Yes'){
      tot+=200;
    }
    this.registerForm.controls['totalprice'].patchValue(tot);
  }

};

