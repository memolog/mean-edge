export declare var __esModule: boolean;
export declare class DirectiveIndex {
    elementIndex: number;
    directiveIndex: number;
    constructor(elementIndex: number, directiveIndex: number);
    name: string;
}
export declare class DirectiveRecord {
    directiveIndex: DirectiveIndex;
    callOnAllChangesDone: boolean;
    callOnChange: boolean;
    changeDetection: string;
    constructor(directiveIndex: DirectiveIndex, callOnAllChangesDone: boolean, callOnChange: boolean, changeDetection: string);
    isOnPushChangeDetection(): boolean;
}
