/* eslint-disable no-restricted-syntax */
import { Handler } from './handler';
import { MonkeyHandler, DogHandler, SquirrelHandler } from './concreteHanlders';

function clientCode(handler: Handler): void {
    const foods = ['Nut', 'Banana', 'Cup of coffee'];

    for (const food of foods) {
        console.log(`Client: Who wants a ${food}?`);

        const result = handler.handle(food);
        if (result) {
            console.log(`  ${result}`);
        } else {
            console.log(`  ${food} was left untouched.`);
        }
    }
}
