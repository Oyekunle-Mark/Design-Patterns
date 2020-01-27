import { AbstractProductA, AbstractProductB } from './products';
import { ConcreteProductA1, ConcreteProductA2 } from './concreteProductA';
import { ConcreteProductB1, ConcreteProductB2 } from './concreteProductB';
import { AbstractFactory } from './factory';

export class ConcreteFactory1 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}

export class ConcreteFactory2 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}
