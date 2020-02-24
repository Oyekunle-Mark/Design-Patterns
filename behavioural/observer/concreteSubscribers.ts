import { Subscriber } from './subscriber';
import { Publisher } from './publisher';

export class ConcreteSubscriberA implements Subscriber {
    public update(publisher: Publisher): void {
        if (publisher.state < 3) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    }
}

export class ConcreteSubscriberB implements Subscriber {
    public update(publisher: Publisher): void {
        if (publisher.state === 0 || publisher.state >= 2) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    }
}
