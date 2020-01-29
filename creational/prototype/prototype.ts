import { ComponentWithBackReference } from './componentWithBackReference';

export class Prototype {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public primitive: any;
    public component: object;
    public circularReference: ComponentWithBackReference;

    /**
     * Clone will create a deep copy of Prototype
     */
    public clone(): this {
        const clone = Object.create(this);
        clone.component = Object.create(this.component);
        clone.circularReference = {
            ...this.circularReference,
            prototype: { ...this },
        };

        return clone;
    }
}
