import { Command } from './command';
import { Receiver } from './receiver';

export class ComplexCommand implements Command {
    constructor(private receiver: Receiver, private a: string, private b: string) { }
}
