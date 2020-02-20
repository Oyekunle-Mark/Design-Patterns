import { Iterator } from './iterator';

export interface Aggregator {
    getIterator(): Iterator<string>;
}
