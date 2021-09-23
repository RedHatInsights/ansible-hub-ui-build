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
        _this.apiPath = _this.getUIPath('execution-environments/repositories/');
        return _this;
    }
    API.prototype.readme = function (name) {
        return this.http.get(this.apiPath + name + '/_content/readme/');
    };
    API.prototype.saveReadme = function (name, readme) {
        return this.http.put(this.apiPath + name + '/_content/readme/', readme);
    };
    API.prototype.images = function (name, params) {
        return this.http.get(this.apiPath + name + '/_content/images/', {
            params: this.mapPageToOffset(params),
        });
    };
    API.prototype.image = function (name, digest) {
        return this.http.get("" + this.apiPath + name + "/_content/images/" + digest + "/");
    };
    API.prototype.tags = function (name, params) {
        return this.http.get(this.apiPath + name + '/_content/tags/', {
            params: this.mapPageToOffset(params),
        });
    };
    return API;
}(HubAPI));
export var ExecutionEnvironmentAPI = new API();
//# sourceMappingURL=execution-environment.js.map