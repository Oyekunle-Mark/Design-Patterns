import { Component } from './component';

export class ConcreteComponent implements Component {
    public operation(): string {
        return 'ConcreteComponent';
    }
}
