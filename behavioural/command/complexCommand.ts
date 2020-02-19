import { Command } from './command';
import { Receiver } from './receiver';

export class ComplexCommand implements Command {
    constructor(private receiver: Receiver, private a: string, private b: string) { }

    public execute(): void {
        console.log('ComplexCommand: Complex stuff should be done by a receiver object.');
        this.receiver.doSomething(this.a);
        this.receiver.doSomethingElse(this.b);
    }
}
