import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'game-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})


export class SidebarComponent {

  @Input() public startText: string;
  @Input() public isStartButtonShown: boolean;

  @Output()
  public newGameStarted: EventEmitter<void> = new EventEmitter();

  public startNewGame(): void {
    this.newGameStarted.emit();
  }
}
