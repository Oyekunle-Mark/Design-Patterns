import { Adaptee } from './adaptee';
import { Target } from './target';

export class Adapter extends Target {
    constructor(private adaptee: Adaptee) {
        super();
    }

    public request(): string {
        const result = this.adaptee.specificRequest().split('').reverse().join('');
        return `Adapter: (TRANSLATED) ${result}`;
    }
}
