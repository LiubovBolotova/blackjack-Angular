import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-field-component',
  templateUrl: './field-component.component.html',
  styleUrls: ['./field-component.component.css'],
})
export class FieldComponentComponent {

  @Input() public isShowBankerResult: boolean;
  @Input() public bankerCards: TCard[] = [];
  @Input() public gamerCards: TCard[] = [];
  @Input() public showBankerCards: boolean;
  @Input() public gamerResult: number;
  @Input() public bankerResult: number;
  @Input() public actionButtonsAreShown: boolean;
  @Input() public showGameResult: boolean;
  @Input() public gameResult: string;

  @Output() public gaveCards: EventEmitter<void> = new EventEmitter();
  @Output() public stopedTakingCards: EventEmitter<void> = new EventEmitter();


  public giveNewCards(): void {
    this.gaveCards.emit();
  }
}
