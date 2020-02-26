import { Strategy } from './strategy';

export class Context {
    constructor(private strategy: Strategy) { }

    public setStrategy(strategy: Strategy): void {
        this.strategy = strategy;
    }

    public doSomeBusinessLogic(): void {
        console.log('Context: Sorting data using the strategy (not sure how it\'ll do it)');
        const result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
        console.log(result.join(','));
    }
}
