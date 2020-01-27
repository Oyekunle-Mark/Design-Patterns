import { AbstractProductA, AbstractProductB } from './products';

export class ConcreteProductB1 implements AbstractProductB {
    public useFulFunctionB(): string {
        return 'The result of the product B1.';
    }

    public anotherUseFulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.useFulFunctionA();
        return `The result of the B1 collaborating with the (${result})`;
    }
}

export class ConcreteProductB2 implements AbstractProductB {
    public useFulFunctionB(): string {
        return 'The result of the product B2.';
    }

    public anotherUseFulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.useFulFunctionA();
        return `The result of the B2 collaborating with the (${result})`;
    }
}
