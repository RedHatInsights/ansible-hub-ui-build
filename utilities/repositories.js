var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
import { t } from '@lingui/macro';
import { Repositories } from 'src/api/repositories';
import { waitForTaskUrl } from 'src/utilities';
import { parsePulpIDFromURL } from 'src/utilities/parse-pulp-id';
var RepositoriesUtils = /** @class */ (function () {
    function RepositoriesUtils() {
    }
    RepositoriesUtils.listApproved = function () {
        function getAll() {
            return __awaiter(this, void 0, void 0, function () {
                var list, page, pageSize, i, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            list = [];
                            page = 0;
                            pageSize = 100;
                            i = 0;
                            _a.label = 1;
                        case 1:
                            if (!(i < 10)) return [3 /*break*/, 4];
                            return [4 /*yield*/, Repositories.http.get("".concat(Repositories.apiPath, "?offset=").concat(page, "&limit=").concat(pageSize, "&pulp_label_select=").concat(encodeURIComponent('pipeline=approved')))];
                        case 2:
                            result = _a.sent();
                            list = list.concat(result.data.results);
                            if (list.length >= result.data.count) {
                                return [2 /*return*/, list];
                            }
                            page += pageSize;
                            _a.label = 3;
                        case 3:
                            i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        return getAll();
    };
    RepositoriesUtils.deleteOrAddCollection = function (repoName, collectionVersion_pulp_href, add) {
        return __awaiter(this, void 0, void 0, function () {
            var data, repo, pulp_id, addList, removeList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Repositories.getRepository({ name: repoName })];
                    case 1:
                        data = _a.sent();
                        if (data.data.results.length == 0) {
                            return [2 /*return*/, Promise.reject({ error: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Repository ", " not found."], ["Repository ", " not found."])), repoName) })];
                        }
                        repo = data.data.results[0];
                        pulp_id = parsePulpIDFromURL(repo.pulp_href);
                        addList = [];
                        removeList = [];
                        if (add) {
                            addList.push(collectionVersion_pulp_href);
                        }
                        else {
                            removeList.push(collectionVersion_pulp_href);
                        }
                        return [4 /*yield*/, Repositories.modify(pulp_id, addList, removeList, repo.latest_version_href)];
                    case 2:
                        data = _a.sent();
                        return [4 /*yield*/, waitForTaskUrl(data.data['task'])];
                    case 3:
                        data = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RepositoriesUtils.deleteCollection = function (repoName, collectionVersion_pulp_href) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, RepositoriesUtils.deleteOrAddCollection(repoName, collectionVersion_pulp_href, false)];
            });
        });
    };
    RepositoriesUtils.addCollection = function (repoName, collectionVersion_pulp_href) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, RepositoriesUtils.deleteOrAddCollection(repoName, collectionVersion_pulp_href, true)];
            });
        });
    };
    return RepositoriesUtils;
}());
export { RepositoriesUtils };
var templateObject_1;
//# sourceMappingURL=repositories.js.map