import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})


export class SidebarComponent implements OnInit {

  @Input() public startText: string;
  @Input() public isStartButtonShown: boolean;


  @Output()
  public newGameStarted: EventEmitter<void> = new EventEmitter<void>();

  public ngOnInit(): void { }

  public startNewGame(): void {
    this.newGameStarted.emit();
  }
}
