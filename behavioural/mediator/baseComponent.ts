import { Mediator } from './mediator';

export class BaseComponent {
    protected mediator: Mediator;

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}
