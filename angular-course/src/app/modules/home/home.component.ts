import { Component, OnInit } from '@angular/core';

// Services
import { RopaService } from '../../shared/services/ropa-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [RopaService]
})
export class HomeComponent implements OnInit {
  // Component variables
  public title: string;

  constructor(private _ropaService: RopaService) {
    this.title = 'Main Page';
  }

  ngOnInit(): void {
    console.log(this._ropaService.prueba('Camiseta Nike'));
  }
}
