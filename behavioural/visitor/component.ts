export interface Component {
    accept(visitor: Visitor): void;
}
