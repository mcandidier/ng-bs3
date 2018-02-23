import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  langs: string[] = [
    'English',
    'French',
    'German'
  ];

  form: FormGroup;
  fname: FormControl;
  lname: FormControl;
  email: FormControl;
  password: FormControl;
  lang: FormControl;

  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
      this.fname =  new FormControl('', Validators.required);
      this.lname = new FormControl('', Validators.required);
      this.email = new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]);
      this.password = new FormControl('', [
        Validators.minLength(8),
        Validators.required
      ]);
      this.lang = new FormControl();
  }

  createForm() {
    this.form = new FormGroup({
       fname: this.fname,
       lname: this.lname,
       email: this.email,
       password: this.password,
       lang: this.lang
    });
  }

  onSubmit() {
    if(this.form.valid) {
      console.log("submit");
      console.log(this.form.value, 'values');
      this.form.reset();
    }
  }

}
