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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { PulpAPI } from './pulp';
var API = /** @class */ (function (_super) {
    __extends(API, _super);
    function API() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.apiPath = 'roles/';
        _this.useOrdering = true;
        return _this;
    }
    API.prototype.updatePermissions = function (id, data) {
        return this.http.patch(this.apiPath + id, data);
    };
    // create(data)
    // get(params?)
    API.prototype.list = function (params, for_object_type) {
        var newParams = __assign({}, params);
        if (for_object_type) {
            // ?for_object_type=/api/automation-hub/pulp/api/v3/.../
            // list visible in http://localhost:8002/api/automation-hub/pulp/api/v3/
            newParams.for_object_type = PULP_API_BASE_PATH + for_object_type + '/';
        }
        return _super.prototype.list.call(this, newParams);
    };
    API.prototype.getPermissions = function (id) {
        return this.http.get(this.apiPath + id + '/model-permissions/?limit=100000&offset=0');
    };
    API.prototype.addPermission = function (id, data) {
        return this.http.post(this.apiPath + id + '/model-permissions/', data);
    };
    API.prototype.removePermission = function (id, permissionId) {
        return this.http.delete(this.apiPath + id + '/model-permissions/' + permissionId + '/');
    };
    return API;
}(PulpAPI));
export { API };
export var RoleAPI = new API();
//# sourceMappingURL=role.js.map