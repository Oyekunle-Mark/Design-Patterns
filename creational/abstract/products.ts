export interface AbstractProductA {
    useFulFunctionA(): string;
}

export interface AbstractProductB {
    useFulFunctionB(): string;
    anotherUseFulFunctionB(collaborator: AbstractProductA): string;
}
