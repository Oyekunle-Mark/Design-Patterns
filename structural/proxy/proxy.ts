import { Subject } from './subject';
import { ConcreteSubject } from './concreteSubject';

class Proxy implements Subject {
    constructor(private subject: ConcreteSubject) {}

    public request(): void {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    }
}
