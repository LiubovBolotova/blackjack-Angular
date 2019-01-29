import { Injectable } from '@angular/core';

@Injectable()

export class GameService {
  private readonly _DECK_OF_CARDS: TCard[] = [
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


  public getDeck(): TCard[] {
    return this._DECK_OF_CARDS.slice();
  }

  public countResult(playerHand: TCard[]): number {
    const myResult: number = playerHand.reduce((result: number, card: TCard): number =>  {

      return result += card.score;
    }, 0);
    return myResult;
  }
}