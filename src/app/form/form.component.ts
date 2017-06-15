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
    this.quotes = this.bubbleSort(this.quotes);
  }
  voteDown(data){
    data.rating -= 1;
    this.quotes = this.bubbleSort(this.quotes);
  }
  delete(data){
    this.quotes.splice((this.quotes.indexOf(data)), 1);
  }
  bubbleSort(arr){
    let sorted = false;
    let swapCount = 0;
    let temp = 0;
    while (!sorted) {
      swapCount = 0;
      for (let i = 0; i < arr.length-1; i++){
        if (arr[i].rating < arr[i+1].rating){
          temp = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = temp;
        }
      }
      if (swapCount === 0){
        sorted = true;
      }
    }
    return arr;
  }
  onSubmit(form){
    this.quotes.push(this.quote);
    this.quote = new Quote();
  }
  ngOnInit() {
  }
}
