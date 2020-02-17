import { Subject } from './subject';
import { ConcreteSubject } from './concreteSubject';
import { Proxy } from './proxy';

function clientCode(subject: Subject): void {
    subject.request();
}

console.log('Client: Executing the client code with a real subject:');
const realSubject = new ConcreteSubject();
clientCode(realSubject);

console.log('');

console.log('Client: Executing the same client code with a proxy:');
const proxy = new Proxy(realSubject);
clientCode(proxy);
