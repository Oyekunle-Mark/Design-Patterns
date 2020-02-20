import { Iterator } from './iterator';
import { WordsCollection } from './collection';

export class AlphabeticalOrderIterator implements Iterator<string> {
    private position = 0;

    constructor(private collection: WordsCollection, private reverse: boolean = false) {
        if (reverse) {
            this.position = collection.getCount() - 1;
        }
    }

    public rewind(): void {
        this.position = this.reverse ? this.collection.getCount() - 1 : 0;
    }

    public current(): any {
        return this.collection.getItems()[this.position];
    }

    public key(): number {
        return this.position;
    }

    public next(): any {
        const item = this.collection.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;

        return item;
    }

    public valid(): boolean {
        if (this.reverse) {
            return this.position > 0;
        }

        return this.position < this.collection.getCount();
    }
}
