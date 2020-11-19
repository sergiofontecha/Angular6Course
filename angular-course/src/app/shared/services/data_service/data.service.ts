// Angular Modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get(this.REST_API);
  }
}
