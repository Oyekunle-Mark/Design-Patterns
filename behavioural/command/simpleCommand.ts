import { Command } from './command';

export class SimpleCommand implements Command {
    constructor(private payload: string) { }

    public execute(): void {
        console.log(`SimpleCommand: See, I can do simple things like printing (${this.payload})`);
    }
}
