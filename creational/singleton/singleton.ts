export class Singleton {
    private static instance: Singleton;

    // eslint-disable-next-line no-useless-constructor
    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    public someBusinessLogic(): void { }
}
