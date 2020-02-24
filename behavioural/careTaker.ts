import { Momento } from './momento';
import { Originator } from './originator';

export class CareTaker {
    private momentos: Momento[] = [];

    constructor(private originator: Originator) { }

    public backup(): void {
        console.log('\nCaretaker: Saving Originator\'s state...');
        this.momentos.push(this.originator.save());
    }

    public undo(): void {
        if (!this.momentos.length) {
            return;
        }
        const momento = this.momentos.pop();

        console.log(`Caretaker: Restoring state to: ${momento.getName()}`);
        this.originator.restore(momento);
    }

    public showHistory(): void {
        console.log('Caretaker: Here\'s the list of mementos:');

        // eslint-disable-next-line no-restricted-syntax
        for (const momento of this.momentos) {
            console.log(momento.getName());
        }
    }
}
