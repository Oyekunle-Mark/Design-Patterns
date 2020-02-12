import { Component } from './component';
import { ConcreteComponent } from './concreteComponent';
import { ConcreteDecoratorA, ConcreteDecoratorB } from './concreteDecorator';

function clientCode(component: Component): void {
    console.log(`RESULT: ${component.operation()}`);
}
