import { Product } from './product';

export abstract class Creator {
    public abstract factoryMethod(): Product;

    public someOperation(): String {
        const product = this.factoryMethod();
        return `Creator: The same creator's code has just worked with ${product.operation()}`;
    }
}
