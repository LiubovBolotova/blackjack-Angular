import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-field-component',
  templateUrl: './field-component.component.html',
  styleUrls: ['./field-component.component.css'],
})
export class FieldComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input() public isShowBankerResult;
  @Input() public bankerCards;
  @Input() public gamerCards;
  @Input() public showBankerCards;
  @Input() public gamerResult;
  @Input() public bankerResult;
  @Input() public actionButtonsAreShown;
  @Input() public showGameResult;
  @Input() public gameResult;

  @Output() public gaveCards = new EventEmitter<void>();
  public giveNewCards() {
    this.gaveCards.emit();
  }

  @Output() public stopedTakingNewCards = new EventEmitter<void>();
  public stopTakingNewCards() {
    this.stopedTakingNewCards.emit();
  }
}
