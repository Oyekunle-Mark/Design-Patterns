import { Momento } from './momento';

export class Originator {
    constructor(private state: string) {
        console.log(`Originator: My initial state is: ${state}`);
    }
}
