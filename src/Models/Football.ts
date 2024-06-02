import { Sport } from './Sport';

export class Football extends Sport {
    constructor() {
        super('Football', 90, 11, 1);
    }

    startGame(): void {
        console.log('Football game started');
    }

    endGame(): void {
        console.log('Football game ended');
    }
}
