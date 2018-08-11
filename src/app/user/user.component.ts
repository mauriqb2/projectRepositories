import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  data;

  constructor(private http: Http) {
    this.http.get("././data/data.json").subscribe(res => this.data = res.json());
  }

}