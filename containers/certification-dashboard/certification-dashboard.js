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
import * as React from 'react';
import './certification-dashboard.scss';
import { withRouter, Link } from 'react-router-dom';
import { BaseHeader, DateComponent, EmptyStateFilter, EmptyStateNoData, EmptyStateUnauthorized, Main, } from 'src/components';
import { Section } from '@redhat-cloud-services/frontend-components';
import { Toolbar, ToolbarGroup, ToolbarItem, Button, DropdownItem, } from '@patternfly/react-core';
import { InfoCircleIcon, ExclamationCircleIcon, CheckCircleIcon, } from '@patternfly/react-icons';
import { CollectionVersionAPI, TaskAPI } from 'src/api';
import { filterIsSet, ParamHelper } from 'src/utilities';
import { LoadingPageWithHeader, StatefulDropdown, CompoundFilter, LoadingPageSpinner, AppliedFilters, Pagination, AlertList, closeAlertMixin, SortTable, } from 'src/components';
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
        };
        return _this;
    }
    CertificationDashboard.prototype.componentDidMount = function () {
        if (!this.context.user ||
            !this.context.user.model_permissions.move_collection) {
            this.setState({ unauthorized: true });
        }
        else {
            this.queryCollections();
        }
    };
    CertificationDashboard.prototype.render = function () {
        var _this = this;
        var _a = this.state, versions = _a.versions, params = _a.params, itemCount = _a.itemCount, loading = _a.loading, unauthorized = _a.unauthorized;
        if (!versions && !unauthorized) {
            return React.createElement(LoadingPageWithHeader, null);
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(BaseHeader, { title: 'Approval dashboard' }),
            React.createElement(AlertList, { alerts: this.state.alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            unauthorized ? (React.createElement(EmptyStateUnauthorized, null)) : (React.createElement(Main, { className: 'certification-dashboard' },
                React.createElement(Section, { className: 'body' },
                    React.createElement("div", { className: 'toolbar' },
                        React.createElement(Toolbar, null,
                            React.createElement(ToolbarGroup, null,
                                React.createElement(ToolbarItem, null,
                                    React.createElement(CompoundFilter, { updateParams: function (p) {
                                            return _this.updateParams(p, function () { return _this.queryCollections(); });
                                        }, params: params, filterConfig: [
                                            {
                                                id: 'namespace',
                                                title: 'Namespace',
                                            },
                                            {
                                                id: 'name',
                                                title: 'Collection Name',
                                            },
                                            {
                                                id: 'repository',
                                                title: 'Repository',
                                                inputType: 'select',
                                                options: [
                                                    {
                                                        id: Constants.NOTCERTIFIED,
                                                        title: 'Rejected',
                                                    },
                                                    {
                                                        id: Constants.NEEDSREVIEW,
                                                        title: 'Needs Review',
                                                    },
                                                    {
                                                        id: Constants.PUBLISHED,
                                                        title: 'Approved',
                                                    },
                                                ],
                                            },
                                        ] })))),
                        React.createElement(Pagination, { params: params, updateParams: function (p) {
                                return _this.updateParams(p, function () { return _this.queryCollections(); });
                            }, count: itemCount, isTop: true })),
                    React.createElement("div", null,
                        React.createElement(AppliedFilters, { updateParams: function (p) {
                                return _this.updateParams(p, function () { return _this.queryCollections(); });
                            }, params: params, ignoredParams: ['page_size', 'page', 'sort'] })),
                    loading ? (React.createElement(LoadingPageSpinner, null)) : (this.renderTable(versions, params)),
                    React.createElement("div", { className: 'footer' },
                        React.createElement(Pagination, { params: params, updateParams: function (p) {
                                return _this.updateParams(p, function () { return _this.queryCollections(); });
                            }, count: itemCount })))))));
    };
    CertificationDashboard.prototype.renderTable = function (versions, params) {
        var _this = this;
        if (versions.length === 0) {
            return filterIsSet(params, ['namespace', 'name', 'repository']) ? (React.createElement(EmptyStateFilter, null)) : (React.createElement(EmptyStateNoData, { title: 'No managed collections yet', description: 'Collections will appear once uploaded' }));
        }
        var sortTableOptions = {
            headers: [
                {
                    title: 'Namespace',
                    type: 'alpha',
                    id: 'namespace',
                },
                {
                    title: 'Collection',
                    type: 'alpha',
                    id: 'collection',
                },
                {
                    title: 'Version',
                    type: 'number',
                    id: 'version',
                },
                {
                    title: 'Date created',
                    type: 'number',
                    id: 'pulp_created',
                },
                {
                    title: 'Status',
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
        return (React.createElement("table", { "aria-label": 'Collection versions', className: 'content-table pf-c-table' },
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
            return (React.createElement("span", null,
                React.createElement(CheckCircleIcon, { style: { color: 'var(--pf-global--success-color--100)' } }),
                ' ',
                "Approved"));
        }
        if (version.repository_list.includes(Constants.NOTCERTIFIED)) {
            return (React.createElement("span", null,
                React.createElement(ExclamationCircleIcon, { style: { color: 'var(--pf-global--danger-color--100)' } }),
                ' ',
                "Rejected"));
        }
        if (version.repository_list.includes(Constants.NEEDSREVIEW)) {
            return (React.createElement("span", null,
                React.createElement(InfoCircleIcon, { style: { color: 'var(--pf-global--info-color--100)' } }),
                ' ',
                "Needs Review"));
        }
    };
    CertificationDashboard.prototype.renderRow = function (version, index) {
        return (React.createElement("tr", { "aria-labelledby": version.namespace + "." + version.name + " v" + version.version, key: index },
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
            React.createElement("td", null,
                React.createElement("div", { className: 'control-column' },
                    React.createElement("div", null, this.renderButtons(version))))));
    };
    CertificationDashboard.prototype.renderButtons = function (version) {
        var _this = this;
        if (this.state.updatingVersions.includes(version)) {
            return;
        }
        var importsLink = (React.createElement(DropdownItem, { key: 'imports', component: React.createElement(Link, { to: formatPath(Paths.myImports, {}, {
                    namespace: version.namespace,
                    name: version.name,
                    version: version.version,
                }) }, "View Import Logs") }));
        var certifyDropDown = function (isDisabled, originalRepo) { return (React.createElement(DropdownItem, { onClick: function () {
                return _this.updateCertification(version, originalRepo, Constants.PUBLISHED);
            }, isDisabled: isDisabled, key: 'certify' }, "Approve")); };
        var rejectDropDown = function (isDisabled, originalRepo) { return (React.createElement(DropdownItem, { onClick: function () {
                return _this.updateCertification(version, originalRepo, Constants.NOTCERTIFIED);
            }, isDisabled: isDisabled, className: 'rejected-icon', key: 'reject' }, "Reject")); };
        if (version.repository_list.includes(Constants.PUBLISHED)) {
            return (React.createElement("span", null,
                React.createElement(StatefulDropdown, { items: [
                        certifyDropDown(true, Constants.PUBLISHED),
                        rejectDropDown(false, Constants.PUBLISHED),
                        importsLink,
                    ] })));
        }
        if (version.repository_list.includes(Constants.NOTCERTIFIED)) {
            return (React.createElement("span", null,
                React.createElement(StatefulDropdown, { items: [
                        certifyDropDown(false, Constants.NOTCERTIFIED),
                        rejectDropDown(true, Constants.NOTCERTIFIED),
                        importsLink,
                    ] })));
        }
        if (version.repository_list.includes(Constants.NEEDSREVIEW)) {
            return (React.createElement("span", null,
                React.createElement(Button, { onClick: function () {
                        return _this.updateCertification(version, Constants.NEEDSREVIEW, Constants.PUBLISHED);
                    } },
                    React.createElement("span", null, "Approve")),
                React.createElement(StatefulDropdown, { items: [rejectDropDown(false, Constants.NEEDSREVIEW), importsLink] })));
        }
    };
    CertificationDashboard.prototype.updateCertification = function (version, originalRepo, destinationRepo) {
        var _this = this;
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
            })
                .catch(function (error) {
                _this.setState({
                    updatingVersions: [],
                    alerts: _this.state.alerts.concat({
                        variant: 'danger',
                        title: "API Error: " + error.response.status,
                        description: "Could not update the certification " +
                            ("status for " + version.namespace + ".") +
                            (version.name + "." + version.version + "."),
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
                                    title: "API Error: 500",
                                    description: "Could not update the certification " +
                                        ("status for " + version.namespace + ".") +
                                        (version.name + "." + version.version + "."),
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
    return CertificationDashboard;
}(React.Component));
export default withRouter(CertificationDashboard);
CertificationDashboard.contextType = AppContext;
//# sourceMappingURL=certification-dashboard.js.map