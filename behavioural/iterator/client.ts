import { WordsCollection } from './collection';

const collection = new WordsCollection();

collection.addItem('First');
collection.addItem('Second');
collection.addItem('Third');

const iterator = collection.getIterator();

while (iterator.valid()) {
    console.log(iterator.next());
}
