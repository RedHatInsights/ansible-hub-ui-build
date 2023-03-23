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
        _this.apiPath = '/repositories/ansible/ansible/';
        return _this;
    }
    API.prototype.getRepository = function (data) {
        return this.http.get("".concat(this.apiPath, "?name=").concat(data.name));
    };
    API.prototype.listApproved = function () {
        return this.http.get("".concat(this.apiPath, "?pulp_label_select=").concat(encodeURIComponent('pipeline=approved')));
    };
    API.prototype.list = function (params) {
        return _super.prototype.list.call(this, params, this.apiPath);
    };
    API.prototype.copyCollectionVersion = function (pulp_id, collection_versions, destination_repositories, signing_service) {
        var params = {
            collection_versions: collection_versions,
            destination_repositories: destination_repositories,
        };
        if (signing_service) {
            params['signing_service'] = signing_service;
        }
        return this.http.post(this.apiPath + "".concat(pulp_id, "/copy_collection_version/"), params);
    };
    API.prototype.moveCollectionVersion = function (pulp_id, collection_versions, destination_repositories, signing_service) {
        var params = {
            collection_versions: collection_versions,
            destination_repositories: destination_repositories,
        };
        if (signing_service) {
            params['signing_service'] = signing_service;
        }
        return this.http.post(this.apiPath + "".concat(pulp_id, "/move_collection_version/"), params);
    };
    API.prototype.modify = function (pulp_id, add_content_units, remove_content_units, base_version) {
        var params = {
            add_content_units: add_content_units,
            remove_content_units: remove_content_units,
            base_version: base_version,
        };
        return this.http.post(this.apiPath + "".concat(pulp_id, "/modify/"), params);
    };
    return API;
}(PulpAPI));
export var Repositories = new API();
//# sourceMappingURL=repositories.js.map