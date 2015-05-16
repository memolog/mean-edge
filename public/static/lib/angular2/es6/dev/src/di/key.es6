import { MapWrapper } from 'angular2/src/facade/collection';
import { stringify } from 'angular2/src/facade/lang';
import { TypeLiteral } from './type_literal';
export { TypeLiteral } from './type_literal';
// TODO: uncoment `int` once https://github.com/angular/angular/issues/1414 is fixed
/**
 * A unique object used for retrieving items from the {@link Injector}.
 *
 * Keys have:
 * - a system-wide unique `id`.
 * - a `token`, usually the `Type` of the instance.
 *
 * Keys are used internally by the {@link Injector} because their system-wide unique `id`s allow the
 * injector to index in arrays rather than looking up items in maps.
 *
 * @exportedAs angular2/di
 */
export class Key {
    /**
     * @private
     */
    constructor(token, id) {
        this.token = token;
        this.id = id;
    }
    get displayName() { return stringify(this.token); }
    /**
     * Retrieves a `Key` for a token.
     */
    static get(token) { return _globalKeyRegistry.get(token); }
    /**
     * @returns the number of keys registered in the system.
     */
    static get numberOfKeys() { return _globalKeyRegistry.numberOfKeys; }
}
/**
 * @private
 */
export class KeyRegistry {
    constructor() {
        this._allKeys = MapWrapper.create();
    }
    get(token) {
        if (token instanceof Key)
            return token;
        // TODO: workaround for https://github.com/Microsoft/TypeScript/issues/3123
        var theToken = token;
        if (token instanceof TypeLiteral) {
            theToken = token.type;
        }
        token = theToken;
        if (MapWrapper.contains(this._allKeys, token)) {
            return MapWrapper.get(this._allKeys, token);
        }
        var newKey = new Key(token, Key.numberOfKeys);
        MapWrapper.set(this._allKeys, token, newKey);
        return newKey;
    }
    get numberOfKeys() { return MapWrapper.size(this._allKeys); }
}
var _globalKeyRegistry = new KeyRegistry();
//# sourceMappingURL=key.js.map