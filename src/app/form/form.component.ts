import { Component, OnInit } from '@angular/core';
import { Quote } from './../quote'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  quote = new Quote();
  quotes = [];

  constructor() { }
  voteUp(data){
    data.rating += 1;
  }
  voteDown(data){
    data.rating -= 1;
  }
  delete(data){
    this.quotes.splice((this.quotes.indexOf(data)), 1);
  }
  onSubmit(form){
    this.quotes.push(this.quote);
    this.quote = new Quote();
  }
  ngOnInit() {
  }
}
