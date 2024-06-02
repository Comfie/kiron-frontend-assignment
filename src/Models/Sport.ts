export abstract class Sport {
  constructor(
      public name: string,
      public gameDuration: number,
      public numberOfPlayers: number,
      public breaks: number
  ) {}

  abstract startGame(): void;
  abstract endGame(): void;
}
