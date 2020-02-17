import { Flyweight } from './flyweight';

export class FlyweightFactory {
    private flyweights: { [key: string]: Flyweight } = {};

    constructor(initialFlyweights: string[][]) {
        for (const state of initialFlyweights) {
            this.flyweights[this.getKey(state)] = new Flyweight(state);
        }
    }

    private getKey(state: string[]): string {
        return state.join('_');
    }
}
