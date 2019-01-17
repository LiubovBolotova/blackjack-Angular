import { Component } from '@angular/core';

type Card = {
  score: number;
  name: string;
  suit: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Liuba-Bj';

  public bankerCards: Card[] = [];
  public gamerCards: Card[] = [];
  public bankerResult: number;
  public gamerResult: number;
  public startGameText = 'Start Game!';
  public isStartGame: boolean = false;
  public isStopTakingCards: boolean = false;
  public showBankerCards: boolean = false;
  public showGameResult: boolean = false;
  public gameResult: string;
  private newDeckOfCards: Card[] = [];

  takeRandomCard(playerHand: Card[], deckOfCards: Card[]): void {
    let randomNum = Math.floor(Math.random() * (this.deckOfCards.length - 1) + 1);
    let card = deckOfCards[randomNum];
    playerHand.push(card);
    deckOfCards.splice(randomNum, 1);
  }

  public startGame(): void {
    this.showBankerCards = false;
    this.showGameResult = false;
    this.newDeckOfCards = this.deckOfCards.slice();
    this.bankerCards = [];
    this.gamerCards = [];
    this.takeRandomCard(this.gamerCards, this.newDeckOfCards);
    this.takeRandomCard(this.bankerCards, this.newDeckOfCards);
    this.isStartGame = true;
  }
  constructor() {
    console.log(this.deckOfCards);
    console.log(this.bankerCards);
    console.log(this.gamerCards);
  }

  giveCards(): void {
    this.takeRandomCard(this.gamerCards, this.deckOfCards);
    this.gamerResult = this.countResult(this.gamerCards);
    this.bankerResult = this.countResult(this.bankerCards);

    if (this.gamerResult > 21) {
      this.isStopTakingCards = true;
      this.showBankerCards = true;
      this.showGameResult = true;
      this.gameResult = 'Vova lost!';
      this.isStartGame = false;
      this.startGameText = 'Start New Game?';
    } else if (this.gamerResult === 21) {
      this.isStopTakingCards = true;
      this.showBankerCards = true;
      this.showGameResult = true;
      this.gameResult = 'Vova, You won!';
      this.isStartGame = false;
      this.startGameText = 'Start New Game?';
    } else {
      if (this.bankerResult < 15) {
        this.takeRandomCard(this.bankerCards, this.newDeckOfCards);
        this.countResult(this.bankerCards);
      } else {
        return;
      }
      if (this.bankerResult > 21) {
        this.isStopTakingCards = true;
        this.showBankerCards = true;
        this.showGameResult = true;
        this.gameResult = 'Vova, You won!';
        this.startGameText = 'Start New Game?';
        this.isStartGame = false;
      } else if (this.bankerResult === 21) {
        this.isStopTakingCards = true;
        this.showBankerCards = true;
        this.showGameResult = true;
        this.gameResult = 'Vova lost!';
        this.startGameText = 'Start New Game?';
        this.isStartGame = false;
      }
    }
  }

  countResult(playerHand: Card[]): number {
    let res: number = 0;
    playerHand.forEach((card: Card) => {
      return (res += card.score);
    });
    if (JSON.stringify(playerHand) === JSON.stringify(this.gamerCards)) {
      this.gamerResult = res;
    } else {
      this.bankerResult = res;
    }
    console.log(res, 'actual result');
    console.log(this.gamerResult, 'gamer result');
    console.log(this.bankerResult, 'banker result');
    return res;
  }
  stopTakingCards(): void {
    this.isStopTakingCards = true;
    this.showBankerCards = true;
    this.gamerResult = this.countResult(this.gamerCards);
    this.bankerResult = this.countResult(this.bankerCards);

    if (this.bankerResult < 15) {
      this.takeRandomCard(this.bankerCards, this.newDeckOfCards);
      this.bankerResult = this.countResult(this.bankerCards);
    }

    if (this.bankerResult > 21 || this.bankerResult < this.gamerResult) {
      this.isStopTakingCards = true;
      this.startGameText = 'Start New Game?';
      this.isStartGame = false;
      this.showGameResult = true;
      this.gameResult = 'Vova! You won!';
    } else if (this.bankerResult === this.gamerResult) {
      this.isStopTakingCards = true;
      this.showBankerCards = true;
      this.startGameText = 'Start New Game?';
      this.isStartGame = false;
      this.showGameResult = true;
      this.gameResult = 'Nobody wins!';
    } else if (this.bankerResult > this.gamerResult) {
      this.isStopTakingCards = true;
      this.showBankerCards = true;
      this.startGameText = 'Start New Game?';
      this.isStartGame = false;
      this.showGameResult = true;
      this.gameResult = 'Vova! You Lost!';
    } else if (this.bankerResult === 21) {
      this.isStopTakingCards = true;
      this.showBankerCards = true;
      this.startGameText = 'Start New Game?';
      this.isStartGame = false;
      this.showGameResult = true;
      this.gameResult = 'Vova! You Lost!';
    }
  }

  deckOfCards: Card[] = [
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
}
