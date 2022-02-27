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
        var _this = _super.call(this) || this;
        _this.apiPath = _this.getUIPath('groups/');
        return _this;
    }
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
}(HubAPI));
export var GroupAPI = new API();
//# sourceMappingURL=group.js.map