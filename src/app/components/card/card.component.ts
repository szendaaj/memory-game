import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() details: CardDetails;
  @Output() onFlip = new EventEmitter<CardDetails>();

  constructor() { }

  ngOnInit() {
  }

  cardClick(details: CardDetails) {
    if ( !details.disabled ) {
      this.onFlip.emit(details);
    }
  }
}

export interface CardDetails {
  id: number;
  imgUrl: string;
  flipped: boolean;
  disabled: boolean;
}
