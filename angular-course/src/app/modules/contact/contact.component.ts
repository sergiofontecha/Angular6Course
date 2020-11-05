import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
// import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // Component Variables
  public title: string;
  public user: User;

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

  constructor() {
    this.title = 'User Contact';
    this.user = new User('', '', '');
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.user);
  }
}
