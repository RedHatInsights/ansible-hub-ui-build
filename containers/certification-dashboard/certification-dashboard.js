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
        while (_) try {
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
import { t, Trans } from '@lingui/macro';
import * as React from 'react';
import './certification-dashboard.scss';
import { withRouter, Link } from 'react-router-dom';
import { BaseHeader, DateComponent, EmptyStateFilter, EmptyStateNoData, EmptyStateUnauthorized, ListItemActions, Main, } from 'src/components';
import { Toolbar, ToolbarGroup, ToolbarItem, Button, DropdownItem, Label, } from '@patternfly/react-core';
import { ExclamationTriangleIcon, ExclamationCircleIcon, CheckCircleIcon, } from '@patternfly/react-icons';
import { CollectionVersionAPI, TaskAPI } from 'src/api';
import { errorMessage, filterIsSet, ParamHelper } from 'src/utilities';
import { LoadingPageWithHeader, CompoundFilter, LoadingPageSpinner, AppliedFilters, Pagination, AlertList, closeAlertMixin, SortTable, } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { Constants } from 'src/constants';
import { AppContext } from 'src/loaders/app-context';
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
        if (!params['repository']) {
            params['repository'] = 'staging';
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
        };
        return _this;
    }
    CertificationDashboard.prototype.componentDidMount = function () {
        if (!this.context.user ||
            this.context.user.is_anonymous ||
            !this.context.user.model_permissions.move_collection) {
            this.setState({ unauthorized: true });
        }
        else {
            this.queryCollections();
        }
    };
    CertificationDashboard.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.state, versions = _b.versions, params = _b.params, itemCount = _b.itemCount, loading = _b.loading, unauthorized = _b.unauthorized;
        if (!versions && !unauthorized) {
            return React.createElement(LoadingPageWithHeader, null);
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(BaseHeader, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Approval dashboard"], ["Approval dashboard"]))) }),
            React.createElement(AlertList, { alerts: this.state.alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            unauthorized ? (React.createElement(EmptyStateUnauthorized, null)) : (React.createElement(Main, { className: 'hub-certification-dashboard' },
                React.createElement("section", { className: 'body', "data-cy": 'body' },
                    React.createElement("div", { className: 'toolbar hub-certification-dashboard-toolbar' },
                        React.createElement(Toolbar, null,
                            React.createElement(ToolbarGroup, null,
                                React.createElement(ToolbarItem, null,
                                    React.createElement(CompoundFilter, { inputText: this.state.inputText, onChange: function (text) {
                                            _this.setState({ inputText: text });
                                        }, updateParams: function (p) {
                                            return _this.updateParams(p, function () { return _this.queryCollections(); });
                                        }, params: params, filterConfig: [
                                            {
                                                id: 'namespace',
                                                title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Namespace"], ["Namespace"]))),
                                            },
                                            {
                                                id: 'name',
                                                title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Collection Name"], ["Collection Name"]))),
                                            },
                                            {
                                                id: 'repository',
                                                title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Status"], ["Status"]))),
                                                inputType: 'select',
                                                options: [
                                                    {
                                                        id: Constants.NOTCERTIFIED,
                                                        title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Rejected"], ["Rejected"]))),
                                                    },
                                                    {
                                                        id: Constants.NEEDSREVIEW,
                                                        title: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Needs Review"], ["Needs Review"]))),
                                                    },
                                                    {
                                                        id: Constants.PUBLISHED,
                                                        title: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Approved"], ["Approved"]))),
                                                    },
                                                ],
                                            },
                                        ] })))),
                        React.createElement(Pagination, { params: params, updateParams: function (p) {
                                return _this.updateParams(p, function () { return _this.queryCollections(); });
                            }, count: itemCount, isTop: true })),
                    React.createElement("div", null,
                        React.createElement(AppliedFilters, { updateParams: function (p) {
                                _this.updateParams(p, function () { return _this.queryCollections(); });
                                _this.setState({ inputText: '' });
                            }, params: params, ignoredParams: ['page_size', 'page', 'sort'], niceValues: {
                                repository: (_a = {},
                                    _a[Constants.PUBLISHED] = t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Approved"], ["Approved"]))),
                                    _a[Constants.NEEDSREVIEW] = t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Needs Review"], ["Needs Review"]))),
                                    _a[Constants.NOTCERTIFIED] = t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Rejected"], ["Rejected"]))),
                                    _a),
                            }, niceNames: {
                                repository: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Status"], ["Status"]))),
                            } })),
                    loading ? (React.createElement(LoadingPageSpinner, null)) : (this.renderTable(versions, params)),
                    React.createElement("div", { className: 'footer' },
                        React.createElement(Pagination, { params: params, updateParams: function (p) {
                                return _this.updateParams(p, function () { return _this.queryCollections(); });
                            }, count: itemCount })))))));
    };
    CertificationDashboard.prototype.renderTable = function (versions, params) {
        var _this = this;
        if (versions.length === 0) {
            return filterIsSet(params, ['namespace', 'name', 'repository']) ? (React.createElement(EmptyStateFilter, null)) : (React.createElement(EmptyStateNoData, { title: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["No managed collections yet"], ["No managed collections yet"]))), description: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Collections will appear once uploaded"], ["Collections will appear once uploaded"]))) }));
        }
        var sortTableOptions = {
            headers: [
                {
                    title: t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Namespace"], ["Namespace"]))),
                    type: 'alpha',
                    id: 'namespace',
                },
                {
                    title: t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Collection"], ["Collection"]))),
                    type: 'alpha',
                    id: 'collection',
                },
                {
                    title: t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Version"], ["Version"]))),
                    type: 'number',
                    id: 'version',
                },
                {
                    title: t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Date created"], ["Date created"]))),
                    type: 'number',
                    id: 'pulp_created',
                },
                {
                    title: t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Status"], ["Status"]))),
                    type: 'none',
                    id: 'status',
                },
                {
                    title: '',
                    type: 'none',
                    id: 'certify',
                },
            ],
        };
        return (React.createElement("table", { "aria-label": t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Collection versions"], ["Collection versions"]))), className: 'hub-c-table-content pf-c-table' },
            React.createElement(SortTable, { options: sortTableOptions, params: params, updateParams: function (p) {
                    return _this.updateParams(p, function () { return _this.queryCollections(); });
                } }),
            React.createElement("tbody", null, versions.map(function (version, i) { return _this.renderRow(version, i); }))));
    };
    CertificationDashboard.prototype.renderStatus = function (version) {
        if (this.state.updatingVersions.includes(version)) {
            return React.createElement("span", { className: 'fa fa-lg fa-spin fa-spinner' });
        }
        if (version.repository_list.includes(Constants.PUBLISHED)) {
            return (React.createElement(Label, { variant: 'outline', color: 'green', icon: React.createElement(CheckCircleIcon, null) }, version.sign_state === 'signed'
                ? t(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Signed and approved"], ["Signed and approved"]))) : t(templateObject_21 || (templateObject_21 = __makeTemplateObject(["Approved"], ["Approved"])))));
        }
        if (version.repository_list.includes(Constants.NOTCERTIFIED)) {
            return (React.createElement(Label, { variant: 'outline', color: 'red', icon: React.createElement(ExclamationCircleIcon, null) }, t(templateObject_22 || (templateObject_22 = __makeTemplateObject(["Rejected"], ["Rejected"])))));
        }
        if (version.repository_list.includes(Constants.NEEDSREVIEW)) {
            return (React.createElement(Label, { variant: 'outline', color: 'orange', icon: React.createElement(ExclamationTriangleIcon, null) }, t(templateObject_23 || (templateObject_23 = __makeTemplateObject(["Needs Review"], ["Needs Review"])))));
        }
    };
    CertificationDashboard.prototype.renderRow = function (version, index) {
        return (React.createElement("tr", { key: index, "data-cy": 'CertificationDashboard-row' },
            React.createElement("td", null, version.namespace),
            React.createElement("td", null, version.name),
            React.createElement("td", null,
                React.createElement(Link, { to: formatPath(Paths.collectionByRepo, {
                        namespace: version.namespace,
                        collection: version.name,
                        repo: version.repository_list[0],
                    }, {
                        version: version.version,
                    }) }, version.version)),
            React.createElement("td", null,
                React.createElement(DateComponent, { date: version.created_at })),
            React.createElement("td", null, this.renderStatus(version)),
            this.renderButtons(version)));
    };
    CertificationDashboard.prototype.renderButtons = function (version) {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g;
        var canSign = ((_b = (_a = this.context) === null || _a === void 0 ? void 0 : _a.featureFlags) === null || _b === void 0 ? void 0 : _b.collection_signing) === true &&
            ((_d = (_c = this.context) === null || _c === void 0 ? void 0 : _c.featureFlags) === null || _d === void 0 ? void 0 : _d.collection_auto_sign) === true &&
            ((_g = (_f = (_e = this.context) === null || _e === void 0 ? void 0 : _e.user) === null || _f === void 0 ? void 0 : _f.model_permissions) === null || _g === void 0 ? void 0 : _g.sign_collections_on_namespace);
        if (this.state.updatingVersions.includes(version)) {
            return React.createElement(ListItemActions, null); // empty td;
        }
        var approveButton = [
            React.createElement(Button, { key: 'approve', onClick: function () {
                    return _this.updateCertification(version, Constants.NEEDSREVIEW, Constants.PUBLISHED);
                } },
                React.createElement("span", null, canSign ? t(templateObject_24 || (templateObject_24 = __makeTemplateObject(["Sign and approve"], ["Sign and approve"]))) : t(templateObject_25 || (templateObject_25 = __makeTemplateObject(["Approve"], ["Approve"]))))),
        ];
        var importsLink = (React.createElement(DropdownItem, { key: 'imports', component: React.createElement(Link, { to: formatPath(Paths.myImports, {}, {
                    namespace: version.namespace,
                    name: version.name,
                    version: version.version,
                }) }, t(templateObject_26 || (templateObject_26 = __makeTemplateObject(["View Import Logs"], ["View Import Logs"])))) }));
        var certifyDropDown = function (isDisabled, originalRepo) { return (React.createElement(DropdownItem, { onClick: function () {
                return _this.updateCertification(version, originalRepo, Constants.PUBLISHED);
            }, isDisabled: isDisabled, key: 'certify' }, canSign ? t(templateObject_27 || (templateObject_27 = __makeTemplateObject(["Sign and approve"], ["Sign and approve"]))) : t(templateObject_28 || (templateObject_28 = __makeTemplateObject(["Approve"], ["Approve"]))))); };
        var rejectDropDown = function (isDisabled, originalRepo) { return (React.createElement(DropdownItem, { onClick: function () {
                return _this.updateCertification(version, originalRepo, Constants.NOTCERTIFIED);
            }, isDisabled: isDisabled, className: 'rejected-icon', key: 'reject' }, t(templateObject_29 || (templateObject_29 = __makeTemplateObject(["Reject"], ["Reject"]))))); };
        if (version.repository_list.includes(Constants.PUBLISHED)) {
            return (React.createElement(ListItemActions, { kebabItems: [
                    certifyDropDown(true, Constants.PUBLISHED),
                    rejectDropDown(false, Constants.PUBLISHED),
                    importsLink,
                ] }));
        }
        if (version.repository_list.includes(Constants.NOTCERTIFIED)) {
            return (React.createElement(ListItemActions, { kebabItems: [
                    certifyDropDown(false, Constants.NOTCERTIFIED),
                    rejectDropDown(true, Constants.NOTCERTIFIED),
                    importsLink,
                ] }));
        }
        if (version.repository_list.includes(Constants.NEEDSREVIEW)) {
            return (React.createElement(ListItemActions, { kebabItems: [
                    rejectDropDown(false, Constants.NEEDSREVIEW),
                    importsLink,
                ], buttons: approveButton }));
        }
    };
    CertificationDashboard.prototype.updateCertification = function (version, originalRepo, destinationRepo) {
        var _this = this;
        var alerts = this.state.alerts;
        // Set the selected version to loading
        this.setState({
            updatingVersions: [],
        }, function () {
            return CollectionVersionAPI.setRepository(version.namespace, version.name, version.version, originalRepo, destinationRepo)
                .then(function (result) {
                _this.setState({
                    updatingVersions: [version],
                });
                _this.waitForUpdate(result.data.remove_task_id, version);
            }, _this.addAlert(React.createElement(Trans, null,
                "Certification status for collection \"",
                version.namespace,
                ' ',
                version.name,
                " v",
                version.version,
                "\" has been successfully updated."), 'success'))
                .catch(function (error) {
                var _a = error.response, status = _a.status, statusText = _a.statusText;
                _this.setState({
                    updatingVersions: [],
                    alerts: alerts.concat({
                        variant: 'danger',
                        title: t(templateObject_30 || (templateObject_30 = __makeTemplateObject(["Changes to certification status for collection \"", " ", " v", "\" could not be saved."], ["Changes to certification status for collection \"", " ", " v", "\" could not be saved."])), version.namespace, version.name, version.version),
                        description: errorMessage(status, statusText),
                    }),
                });
            });
        });
    };
    CertificationDashboard.prototype.waitForUpdate = function (result, version) {
        var _this = this;
        var taskId = result;
        return TaskAPI.get(taskId).then(function (result) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(result.data.state === 'waiting' || result.data.state === 'running')) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 500); })];
                    case 1:
                        _a.sent();
                        this.waitForUpdate(taskId, version);
                        return [3 /*break*/, 3];
                    case 2:
                        if (result.data.state === 'completed') {
                            return [2 /*return*/, CollectionVersionAPI.list(this.state.params).then(function (result) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        this.setState({
                                            versions: result.data.data,
                                            updatingVersions: [],
                                        });
                                        return [2 /*return*/];
                                    });
                                }); })];
                        }
                        else {
                            this.setState({
                                updatingVersions: [],
                                alerts: this.state.alerts.concat({
                                    variant: 'danger',
                                    title: t(templateObject_31 || (templateObject_31 = __makeTemplateObject(["Changes to certification status for collection \"", " ", " v", "\" could not be saved."], ["Changes to certification status for collection \"", " ", " v", "\" could not be saved."])), version.namespace, version.name, version.version),
                                    description: errorMessage(500, t(templateObject_32 || (templateObject_32 = __makeTemplateObject(["Internal Server Error"], ["Internal Server Error"])))),
                                }),
                            });
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    CertificationDashboard.prototype.queryCollections = function () {
        var _this = this;
        this.setState({ loading: true }, function () {
            return CollectionVersionAPI.list(_this.state.params).then(function (result) {
                _this.setState({
                    versions: result.data.data,
                    itemCount: result.data.meta.count,
                    loading: false,
                    updatingVersions: [],
                });
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
    return CertificationDashboard;
}(React.Component));
export default withRouter(CertificationDashboard);
CertificationDashboard.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32;
//# sourceMappingURL=certification-dashboard.js.map