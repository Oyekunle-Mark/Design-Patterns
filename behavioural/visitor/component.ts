import { Visitor } from './visitor';

export interface Component {
    accept(visitor: Visitor): void;
}
