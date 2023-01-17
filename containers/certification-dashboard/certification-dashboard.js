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
import * as React from 'react';
import './certification-dashboard.scss';
import { withRouter } from 'src/utilities';
import { Link } from 'react-router-dom';
import { BaseHeader, DateComponent, EmptyStateFilter, EmptyStateNoData, EmptyStateUnauthorized, ListItemActions, Main, } from 'src/components';
import { Toolbar, ToolbarGroup, ToolbarItem, Button, DropdownItem, Label, ButtonVariant, } from '@patternfly/react-core';
import { ExclamationTriangleIcon, ExclamationCircleIcon, CheckCircleIcon, DownloadIcon, } from '@patternfly/react-icons';
import { CollectionVersionAPI, CertificateUploadAPI, Repositories, CollectionAPI, } from 'src/api';
import { errorMessage, filterIsSet, ParamHelper, parsePulpIDFromURL, waitForTask, } from 'src/utilities';
import { LoadingPageWithHeader, CompoundFilter, LoadingPageSpinner, AppliedFilters, Pagination, AlertList, closeAlertMixin, SortTable, UploadSingCertificateModal, } from 'src/components';
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
            uploadCertificateModalOpen: false,
            versionToUploadCertificate: null,
        };
        return _this;
    }
    CertificationDashboard.prototype.componentDidMount = function () {
        var _a = this.context, user = _a.user, hasPermission = _a.hasPermission;
        if (!user ||
            user.is_anonymous ||
            !hasPermission('ansible.modify_ansible_repo_content')) {
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
                    React.createElement("div", { className: 'toolbar hub-toolbar' },
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
                            }, count: itemCount }))),
                React.createElement(UploadSingCertificateModal, { isOpen: this.state.uploadCertificateModalOpen, onCancel: function () { return _this.closeUploadCertificateModal(); }, onSubmit: function (d) { return _this.submitCertificate(d); } })))));
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
            var display_signatures = this.context.featureFlags.display_signatures;
            return (React.createElement(Label, { variant: 'outline', color: 'green', icon: React.createElement(CheckCircleIcon, null) }, display_signatures && version.sign_state === 'signed'
                ? t(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Signed and approved"], ["Signed and approved"]))) : t(templateObject_21 || (templateObject_21 = __makeTemplateObject(["Approved"], ["Approved"])))));
        }
        if (version.repository_list.includes(Constants.NOTCERTIFIED)) {
            return (React.createElement(Label, { variant: 'outline', color: 'red', icon: React.createElement(ExclamationCircleIcon, null) }, t(templateObject_22 || (templateObject_22 = __makeTemplateObject(["Rejected"], ["Rejected"])))));
        }
        if (version.repository_list.includes(Constants.NEEDSREVIEW)) {
            var _a = this.context.featureFlags, can_upload_signatures = _a.can_upload_signatures, require_upload_signatures = _a.require_upload_signatures;
            return (React.createElement(Label, { variant: 'outline', color: 'orange', icon: React.createElement(ExclamationTriangleIcon, null) }, version.sign_state === 'unsigned' &&
                can_upload_signatures &&
                require_upload_signatures
                ? t(templateObject_23 || (templateObject_23 = __makeTemplateObject(["Needs signature and review"], ["Needs signature and review"]))) : t(templateObject_24 || (templateObject_24 = __makeTemplateObject(["Needs review"], ["Needs review"])))));
        }
    };
    CertificationDashboard.prototype.renderRow = function (version, index) {
        var _this = this;
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
                    }) }, version.version),
                React.createElement(Button, { variant: ButtonVariant.link, onClick: function () {
                        _this.download(version.namespace, version.name, version.version);
                    } },
                    React.createElement(DownloadIcon, null))),
            React.createElement("td", null,
                React.createElement(DateComponent, { date: version.created_at })),
            React.createElement("td", null, this.renderStatus(version)),
            this.renderButtons(version)));
    };
    CertificationDashboard.prototype.renderButtons = function (version) {
        var _this = this;
        // not checking namespace permissions here, auto_sign happens API side, so is the permission check
        var _a = this.context.featureFlags, can_upload_signatures = _a.can_upload_signatures, collection_auto_sign = _a.collection_auto_sign, require_upload_signatures = _a.require_upload_signatures;
        if (this.state.updatingVersions.includes(version)) {
            return React.createElement(ListItemActions, null); // empty td;
        }
        var canUploadSignature = can_upload_signatures && version.sign_state === 'unsigned';
        var mustUploadSignature = canUploadSignature && require_upload_signatures;
        var autoSign = collection_auto_sign && !require_upload_signatures;
        var approveButton = [
            canUploadSignature && (React.createElement(React.Fragment, { key: 'upload' },
                React.createElement(Button, { onClick: function () { return _this.openUploadCertificateModal(version); } }, t(templateObject_25 || (templateObject_25 = __makeTemplateObject(["Upload signature"], ["Upload signature"])))),
                ' ')),
            React.createElement(Button, { key: 'approve', isDisabled: mustUploadSignature, "data-cy": 'approve-button', onClick: function () {
                    return _this.updateCertification(version, Constants.NEEDSREVIEW, Constants.PUBLISHED);
                } }, autoSign ? t(templateObject_26 || (templateObject_26 = __makeTemplateObject(["Sign and approve"], ["Sign and approve"]))) : t(templateObject_27 || (templateObject_27 = __makeTemplateObject(["Approve"], ["Approve"])))),
        ].filter(Boolean);
        var importsLink = (React.createElement(DropdownItem, { key: 'imports', component: React.createElement(Link, { to: formatPath(Paths.myImports, {}, {
                    namespace: version.namespace,
                    name: version.name,
                    version: version.version,
                }) }, t(templateObject_28 || (templateObject_28 = __makeTemplateObject(["View Import Logs"], ["View Import Logs"])))) }));
        var certifyDropDown = function (isDisabled, originalRepo) { return (React.createElement(DropdownItem, { onClick: function () {
                return _this.updateCertification(version, originalRepo, Constants.PUBLISHED);
            }, isDisabled: isDisabled, key: 'certify' }, autoSign ? t(templateObject_29 || (templateObject_29 = __makeTemplateObject(["Sign and approve"], ["Sign and approve"]))) : t(templateObject_30 || (templateObject_30 = __makeTemplateObject(["Approve"], ["Approve"]))))); };
        var rejectDropDown = function (isDisabled, originalRepo) { return (React.createElement(DropdownItem, { onClick: function () {
                return _this.updateCertification(version, originalRepo, Constants.NOTCERTIFIED);
            }, isDisabled: isDisabled, className: 'rejected-icon', key: 'reject' }, t(templateObject_31 || (templateObject_31 = __makeTemplateObject(["Reject"], ["Reject"]))))); };
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
        var version = this.state.versionToUploadCertificate;
        var signed_collection = "".concat(PULP_API_BASE_PATH, "content/ansible/collection_versions/").concat(version.id, "/");
        return Repositories.getRepository({
            name: 'staging',
        })
            .then(function (response) {
            return CertificateUploadAPI.upload({
                file: file,
                repository: response.data.results[0].pulp_href,
                signed_collection: signed_collection,
            });
        })
            .then(function (result) { return waitForTask(parsePulpIDFromURL(result.data.task)); })
            .then(function () {
            return _this.addAlert(t(templateObject_32 || (templateObject_32 = __makeTemplateObject(["Certificate for collection \"", " ", " v", "\" has been successfully uploaded."], ["Certificate for collection \"", " ", " v", "\" has been successfully uploaded."])), version.namespace, version.name, version.version), 'success');
        })
            .then(function () { return _this.queryCollections(); })
            .catch(function (error) {
            var description = !error.response
                ? error
                : errorMessage(error.response.status, error.response.statusText);
            _this.addAlert(t(templateObject_33 || (templateObject_33 = __makeTemplateObject(["The certificate for \"", " ", " v", "\" could not be saved."], ["The certificate for \"", " ", " v", "\" could not be saved."])), version.namespace, version.name, version.version), 'danger', description);
        })
            .finally(function () { return _this.closeUploadCertificateModal(); });
    };
    CertificationDashboard.prototype.updateCertification = function (version, originalRepo, destinationRepo) {
        var _this = this;
        this.setState({ updatingVersions: [version] });
        return CollectionVersionAPI.setRepository(version.namespace, version.name, version.version, originalRepo, destinationRepo)
            .then(function (result) {
            return waitForTask(result.data.remove_task_id, { waitMs: 500 });
        })
            .then(function () {
            return _this.addAlert(t(templateObject_34 || (templateObject_34 = __makeTemplateObject(["Certification status for collection \"", " ", " v", "\" has been successfully updated."], ["Certification status for collection \"", " ", " v", "\" has been successfully updated."])), version.namespace, version.name, version.version), 'success');
        })
            .then(function () { return _this.queryCollections(); })
            .catch(function (error) {
            var description = !error.response
                ? error
                : errorMessage(error.response.status, error.response.statusText);
            _this.addAlert(t(templateObject_35 || (templateObject_35 = __makeTemplateObject(["Changes to certification status for collection \"", " ", " v", "\" could not be saved."], ["Changes to certification status for collection \"", " ", " v", "\" could not be saved."])), version.namespace, version.name, version.version), 'danger', description);
        });
    };
    CertificationDashboard.prototype.queryCollections = function () {
        var _this = this;
        this.setState({ loading: true }, function () {
            return CollectionVersionAPI.list(_this.state.params)
                .then(function (result) {
                _this.setState({
                    versions: result.data.data,
                    itemCount: result.data.meta.count,
                    loading: false,
                    updatingVersions: [],
                });
            })
                .catch(function (error) {
                _this.addAlert(t(templateObject_36 || (templateObject_36 = __makeTemplateObject(["Error loading collections."], ["Error loading collections."]))), 'danger', error === null || error === void 0 ? void 0 : error.message);
                _this.setState({
                    loading: false,
                    updatingVersions: [],
                });
            });
        });
    };
    CertificationDashboard.prototype.download = function (namespace, name, version) {
        CollectionAPI.getDownloadURL('staging', namespace, name, version).then(function (downloadURL) {
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
    return CertificationDashboard;
}(React.Component));
export default withRouter(CertificationDashboard);
CertificationDashboard.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36;
//# sourceMappingURL=certification-dashboard.js.map