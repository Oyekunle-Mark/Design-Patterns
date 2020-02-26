import { ConcreteComponentA, ConcreteComponentB } from './concreteComponents';

export interface Visitor {
    visitConcreteComponentA(element: ConcreteComponentA): void;
    visitConcreteComponentB(element: ConcreteComponentB): void;
}
