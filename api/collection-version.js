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
import { HubAPI } from './hub';
var API = /** @class */ (function (_super) {
    __extends(API, _super);
    function API() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.apiPath = _this.getUIPath('collection-versions/');
        return _this;
    }
    API.prototype.setRepository = function (namespace, name, version, originalRepo, destinationRepo) {
        var path = "v3/collections/".concat(namespace, "/").concat(name, "/versions/").concat(version, "/move/").concat(originalRepo, "/").concat(destinationRepo, "/");
        return this.create({}, path);
    };
    API.prototype.copyToRepository = function (namespace, name, version, originalRepo, destinationRepo) {
        var path = "v3/collections/".concat(namespace, "/").concat(name, "/versions/").concat(version, "/copy/").concat(originalRepo, "/").concat(destinationRepo, "/");
        return this.create({}, path);
    };
    API.prototype.get = function (id) {
        return _super.prototype.get.call(this, id, 'pulp/api/v3/content/ansible/collection_versions/');
    };
    return API;
}(HubAPI));
export { API };
export var CollectionVersionAPI = new API();
//# sourceMappingURL=collection-version.js.map