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
import { Button, ButtonVariant, DropdownItem, Label, LabelGroup, Toolbar, ToolbarGroup, ToolbarItem, } from '@patternfly/react-core';
import { CheckCircleIcon, DownloadIcon, ExclamationCircleIcon, ExclamationTriangleIcon, } from '@patternfly/react-icons';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { AnsibleDistributionAPI, AnsibleRepositoryAPI, CertificateUploadAPI, CollectionAPI, CollectionVersionAPI, Repositories, } from 'src/api';
import { ApproveModal, BaseHeader, DateComponent, EmptyStateFilter, EmptyStateNoData, EmptyStateUnauthorized, ListItemActions, Main, } from 'src/components';
import { AlertList, AppliedFilters, CompoundFilter, LoadingPageSpinner, LoadingPageWithHeader, Pagination, SortTable, UploadSingCertificateModal, closeAlertMixin, } from 'src/components';
import { Constants } from 'src/constants';
import { AppContext } from 'src/loaders/app-context';
import { Paths, formatPath } from 'src/paths';
import { ParamHelper, RepositoriesUtils, errorMessage, filterIsSet, parsePulpIDFromURL, waitForTask, withRouter, } from 'src/utilities';
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
        if (!params['status']) {
            params['status'] = Constants.NEEDSREVIEW;
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
            approvedRepositoryList: [],
            rejectedRepoName: null,
            stagingRepoNames: [],
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
            var promises = [];
            promises.push(this.loadRepo('staging'));
            promises.push(this.loadRepo('rejected'));
            promises.push(RepositoriesUtils.listApproved()
                .then(function (data) {
                _this.setState({ approvedRepositoryList: data });
            })
                .catch(function (_a) {
                var _b = _a.response, status = _b.status, statusText = _b.statusText;
                _this.addAlertObj({
                    title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Failed to load repositories."], ["Failed to load repositories."]))),
                    variant: 'danger',
                    description: errorMessage(status, statusText),
                });
            }));
            promises.push(this.queryCollections(false));
            Promise.all(promises).then(function () {
                _this.setState({ loading: false });
                _this.setState({ updatingVersions: [] });
            });
        }
    };
    CertificationDashboard.prototype.loadRepo = function (pipeline) {
        var _this = this;
        return Repositories.list({ pulp_label_select: "pipeline=".concat(pipeline) })
            .then(function (data) {
            if (data.data.results.length > 0) {
                if (pipeline == 'staging') {
                    _this.setState({
                        stagingRepoNames: data.data.results.map(function (res) { return res.name; }),
                    });
                }
                if (pipeline == 'rejected') {
                    _this.setState({ rejectedRepoName: data.data.results[0].name });
                }
            }
        })
            .catch(function (error) {
            _this.addAlert(t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Error loading repository with label ", "."], ["Error loading repository with label ", "."])), pipeline), 'danger', error === null || error === void 0 ? void 0 : error.message);
        });
    };
    CertificationDashboard.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.state, versions = _b.versions, params = _b.params, itemCount = _b.itemCount, loading = _b.loading, unauthorized = _b.unauthorized;
        if (!versions && !unauthorized) {
            return React.createElement(LoadingPageWithHeader, null);
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(BaseHeader, { title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Approval dashboard"], ["Approval dashboard"]))) }),
            React.createElement(AlertList, { alerts: this.state.alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            unauthorized ? (React.createElement(EmptyStateUnauthorized, null)) : (React.createElement(Main, { className: 'hub-certification-dashboard' },
                React.createElement("section", { className: 'body', "data-cy": 'body' },
                    React.createElement("div", { className: 'toolbar hub-toolbar' },
                        React.createElement(Toolbar, null,
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
                                                title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Namespace"], ["Namespace"]))),
                                            },
                                            {
                                                id: 'name',
                                                title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Collection Name"], ["Collection Name"]))),
                                            },
                                            {
                                                id: 'status',
                                                title: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Status"], ["Status"]))),
                                                inputType: 'select',
                                                options: [
                                                    {
                                                        id: Constants.NOTCERTIFIED,
                                                        title: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Rejected"], ["Rejected"]))),
                                                    },
                                                    {
                                                        id: Constants.NEEDSREVIEW,
                                                        title: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Needs Review"], ["Needs Review"]))),
                                                    },
                                                    {
                                                        id: Constants.APPROVED,
                                                        title: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Approved"], ["Approved"]))),
                                                    },
                                                ],
                                            },
                                        ] })))),
                        React.createElement(Pagination, { params: params, updateParams: function (p) {
                                return _this.updateParams(p, function () { return _this.queryCollections(true); });
                            }, count: itemCount, isTop: true })),
                    React.createElement("div", null,
                        React.createElement(AppliedFilters, { updateParams: function (p) {
                                _this.updateParams(p, function () { return _this.queryCollections(true); });
                                _this.setState({ inputText: '' });
                            }, params: params, ignoredParams: ['page_size', 'page', 'sort'], niceValues: {
                                status: (_a = {},
                                    _a[Constants.APPROVED] = t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Approved"], ["Approved"]))),
                                    _a[Constants.NEEDSREVIEW] = t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Needs Review"], ["Needs Review"]))),
                                    _a[Constants.NOTCERTIFIED] = t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Rejected"], ["Rejected"]))),
                                    _a),
                            }, niceNames: {
                                status: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Status"], ["Status"]))),
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
                    }, collectionVersion: this.state.approveModalInfo.collectionVersion, addAlert: function (alert) { return _this.addAlertObj(alert); }, allRepositories: this.state.approvedRepositoryList, stagingRepoNames: this.state.stagingRepoNames, rejectedRepoName: this.state.rejectedRepoName }))))));
    };
    CertificationDashboard.prototype.renderTable = function (versions, params) {
        var _this = this;
        if (versions.length === 0) {
            return filterIsSet(params, ['namespace', 'name', 'status']) ? (React.createElement(EmptyStateFilter, null)) : (React.createElement(EmptyStateNoData, { title: t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["No managed collections yet"], ["No managed collections yet"]))), description: t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Collections will appear once uploaded"], ["Collections will appear once uploaded"]))) }));
        }
        var sortTableOptions = {
            headers: [
                {
                    title: t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Namespace"], ["Namespace"]))),
                    type: 'alpha',
                    id: 'namespace',
                },
                {
                    title: t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Collection"], ["Collection"]))),
                    type: 'alpha',
                    id: 'name',
                },
                {
                    title: t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Version"], ["Version"]))),
                    type: 'number',
                    id: 'version',
                },
                {
                    title: t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Date created"], ["Date created"]))),
                    type: 'number',
                    id: 'pulp_created',
                },
                {
                    title: t(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Repository"], ["Repository"]))),
                    type: 'none',
                    id: '',
                },
                {
                    title: t(templateObject_21 || (templateObject_21 = __makeTemplateObject(["Status"], ["Status"]))),
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
        return (React.createElement("table", { "aria-label": t(templateObject_22 || (templateObject_22 = __makeTemplateObject(["Collection versions"], ["Collection versions"]))), className: 'hub-c-table-content pf-c-table' },
            React.createElement(SortTable, { options: sortTableOptions, params: params, updateParams: function (p) {
                    return _this.updateParams(p, function () { return _this.queryCollections(true); });
                } }),
            React.createElement("tbody", null, versions.map(function (version, i) { return _this.renderRow(version, i); }))));
    };
    CertificationDashboard.prototype.isVersionUpdating = function (collection) {
        return this.state.updatingVersions.find(function (v) {
            return v == collection;
        });
    };
    CertificationDashboard.prototype.renderStatus = function (collectionData) {
        var _a;
        var repository = collectionData.repository;
        var repoStatus = (_a = repository.pulp_labels) === null || _a === void 0 ? void 0 : _a.pipeline;
        if (this.isVersionUpdating(collectionData)) {
            return React.createElement("span", { className: 'fa fa-lg fa-spin fa-spinner' });
        }
        if (this.isApproved(collectionData)) {
            var display_signatures = this.context.featureFlags.display_signatures;
            return (React.createElement(Label, { variant: 'outline', color: 'green', icon: React.createElement(CheckCircleIcon, null) }, display_signatures && collectionData.is_signed
                ? t(templateObject_23 || (templateObject_23 = __makeTemplateObject(["Signed and approved"], ["Signed and approved"]))) : t(templateObject_24 || (templateObject_24 = __makeTemplateObject(["Approved"], ["Approved"])))));
        }
        if (repoStatus === Constants.NOTCERTIFIED) {
            return (React.createElement(Label, { variant: 'outline', color: 'red', icon: React.createElement(ExclamationCircleIcon, null) }, t(templateObject_25 || (templateObject_25 = __makeTemplateObject(["Rejected"], ["Rejected"])))));
        }
        if (repoStatus === Constants.NEEDSREVIEW) {
            var _b = this.context.featureFlags, can_upload_signatures = _b.can_upload_signatures, require_upload_signatures = _b.require_upload_signatures;
            return (React.createElement(Label, { variant: 'outline', color: 'orange', icon: React.createElement(ExclamationTriangleIcon, null) }, !collectionData.is_signed &&
                can_upload_signatures &&
                require_upload_signatures
                ? t(templateObject_26 || (templateObject_26 = __makeTemplateObject(["Needs signature and review"], ["Needs signature and review"]))) : t(templateObject_27 || (templateObject_27 = __makeTemplateObject(["Needs review"], ["Needs review"])))));
        }
    };
    CertificationDashboard.prototype.renderRow = function (collectionData, index) {
        var _this = this;
        var version = collectionData.collection_version, repository = collectionData.repository;
        var data_cy = "CertificationDashboard-row-".concat(collectionData.repository.name, "-").concat(collectionData.collection_version.namespace, "-").concat(collectionData.collection_version.name);
        return (React.createElement("tr", { key: index, "data-cy": data_cy },
            React.createElement("td", null, version.namespace),
            React.createElement("td", null, version.name),
            React.createElement("td", null,
                React.createElement(Link, { to: formatPath(Paths.collectionByRepo, {
                        namespace: version.namespace,
                        collection: version.name,
                        repo: repository.name,
                    }, {
                        version: version.version,
                    }) }, version.version),
                React.createElement(Button, { variant: ButtonVariant.link, onClick: function () {
                        _this.download(repository, version.namespace, version.name, version.version);
                    } },
                    React.createElement(DownloadIcon, null))),
            React.createElement("td", null,
                React.createElement(DateComponent, { date: version.pulp_created })),
            React.createElement("td", null,
                React.createElement(LabelGroup, null, repository.name)),
            React.createElement("td", null, this.renderStatus(collectionData)),
            this.renderButtons(collectionData)));
    };
    CertificationDashboard.prototype.renderButtons = function (collectionData) {
        var _this = this;
        var _a;
        // not checking namespace permissions here, auto_sign happens API side, so is the permission check
        var version = collectionData.collection_version, repository = collectionData.repository;
        var _b = this.context.featureFlags, can_upload_signatures = _b.can_upload_signatures, collection_auto_sign = _b.collection_auto_sign, require_upload_signatures = _b.require_upload_signatures;
        if (this.isVersionUpdating(collectionData)) {
            return React.createElement(ListItemActions, null); // empty td;
        }
        var canUploadSignature = can_upload_signatures && !collectionData.is_signed;
        var mustUploadSignature = canUploadSignature && require_upload_signatures;
        var autoSign = collection_auto_sign && !require_upload_signatures;
        var approveButton = [
            canUploadSignature && (React.createElement(React.Fragment, { key: 'upload' },
                React.createElement(Button, { onClick: function () { return _this.openUploadCertificateModal(collectionData); } }, t(templateObject_28 || (templateObject_28 = __makeTemplateObject(["Upload signature"], ["Upload signature"])))),
                ' ')),
            React.createElement(Button, { key: 'approve', isDisabled: mustUploadSignature, "data-cy": 'approve-button', onClick: function () {
                    _this.approve(collectionData);
                } }, autoSign ? t(templateObject_29 || (templateObject_29 = __makeTemplateObject(["Sign and approve"], ["Sign and approve"]))) : t(templateObject_30 || (templateObject_30 = __makeTemplateObject(["Approve"], ["Approve"])))),
        ].filter(Boolean);
        var importsLink = (React.createElement(DropdownItem, { key: 'imports', component: React.createElement(Link, { to: formatPath(Paths.myImports, {}, {
                    namespace: version.namespace,
                    name: version.name,
                    version: version.version,
                }) }, t(templateObject_31 || (templateObject_31 = __makeTemplateObject(["View Import Logs"], ["View Import Logs"])))) }));
        var certifyDropDown = function (isDisabled) { return (React.createElement(DropdownItem, { onClick: function () { return _this.approve(collectionData); }, isDisabled: isDisabled, key: 'certify' }, autoSign ? t(templateObject_32 || (templateObject_32 = __makeTemplateObject(["Sign and approve"], ["Sign and approve"]))) : t(templateObject_33 || (templateObject_33 = __makeTemplateObject(["Approve"], ["Approve"]))))); };
        var rejectDropDown = function (isDisabled) { return (React.createElement(DropdownItem, { onClick: function () {
                _this.reject(collectionData);
            }, isDisabled: isDisabled, className: 'rejected-icon', key: 'reject' }, t(templateObject_34 || (templateObject_34 = __makeTemplateObject(["Reject"], ["Reject"]))))); };
        var repoStatus = (_a = repository.pulp_labels) === null || _a === void 0 ? void 0 : _a.pipeline;
        if (this.isApproved(collectionData)) {
            return (React.createElement(ListItemActions, { kebabItems: [
                    certifyDropDown(true),
                    rejectDropDown(false),
                    importsLink,
                ] }));
        }
        if (repoStatus === Constants.NOTCERTIFIED) {
            // render reject button if version is in multiple repositories including rejected state - handles inconsistency
            // and allows user to reject it again to move it all to rejected state
            return (React.createElement(ListItemActions, { kebabItems: [
                    certifyDropDown(false),
                    rejectDropDown(true),
                    importsLink,
                ] }));
        }
        if (repoStatus === Constants.NEEDSREVIEW) {
            return (React.createElement(ListItemActions, { kebabItems: [rejectDropDown(false), importsLink], buttons: approveButton }));
        }
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
            .then(function (result) { return waitForTask(parsePulpIDFromURL(result.data.task)); })
            .then(function () {
            return _this.addAlert(t(templateObject_35 || (templateObject_35 = __makeTemplateObject(["Certificate for collection \"", " ", " v", "\" has been successfully uploaded."], ["Certificate for collection \"", " ", " v", "\" has been successfully uploaded."])), namespace, name, version), 'success');
        })
            .then(function () { return _this.queryCollections(true); })
            .catch(function (error) {
            var description = !error.response
                ? error
                : errorMessage(error.response.status, error.response.statusText);
            _this.addAlert(t(templateObject_36 || (templateObject_36 = __makeTemplateObject(["The certificate for \"", " ", " v", "\" could not be saved."], ["The certificate for \"", " ", " v", "\" could not be saved."])), namespace, name, version), 'danger', description);
        })
            .finally(function () { return _this.closeUploadCertificateModal(); });
    };
    CertificationDashboard.prototype.isApproved = function (collection) {
        if (!collection) {
            return false;
        }
        return this.state.approvedRepositoryList.find(function (r) { return r.name == collection.repository.name; });
    };
    CertificationDashboard.prototype.approve = function (collection) {
        var _this = this;
        if (!collection) {
            // I hope that this may not occure ever, but to be sure...
            this.addAlert(t(templateObject_37 || (templateObject_37 = __makeTemplateObject(["Approval failed."], ["Approval failed."]))), 'danger', t(templateObject_38 || (templateObject_38 = __makeTemplateObject(["Collection not found in any repository."], ["Collection not found in any repository."]))));
            return;
        }
        var approvedRepositoryList = this.state.approvedRepositoryList;
        if (approvedRepositoryList.length == 1) {
            if (collection.repository) {
                this.updateCertification(collection.collection_version, collection.repository.name, this.state.approvedRepositoryList[0].name);
            }
            else {
                // I hope that this may not occure ever, but to be sure...
                this.addAlert(t(templateObject_39 || (templateObject_39 = __makeTemplateObject(["Approval failed."], ["Approval failed."]))), 'danger', t(templateObject_40 || (templateObject_40 = __makeTemplateObject(["Collection has to be in rejected or staging repository."], ["Collection has to be in rejected or staging repository."]))));
            }
        }
        else {
            this.transformToCollectionVersion(collection).then(function (collectionVersion) {
                _this.setState({ approveModalInfo: { collectionVersion: collectionVersion } });
            });
        }
    };
    CertificationDashboard.prototype.reject = function (collection) {
        var _this = this;
        var originalRepo = collection.repository.name;
        var version = collection.collection_version;
        this.transformToCollectionVersion(collection)
            .then(function (versionWithRepos) {
            _this.setState({ updatingVersions: [collection] });
            if (versionWithRepos.repository_list.includes(_this.state.rejectedRepoName)) {
                // collection already in rejected repository, so remove it from aproved repo
                RepositoriesUtils.deleteCollection(originalRepo, version.pulp_href)
                    .then(function () {
                    _this.addAlert(t(templateObject_41 || (templateObject_41 = __makeTemplateObject(["Certification status for collection \"", " ", " v", "\" has been successfully updated."], ["Certification status for collection \"", " ", " v", "\" has been successfully updated."])), version.namespace, version.name, version.version), 'success');
                    _this.queryCollections(true);
                })
                    .catch(function (error) {
                    _this.setState({ updatingVersions: [] });
                    var description = !error.response
                        ? error
                        : errorMessage(error.response.status, error.response.statusText);
                    _this.addAlert(t(templateObject_42 || (templateObject_42 = __makeTemplateObject(["Changes to certification status for collection \"", " ", " v", "\" could not be saved."], ["Changes to certification status for collection \"", " ", " v", "\" could not be saved."])), version.namespace, version.name, version.version), 'danger', description);
                });
            }
            else {
                // collection is not in rejected state, move it there
                _this.updateCertification(version, originalRepo, _this.state.rejectedRepoName);
            }
        })
            .catch(function (error) {
            var description = !error.response
                ? error
                : errorMessage(error.response.status, error.response.statusText);
            _this.addAlert(t(templateObject_43 || (templateObject_43 = __makeTemplateObject(["Changes to certification status for collection \"", " ", " v", "\" could not be saved."], ["Changes to certification status for collection \"", " ", " v", "\" could not be saved."])), version.namespace, version.name, version.version), 'danger', description);
        });
    };
    CertificationDashboard.prototype.distributionByRepoName = function (name) {
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function () {
            var repository, distribution;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0: return [4 /*yield*/, AnsibleRepositoryAPI.list({ name: name })];
                    case 1:
                        repository = (_c = (_b = (_a = (_g.sent())) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.results) === null || _c === void 0 ? void 0 : _c[0];
                        if (!repository) {
                            return [2 /*return*/, Promise.reject(t(templateObject_44 || (templateObject_44 = __makeTemplateObject(["Failed to find repository ", ""], ["Failed to find repository ", ""])), name))];
                        }
                        return [4 /*yield*/, AnsibleDistributionAPI.list({ repository: repository.pulp_href })];
                    case 2:
                        distribution = (_f = (_e = (_d = (_g.sent())) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.results) === null || _f === void 0 ? void 0 : _f[0];
                        if (!distribution) {
                            return [2 /*return*/, Promise.reject(t(templateObject_45 || (templateObject_45 = __makeTemplateObject(["Failed to find a distribution for repository ", ""], ["Failed to find a distribution for repository ", ""])), name))];
                        }
                        return [2 /*return*/, distribution];
                }
            });
        });
    };
    CertificationDashboard.prototype.updateCertification = function (version, originalRepo, destinationRepo) {
        var _this = this;
        // galaxy_ng CollectionRepositoryMixing.get_repos uses the distribution base path to look up repository pk
        // there ..may be room for simplification since we already know the repo; OTOH also compatibility concerns
        return Promise.all([
            this.distributionByRepoName(originalRepo),
            this.distributionByRepoName(destinationRepo),
        ])
            .then(function (_a) {
            var source = _a[0], destination = _a[1];
            return CollectionVersionAPI.move(version.namespace, version.name, version.version, source.base_path, destination.base_path);
        })
            .then(function (result) {
            return waitForTask(result.data.remove_task_id, { waitMs: 500 });
        })
            .then(function () {
            return _this.addAlert(t(templateObject_46 || (templateObject_46 = __makeTemplateObject(["Certification status for collection \"", " ", " v", "\" has been successfully updated."], ["Certification status for collection \"", " ", " v", "\" has been successfully updated."])), version.namespace, version.name, version.version), 'success');
        })
            .then(function () { return _this.queryCollections(true); })
            .catch(function (error) {
            var description = !error.response
                ? error
                : errorMessage(error.response.status, error.response.statusText);
            _this.addAlert(t(templateObject_47 || (templateObject_47 = __makeTemplateObject(["Changes to certification status for collection \"", " ", " v", "\" could not be saved."], ["Changes to certification status for collection \"", " ", " v", "\" could not be saved."])), version.namespace, version.name, version.version), 'danger', description);
        });
    };
    CertificationDashboard.prototype.queryCollections = function (handleLoading) {
        var _this = this;
        if (handleLoading) {
            this.setState({
                loading: true,
            });
        }
        var _a = this.state.params, status = _a.status, sort = _a.sort, params = __rest(_a, ["status", "sort"]);
        var updatedParams = __assign({ order_by: sort }, params);
        if (status) {
            updatedParams['repository_label'] = "pipeline=".concat(status);
        }
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
            _this.addAlert(t(templateObject_48 || (templateObject_48 = __makeTemplateObject(["Error loading collections."], ["Error loading collections."]))), 'danger', error === null || error === void 0 ? void 0 : error.message);
            _this.setState({
                loading: false,
                updatingVersions: [],
            });
        });
    };
    CertificationDashboard.prototype.download = function (repository, namespace, name, version) {
        CollectionAPI.getDownloadURL(repository, namespace, name, version).then(function (downloadURL) {
            window.location.assign(downloadURL);
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
    CertificationDashboard.prototype.getCollectionRepoList = function (collection) {
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
                                page_size: 100000,
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
    // compose from collectionVersionSearch to CollectionVersion structure for approval modal
    CertificationDashboard.prototype.transformToCollectionVersion = function (collection) {
        return __awaiter(this, void 0, void 0, function () {
            var repoList, collection_version, id, collectionVersion;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCollectionRepoList(collection)];
                    case 1:
                        repoList = _a.sent();
                        collection_version = collection.collection_version;
                        id = parsePulpIDFromURL(collection_version.pulp_href);
                        collectionVersion = {
                            id: id,
                            version: collection_version.version,
                            namespace: collection_version.namespace,
                            name: collection_version.name,
                            repository_list: repoList,
                        };
                        return [2 /*return*/, collectionVersion];
                }
            });
        });
    };
    return CertificationDashboard;
}(React.Component));
export default withRouter(CertificationDashboard);
CertificationDashboard.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36, templateObject_37, templateObject_38, templateObject_39, templateObject_40, templateObject_41, templateObject_42, templateObject_43, templateObject_44, templateObject_45, templateObject_46, templateObject_47, templateObject_48;
//# sourceMappingURL=certification-dashboard.js.map