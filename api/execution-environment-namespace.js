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
        _this.apiPath = 'pulp_container/namespaces/';
        return _this;
    }
    API.prototype.listRoles = function (id, params) {
        return _super.prototype.list.call(this, params, this.apiPath + id + '/list_roles/');
    };
    API.prototype.addRole = function (id, role) {
        return _super.prototype.create.call(this, role, this.apiPath + id + '/add_role/');
    };
    API.prototype.myPermissions = function (id, params) {
        return _super.prototype.list.call(this, params, this.apiPath + id + '/my_permissions/');
    };
    API.prototype.removeRole = function (id, role) {
        return _super.prototype.create.call(this, role, this.apiPath + id + '/remove_role/');
    };
    return API;
}(PulpAPI));
export var ExecutionEnvironmentNamespaceAPI = new API();
//# sourceMappingURL=execution-environment-namespace.js.map