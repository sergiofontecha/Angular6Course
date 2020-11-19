import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from './user.model';
// import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // Component Variables
  public contactForm: FormGroup;
  public title: string;
  public users: Array<User>;

  // Todo el código comentado es un ejemplo de rutas que aceptan parámetros, como recogerlos y usarlos

  // public parameter: Params;

  // constructor(private _route: ActivatedRoute, private _router: Router) {
  //   this.title = 'Contact Page';
  // }

  // ngOnInit(): void {
  //   this._route.params.forEach((params: Params) => {
  //     this.parameter = params.page;
  //   });
  // }

  // redirect() {
  //   this._router.navigate(['/contact', 'helloooo!!']);
  // }

  constructor(private _fb: FormBuilder) {
    this.title = 'User Contact';
    this.users = [];
    this.contactForm = this._fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      age: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit(formValues) {
    const user: User = {
      name: formValues.name,
      surname: formValues.surname,
      age: formValues.age,
      email: formValues.email,
      password: formValues.password
    };
    this.users.push(user);
    this.contactForm.reset();
  }
}
