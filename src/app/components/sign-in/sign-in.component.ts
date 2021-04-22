import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formSignIn: FormGroup;
  information: Array<any>;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
    this.information = [];
  }

  createForm() {
    this.formSignIn = this.fb.group({
      mail: new FormControl(''),
      name: new FormControl(''),
      age: new FormControl('')
    });
  }

  clickSignIn() {
    this.mail;
    this.name;
    this.age;

    let informationSignIn = {
      mail: this.mail.value,
      name: this.name.value,
      age: this.age.value
    }

    this.information.push(informationSignIn);

    // console.log(this.information);

    localStorage.setItem('information', JSON.stringify(informationSignIn));
    
    console.log(localStorage.getItem('information'));

    this.cleanForm();
  }

  cleanForm() {
    this.formSignIn.reset();
  }

  get mail() {
    return this.formSignIn.get('mail') as FormControl;
  }

  get name() {
    return this.formSignIn.get('name') as FormControl;
  }

  get age() {
    return this.formSignIn.get('age') as FormControl;
  }

}
