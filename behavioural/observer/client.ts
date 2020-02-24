import { ConcretePublisher } from './concretePublisher';
import { ConcreteSubscriberA, ConcreteSubscriberB } from './concreteSubscribers';

const subject = new ConcretePublisher();
const observer1 = new ConcreteSubscriberA();
subject.attach(observer1);

const observer2 = new ConcreteSubscriberB();
subject.attach(observer2);

subject.someBusinessLogic();
subject.someBusinessLogic();

subject.detach(observer2);

subject.someBusinessLogic();
