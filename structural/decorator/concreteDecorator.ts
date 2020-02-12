import { Decorator } from './decorator';

export class ConcreteDecorator1 extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorA(${super.operation()})`;
    }
}
