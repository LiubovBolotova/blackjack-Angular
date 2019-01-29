import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  host: { class: 'sidebar field' }
})

export class GameComponent {
  public startGameText: string = 'Start Game!';
  public startButtonIsShown: boolean = true;
  public showGameResult: boolean = false;
  public gameResult: string;
  public actionButtonsAreShown: boolean = false;
  private _newDeckOfCards: TCard[] = [];
  public players: TPlayers =
  {
    bankerCards: [],
    gamerCards: [],
    bankerResult: 0,
    gamerResult: 0,
  };

  public constructor(
    private _servisesService: GameService
  ) {}

  public startGame(): void {
    this.actionButtonsAreShown = true;
    this.showGameResult = false;
    this._newDeckOfCards = this._servisesService.getDeck();
    this.players.bankerCards = [];
    this.players.gamerCards = [];
    this.players.bankerResult = 0;
    this.players.gamerResult = 0;
    this._takeRandomCard(this.players.gamerCards, this._newDeckOfCards);
    this._takeRandomCard(this.players.bankerCards, this._newDeckOfCards);
    this.startButtonIsShown = false;
  }

  public giveCards(): void {
    this._takeRandomCard(this.players.gamerCards, this._newDeckOfCards);
    this.players.gamerResult = this._servisesService.countResult(this.players.gamerCards);
    this.players.bankerResult = this._servisesService.countResult(this.players.bankerCards);

    if (this.players.gamerResult > 21 && this.players.bankerResult < 21 ) {
      this._displayFields('Vova lost!');
    }

    if (this.players.gamerResult === 21 && this.players.bankerResult !== 21) {
      this._displayFields('Vova, You won!');
    }

    if (this.players.bankerResult < 15) {
      this._takeRandomCard(this.players.bankerCards, this._newDeckOfCards);
      this.players.bankerResult = this._servisesService.countResult(this.players.bankerCards);
    }

    if (this.players.bankerResult > 21 && this.players.gamerResult < 21) {
      this._displayFields('Vova! You won!');
    }

    if (this.players.bankerResult === 21) {
      this._displayFields('Vova! You Lost!');
    }

    if (this.players.bankerResult === this.players.gamerResult) {
      this._displayFields('Nobody wins!');
    }
  }

  public stopTakingCards(): void {
    this.players.gamerResult = this._servisesService.countResult(this.players.gamerCards);
    this.players.bankerResult = this._servisesService.countResult(this.players.bankerCards);

    if (this.players.bankerResult < 15) {
      this._takeRandomCard(this.players.bankerCards, this._newDeckOfCards);
      this.players.bankerResult = this._servisesService.countResult(this.players.bankerCards);
    }

    if (this.players.bankerResult > 21 || this.players.bankerResult < this.players.gamerResult) {
      this._displayFields('Vova! You won!');
    }

    if (this.players.bankerResult === this.players.gamerResult) {
      this._displayFields('Nobody wins!');
    }

    if (this.players.bankerResult > this.players.gamerResult || this.players.bankerResult === 21) {
      this._displayFields('Vova! You Lost!');
    }
  }


  private _takeRandomCard(playerHand: TCard[], deckOfCards: TCard[]): void {
    const randomNum: number = Math.ceil(Math.random() * (deckOfCards.length - 1));
    const card: TCard = deckOfCards[randomNum];
    playerHand.push(card);
    deckOfCards.splice(randomNum, 1);
  }

  private _displayFields(allGameResult: string): void {
    this.showGameResult = true;
    this.startButtonIsShown = true;
    this.startGameText = 'New Game?';
    this.gameResult = allGameResult;
  }
}
