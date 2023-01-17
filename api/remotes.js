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
import { clearSetFieldsFromRequest } from 'src/utilities';
import { HubAPI } from './hub';
// removes unchanged values and write only fields before updating
export function smartUpdate(remote, unmodifiedRemote) {
    // Deletes any write only fields from the object that are market as is_set.
    // This is to prevent accidentally clearing fields that weren't updated.
    // TODO: clearing set fields from the response will be unnecesary if the API
    // stops returning field: null on write only fields
    var reducedData = clearSetFieldsFromRequest(remote, remote.write_only_fields);
    // Pulp complains if auth_url gets sent with a request that doesn't include a
    // valid token, even if the token exists in the database and isn't being changed.
    // To solve this issue, simply delete auth_url from the request if it hasn't
    // been updated by the user.
    if (reducedData.auth_url === unmodifiedRemote.auth_url) {
        delete reducedData['auth_url'];
    }
    for (var _i = 0, _a = Object.keys(reducedData); _i < _a.length; _i++) {
        var field = _a[_i];
        if (reducedData[field] === '') {
            reducedData[field] = null;
        }
    }
    return reducedData;
}
var API = /** @class */ (function (_super) {
    __extends(API, _super);
    function API() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.apiPath = _this.getUIPath('remotes/');
        return _this;
    }
    // can't override the base class update method because this function takes a
    // third parameter and update only takes 2
    API.prototype.smartUpdate = function (distribution, remote, unmodifiedRemote) {
        var reducedData = smartUpdate(remote, unmodifiedRemote);
        return this.http.put("content/".concat(distribution, "/v3/sync/config/"), reducedData);
    };
    API.prototype.update = function (_id, _obj) {
        throw 'use smartUpdate()';
    };
    API.prototype.sync = function (distribution) {
        return this.http.post("content/".concat(distribution, "/v3/sync/"), {});
    };
    return API;
}(HubAPI));
export var RemoteAPI = new API();
//# sourceMappingURL=remotes.js.map