export interface Mediator {
    notify(sender: object, event: string): void;
}
