import { Builder } from './builder';
import { Product1 } from './product';

export class ConcreteBuilder1 implements Builder {
    private product: Product1;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Product1();
    }

    public producePartA(): void {
        this.product.parts.push('Part A1');
    }

    public producePartB(): void {
        this.product.parts.push('Part B1');
    }

    public producePartC(): void {
        this.product.parts.push('Part C1');
    }


    public getProduct(): Product1 {
        const result = this.product;
        this.reset();
        return result;
    }
}
