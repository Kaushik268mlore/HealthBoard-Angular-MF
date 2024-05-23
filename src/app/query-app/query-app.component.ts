import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material.module';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-query-app',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './query-app.component.html',
  styleUrl: './query-app.component.scss'
})
export class QueryAppComponent implements OnInit {
  public queryForm!:FormGroup;

  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
    this.queryForm=this.fb.group({
      name:[''],
      mobile:[''],
      email:[''],
      message:[''],
    });
  }

  submit() {
    if (this.queryForm.controls['name'].dirty && this.queryForm.controls['mobile'].dirty &&this.queryForm.controls['email'].dirty &&this.queryForm.controls['message'].dirty) {
      console.log(this.queryForm.value);
      // Here you can handle your submission. For example, send the form data to your server.
      alert('Your message has been sent successfully!');
    } 
    else {
      alert('Please fill out all fields correctly.');
    }
  }
}
