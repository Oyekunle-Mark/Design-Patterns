import { Momento } from './momento';
import { ConcreteMomento } from './concreteMomento';

export class Originator {
    constructor(private state: string) {
        console.log(`Originator: My initial state is: ${state}`);
    }

    private generateRandomString(length = 10): string {
        const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        return Array(length)
            .fill(' ')
            .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
            .join('');
    }

    public save(): Momento {
        return new ConcreteMomento(this.state);
    }

    public restore(momento: Momento): void {
        this.state = momento.getState();
        console.log(`Originator: My state has changed to: ${this.state}`);
    }
}