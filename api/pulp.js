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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { BaseAPI } from './base';
var PulpAPI = /** @class */ (function (_super) {
    __extends(PulpAPI, _super);
    function PulpAPI() {
        var _this = _super.call(this, API_HOST + PULP_API_BASE_PATH) || this;
        _this.useOrdering = false; // translate ?sort into ?ordering in list()
        return _this;
    }
    PulpAPI.prototype.list = function (params, apiPath) {
        var changedParams = __assign({}, params);
        if (this.useOrdering && changedParams['sort']) {
            changedParams['ordering'] = changedParams['sort'];
            delete changedParams['sort'];
        }
        return _super.prototype.list.call(this, changedParams, apiPath);
    };
    return PulpAPI;
}(BaseAPI));
export { PulpAPI };
//# sourceMappingURL=pulp.js.map