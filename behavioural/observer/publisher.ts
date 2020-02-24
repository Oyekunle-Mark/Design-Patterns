import { Subscriber } from './subscriber';

export interface Publisher {
    attach(subscriber: Subscriber): void;
    detach(subscriber: Subscriber): void;
    notify(): void;
}
