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
import { BaseAPI } from './base';
var LegacyAPI = /** @class */ (function (_super) {
    __extends(LegacyAPI, _super);
    function LegacyAPI() {
        var _this = _super.call(this, API_HOST + API_BASE_PATH) || this;
        _this.API_VERSION = 'v1';
        return _this;
    }
    LegacyAPI.prototype.get = function (apiPath) {
        var fullPath = 'v1/' + apiPath;
        if (fullPath.includes('?')) {
            return this.http.get(this.getPath(fullPath));
        }
        else {
            return this.http.get(this.getPath(fullPath) + '/');
        }
    };
    LegacyAPI.prototype.getApiPath = function (url) {
        var newUrl = "/".concat(this.API_VERSION, "/").concat(url);
        return newUrl;
    };
    return LegacyAPI;
}(BaseAPI));
export { LegacyAPI };
//# sourceMappingURL=legacy.js.map