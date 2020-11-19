// Angular modules
import { Component } from '@angular/core';

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
  public date: Date;
  public articleQuantity: number;
  public articleAdded: boolean;
  public temporalArticle: string;

  constructor(private _ropaService: RopaService) {
    // Variables initialization
    this.title = 'Collection 2020';
    this.showed = false;
    this.article = '';
    this.date = new Date();
    this.articleQuantity = 0;
    this.articleAdded = false;
    this.temporalArticle = '';
  }

  // Component Methods
  getCollection(): void {
    this.collection = this._ropaService.getCollection();
    this.showed = true;
  }

  addArticle() {
    this._ropaService.setArticle(this.article);
    this.temporalArticle = this.article;
    this.getQuantity(this.temporalArticle);
    this.article = '';
    this.articleAdded = true;
  }

  getQuantity(article: any) {
    switch (article) {
      case /Pantalón/.test(article):
        this.articleQuantity = 10;
        break;
      case /Camisa/.test(article):
        this.articleQuantity = 15;
        break;
      default:
      case /Camiseta/.test(article):
        this.articleQuantity = 20;
        break;
    }

    this.hideAddResume();
  }

  hideAddResume() {
    setTimeout(function() {
      this.articleAdded = false;
    }, 5000);
  }

  deleteArticle(itemID: number) {
    this._ropaService.deleteCollection(itemID);
  }
}
