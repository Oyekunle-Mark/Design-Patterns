import { AbstractFactory } from './factory';
import { ConcreteFactory1, ConcreteFactory2 } from './concreteFactories';

function clientCode(factory: AbstractFactory): void {
    const productA = factory.createProductA();
    const productB = factory.createProductB();

    console.log(productB.useFulFunctionB());
    console.log(productB.anotherUseFulFunctionB(productA));
}

console.log('Client: Testing client code with the first factory type...');
clientCode(new ConcreteFactory1());

console.log('');

console.log('Client: Testing the same client code with the second factory type...');
clientCode(new ConcreteFactory2());
