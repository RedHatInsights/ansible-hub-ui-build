var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { PulpAPI } from './pulp';
var API = /** @class */ (function (_super) {
    __extends(API, _super);
    function API() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.apiPath = 'repositories/container/container-push/';
        return _this;
    }
    API.prototype.tag = function (repositoryID, tag, digest) {
        return this.http.post("".concat(this.apiPath).concat(repositoryID, "/tag/"), {
            digest: digest,
            tag: tag,
        });
    };
    API.prototype.untag = function (repositoryID, tag, digest) {
        return this.http.post("".concat(this.apiPath).concat(repositoryID, "/untag/"), {
            digest: digest,
            tag: tag,
        });
    };
    return API;
}(PulpAPI));
export var ContainerTagAPI = new API();
//# sourceMappingURL=container-tag.js.map