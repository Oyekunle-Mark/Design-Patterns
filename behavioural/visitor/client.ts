import { ConcreteComponentA, ConcreteComponentB } from './concreteComponents';
import { ConcreteVisitor1, ConcreteVisitor2 } from './concreteVisitors';
import { Visitor } from './visitor';
import { Component } from './component';

function clientCode(components: Component[], visitor: Visitor): void {
    // eslint-disable-next-line no-restricted-syntax
    for (const component of components) {
        component.accept(visitor);
    }
}

const components = [
    new ConcreteComponentA(),
    new ConcreteComponentB(),
];

console.log('The client code works with all visitors via the base Visitor interface:');
const visitor1 = new ConcreteVisitor1();
clientCode(components, visitor1);

console.log('');

console.log('It allows the same client code to work with different types of visitors:');
const visitor2 = new ConcreteVisitor2();
clientCode(components, visitor2);
