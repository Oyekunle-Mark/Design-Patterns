export abstract class Component {
    protected parent: Component;

    public setParent(component: Component): void {
        this.parent = component;
    }

    public getParent(): Component {
        return this.parent;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public add(component: Component): void {
        // ...
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public remove(component: Component): void {
        // ...
    }

    public isComposite(): boolean {
        return false;
    }

    public abstract operation(): string;
}
