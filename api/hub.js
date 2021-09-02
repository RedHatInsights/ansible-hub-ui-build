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
var HubAPI = /** @class */ (function (_super) {
    __extends(HubAPI, _super);
    function HubAPI() {
        var _this = _super.call(this, API_HOST + API_BASE_PATH) || this;
        _this.UI_API_VERSION = 'v1';
        return _this;
    }
    // Use this function to get paths in the _ui API. That will ensure the API version
    // gets updated when it changes
    HubAPI.prototype.getUIPath = function (url) {
        return "_ui/" + this.UI_API_VERSION + "/" + url;
    };
    return HubAPI;
}(BaseAPI));
export { HubAPI };
//# sourceMappingURL=hub.js.map