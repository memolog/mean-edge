export declare var __esModule: boolean;
export declare var List: ArrayConstructor;
export declare var Map: MapConstructor;
export declare var Set: SetConstructor;
export declare var StringMap: ObjectConstructor;
export declare class MapWrapper {
    static create(): Map<any, any>;
    static clone<K, V>(m: Map<K, V>): Map<K, V>;
    static createFromStringMap(stringMap: any): Map<string, any>;
    static createFromPairs(pairs: List<any>): Map<any, any>;
    static get(m: any, k: any): any;
    static set(m: any, k: any, v: any): void;
    static contains(m: any, k: any): any;
    static forEach(m: any, fn: any): void;
    static size(m: any): any;
    static delete(m: any, k: any): void;
    static clear(m: any): void;
    static clearValues(m: any): void;
    static iterable(m: any): any;
    static keys(m: any): any;
    static values(m: any): any;
}
/**
 * Wraps Javascript Objects
 */
export declare class StringMapWrapper {
    static create(): Object;
    static contains(map: any, key: any): any;
    static get(map: any, key: any): any;
    static set(map: any, key: any, value: any): void;
    static keys(map: any): string[];
    static isEmpty(map: any): boolean;
    static delete(map: any, key: any): void;
    static forEach(map: any, callback: any): void;
    static merge(m1: any, m2: any): {};
    static equals(m1: any, m2: any): boolean;
}
export declare class ListWrapper {
    static create(): List<any>;
    static createFixedSize(size: any): List<any>;
    static get(m: any, k: any): any;
    static set(m: any, k: any, v: any): void;
    static clone(array: List<any>): any[];
    static map(array: any, fn: any): any;
    static forEach(array: List<any>, fn: Function): void;
    static push(array: any, el: any): void;
    static first(array: any): any;
    static last(array: any): any;
    static find(list: List<any>, pred: Function): any;
    static indexOf(array: List<any>, value: any, startIndex?: number): number;
    static reduce<T, E>(list: List<T>, fn: (accumValue: E, currentValue: T, currentIndex: number, array: T[]) => E, init: E): E;
    static filter(array: any, pred: Function): any;
    static any(list: List<any>, pred: Function): boolean;
    static contains(list: List<any>, el: any): boolean;
    static reversed(array: any): any[];
    static concat(a: any, b: any): any;
    static isList(list: any): boolean;
    static insert(list: any, index: int, value: any): void;
    static removeAt(list: any, index: int): any;
    static removeAll(list: any, items: any): void;
    static removeLast<T>(list: List<T>): T;
    static remove(list: any, el: any): boolean;
    static clear(list: any): void;
    static join(list: any, s: any): any;
    static isEmpty(list: any): boolean;
    static fill(list: List<any>, value: any, start?: int, end?: int): void;
    static equals(a: List<any>, b: List<any>): boolean;
    static slice<T>(l: List<T>, from?: int, to?: int): List<T>;
    static splice<T>(l: List<T>, from: int, length: int): List<T>;
    static sort<T>(l: List<T>, compareFn: (a: T, b: T) => number): void;
}
export declare function isListLikeIterable(obj: any): boolean;
export declare function iterateListLike(obj: any, fn: Function): void;
export declare class SetWrapper {
    static createFromList<T>(lst: List<T>): Set<T>;
    static has<T>(s: Set<T>, key: T): boolean;
}
