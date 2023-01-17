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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import axios from 'axios';
import Cookies from 'js-cookie';
import { Constants } from 'src/constants';
import { ParamHelper } from 'src/utilities';
var BaseAPI = /** @class */ (function () {
    function BaseAPI(apiBaseUrl) {
        var _this = this;
        this.http = axios.create({
            baseURL: apiBaseUrl,
            paramsSerializer: {
                serialize: function (params) { return ParamHelper.getQueryString(params); },
            },
        });
        this.http.interceptors.request.use(function (request) { return _this.authHandler(request); });
    }
    BaseAPI.prototype.mapPageToOffset = function (p) {
        // Need to copy the object to make sure we aren't accidentally
        // setting page state
        var params = __assign({}, p);
        var pageSize = parseInt(params['page_size']) || Constants.DEFAULT_PAGE_SIZE;
        var page = parseInt(params['page']) || 1;
        delete params['page'];
        delete params['page_size'];
        params['offset'] = page * pageSize - pageSize;
        params['limit'] = pageSize;
        return params;
    };
    BaseAPI.prototype.list = function (params, apiPath) {
        // The api uses offset/limit for pagination. I think this is confusing
        // for params on the front end, so we're going to use page/page size
        // for the URL params and just map it to whatever the api expects.
        return this.http.get(this.getPath(apiPath), {
            params: this.mapPageToOffset(params),
        });
    };
    BaseAPI.prototype.get = function (id, apiPath) {
        return this.http.get(this.getPath(apiPath) + id + '/');
    };
    BaseAPI.prototype.update = function (id, data, apiPath) {
        return this.http.put(this.getPath(apiPath) + id + '/', data);
    };
    BaseAPI.prototype.create = function (data, apiPath) {
        return this.http.post(this.getPath(apiPath), data);
    };
    BaseAPI.prototype.delete = function (id, apiPath) {
        return this.http.delete(this.getPath(apiPath) + id + '/');
    };
    BaseAPI.prototype.patch = function (id, data, apiPath) {
        return this.http.patch(this.getPath(apiPath) + id + '/', data);
    };
    BaseAPI.prototype.getPath = function (apiPath) {
        return apiPath || this.apiPath;
    };
    BaseAPI.prototype.authHandler = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(DEPLOYMENT_MODE === Constants.INSIGHTS_DEPLOYMENT_MODE)) return [3 /*break*/, 2];
                        return [4 /*yield*/, window.insights.chrome.auth.getUser()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (DEPLOYMENT_MODE === Constants.STANDALONE_DEPLOYMENT_MODE) {
                            request.headers['X-CSRFToken'] = Cookies.get('csrftoken');
                        }
                        return [2 /*return*/, request];
                }
            });
        });
    };
    return BaseAPI;
}());
export { BaseAPI };
//# sourceMappingURL=base.js.map