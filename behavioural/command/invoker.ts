import { Command } from './command';
import { SimpleCommand } from './simpleCommand';
import { ComplexCommand } from './complexCommand';

class Invoker {
    private onStart: Command;
    private onFinish: Command;

    public setOnStart(command: Command): void {
        this.onStart = command;
    }

    public setOnFinish(command: Command): void {
        this.onFinish = command;
    }
}
