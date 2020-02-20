export interface Iterator<T> {
    current: any;
    next(): T;
    key(): number;
    valid(): boolean;
    rewind(): void;
}
