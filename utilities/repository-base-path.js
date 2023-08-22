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
import { AnsibleDistributionAPI, AnsibleRepositoryAPI } from 'src/api';
// returns the preferred distribution base_path given a repo name
// if there is a distribution with the same name as the repository, it will be used (as long as it's connected to the right repo too)
// if not, the oldest will be used
// reject if no distributions or repository
// optional pulp_href param skips repo lookup
export function repositoryBasePath(name, pulp_href) {
    var _this = this;
    return Promise.all([
        pulp_href
            ? Promise.resolve({ name: name, pulp_href: pulp_href })
            : AnsibleRepositoryAPI.list({ name: name, page_size: 1 }).then(firstResult),
        AnsibleDistributionAPI.list({ name: name, page_size: 1 }).then(firstResult),
    ]).then(function (_a) {
        var repository = _a[0], distribution = _a[1];
        return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!repository) {
                            return [2 /*return*/, Promise.reject(t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Failed to find repository ", ""], ["Failed to find repository ", ""])), name))];
                        }
                        if (distribution && distribution.repository === repository.pulp_href) {
                            return [2 /*return*/, distribution.base_path];
                        }
                        return [4 /*yield*/, AnsibleDistributionAPI.list({
                                repository: repository.pulp_href,
                                sort: 'pulp_created',
                                page_size: 1,
                            }).then(firstResult)];
                    case 1:
                        distribution = _b.sent();
                        if (!distribution) {
                            return [2 /*return*/, Promise.reject(t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Failed to find a distribution for repository ", ""], ["Failed to find a distribution for repository ", ""])), name))];
                        }
                        return [2 /*return*/, distribution.base_path];
                }
            });
        });
    });
}
function firstResult(_a) {
    var results = _a.data.results;
    return results[0];
}
var templateObject_1, templateObject_2;
//# sourceMappingURL=repository-base-path.js.map