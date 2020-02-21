import { Mediator } from './mediator';

export class BaseComponent {
    constructor(protected mediator: Mediator) { }
}
