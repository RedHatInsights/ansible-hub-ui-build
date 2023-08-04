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
import { repositoryBasePath } from 'src/utilities';
import { HubAPI } from './hub';
function filterContents(contents) {
    if (contents) {
        return contents.filter(function (item) { return !['doc_fragments', 'module_utils'].includes(item.content_type); });
    }
    return contents;
}
function filterListItem(item) {
    return __assign(__assign({}, item), { latest_version: __assign(__assign({}, item.latest_version), { contents: null, metadata: __assign(__assign({}, item.latest_version.metadata), { contents: filterContents(item.latest_version.metadata.contents) }) }) });
}
var API = /** @class */ (function (_super) {
    __extends(API, _super);
    function API() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.apiPath = _this.getUIPath('repo/');
        return _this;
    }
    API.prototype.list = function (params, repo) {
        var path = this.apiPath + repo + '/';
        return _super.prototype.list.call(this, params, path).then(function (response) { return (__assign(__assign({}, response), { data: __assign(__assign({}, response.data), { 
                // remove module_utils, doc_fragments from each item
                data: response.data.data.map(filterListItem) }) })); });
    };
    API.prototype.setDeprecation = function (_a) {
        var _b = _a.collection_version, namespace = _b.namespace, name = _b.name, repository = _a.repository, is_deprecated = _a.is_deprecated;
        return __awaiter(this, void 0, void 0, function () {
            var distroBasePath;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, repositoryBasePath(repository.name, repository.pulp_href)];
                    case 1:
                        distroBasePath = _c.sent();
                        return [2 /*return*/, this.patch("".concat(namespace, "/").concat(name), {
                                deprecated: !is_deprecated,
                            }, "v3/plugin/ansible/content/".concat(distroBasePath, "/collections/index/"))];
                }
            });
        });
    };
    API.prototype.upload = function (data, progressCallback, cancelToken) {
        var formData = new FormData();
        formData.append('file', data.file);
        // formData.append('sha256', artifact.sha256);
        var config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: progressCallback,
        };
        if (cancelToken) {
            config['cancelToken'] = cancelToken.token;
        }
        if (data.distro_base_path) {
            return this.http.post("v3/plugin/ansible/content/".concat(data.distro_base_path, "/collections/artifacts/"), formData, config);
        }
        else {
            return this.http.post('v3/artifacts/collections/', formData, config);
        }
    };
    API.prototype.getCancelToken = function () {
        return axios.CancelToken.source();
    };
    API.prototype.getDownloadURL = function (repository, namespace, name, version) {
        return __awaiter(this, void 0, void 0, function () {
            var distroBasePath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repositoryBasePath(repository.name, repository.pulp_href)];
                    case 1:
                        distroBasePath = _a.sent();
                        return [2 /*return*/, this.http
                                .get("v3/plugin/ansible/content/".concat(distroBasePath, "/collections/index/").concat(namespace, "/").concat(name, "/versions/").concat(version, "/"))
                                .then(function (_a) {
                                var download_url = _a.data.download_url;
                                return download_url;
                            })];
                }
            });
        });
    };
    API.prototype.deleteCollectionVersion = function (_a) {
        var _b = _a.collection_version, namespace = _b.namespace, name = _b.name, version = _b.version, repository = _a.repository;
        return __awaiter(this, void 0, void 0, function () {
            var distroBasePath;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, repositoryBasePath(repository.name, repository.pulp_href)];
                    case 1:
                        distroBasePath = _c.sent();
                        return [2 /*return*/, this.http.delete("v3/plugin/ansible/content/".concat(distroBasePath, "/collections/index/").concat(namespace, "/").concat(name, "/versions/").concat(version, "/"))];
                }
            });
        });
    };
    API.prototype.deleteCollection = function (_a) {
        var _b = _a.collection_version, namespace = _b.namespace, name = _b.name, repository = _a.repository;
        return __awaiter(this, void 0, void 0, function () {
            var distroBasePath;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, repositoryBasePath(repository.name, repository.pulp_href)];
                    case 1:
                        distroBasePath = _c.sent();
                        return [2 /*return*/, this.http.delete("v3/plugin/ansible/content/".concat(distroBasePath, "/collections/index/").concat(namespace, "/").concat(name, "/"))];
                }
            });
        });
    };
    API.prototype.getUsedDependenciesByCollection = function (namespace, collection, params, cancelToken) {
        if (params === void 0) { params = {}; }
        if (cancelToken === void 0) { cancelToken = undefined; }
        return this.http.get(this.getUIPath("collection-versions/?dependency=".concat(namespace, ".").concat(collection)), { params: this.mapPageToOffset(params), cancelToken: cancelToken === null || cancelToken === void 0 ? void 0 : cancelToken.token });
    };
    API.prototype.getSignatures = function (repository, namespace, name, version) {
        return __awaiter(this, void 0, void 0, function () {
            var distroBasePath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repositoryBasePath(repository.name, repository.pulp_href)];
                    case 1:
                        distroBasePath = _a.sent();
                        return [2 /*return*/, this.http.get("v3/plugin/ansible/content/".concat(distroBasePath, "/collections/index/").concat(namespace, "/").concat(name, "/versions/").concat(version, "/"))];
                }
            });
        });
    };
    API.prototype.getContent = function (namespace, name, version) {
        return _super.prototype.list.call(this, {
            namespace: namespace,
            name: name,
            version: version,
        }, "pulp/api/v3/content/ansible/collection_versions/");
    };
    return API;
}(HubAPI));
export { API };
export var CollectionAPI = new API();
//# sourceMappingURL=collection.js.map