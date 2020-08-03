import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // Component Variables
  public title: string;

  constructor() {
    this.title = 'Contact Page';
  }

  ngOnInit(): void {}
}
