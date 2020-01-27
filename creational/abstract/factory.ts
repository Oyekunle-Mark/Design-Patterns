import { AbstractProductA, AbstractProductB } from './products';

export interface AbstractFactory {
    createProductA(): AbstractProductA;
    createProductB(): AbstractProductB;
}
