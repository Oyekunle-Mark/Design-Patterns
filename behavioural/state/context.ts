import { State } from './state';

export class Context {
    private state: State;

    constructor(state: State) {
        this.transitionTo(state);
    }

    public transitionTo(state: State): void {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        console.log(`Context: Transition to ${(state as any).constructor.name}.`);
        this.state = state;
        this.state.setContext(this);
    }
}
