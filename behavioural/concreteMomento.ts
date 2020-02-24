import { Momento } from './momento';

export class ConcreteMomento implements Momento {
    private date: string;

    constructor(private state: string) {
        this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    }
}
