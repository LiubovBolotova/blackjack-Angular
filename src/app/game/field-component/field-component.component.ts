import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'game-field-component',
  templateUrl: './field-component.component.html',
  styleUrls: ['./field-component.component.css'],
})
export class FieldComponentComponent {

  @Input() public actionButtonsAreShown: boolean;
  @Input() public showGameResult: boolean;
  @Input() public gameResult: string;
  @Input() public players: { bankerCards: TCard[], gamerCards: TCard[], bankerResult: number, gamerResult: number };

  @Output() public gaveCards: EventEmitter<void> = new EventEmitter();
  @Output() public stoppedTakingCards: EventEmitter<void> = new EventEmitter();


  public giveNewCards(): void {
    this.gaveCards.emit();
  }
}
