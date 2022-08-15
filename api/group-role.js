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
        _this.apiPath = 'groups/';
        _this.useOrdering = true;
        return _this;
    }
    API.prototype.listRoles = function (groupId, params) {
        return _super.prototype.list.call(this, params, "".concat(this.apiPath).concat(groupId, "/roles/"));
    };
    API.prototype.removeRole = function (groupId, roleId) {
        return this.http.delete("".concat(this.apiPath).concat(groupId, "/roles/").concat(roleId, "/"));
    };
    API.prototype.addRoleToGroup = function (groupId, role) {
        return this.http.post("".concat(this.apiPath).concat(groupId, "/roles/"), {
            role: role.name,
            // required field, can be empty
            content_object: null,
        });
    };
    return API;
}(PulpAPI));
export var GroupRoleAPI = new API();
//# sourceMappingURL=group-role.js.map