import { Component } from './component';
import { Composite } from './composite';
import { Leaf } from './leaf';

function clientCode(component: Component): void {
    console.log(`RESULT: ${component.operation()}`);
}

const simple = new Leaf();
console.log('Client: I\'ve got a simple component:');
clientCode(simple);

console.log('');

const tree = new Composite();
const branch1 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());
const branch2 = new Composite();
branch2.add(new Leaf());
tree.add(branch1);
tree.add(branch2);

console.log('Client: Now I\'ve got a composite tree:');
clientCode(tree);

console.log('');
