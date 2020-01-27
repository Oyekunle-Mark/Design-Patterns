import Creator from './creator';
import { ConcreteCreator1, ConcreteCreator2 } from './concreteCreator';

function clientCode(creator: Creator) {
    console.log(creator.someOperation());
}

console.log('App: Launched with the ConcreteCreator1.');
clientCode(new ConcreteCreator1());
console.log('');

console.log('App: Launched with the ConcreteCreator2.');
clientCode(new ConcreteCreator2());
