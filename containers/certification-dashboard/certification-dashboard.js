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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
import { Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, } from '@patternfly/react-core';
import React from 'react';
import { AnsibleRepositoryAPI, CertificateUploadAPI, CollectionVersionAPI, } from 'src/api';
import { ApprovalRow, ApproveModal, BaseHeader, EmptyStateFilter, EmptyStateNoData, EmptyStateUnauthorized, Main, } from 'src/components';
import { AlertList, AppliedFilters, CompoundFilter, LoadingPageSpinner, LoadingPageWithHeader, Pagination, SortTable, UploadSingCertificateModal, closeAlertMixin, } from 'src/components';
import { AppContext } from 'src/loaders/app-context';
import { ParamHelper, errorMessage, filterIsSet, parsePulpIDFromURL, repositoryBasePath, waitForTask, waitForTaskUrl, withRouter, } from 'src/utilities';
import './certification-dashboard.scss';
var CertificationDashboard = /** @class */ (function (_super) {
    __extends(CertificationDashboard, _super);
    function CertificationDashboard(props) {
        var _this = _super.call(this, props) || this;
        var params = ParamHelper.parseParamString(props.location.search, [
            'page',
            'page_size',
        ]);
        if (!params['page_size']) {
            params['page_size'] = 10;
        }
        if (!params['sort']) {
            params['sort'] = '-pulp_created';
        }
        if (!params['repository_label']) {
            params['repository_label'] = 'pipeline=staging';
        }
        _this.state = {
            versions: undefined,
            itemCount: 0,
            params: params,
            loading: true,
            updatingVersions: [],
            alerts: [],
            unauthorized: false,
            inputText: '',
            uploadCertificateModalOpen: false,
            versionToUploadCertificate: null,
            approveModalInfo: null,
            repositories: { approved: null, rejected: null },
        };
        return _this;
    }
    CertificationDashboard.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.context, user = _a.user, hasPermission = _a.hasPermission;
        if (!user ||
            user.is_anonymous ||
            !hasPermission('ansible.modify_ansible_repo_content')) {
            this.setState({ unauthorized: true });
        }
        else {
            this.setState({ loading: true });
            Promise.all([
                this.queryCollections(false),
                this.queryRepositories(),
            ]).then(function () {
                _this.setState({ loading: false });
                _this.setState({ updatingVersions: [] });
            });
        }
    };
    CertificationDashboard.prototype.queryRepositories = function () {
        var _this = this;
        var repoOrNull = function (pipeline) {
            return AnsibleRepositoryAPI.list({
                page: 1,
                page_size: 1,
                pulp_label_select: "pipeline=".concat(pipeline),
            })
                .then(function (_a) {
                var _b = _a.data, count = _b.count, results = _b.results;
                return count === 1 ? results[0] : null;
            })
                .catch(function (error) {
                _this.addAlert(t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Error loading repository with label ", "."], ["Error loading repository with label ", "."])), pipeline), 'danger', error === null || error === void 0 ? void 0 : error.message);
                return null;
            });
        };
        return Promise.all([repoOrNull('approved'), repoOrNull('rejected')]).then(function (_a) {
            var approved = _a[0], rejected = _a[1];
            return _this.setState({
                repositories: { approved: approved, rejected: rejected },
            });
        });
    };
    CertificationDashboard.prototype.render = function () {
        var _this = this;
        var _a = this.state, versions = _a.versions, params = _a.params, itemCount = _a.itemCount, loading = _a.loading, unauthorized = _a.unauthorized;
        if (!versions && !unauthorized) {
            return React.createElement(LoadingPageWithHeader, null);
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(BaseHeader, { title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Approval dashboard"], ["Approval dashboard"]))) }),
            React.createElement(AlertList, { alerts: this.state.alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            unauthorized ? (React.createElement(EmptyStateUnauthorized, null)) : (React.createElement(Main, { className: 'hub-certification-dashboard' },
                React.createElement("section", { className: 'body', "data-cy": 'body' },
                    React.createElement("div", { className: 'hub-toolbar' },
                        React.createElement(Toolbar, null,
                            React.createElement(ToolbarContent, null,
                                React.createElement(ToolbarGroup, null,
                                    React.createElement(ToolbarItem, null,
                                        React.createElement(CompoundFilter, { inputText: this.state.inputText, onChange: function (text) {
                                                _this.setState({ inputText: text });
                                            }, updateParams: function (p) {
                                                return _this.updateParams(p, function () {
                                                    return _this.queryCollections(true);
                                                });
                                            }, params: params, filterConfig: [
                                                {
                                                    id: 'namespace',
                                                    title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Namespace"], ["Namespace"]))),
                                                },
                                                {
                                                    id: 'name',
                                                    title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Collection name"], ["Collection name"]))),
                                                },
                                                {
                                                    id: 'repository_label',
                                                    title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Status"], ["Status"]))),
                                                    inputType: 'select',
                                                    options: [
                                                        {
                                                            id: 'pipeline=rejected',
                                                            title: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Rejected"], ["Rejected"]))),
                                                        },
                                                        {
                                                            id: 'pipeline=staging',
                                                            title: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Needs Review"], ["Needs Review"]))),
                                                        },
                                                        {
                                                            id: 'pipeline=approved',
                                                            title: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Approved"], ["Approved"]))),
                                                        },
                                                    ],
                                                },
                                            ] }))))),
                        React.createElement(Pagination, { params: params, updateParams: function (p) {
                                return _this.updateParams(p, function () { return _this.queryCollections(true); });
                            }, count: itemCount, isTop: true })),
                    React.createElement("div", null,
                        React.createElement(AppliedFilters, { updateParams: function (p) {
                                _this.updateParams(p, function () { return _this.queryCollections(true); });
                                _this.setState({ inputText: '' });
                            }, params: params, ignoredParams: ['page_size', 'page', 'sort'], niceValues: {
                                repository_label: {
                                    'pipeline=approved': t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Approved"], ["Approved"]))),
                                    'pipeline=rejected': t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Rejected"], ["Rejected"]))),
                                    'pipeline=staging': t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Needs Review"], ["Needs Review"]))),
                                },
                            }, niceNames: {
                                name: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Collection name"], ["Collection name"]))),
                                namespace: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Namespace"], ["Namespace"]))),
                                repository_label: t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Status"], ["Status"]))),
                            } })),
                    loading ? (React.createElement(LoadingPageSpinner, null)) : (this.renderTable(versions, params)),
                    React.createElement("div", { className: 'footer' },
                        React.createElement(Pagination, { params: params, updateParams: function (p) {
                                return _this.updateParams(p, function () { return _this.queryCollections(true); });
                            }, count: itemCount }))),
                React.createElement(UploadSingCertificateModal, { isOpen: this.state.uploadCertificateModalOpen, onCancel: function () { return _this.closeUploadCertificateModal(); }, onSubmit: function (d) { return _this.submitCertificate(d); } }),
                this.state.approveModalInfo && (React.createElement(ApproveModal, { closeAction: function () {
                        _this.setState({ approveModalInfo: null });
                    }, finishAction: function () {
                        _this.setState({ approveModalInfo: null });
                        _this.queryCollections(true);
                    }, collectionVersion: this.state.approveModalInfo, addAlert: function (alert) { return _this.addAlertObj(alert); } }))))));
    };
    CertificationDashboard.prototype.renderTable = function (versions, params) {
        var _this = this;
        if (versions.length === 0) {
            return filterIsSet(params, ['namespace', 'name', 'repository_label']) ? (React.createElement(EmptyStateFilter, null)) : (React.createElement(EmptyStateNoData, { title: t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["No managed collections yet"], ["No managed collections yet"]))), description: t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Collections will appear once uploaded"], ["Collections will appear once uploaded"]))) }));
        }
        var sortTableOptions = {
            headers: [
                {
                    title: t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Namespace"], ["Namespace"]))),
                    type: 'alpha',
                    id: 'namespace',
                },
                {
                    title: t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Collection"], ["Collection"]))),
                    type: 'alpha',
                    id: 'name',
                },
                {
                    title: t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Version"], ["Version"]))),
                    type: 'number',
                    id: 'version',
                },
                {
                    title: t(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Date created"], ["Date created"]))),
                    type: 'number',
                    id: 'pulp_created',
                },
                {
                    title: t(templateObject_21 || (templateObject_21 = __makeTemplateObject(["Repository"], ["Repository"]))),
                    type: 'none',
                    id: '',
                },
                {
                    title: t(templateObject_22 || (templateObject_22 = __makeTemplateObject(["Status"], ["Status"]))),
                    type: 'none',
                    id: 'repository_label',
                },
                {
                    title: '',
                    type: 'none',
                    id: 'certify',
                },
            ],
        };
        return (React.createElement("table", { "aria-label": t(templateObject_23 || (templateObject_23 = __makeTemplateObject(["Collection versions"], ["Collection versions"]))), className: 'hub-c-table-content pf-c-table' },
            React.createElement(SortTable, { options: sortTableOptions, params: params, updateParams: function (p) {
                    return _this.updateParams(p, function () { return _this.queryCollections(true); });
                } }),
            React.createElement("tbody", null, versions.map(function (version, i) { return (React.createElement(ApprovalRow, { approve: function (v) { return _this.approve(v); }, collectionVersion: version, context: _this.context, isVersionUpdating: function (v) { return _this.isVersionUpdating(v); }, key: i, openUploadCertificateModal: function (v) {
                    return _this.openUploadCertificateModal(v);
                }, reject: function (v) { return _this.reject(v); } })); }))));
    };
    CertificationDashboard.prototype.isVersionUpdating = function (collection) {
        return !!this.state.updatingVersions.find(function (v) {
            return v == collection;
        });
    };
    CertificationDashboard.prototype.openUploadCertificateModal = function (version) {
        this.setState({
            uploadCertificateModalOpen: true,
            versionToUploadCertificate: version,
        });
    };
    CertificationDashboard.prototype.closeUploadCertificateModal = function () {
        this.setState({
            uploadCertificateModalOpen: false,
            versionToUploadCertificate: null,
        });
    };
    CertificationDashboard.prototype.submitCertificate = function (file) {
        var _this = this;
        var _a = this.state.versionToUploadCertificate, collection_version = _a.collection_version, repository = _a.repository;
        var signed_collection = collection_version.pulp_href;
        var name = collection_version.name, namespace = collection_version.namespace, version = collection_version.version;
        CertificateUploadAPI.upload({
            file: file,
            repository: repository.pulp_href,
            signed_collection: signed_collection,
        })
            .then(function (_a) {
            var task = _a.data.task;
            return waitForTask(task);
        })
            .then(function () {
            return _this.addAlert(t(templateObject_24 || (templateObject_24 = __makeTemplateObject(["Certificate for collection \"", " ", " v", "\" has been successfully uploaded."], ["Certificate for collection \"", " ", " v", "\" has been successfully uploaded."])), namespace, name, version), 'success');
        })
            .then(function () { return _this.queryCollections(true); })
            .catch(function (error) {
            var description = !error.response
                ? error
                : errorMessage(error.response.status, error.response.statusText);
            _this.addAlert(t(templateObject_25 || (templateObject_25 = __makeTemplateObject(["The certificate for \"", " ", " v", "\" could not be saved."], ["The certificate for \"", " ", " v", "\" could not be saved."])), namespace, name, version), 'danger', description);
        })
            .finally(function () { return _this.closeUploadCertificateModal(); });
    };
    CertificationDashboard.prototype.setUpdatingVersion = function (collectionVersion) {
        var updatingVersions = this.state.updatingVersions;
        this.setState({
            updatingVersions: __spreadArray(__spreadArray([], updatingVersions, true), [collectionVersion], false),
        });
    };
    CertificationDashboard.prototype.unsetUpdatingVersion = function (collectionVersion) {
        var updatingVersions = this.state.updatingVersions;
        this.setState({
            updatingVersions: updatingVersions.filter(function (v) { return v !== collectionVersion; }),
        });
    };
    CertificationDashboard.prototype.approve = function (collection) {
        return __awaiter(this, void 0, void 0, function () {
            var repositories;
            return __generator(this, function (_a) {
                repositories = this.state.repositories;
                if (repositories.approved) {
                    this.move(collection, repositories.approved);
                }
                else {
                    this.setState({ approveModalInfo: collection });
                }
                return [2 /*return*/];
            });
        });
    };
    CertificationDashboard.prototype.reject = function (collection) {
        return __awaiter(this, void 0, void 0, function () {
            var repositories, version;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repositories = this.state.repositories;
                        if (!repositories.rejected) {
                            version = collection.collection_version;
                            this.addAlert(t(templateObject_26 || (templateObject_26 = __makeTemplateObject(["Changes to certification status for collection \"", " ", " v", "\" could not be saved."], ["Changes to certification status for collection \"", " ", " v", "\" could not be saved."])), version.namespace, version.name, version.version), 'danger', t(templateObject_27 || (templateObject_27 = __makeTemplateObject(["There must be only one repository with pipeline=rejected."], ["There must be only one repository with pipeline=rejected."]))));
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.isRejected(collection)];
                    case 1:
                        if (_a.sent()) {
                            // collection already in rejected repository, so remove it from aproved repo
                            this.remove(collection);
                        }
                        else {
                            // collection is not in rejected state, move it there
                            this.move(collection, repositories.rejected);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CertificationDashboard.prototype.move = function (collection, destinationRepo) {
        var _this = this;
        var version = collection.collection_version, originalRepo = collection.repository;
        this.setUpdatingVersion(collection);
        return Promise.all([
            repositoryBasePath(originalRepo.name, originalRepo.pulp_href),
            repositoryBasePath(destinationRepo.name, destinationRepo.pulp_href),
        ])
            .then(function (_a) {
            var source = _a[0], destination = _a[1];
            return CollectionVersionAPI.move(version.namespace, version.name, version.version, source, destination);
        })
            .then(function (result) {
            return waitForTask(result.data.remove_task_id, { waitMs: 500 });
        })
            .then(function () {
            return _this.addAlert(t(templateObject_28 || (templateObject_28 = __makeTemplateObject(["Certification status for collection \"", " ", " v", "\" has been successfully updated."], ["Certification status for collection \"", " ", " v", "\" has been successfully updated."])), version.namespace, version.name, version.version), 'success');
        })
            .then(function () { return _this.queryCollections(true); })
            .catch(function (error) {
            var description = !error.response
                ? error
                : errorMessage(error.response.status, error.response.statusText);
            _this.addAlert(t(templateObject_29 || (templateObject_29 = __makeTemplateObject(["Changes to certification status for collection \"", " ", " v", "\" could not be saved."], ["Changes to certification status for collection \"", " ", " v", "\" could not be saved."])), version.namespace, version.name, version.version), 'danger', description);
        })
            .finally(function () { return _this.unsetUpdatingVersion(collection); });
    };
    CertificationDashboard.prototype.remove = function (collection) {
        var _this = this;
        var version = collection.collection_version, repository = collection.repository;
        this.setUpdatingVersion(collection);
        return AnsibleRepositoryAPI.removeContent(parsePulpIDFromURL(repository.pulp_href), version.pulp_href)
            .then(function (_a) {
            var task = _a.data.task;
            return waitForTaskUrl(task);
        })
            .then(function () {
            return _this.addAlert(t(templateObject_30 || (templateObject_30 = __makeTemplateObject(["Certification status for collection \"", " ", " v", "\" has been successfully updated."], ["Certification status for collection \"", " ", " v", "\" has been successfully updated."])), version.namespace, version.name, version.version), 'success');
        })
            .then(function () { return _this.queryCollections(true); })
            .catch(function (error) {
            var description = !error.response
                ? error
                : errorMessage(error.response.status, error.response.statusText);
            _this.addAlert(t(templateObject_31 || (templateObject_31 = __makeTemplateObject(["Changes to certification status for collection \"", " ", " v", "\" could not be saved."], ["Changes to certification status for collection \"", " ", " v", "\" could not be saved."])), version.namespace, version.name, version.version), 'danger', description);
        })
            .finally(function () { return _this.unsetUpdatingVersion(collection); });
    };
    // is collection *also* in the rejected repo (regardless of collection.repository)
    // really a "wouldRejectionFail"
    CertificationDashboard.prototype.isRejected = function (collection) {
        return __awaiter(this, void 0, void 0, function () {
            var repositories, _a, name, namespace, version;
            return __generator(this, function (_b) {
                repositories = this.state.repositories;
                _a = collection.collection_version, name = _a.name, namespace = _a.namespace, version = _a.version;
                return [2 /*return*/, CollectionVersionAPI.list({
                        name: name,
                        namespace: namespace,
                        page: 1,
                        page_size: 1,
                        repository: parsePulpIDFromURL(repositories.rejected.pulp_href),
                        version: version,
                    })
                        .then(function (result) { return !!result.data.meta.count; })
                        .catch(function () { return false; })];
            });
        });
    };
    CertificationDashboard.prototype.queryCollections = function (handleLoading) {
        var _this = this;
        if (handleLoading) {
            this.setState({
                loading: true,
            });
        }
        var _a = this.state.params, sort = _a.sort, params = __rest(_a, ["sort"]);
        var updatedParams = __assign({ order_by: sort }, params);
        return CollectionVersionAPI.list(updatedParams)
            .then(function (result) {
            _this.setState({
                versions: result.data.data,
                itemCount: result.data.meta.count,
            });
            if (handleLoading) {
                _this.setState({
                    loading: false,
                    updatingVersions: [],
                });
            }
        })
            .catch(function (error) {
            _this.addAlert(t(templateObject_32 || (templateObject_32 = __makeTemplateObject(["Error loading collections."], ["Error loading collections."]))), 'danger', error === null || error === void 0 ? void 0 : error.message);
            _this.setState({
                loading: false,
                updatingVersions: [],
            });
        });
    };
    Object.defineProperty(CertificationDashboard.prototype, "updateParams", {
        get: function () {
            return ParamHelper.updateParamsMixin();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificationDashboard.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    CertificationDashboard.prototype.addAlert = function (title, variant, description) {
        this.setState({
            alerts: __spreadArray(__spreadArray([], this.state.alerts, true), [
                {
                    description: description,
                    title: title,
                    variant: variant,
                },
            ], false),
        });
    };
    CertificationDashboard.prototype.addAlertObj = function (alert) {
        this.addAlert(alert.title, alert.variant, alert.description);
    };
    return CertificationDashboard;
}(React.Component));
export default withRouter(CertificationDashboard);
CertificationDashboard.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32;
//# sourceMappingURL=certification-dashboard.js.map