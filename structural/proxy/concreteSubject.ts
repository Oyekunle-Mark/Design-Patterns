import { Subject } from './subject';

export class ConcreteSubject implements Subject {
    public request(): void {
        console.log('RealSubject: Handling request.');
    }
}
