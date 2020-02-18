import { Handler } from './handler';

export class AbstractHandler implements Handler {
    private nextHandler: Handler;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;

        return handler;
    }
}
