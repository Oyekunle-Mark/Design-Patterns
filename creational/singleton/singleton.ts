/* eslint-disable @typescript-eslint/no-empty-function */
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

    public someBusinessLogic(): void { }
}
