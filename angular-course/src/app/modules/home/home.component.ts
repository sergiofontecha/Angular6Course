import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Component variables
  public title: string;

  constructor() {
    this.title = 'Main Page';
  }

  ngOnInit(): void {}
}
