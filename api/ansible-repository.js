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
    API.prototype.listVersions = function (pulp_id, params) {
        return this.list(params, this.apiPath + pulp_id + '/versions/');
    };
    // delete(pulp_id: string)
    API.prototype.sync = function (pulp_id, body) {
        if (body === void 0) { body = {}; }
        return this.http.post(this.apiPath + pulp_id + '/sync/', body);
    };
    API.prototype.revert = function (pulp_id, version_href) {
        return this.http.post(this.apiPath + pulp_id + '/modify/', {
            base_version: version_href,
        });
    };
    API.prototype.addContent = function (pulp_id, collection_version_hrefs) {
        return this.http.post(this.apiPath + pulp_id + '/modify/', {
            add_content_units: collection_version_hrefs,
        });
    };
    API.prototype.removeContent = function (pulp_id, collection_version_href) {
        return this.http.post(this.apiPath + pulp_id + '/modify/', {
            remove_content_units: [collection_version_href],
        });
    };
    API.prototype.listRoles = function (pulp_id, params) {
        return _super.prototype.list.call(this, params, this.apiPath + pulp_id + '/list_roles/');
    };
    API.prototype.addRole = function (pulp_id, role) {
        return _super.prototype.create.call(this, role, this.apiPath + pulp_id + '/add_role/');
    };
    API.prototype.myPermissions = function (pulp_id, params) {
        return _super.prototype.list.call(this, params, this.apiPath + pulp_id + '/my_permissions/');
    };
    API.prototype.removeRole = function (pulp_id, role) {
        return _super.prototype.create.call(this, role, this.apiPath + pulp_id + '/remove_role/');
    };
    API.prototype.copyCollectionVersion = function (pulp_id, body) {
        return this.http.post(this.apiPath + pulp_id + '/copy_collection_version/', body);
    };
    API.prototype.moveCollectionVersion = function (pulp_id, body) {
        return this.http.post(this.apiPath + pulp_id + '/move_collection_version/', body);
    };
    return API;
}(PulpAPI));
export var AnsibleRepositoryAPI = new API();
//# sourceMappingURL=ansible-repository.js.map