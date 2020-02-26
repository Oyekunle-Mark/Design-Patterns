import { AbstractClass } from './abstractClass';
import { ConcreteClass1, ConcreteClass2 } from './concreteClasses';

function clientCode(abstractClass: AbstractClass): void {
    abstractClass.templateMethod();
}

console.log('Same client code can work with different subclasses:');
clientCode(new ConcreteClass1());
console.log('');

console.log('Same client code can work with different subclasses:');
clientCode(new ConcreteClass2());
