import { Sport } from './Sport';

export class IceHockey extends Sport {
    constructor() {
        super('Ice Hockey', 60, 6, 3);
    }

    startGame(): void {
        console.log('Ice Hockey game started');
    }

    endGame(): void {
        console.log('Ice Hockey game ended');
    }
}
