import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() imgUrl: string;
  flipped = false;

  constructor() { }

  ngOnInit() {
  }

  flip() {
    this.flipped = !this.flipped;
  }
}
