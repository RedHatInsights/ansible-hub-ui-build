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
// simplified version of smartUpdate from remote.ts
function smartUpdate(remote, unmodifiedRemote) {
    // Pulp complains if auth_url gets sent with a request that doesn't include a
    // valid token, even if the token exists in the database and isn't being changed.
    // To solve this issue, simply delete auth_url from the request if it hasn't
    // been updated by the user.
    if (remote.auth_url === unmodifiedRemote.auth_url) {
        delete remote.auth_url;
    }
    for (var _i = 0, _a = Object.keys(remote); _i < _a.length; _i++) {
        var field = _a[_i];
        if (remote[field] === '') {
            remote[field] = null;
        }
        // API returns headers:null bull doesn't accept it .. and we don't edit headers
        if (remote[field] === null && unmodifiedRemote[field] === null) {
            delete remote[field];
        }
    }
    return remote;
}
var API = /** @class */ (function (_super) {
    __extends(API, _super);
    function API() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.apiPath = 'remotes/ansible/collection/';
        _this.useOrdering = true;
        return _this;
    }
    // create(data)
    // delete(uuid)
    // list(params?)
    API.prototype.smartUpdate = function (pk, newValue, oldValue) {
        var reducedData = smartUpdate(newValue, oldValue);
        return _super.prototype.update.call(this, pk, reducedData);
    };
    API.prototype.update = function (_id, _obj) {
        throw 'use smartUpdate()';
    };
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
export var AnsibleRemoteAPI = new API();
//# sourceMappingURL=ansible-remote.js.map