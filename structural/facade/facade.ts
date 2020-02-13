import { SubSystem1, SubSystem2 } from './subSystems';

export class Facade {
    constructor(
        private subSystem1: SubSystem1 = new SubSystem1(),
        private subSystem2: SubSystem2 = new SubSystem2(),
    ) { }

    public operation(): string {
        let result = 'Facade initializes subsystems:\n';
        result += this.subSystem1.operation1();
        result += this.subSystem2.operation1();
        result += 'Facade orders subsystems to perform the action:\n';
        result += this.subSystem1.operationN();
        result += this.subSystem2.operationZ();

        return result;
    }
}
