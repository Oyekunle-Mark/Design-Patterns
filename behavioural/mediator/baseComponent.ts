import { Mediator } from './mediator';

export class BaseComponent {
    constructor(private mediator?: Mediator) { }

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}
