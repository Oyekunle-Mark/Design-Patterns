import { AbstractProductA, AbstractProductB } from './factory';

export interface AbstractFactory {
    createProductA(): AbstractProductA;
    createProductB(): AbstractProductB;
}
