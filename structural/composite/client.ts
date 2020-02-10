import { Component } from './component';
import { Composite } from './composite';
import { Leaf } from './leaf';

function clientCode(component: Component): void {
    console.log(`RESULT: ${component.operation()}`);
}
