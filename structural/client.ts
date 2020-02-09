import { Abstraction } from './abstraction';
import { ExtendedAbstraction } from './extendedAbstraction';
import { ConcreteImplementationA, ConcreteImplementationB } from './concreteImplementation';

function clientCode(abstraction: Abstraction): void {
    console.log(abstraction.operation());
}
