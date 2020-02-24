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

    public notify(): void {
        console.log('Subject: Notifying observers...');

        // eslint-disable-next-line no-restricted-syntax
        for (const subscriber of this.subscribers) {
            subscriber.update(this);
        }
    }

    public someBusinessLogic(): void {
        console.log('\nSubject: I\'m doing something important.');
        this.state = Math.floor(Math.random() * (10 + 1));

        console.log(`Subject: My state has just changed to: ${this.state}`);
        this.notify();
    }
}
