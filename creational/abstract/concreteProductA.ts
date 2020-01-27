import { AbstractProductA } from './products';

export class ConcreteProductA1 implements AbstractProductA {
    public useFulFunctionA(): string {
        return 'The result of the product A1.';
    }
}

export class ConcreteProductA2 implements AbstractProductA {
    public useFulFunctionA(): string {
        return 'The result of the product A2.';
    }
}
