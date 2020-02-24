import { Subscriber } from './subscriber';
import { Publisher } from './publisher';

export class ConcreteSubscriberA implements Subscriber {
    public update(publisher: Publisher): void {
        if (publisher.state < 3) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    }
}
