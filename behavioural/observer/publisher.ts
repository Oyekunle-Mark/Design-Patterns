import { Subscriber } from './subscriber';

export interface Publisher {
    state: number;
    attach(subscriber: Subscriber): void;
    detach(subscriber: Subscriber): void;
    notify(): void;
}
