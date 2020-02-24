import { Publisher } from './publisher';
import { Subscriber } from './subscriber';

export class ConcretePublisher implements Publisher {
    public state: number;
    private subscribers: Subscriber[] = [];

    public attach(subscriber: Subscriber): void {
        console.log('Subject: Attached an observer.');
        this.subscribers.push(subscriber);
    }

    public detach(subscriber: Subscriber): void {
        const subscriberIndex = this.subscribers.indexOf(subscriber);
        this.subscribers.slice(subscriberIndex, 1);
        console.log('Subject: Detached an observer.');
    }
}
