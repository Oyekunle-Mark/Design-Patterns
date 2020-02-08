import { Adaptee } from './adaptee';
import { Adapter } from './adapter';
import { Target } from './target';

function clientCode(target: Target) {
    target.request();
}

