import { Subject } from './subject';
import { ConcreteSubject } from './concreteSubject';

export class Proxy implements Subject {
    constructor(private concreteSubject: ConcreteSubject) {}

    public request(): void {
        if (this.checkAccess()) {
            this.concreteSubject.request();
            this.logAccess();
        }
    }

    private checkAccess(): boolean {
        console.log('Proxy: Checking access prior to firing a real request.');

        return true;
    }

    private logAccess(): void {
        console.log('Proxy: Logging the time of request.');
    }
}
