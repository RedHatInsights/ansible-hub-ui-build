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
import { smartUpdate } from './remotes';
var API = /** @class */ (function (_super) {
    __extends(API, _super);
    function API() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.apiPath = _this.getUIPath('execution-environments/registries/');
        return _this;
    }
    // list(params?)
    // create(data)
    // get(name)
    // delete(name)
    API.prototype.smartUpdate = function (pk, newValue, oldValue) {
        var reducedData = smartUpdate(newValue, oldValue);
        return _super.prototype.update.call(this, pk, reducedData);
    };
    API.prototype.update = function (_id, _obj) {
        throw 'use smartUpdate()';
    };
    API.prototype.index = function (id) {
        return this.http.post(this.apiPath + id + '/index/', {});
    };
    API.prototype.sync = function (id) {
        return this.http.post(this.apiPath + id + '/sync/', {});
    };
    return API;
}(HubAPI));
export var ExecutionEnvironmentRegistryAPI = new API();
//# sourceMappingURL=execution-environment-registry.js.map