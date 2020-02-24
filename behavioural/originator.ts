import { Momento } from './momento';

export class Originator {
    constructor(private state: string) {
        console.log(`Originator: My initial state is: ${state}`);
    }

    private generateRandomString(length = 10): string {
        const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        return Array(5)
            .fill(' ')
            .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
            .join('');
    }
}
