import { Mediator } from './mediator';
import { Component1, Component2 } from './components';

export class ConcreteMediator implements Mediator {
    constructor(private component1: Component1, private component2: Component2) { }

    public notify(sender: object, event: string): void {
        if (event === 'A') {
            console.log('Mediator reacts on A and triggers following operations:');
            this.component2.doC();
        }

        if (event === 'D') {
            console.log('Mediator reacts on D and triggers following operations:');
            this.component1.doB();
            this.component2.doC();
        }
    }
}
