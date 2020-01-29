import { Prototype } from './prototype';

export class ComponentWithBackReference {
    public prototype: Prototype;

    constructor(prototype: Prototype) {
        this.prototype = prototype;
    }
}
