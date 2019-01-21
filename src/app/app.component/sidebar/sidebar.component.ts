import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  // host: { class: 'buttons button' },
})
export class SidebarComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  @Input() public startText;
  @Input() public isStartButtonShown;

  @Output()
  public newGameStarted = new EventEmitter<void>();

  public startNewGame() {
    this.newGameStarted.emit();
  }
}
