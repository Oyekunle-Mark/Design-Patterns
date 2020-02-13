import { SubSystem1, SubSystem2 } from './subSystems';

export class Facade {
    constructor(
        private subSystem1: SubSystem1 = new SubSystem1(),
        private subSystem2: SubSystem2 = new SubSystem2(),
    ) { }
}
