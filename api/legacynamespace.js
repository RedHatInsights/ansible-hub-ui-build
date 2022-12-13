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
import { LegacyAPI } from './legacy';
import axios from 'axios';
var API = /** @class */ (function (_super) {
    __extends(API, _super);
    function API() {
        var _this = _super.call(this) || this;
        _this.apiPath = _this.getApiPath('');
        return _this;
    }
    API.prototype.list = function (params) {
        var path = this.apiPath + 'namespaces/';
        // clean null'ish params
        if (params !== undefined && params !== null) {
            for (var _i = 0, _a = Object.entries(params); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                if (value === null || value === undefined || value === '') {
                    delete params[key];
                }
            }
        }
        return _super.prototype.list.call(this, params, path).then(function (response) { return (__assign(__assign({}, response), { data: __assign({}, response.data) })); });
    };
    API.prototype.getCancelToken = function () {
        return axios.CancelToken.source();
    };
    return API;
}(LegacyAPI));
export { API };
export var LegacyNamespaceAPI = new API();
//# sourceMappingURL=legacynamespace.js.map