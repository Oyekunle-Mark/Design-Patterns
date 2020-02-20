import { Iterator } from './iterator';
import { WordsCollection } from './collection';

export class AlphabeticalOrderIterator implements Iterator<string> {
    private position = 0;

    constructor(private collection: WordsCollection, private reverse: boolean = false) {
        if (reverse) {
            this.position = collection.getCount() - 1;
        }
    }
}
