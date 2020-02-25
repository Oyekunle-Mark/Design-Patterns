import { Context } from './context';

export abstract class State {
    private context: Context;

    public setContext(context: Context): void {
        this.context = context;
    }

    public abstract handle1(): void;

    public abstract handle2(): void;
}
