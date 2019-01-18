import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public bankerCards: TCard[] = [];
  public gamerCards: TCard[] = [];
  public bankerResult: number;
  public gamerResult: number;
  public startGameText: string = 'Start Game!';
  public isStartGame: boolean = false;
  public isShowBankerResult: boolean = false;
  public showBankerCards: boolean = false;
  public showGameResult: boolean = false;
  public gameResult: string;

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
    this.isShowBankerResult = false;
    this.showBankerCards = false;
    this.showGameResult = false;
    this._newDeckOfCards = this._deckOfCards.slice();
    this.bankerCards = [];
    this.gamerCards = [];
    this._takeRandomCard(this.gamerCards, this._newDeckOfCards);
    this._takeRandomCard(this.bankerCards, this._newDeckOfCards);
    this.isStartGame = true;
  }

  public giveCards(): void {
    this._takeRandomCard(this.gamerCards, this._deckOfCards);
    this.gamerResult = this._countResult(this.gamerCards);
    this.bankerResult = this._countResult(this.bankerCards);

    if (this.gamerResult > 21) {
      this._displayFields('Vova lost!');
    }
    if (this.gamerResult === 21) {
      this._displayFields('Vova, You won!');
    }

    if (this.bankerResult < 15) {
      this._takeRandomCard(this.bankerCards, this._newDeckOfCards);
      this._countResult(this.bankerCards);
    }

    if (this.bankerResult > 21) {
      this._displayFields('Vova! You won!');
    }
    if (this.bankerResult === 21) {
      this._displayFields('Vova lost!');
    }
  }

  public stopTakingCards(): void {
    this.isShowBankerResult = true;
    this.showBankerCards = true;
    this.gamerResult = this._countResult(this.gamerCards);
    this.bankerResult = this._countResult(this.bankerCards);

    if (this.bankerResult < 15) {
      this._takeRandomCard(this.bankerCards, this._newDeckOfCards);
      this.bankerResult = this._countResult(this.bankerCards);
    }

    if (this.bankerResult > 21 || this.bankerResult < this.gamerResult) {
      this._displayFields('Vova! You won!');
    }

    if (this.bankerResult === this.gamerResult) {
      this._displayFields('Nobody wins!');
    }
    if (this.bankerResult > this.gamerResult || this.bankerResult === 21) {
      this._displayFields('Vova! You Lost!');
    }
  }

  private _takeRandomCard(playerHand: TCard[], deckOfCards: TCard[]): void {
    const randomNum: number = Math.floor(Math.random() * (this._deckOfCards.length - 1) + 1);
    const card: TCard = deckOfCards[randomNum];
    playerHand.push(card);
    deckOfCards.splice(randomNum, 1);
  }

  private _countResult(playerHand: TCard[]): number {
    let res: number = 0;
    playerHand.forEach((card: TCard) => {
      return (res += card.score);
    });
    if (JSON.stringify(playerHand) === JSON.stringify(this.gamerCards)) {
      this.gamerResult = res;
    } else {
      this.bankerResult = res;
    }
    return res;
  }

  private _displayFields(allGameResult: string): void {
    this.isShowBankerResult = true;
    this.showBankerCards = true;
    this.showGameResult = true;
    this.isStartGame = false;
    this.startGameText = 'Start New Game?';
    this.gameResult = allGameResult;
  }
}
