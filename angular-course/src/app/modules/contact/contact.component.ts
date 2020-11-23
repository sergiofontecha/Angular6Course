// Angular Modules
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router, ActivatedRoute, Params } from '@angular/router';

// App Services, Pipelines, models And More
import { DataService } from '../../shared/services/data_service/data.service';
import { User } from './user.model';

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
  public data: Array<any>;

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

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.title = 'User Contact';
    this.users = [];
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      age: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.dataService.getUsers().subscribe((data: any[]) => {
      this.data = data;
      console.log('DATAAAAAAAA', this.data);
    });
  }

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
