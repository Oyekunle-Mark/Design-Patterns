import Product from './product';
import Creator from './creator';
import { ConcreteProduct1, ConcreteProduct2 } from './concreteProduct';

export class ConcreteCreator1 extends Creator {
    factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

export class ConcreteCreator2 extends Creator {
    factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}
