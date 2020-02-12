import { Component } from './component';
import { ConcreteComponent } from './concreteComponent';
import { ConcreteDecoratorA, ConcreteDecoratorB } from './concreteDecorator';

function clientCode(component: Component): void {
    console.log(`RESULT: ${component.operation()}`);
}

const simple = new ConcreteComponent();
console.log('Client: I\'ve got a simple component:');
clientCode(simple);

console.log('');

const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log('Client: Now I\'ve got a decorated component:');
clientCode(decorator2);
