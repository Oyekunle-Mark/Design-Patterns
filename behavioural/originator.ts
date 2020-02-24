import { Memento } from './memento';
import { ConcreteMemento } from './concreteMemento';

export class Originator {
    constructor(private state: string) {
        console.log(`Originator: My initial state is: ${state}`);
    }

    public doSomething(): void {
        console.log('Originator: I\'m doing something important.');
        this.state = this.generateRandomString(30);
        console.log(`Originator: and my state has changed to: ${this.state}`);
    }

    private generateRandomString(length = 10): string {
        const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        return Array(length)
            .fill(' ')
            .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
            .join('');
    }

    public save(): Memento {
        return new ConcreteMemento(this.state);
    }

    public restore(momento: Memento): void {
        this.state = momento.getState();
        console.log(`Originator: My state has changed to: ${this.state}`);
    }
}
