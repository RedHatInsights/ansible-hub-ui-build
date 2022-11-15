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
        _this.apiPath = _this.getUIPath('execution-environments/remotes/');
        return _this;
    }
    // list(params?)
    // create(data)
    // get(pk)
    // update(pk, data)
    API.prototype.sync = function (name) {
        var apiPath = 'v3/plugin/execution-environments/repositories/';
        return this.http.post(apiPath + name + '/_content/sync/', {});
    };
    return API;
}(HubAPI));
export var ExecutionEnvironmentRemoteAPI = new API();
//# sourceMappingURL=execution-environment-remote.js.map