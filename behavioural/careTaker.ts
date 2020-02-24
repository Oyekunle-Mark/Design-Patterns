import { Momento } from './momento';
import { Originator } from './originator';

export class CareTaker {
    private memento: Momento[] = [];

    constructor(private originator: Originator) { }

    public backup(): void {
        console.log('\nCaretaker: Saving Originator\'s state...');
        this.memento.push(this.originator.save());
    }

    public undo(): void {
        if (!this.memento.length) {
            return;
        }
        const memento = this.memento.pop();

        console.log(`Caretaker: Restoring state to: ${memento.getName()}`);
        this.originator.restore(memento);
    }

    public showHistory(): void {
        console.log('Caretaker: Here\'s the list of mementos:');

        // eslint-disable-next-line no-restricted-syntax
        for (const memento of this.memento) {
            console.log(memento.getName());
        }
    }
}
