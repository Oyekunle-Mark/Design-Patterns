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
