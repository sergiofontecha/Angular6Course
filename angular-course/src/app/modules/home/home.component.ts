// Angular modules
import { Component, OnInit } from '@angular/core';

// Services
import { RopaService } from '../../shared/services/ropa-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [RopaService]
})
export class HomeComponent {
  // Variables declarations
  public title: string;
  public collection: string[];
  public showed: boolean;
  public article: string;

  constructor(private _ropaService: RopaService) {
    // Variables initialization
    this.title = 'Main Page';
    this.showed = false;
    this.article = '';
  }

  // Service Methods
  getCollection(): void {
    this.collection = this._ropaService.getCollection();
    this.showed = true;
  }

  addArticle() {
    this._ropaService.setArticle(this.article);
    this.article = '';
  }

  deleteArticle(itemID: number) {
    this._ropaService.deleteCollection(itemID);
  }
}
