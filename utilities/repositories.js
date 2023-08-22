var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { t } from '@lingui/macro';
import { AnsibleRepositoryAPI, CollectionVersionAPI, } from 'src/api';
import { parsePulpIDFromURL } from './parse-pulp-id';
import { waitForTaskUrl } from './wait-for-task';
function getAll(additionalParams) {
    if (additionalParams === void 0) { additionalParams = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var list, page, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    list = [];
                    page = 1;
                    _a.label = 1;
                case 1:
                    if (!(page <= 10)) return [3 /*break*/, 4];
                    return [4 /*yield*/, AnsibleRepositoryAPI.list(__assign(__assign({}, additionalParams), { page: page, page_size: 100 }))];
                case 2:
                    result = _a.sent();
                    list = list.concat(result.data.results);
                    if (list.length >= result.data.count) {
                        return [2 /*return*/, list];
                    }
                    _a.label = 3;
                case 3:
                    page++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
var RepositoriesUtils = /** @class */ (function () {
    function RepositoriesUtils() {
    }
    RepositoriesUtils.listApproved = function () {
        return getAll({ pulp_label_select: 'pipeline=approved' });
    };
    RepositoriesUtils.listAll = function () {
        return getAll();
    };
    RepositoriesUtils.deleteCollection = function (repoName, collectionVersion_pulp_href) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function () {
            var repo, task;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, AnsibleRepositoryAPI.list({ name: repoName, page_size: 1 })];
                    case 1:
                        repo = (_c = (_b = (_a = (_f.sent())) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.results) === null || _c === void 0 ? void 0 : _c[0];
                        if (!repo) {
                            return [2 /*return*/, Promise.reject({ error: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Repository ", " not found."], ["Repository ", " not found."])), repoName) })];
                        }
                        return [4 /*yield*/, AnsibleRepositoryAPI.removeContent(parsePulpIDFromURL(repo.pulp_href), collectionVersion_pulp_href)];
                    case 2:
                        task = (_e = (_d = (_f.sent())) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.task;
                        return [4 /*yield*/, waitForTaskUrl(task)];
                    case 3:
                        _f.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RepositoriesUtils.pushToOrFilterOutCollections = function (selectedCollection, collections) {
        // check if collection is already selected
        var selectedItem = collections.find(function (_a) {
            var cv = _a.collection_version, repository = _a.repository;
            return cv.pulp_href === selectedCollection.collection_version.pulp_href &&
                repository.pulp_href === selectedCollection.repository.pulp_href;
        });
        // if collection is not selected, add it to selected items
        if (!selectedItem) {
            return __spreadArray(__spreadArray([], collections, true), [selectedCollection], false);
        }
        // unselect collection
        return collections.filter(function (_a) {
            var cv = _a.collection_version, repository = _a.repository;
            return cv.pulp_href !== selectedCollection.collection_version.pulp_href ||
                repository.pulp_href !== selectedCollection.repository.pulp_href;
        });
    };
    RepositoriesUtils.getCollectionRepoList = function (collection) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, namespace, version, collectionInRepos, collectionRepos;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = collection.collection_version, name = _a.name, namespace = _a.namespace, version = _a.version;
                        return [4 /*yield*/, CollectionVersionAPI.list({
                                namespace: namespace,
                                name: name,
                                version: version,
                                page_size: 100,
                                offset: 0,
                            })];
                    case 1:
                        collectionInRepos = _b.sent();
                        collectionRepos = collectionInRepos.data.data.map(function (_a) {
                            var repository = _a.repository;
                            return repository.name;
                        });
                        return [2 /*return*/, collectionRepos];
                }
            });
        });
    };
    return RepositoriesUtils;
}());
export { RepositoriesUtils };
var templateObject_1;
//# sourceMappingURL=repositories.js.map