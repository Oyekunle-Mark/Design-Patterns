import { Component } from './component';

export class Decorator implements Component {
    constructor(protected component: Component) {}

    public operation(): string {
        return this.component.operation();
    }
}
