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
import React from 'react';
import { AnsibleRepositoryAPI, SigningServiceAPI, } from 'src/api';
import { MultiRepoModal } from 'src/components';
import { useContext } from 'src/loaders/app-context';
import { parsePulpIDFromURL, waitForTaskUrl } from 'src/utilities';
export var ApproveModal = function (_a) {
    var parentAddAlert = _a.addAlert, closeAction = _a.closeAction, collectionVersion = _a.collectionVersion, finishAction = _a.finishAction;
    var settings = useContext().settings;
    var collection_version = collectionVersion.collection_version, repository = collectionVersion.repository;
    var namespace = collection_version.namespace, name = collection_version.name, version = collection_version.version, pulp_href = collection_version.pulp_href;
    function approve(_a) {
        var addAlert = _a.addAlert, selectedRepos = _a.selectedRepos, setLoading = _a.setLoading;
        var error = '';
        function approveAsync() {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function () {
                var repo_id, params, signingServiceName, signingList, task;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            repo_id = parsePulpIDFromURL(repository.pulp_href);
                            params = {
                                collection_versions: [pulp_href],
                                destination_repositories: selectedRepos.map(function (repo) { return repo.pulp_href; }),
                            };
                            if (!settings.GALAXY_AUTO_SIGN_COLLECTIONS) return [3 /*break*/, 2];
                            signingServiceName = settings.GALAXY_COLLECTION_SIGNING_SERVICE;
                            error = t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Signing service ", " not found"], ["Signing service ", " not found"])), signingServiceName);
                            return [4 /*yield*/, SigningServiceAPI.list({
                                    name: signingServiceName,
                                    page_size: 1,
                                })];
                        case 1:
                            signingList = _c.sent();
                            if (signingList.data.results.length) {
                                params['signing_service'] = signingList.data.results[0].pulp_href;
                            }
                            else {
                                throw new Error();
                            }
                            error = '';
                            _c.label = 2;
                        case 2: return [4 /*yield*/, AnsibleRepositoryAPI.moveCollectionVersion(repo_id, params)];
                        case 3:
                            task = (_b = (_a = (_c.sent())) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.task;
                            return [4 /*yield*/, waitForTaskUrl(task)];
                        case 4:
                            _c.sent();
                            finishAction();
                            parentAddAlert({
                                title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Certification status for collection \"", " ", " v", "\" has been successfully updated."], ["Certification status for collection \"", " ", " v", "\" has been successfully updated."])), namespace, name, version),
                                variant: 'success',
                            });
                            return [2 /*return*/];
                    }
                });
            });
        }
        setLoading(true);
        return approveAsync()
            .catch(function () {
            return addAlert({
                title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Failed to approve collection."], ["Failed to approve collection."]))),
                variant: 'danger',
                description: error,
            });
        })
            .finally(function () { return setLoading(false); });
    }
    return (React.createElement(MultiRepoModal, { closeAction: closeAction, collectionVersion: collectionVersion, pipeline: 'pipeline=approved', submitAction: approve }));
};
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=approve-modal.js.map