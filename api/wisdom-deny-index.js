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
        _this.apiPath = _this.getUIPath('ai_deny_index/');
        return _this;
    }
    API.prototype.isInDenyIndex = function (scope, reference) {
        return this.http
            .get(this.apiPath +
            "?scope=".concat(encodeURIComponent(scope), "&reference=").concat(encodeURIComponent(reference)))
            .then(function (_a) {
            var data = _a.data;
            return data.count > 0;
        });
    };
    API.prototype.removeFromDenyIndex = function (scope, reference) {
        var removePath = this.apiPath +
            encodeURIComponent(scope) +
            '/' +
            encodeURIComponent(reference) +
            '/';
        return this.http.delete(removePath);
    };
    API.prototype.addToDenyIndex = function (scope, reference) {
        var params = { reference: reference };
        var addPath = this.apiPath + encodeURIComponent(scope) + '/';
        return this.http.post(addPath, params);
    };
    return API;
}(HubAPI));
export { API };
export var WisdomDenyIndexAPI = new API();
//# sourceMappingURL=wisdom-deny-index.js.map