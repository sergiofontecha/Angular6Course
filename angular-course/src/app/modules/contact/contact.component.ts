import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // Component Variables
  public title: string;
  public parameter: Params;

  constructor(private _route: ActivatedRoute, private _router: Router) {
    this.title = 'Contact Page';
  }

  ngOnInit(): void {
    this._route.params.forEach((params: Params) => {
      this.parameter = params.page;
    });
  }

  redirect() {
    this._router.navigate(['/contact', 'helloooo!!']);
  }
}
