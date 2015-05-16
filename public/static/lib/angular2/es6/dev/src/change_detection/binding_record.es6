import { isPresent } from 'angular2/src/facade/lang';
// HACK: workaround for Traceur behavior.
// It expects all transpiled modules to contain this marker.
// TODO: remove this when we no longer use traceur
export var __esModule = true;
const DIRECTIVE = "directive";
const ELEMENT = "element";
const TEXT_NODE = "textNode";
export class BindingRecord {
    constructor(mode, implicitReceiver, ast, elementIndex, propertyName, setter, directiveRecord) {
        this.mode = mode;
        this.implicitReceiver = implicitReceiver;
        this.ast = ast;
        this.elementIndex = elementIndex;
        this.propertyName = propertyName;
        this.setter = setter;
        this.directiveRecord = directiveRecord;
    }
    callOnChange() { return isPresent(this.directiveRecord) && this.directiveRecord.callOnChange; }
    isOnPushChangeDetection() {
        return isPresent(this.directiveRecord) && this.directiveRecord.isOnPushChangeDetection();
    }
    isDirective() { return this.mode === DIRECTIVE; }
    isElement() { return this.mode === ELEMENT; }
    isTextNode() { return this.mode === TEXT_NODE; }
    static createForDirective(ast, propertyName, setter, directiveRecord) {
        return new BindingRecord(DIRECTIVE, 0, ast, 0, propertyName, setter, directiveRecord);
    }
    static createForElement(ast, elementIndex, propertyName) {
        return new BindingRecord(ELEMENT, 0, ast, elementIndex, propertyName, null, null);
    }
    static createForHostProperty(directiveIndex, ast, propertyName) {
        return new BindingRecord(ELEMENT, directiveIndex, ast, directiveIndex.elementIndex, propertyName, null, null);
    }
    static createForTextNode(ast, elementIndex) {
        return new BindingRecord(TEXT_NODE, 0, ast, elementIndex, null, null, null);
    }
}
//# sourceMappingURL=binding_record.js.map