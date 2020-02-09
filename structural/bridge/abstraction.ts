import { Implementation } from './implementation';

export class Abstraction {
    constructor(protected implementation: Implementation) { }

    public operation(): string {
        const result = this.implementation.operationImplementation();
        return `Abstraction: Base operation with:\n${result}`;
    }
}
