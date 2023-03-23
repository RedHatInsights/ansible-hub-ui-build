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
import { Button, ButtonVariant, DropdownItem, Label, LabelGroup, Toolbar, ToolbarGroup, ToolbarItem, } from '@patternfly/react-core';
import { CheckCircleIcon, DownloadIcon, ExclamationCircleIcon, ExclamationTriangleIcon, } from '@patternfly/react-icons';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { CertificateUploadAPI, CollectionAPI, CollectionVersionAPI, Repositories, } from 'src/api';
import { ApproveModal, BaseHeader, DateComponent, EmptyStateFilter, EmptyStateNoData, EmptyStateUnauthorized, ListItemActions, Main, } from 'src/components';
import { AlertList, AppliedFilters, CompoundFilter, LoadingPageSpinner, LoadingPageWithHeader, Pagination, SortTable, UploadSingCertificateModal, closeAlertMixin, } from 'src/components';
import { Constants } from 'src/constants';
import { AppContext } from 'src/loaders/app-context';
import { Paths, formatPath } from 'src/paths';
import { ParamHelper, errorMessage, filterIsSet, parsePulpIDFromURL, waitForTask, waitForTaskUrl, withRouter, } from 'src/utilities';
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
            approveModalInfo: null,
            repositoryList: [],
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
            promises.push(Repositories.listApproved()
                .then(function (data) {
                _this.setState({ repositoryList: data.data.results });
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
    CertificationDashboard.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.state, versions = _b.versions, params = _b.params, itemCount = _b.itemCount, loading = _b.loading, unauthorized = _b.unauthorized;
        if (!versions && !unauthorized) {
            return React.createElement(LoadingPageWithHeader, null);
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(BaseHeader, { title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Approval dashboard"], ["Approval dashboard"]))) }),
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
                                                title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Namespace"], ["Namespace"]))),
                                            },
                                            {
                                                id: 'name',
                                                title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Collection Name"], ["Collection Name"]))),
                                            },
                                            {
                                                id: 'repository',
                                                title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Status"], ["Status"]))),
                                                inputType: 'select',
                                                options: [
                                                    {
                                                        id: Constants.NOTCERTIFIED,
                                                        title: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Rejected"], ["Rejected"]))),
                                                    },
                                                    {
                                                        id: Constants.NEEDSREVIEW,
                                                        title: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Needs Review"], ["Needs Review"]))),
                                                    },
                                                    {
                                                        id: Constants.PUBLISHED,
                                                        title: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Approved"], ["Approved"]))),
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
                                repository: (_a = {},
                                    _a[Constants.PUBLISHED] = t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Approved"], ["Approved"]))),
                                    _a[Constants.NEEDSREVIEW] = t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Needs Review"], ["Needs Review"]))),
                                    _a[Constants.NOTCERTIFIED] = t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Rejected"], ["Rejected"]))),
                                    _a),
                            }, niceNames: {
                                repository: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Status"], ["Status"]))),
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
                    }, collectionVersion: this.state.approveModalInfo.collectionVersion, addAlert: function (alert) { return _this.addAlertObj(alert); }, allRepositories: this.state.repositoryList }))))));
    };
    CertificationDashboard.prototype.renderTable = function (versions, params) {
        var _this = this;
        if (versions.length === 0) {
            return filterIsSet(params, ['namespace', 'name', 'repository']) ? (React.createElement(EmptyStateFilter, null)) : (React.createElement(EmptyStateNoData, { title: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["No managed collections yet"], ["No managed collections yet"]))), description: t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Collections will appear once uploaded"], ["Collections will appear once uploaded"]))) }));
        }
        var sortTableOptions = {
            headers: [
                {
                    title: t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Namespace"], ["Namespace"]))),
                    type: 'alpha',
                    id: 'namespace',
                },
                {
                    title: t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Collection"], ["Collection"]))),
                    type: 'alpha',
                    id: 'collection',
                },
                {
                    title: t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Version"], ["Version"]))),
                    type: 'number',
                    id: 'version',
                },
                {
                    title: t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Date created"], ["Date created"]))),
                    type: 'number',
                    id: 'pulp_created',
                },
                {
                    title: t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Repositories"], ["Repositories"]))),
                    type: 'none',
                    id: '',
                },
                {
                    title: t(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Status"], ["Status"]))),
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
        return (React.createElement("table", { "aria-label": t(templateObject_21 || (templateObject_21 = __makeTemplateObject(["Collection versions"], ["Collection versions"]))), className: 'hub-c-table-content pf-c-table' },
            React.createElement(SortTable, { options: sortTableOptions, params: params, updateParams: function (p) {
                    return _this.updateParams(p, function () { return _this.queryCollections(true); });
                } }),
            React.createElement("tbody", null, versions.map(function (version, i) { return _this.renderRow(version, i); }))));
    };
    CertificationDashboard.prototype.renderStatus = function (version) {
        if (this.state.updatingVersions.includes(version)) {
            return React.createElement("span", { className: 'fa fa-lg fa-spin fa-spinner' });
        }
        if (this.isApproved(version)) {
            var display_signatures = this.context.featureFlags.display_signatures;
            return (React.createElement(Label, { variant: 'outline', color: 'green', icon: React.createElement(CheckCircleIcon, null) }, display_signatures && version.sign_state === 'signed'
                ? t(templateObject_22 || (templateObject_22 = __makeTemplateObject(["Signed and approved"], ["Signed and approved"]))) : t(templateObject_23 || (templateObject_23 = __makeTemplateObject(["Approved"], ["Approved"])))));
        }
        if (version.repository_list.includes(Constants.NOTCERTIFIED)) {
            return (React.createElement(Label, { variant: 'outline', color: 'red', icon: React.createElement(ExclamationCircleIcon, null) }, t(templateObject_24 || (templateObject_24 = __makeTemplateObject(["Rejected"], ["Rejected"])))));
        }
        if (version.repository_list.includes(Constants.NEEDSREVIEW)) {
            var _a = this.context.featureFlags, can_upload_signatures = _a.can_upload_signatures, require_upload_signatures = _a.require_upload_signatures;
            return (React.createElement(Label, { variant: 'outline', color: 'orange', icon: React.createElement(ExclamationTriangleIcon, null) }, version.sign_state === 'unsigned' &&
                can_upload_signatures &&
                require_upload_signatures
                ? t(templateObject_25 || (templateObject_25 = __makeTemplateObject(["Needs signature and review"], ["Needs signature and review"]))) : t(templateObject_26 || (templateObject_26 = __makeTemplateObject(["Needs review"], ["Needs review"])))));
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
            React.createElement("td", null,
                React.createElement(LabelGroup, null, version.repository_list.map(function (repo, i) {
                    var text = repo;
                    if (i < version.repository_list.length - 1) {
                        text += ', ';
                    }
                    return text;
                }))),
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
                React.createElement(Button, { onClick: function () { return _this.openUploadCertificateModal(version); } }, t(templateObject_27 || (templateObject_27 = __makeTemplateObject(["Upload signature"], ["Upload signature"])))),
                ' ')),
            React.createElement(Button, { key: 'approve', isDisabled: mustUploadSignature, "data-cy": 'approve-button', onClick: function () {
                    _this.approve(version);
                } }, autoSign ? t(templateObject_28 || (templateObject_28 = __makeTemplateObject(["Sign and approve"], ["Sign and approve"]))) : t(templateObject_29 || (templateObject_29 = __makeTemplateObject(["Approve"], ["Approve"])))),
        ].filter(Boolean);
        var importsLink = (React.createElement(DropdownItem, { key: 'imports', component: React.createElement(Link, { to: formatPath(Paths.myImports, {}, {
                    namespace: version.namespace,
                    name: version.name,
                    version: version.version,
                }) }, t(templateObject_30 || (templateObject_30 = __makeTemplateObject(["View Import Logs"], ["View Import Logs"])))) }));
        var certifyDropDown = function (isDisabled) { return (React.createElement(DropdownItem, { onClick: function () { return _this.approve(version); }, isDisabled: isDisabled, key: 'certify' }, autoSign ? t(templateObject_31 || (templateObject_31 = __makeTemplateObject(["Sign and approve"], ["Sign and approve"]))) : t(templateObject_32 || (templateObject_32 = __makeTemplateObject(["Approve"], ["Approve"]))))); };
        var rejectDropDown = function (isDisabled) { return (React.createElement(DropdownItem, { onClick: function () {
                _this.reject(version);
            }, isDisabled: isDisabled, className: 'rejected-icon', key: 'reject' }, t(templateObject_33 || (templateObject_33 = __makeTemplateObject(["Reject"], ["Reject"]))))); };
        if (this.isApproved(version)) {
            return (React.createElement(ListItemActions, { kebabItems: [
                    certifyDropDown(true),
                    rejectDropDown(false),
                    importsLink,
                ] }));
        }
        if (version.repository_list.includes(Constants.NOTCERTIFIED)) {
            // render reject button if version is in multiple repositories including rejected state - handles inconsistency
            // and allows user to reject it again to move it all to rejected state
            return (React.createElement(ListItemActions, { kebabItems: [
                    certifyDropDown(false),
                    rejectDropDown(version.repository_list.length == 1),
                    importsLink,
                ] }));
        }
        if (version.repository_list.includes(Constants.NEEDSREVIEW)) {
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
            return _this.addAlert(t(templateObject_34 || (templateObject_34 = __makeTemplateObject(["Certificate for collection \"", " ", " v", "\" has been successfully uploaded."], ["Certificate for collection \"", " ", " v", "\" has been successfully uploaded."])), version.namespace, version.name, version.version), 'success');
        })
            .then(function () { return _this.queryCollections(true); })
            .catch(function (error) {
            var description = !error.response
                ? error
                : errorMessage(error.response.status, error.response.statusText);
            _this.addAlert(t(templateObject_35 || (templateObject_35 = __makeTemplateObject(["The certificate for \"", " ", " v", "\" could not be saved."], ["The certificate for \"", " ", " v", "\" could not be saved."])), version.namespace, version.name, version.version), 'danger', description);
        })
            .finally(function () { return _this.closeUploadCertificateModal(); });
    };
    CertificationDashboard.prototype.isApproved = function (version) {
        var _this = this;
        var approvedRepoFound = true;
        if (version.repository_list.length == 0) {
            return false;
        }
        version.repository_list.forEach(function (repo) {
            if (!_this.state.repositoryList.find(function (r) { return r.name == repo; })) {
                approvedRepoFound = false;
            }
        });
        return approvedRepoFound;
    };
    CertificationDashboard.prototype.approve = function (version) {
        if (version.repository_list.length == 0) {
            // I hope that this may not occure ever, but to be sure...
            this.addAlert(t(templateObject_36 || (templateObject_36 = __makeTemplateObject(["Approval failed."], ["Approval failed."]))), 'danger', t(templateObject_37 || (templateObject_37 = __makeTemplateObject(["Collection not found in any repository."], ["Collection not found in any repository."]))));
            return;
        }
        if (this.state.repositoryList.length == 1) {
            var originalRepo = version.repository_list.find(function (repo) {
                return repo == Constants.NEEDSREVIEW || repo == Constants.NOTCERTIFIED;
            });
            if (originalRepo) {
                this.updateCertification(version, originalRepo, this.state.repositoryList[0].name);
            }
            else {
                // I hope that this may not occure ever, but to be sure...
                this.addAlert(t(templateObject_38 || (templateObject_38 = __makeTemplateObject(["Approval failed."], ["Approval failed."]))), 'danger', t(templateObject_39 || (templateObject_39 = __makeTemplateObject(["Collection has to be in rejected or staging repository."], ["Collection has to be in rejected or staging repository."]))));
            }
        }
        else {
            this.setState({ approveModalInfo: { collectionVersion: version } });
        }
    };
    CertificationDashboard.prototype.reject = function (version) {
        var _this = this;
        if (version.repository_list.length == 0) {
            // I hope that this may not occure ever, but to be sure...
            this.addAlert(t(templateObject_40 || (templateObject_40 = __makeTemplateObject(["Rejection failed."], ["Rejection failed."]))), 'danger', t(templateObject_41 || (templateObject_41 = __makeTemplateObject(["Collection not found in any repository."], ["Collection not found in any repository."]))));
            return;
        }
        if (version.repository_list.length == 1) {
            // maintain vanilla functionality
            this.updateCertification(version, version.repository_list[0], Constants.NOTCERTIFIED);
        }
        else {
            var promises_1 = [];
            var repositoryList_1 = this.state.repositoryList;
            this.setState({ updatingVersions: [version] });
            var removedRepos_1 = [];
            var failedRepos_1 = [];
            version.repository_list.forEach(function (repo) {
                var _a;
                var repoInfo = repositoryList_1.find(function (r) { return r.name == repo; });
                if (((_a = repoInfo === null || repoInfo === void 0 ? void 0 : repoInfo.pulp_labels) === null || _a === void 0 ? void 0 : _a.pipeline) == 'approved') {
                    var promise = CollectionVersionAPI.setRepository(version.namespace, version.name, version.version, repo, Constants.NOTCERTIFIED)
                        .then(function (task) {
                        return waitForTaskUrl(task['data'].copy_task_id);
                    })
                        .then(function () {
                        removedRepos_1.push(repo);
                    })
                        .catch(function () {
                        failedRepos_1.push(repo);
                    });
                    promises_1.push(promise);
                }
            });
            Promise.all(promises_1).then(function () {
                _this.setState({ loading: false });
                _this.queryCollections(true);
                if (failedRepos_1.length == 0) {
                    _this.addAlertObj({
                        title: t(templateObject_42 || (templateObject_42 = __makeTemplateObject(["Certification status for collection \"", " ", " v", "\" has been successfully updated."], ["Certification status for collection \"", " ", " v", "\" has been successfully updated."])), version.namespace, version.name, version.version),
                        variant: 'success',
                    });
                }
                else {
                    if (removedRepos_1.length > 0) {
                        _this.addAlertObj({
                            title: t(templateObject_43 || (templateObject_43 = __makeTemplateObject(["Rejection summary."], ["Rejection summary."]))),
                            variant: 'danger',
                            description: t(templateObject_44 || (templateObject_44 = __makeTemplateObject(["Collection was sucessfuly rejected from those repositories: ", ", but failed to be removed from those repositories: ", ""], ["Collection was sucessfuly rejected from those repositories: ", ", but failed to be removed from those repositories: ", ""])), removedRepos_1.join(', '), failedRepos_1.join(', ')),
                        });
                    }
                    else {
                        _this.addAlertObj({
                            title: t(templateObject_45 || (templateObject_45 = __makeTemplateObject(["Rejection failed."], ["Rejection failed."]))),
                            variant: 'danger',
                            description: t(templateObject_46 || (templateObject_46 = __makeTemplateObject(["Collection failed to be removed from those repositories: ", ""], ["Collection failed to be removed from those repositories: ", ""])), failedRepos_1.join(', ')),
                        });
                    }
                }
            });
        }
    };
    CertificationDashboard.prototype.updateCertification = function (version, originalRepo, destinationRepo) {
        var _this = this;
        this.setState({ updatingVersions: [version] });
        return CollectionVersionAPI.setRepository(version.namespace, version.name, version.version, originalRepo, destinationRepo)
            .then(function (result) {
            return waitForTask(result.data.remove_task_id, { waitMs: 500 });
        })
            .then(function () {
            return _this.addAlert(t(templateObject_47 || (templateObject_47 = __makeTemplateObject(["Certification status for collection \"", " ", " v", "\" has been successfully updated."], ["Certification status for collection \"", " ", " v", "\" has been successfully updated."])), version.namespace, version.name, version.version), 'success');
        })
            .then(function () { return _this.queryCollections(true); })
            .catch(function (error) {
            var description = !error.response
                ? error
                : errorMessage(error.response.status, error.response.statusText);
            _this.addAlert(t(templateObject_48 || (templateObject_48 = __makeTemplateObject(["Changes to certification status for collection \"", " ", " v", "\" could not be saved."], ["Changes to certification status for collection \"", " ", " v", "\" could not be saved."])), version.namespace, version.name, version.version), 'danger', description);
        });
    };
    CertificationDashboard.prototype.queryCollections = function (handleLoading) {
        var _this = this;
        if (handleLoading) {
            this.setState({
                loading: true,
            });
        }
        return CollectionVersionAPI.list(this.state.params)
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
            _this.addAlert(t(templateObject_49 || (templateObject_49 = __makeTemplateObject(["Error loading collections."], ["Error loading collections."]))), 'danger', error === null || error === void 0 ? void 0 : error.message);
            _this.setState({
                loading: false,
                updatingVersions: [],
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
    CertificationDashboard.prototype.addAlertObj = function (alert) {
        this.addAlert(alert.title, alert.variant, alert.description);
    };
    return CertificationDashboard;
}(React.Component));
export default withRouter(CertificationDashboard);
CertificationDashboard.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36, templateObject_37, templateObject_38, templateObject_39, templateObject_40, templateObject_41, templateObject_42, templateObject_43, templateObject_44, templateObject_45, templateObject_46, templateObject_47, templateObject_48, templateObject_49;
//# sourceMappingURL=certification-dashboard.js.map