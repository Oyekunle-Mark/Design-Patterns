import { Abstraction } from './abstraction';
import { ExtendedAbstraction } from './extendedAbstraction';
import { ConcreteImplementationA, ConcreteImplementationB } from './concreteImplementation';

function clientCode(abstraction: Abstraction): void {
    console.log(abstraction.operation());
}

let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);
clientCode(abstraction);

console.log('');

implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);
clientCode(abstraction);
