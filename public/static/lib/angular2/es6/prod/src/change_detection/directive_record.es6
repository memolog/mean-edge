import { ON_PUSH } from './constants';
import { StringWrapper } from 'angular2/src/facade/lang';
// HACK: workaround for Traceur behavior.
// It expects all transpiled modules to contain this marker.
// TODO: remove this when we no longer use traceur
export var __esModule = true;
export class DirectiveIndex {
    constructor(elementIndex, directiveIndex) {
        this.elementIndex = elementIndex;
        this.directiveIndex = directiveIndex;
    }
    get name() { return `${this.elementIndex}_${this.directiveIndex}`; }
}
export class DirectiveRecord {
    constructor(directiveIndex, callOnAllChangesDone, callOnChange, changeDetection) {
        this.directiveIndex = directiveIndex;
        this.callOnAllChangesDone = callOnAllChangesDone;
        this.callOnChange = callOnChange;
        this.changeDetection = changeDetection;
    }
    isOnPushChangeDetection() { return StringWrapper.equals(this.changeDetection, ON_PUSH); }
}
//# sourceMappingURL=directive_record.js.map