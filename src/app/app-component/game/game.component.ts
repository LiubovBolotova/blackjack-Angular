import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  public startGameText: string = 'Start Game!';
  public startButtonIsShown: boolean = true;
  public showGameResult: boolean = false;
  public gameResult: string;
  public actionButtonsAreShown: boolean = false;

  public players: {bankerCards: TCard[], gamerCards: TCard[], bankerResult: number, gamerResult: number } =
  {
    bankerCards: [],
    gamerCards: [],
    bankerResult: 0,
    gamerResult: 0,
  };


  private _newDeckOfCards: TCard[] = [];
  private _deckOfCards: TCard[] = [
    {
      score: 6,
      name: '6',
      suit: 'club',
    },
    {
      score: 7,
      name: '7',
      suit: 'club',
    },
    {
      score: 8,
      name: '8',
      suit: 'club',
    },
    {
      score: 9,
      name: '9',
      suit: 'club',
    },
    {
      score: 10,
      name: '10',
      suit: 'club',
    },
    {
      score: 2,
      name: 'J',
      suit: 'club',
    },
    {
      score: 3,
      name: 'Q',
      suit: 'club',
    },
    {
      score: 4,
      name: 'K',
      suit: 'club',
    },
    {
      score: 11,
      name: 'A',
      suit: 'club',
    },
    {
      score: 6,
      name: '6',
      suit: 'spade',
    },
    {
      score: 7,
      name: '7',
      suit: 'spade',
    },
    {
      score: 8,
      name: '8',
      suit: 'spade',
    },
    {
      score: 9,
      name: '9',
      suit: 'spade',
    },
    {
      score: 10,
      name: '10',
      suit: 'spade',
    },
    {
      score: 2,
      name: 'J',
      suit: 'spade',
    },
    {
      score: 3,
      name: 'Q',
      suit: 'spade',
    },
    {
      score: 4,
      name: 'K',
      suit: 'spade',
    },
    {
      score: 11,
      name: 'A',
      suit: 'spade',
    },
    {
      score: 6,
      name: '6',
      suit: 'heart',
    },
    {
      score: 7,
      name: '7',
      suit: 'heart',
    },
    {
      score: 8,
      name: '8',
      suit: 'heart',
    },
    {
      score: 9,
      name: '9',
      suit: 'heart',
    },
    {
      score: 10,
      name: '10',
      suit: 'heart',
    },
    {
      score: 2,
      name: 'J',
      suit: 'heart',
    },
    {
      score: 3,
      name: 'Q',
      suit: 'heart',
    },
    {
      score: 4,
      name: 'K',
      suit: 'heart',
    },
    {
      score: 11,
      name: 'A',
      suit: 'heart',
    },
    {
      score: 6,
      name: '6',
      suit: 'diamond',
    },
    {
      score: 7,
      name: '7',
      suit: 'diamond',
    },
    {
      score: 8,
      name: '8',
      suit: 'diamond',
    },
    {
      score: 9,
      name: '9',
      suit: 'diamond',
    },
    {
      score: 10,
      name: '10',
      suit: 'diamond',
    },
    {
      score: 2,
      name: 'J',
      suit: 'diamond',
    },
    {
      score: 3,
      name: 'Q',
      suit: 'diamond',
    },
    {
      score: 4,
      name: 'K',
      suit: 'diamond',
    },
    {
      score: 11,
      name: 'A',
      suit: 'diamond',
    },
  ];

  public startGame(): void {
    this.actionButtonsAreShown = true;
    this.showGameResult = false;
    this._newDeckOfCards = this._deckOfCards.slice();
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
    this.players.gamerResult = this._countResult(this.players.gamerCards);
    this.players.bankerResult = this._countResult(this.players.bankerCards);

    if (this.players.gamerResult > 21) {
      this._displayFields('Vova lost!');
    }

    if (this.players.gamerResult === 21) {
      this._displayFields('Vova, You won!');
    }

    if (this.players.bankerResult < 15) {
      this._takeRandomCard(this.players.bankerCards, this._newDeckOfCards);
      this.players.bankerResult = this._countResult(this.players.bankerCards);
    }

    if (this.players.bankerResult > 21) {
      this._displayFields('Vova! You won!');
    }

    if (this.players.bankerResult === 21) {
      this._displayFields('Vova lost!');
    }

  }

  public stopTakingCards(): void {
    this.players.gamerResult = this._countResult(this.players.gamerCards);
    this.players.bankerResult = this._countResult(this.players.bankerCards);

    if (this.players.bankerResult < 15) {
      this._takeRandomCard(this.players.bankerCards, this._newDeckOfCards);
      this.players.bankerResult = this._countResult(this.players.bankerCards);
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

  private _countResult(playerHand: TCard[]): number {
    let result: number = 0;

    playerHand.forEach((card: TCard) => {
      return (result += card.score);
    });
    return result;
  }

  private _displayFields(allGameResult: string): void {
    this.showGameResult = true;
    this.startButtonIsShown = true;
    this.startGameText = 'Start New Game?';
    this.gameResult = allGameResult;

  }
}
