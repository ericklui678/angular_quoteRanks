import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() quoteList;
  @Output() votingUp = new EventEmitter();
  @Output() votingDown = new EventEmitter();
  @Output() deleting = new EventEmitter();

  voteUp(quote){
    this.votingUp.emit(quote);
  }
  voteDown(quote){
    this.votingDown.emit(quote);
  }
  delete(quote){
    this.deleting.emit(quote);
  }
  constructor() { }
  ngOnInit() {
  }

}
