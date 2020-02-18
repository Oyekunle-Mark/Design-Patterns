import { Handler } from './handler';

export class AbstractHandler implements Handler {
    private nextHandler: Handler;
}
