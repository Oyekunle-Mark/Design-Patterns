import { Mediator } from './mediator';

export class BaseComponent {
    constructor(protected mediator?: Mediator) { }

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}
