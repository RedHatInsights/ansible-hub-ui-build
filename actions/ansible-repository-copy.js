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
import { msg, t } from '@lingui/macro';
import React from 'react';
import { AnsibleDistributionAPI } from 'src/api';
import { getRepoURL } from 'src/utilities';
import { Action } from './action';
export var ansibleRepositoryCopyAction = Action({
    title: msg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Copy CLI configuration"], ["Copy CLI configuration"]))),
    onClick: function (item, _a) {
        var addAlert = _a.addAlert;
        return __awaiter(void 0, void 0, void 0, function () {
            var distribution, cliConfig;
            var _b, _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        distribution = null;
                        if (!!item.distributions) return [3 /*break*/, 2];
                        addAlert({
                            id: 'copy-cli-config',
                            title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Loading distribution..."], ["Loading distribution..."]))),
                            variant: 'info',
                        });
                        return [4 /*yield*/, AnsibleDistributionAPI.list({
                                repository: item.pulp_href,
                            })];
                    case 1:
                        distribution = (_d = (_c = (_b = (_f.sent())) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.results) === null || _d === void 0 ? void 0 : _d[0];
                        return [3 /*break*/, 3];
                    case 2:
                        distribution = (_e = item.distributions) === null || _e === void 0 ? void 0 : _e[0];
                        _f.label = 3;
                    case 3:
                        if (!distribution) {
                            addAlert({
                                id: 'copy-cli-config',
                                title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["There are no distributions associated with this repository."], ["There are no distributions associated with this repository."]))),
                                variant: 'danger',
                            });
                            return [2 /*return*/];
                        }
                        cliConfig = [
                            '[galaxy]',
                            "server_list = ".concat(distribution.base_path),
                            '',
                            "[galaxy_server.".concat(distribution.base_path, "]"),
                            "url=".concat(getRepoURL(distribution.base_path)),
                            'token=<put your token here>',
                        ].join('\n');
                        navigator.clipboard.writeText(cliConfig);
                        addAlert({
                            description: React.createElement("pre", null, cliConfig),
                            id: 'copy-cli-config',
                            title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Successfully copied to clipboard"], ["Successfully copied to clipboard"]))),
                            variant: 'success',
                        });
                        return [2 /*return*/];
                }
            });
        });
    },
    disabled: function (_a) {
        var distributions = _a.distributions;
        if (distributions && !distributions.length) {
            return t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["There are no distributions associated with this repository."], ["There are no distributions associated with this repository."])));
        }
        return null;
    },
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=ansible-repository-copy.js.map