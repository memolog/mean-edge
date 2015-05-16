/**
 *
 *
 * @exportedAs angular2/di
 */
var OpaqueToken = (function () {
    function OpaqueToken(desc) {
        this._desc = "Token(" + desc + ")";
    }
    OpaqueToken.prototype.toString = function () { return this._desc; };
    return OpaqueToken;
})();
exports.OpaqueToken = OpaqueToken;
//# sourceMappingURL=opaque_token.js.map