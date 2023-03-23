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
        _this.apiPath = 'repositories/ansible/ansible/';
        _this.useOrdering = true;
        return _this;
    }
    // list(params?)
    API.prototype.listVersions = function (uuid, params) {
        return this.list(params, this.getPath(null) + uuid + '/versions/');
    };
    // delete(uuid)
    API.prototype.sync = function (id) {
        return this.http.post(this.apiPath + id + '/sync/', {});
    };
    return API;
}(PulpAPI));
export var AnsibleRepositoryAPI = new API();
//# sourceMappingURL=ansible-repository.js.map