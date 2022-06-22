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
import { t, Trans } from '@lingui/macro';
import * as React from 'react';
import { errorMessage } from 'src/utilities';
import './header.scss';
import { Redirect } from 'react-router-dom';
import * as moment from 'moment';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import { Select, SelectOption, SelectVariant, List, ListItem, Modal, Alert, Text, Button, DropdownItem, Tooltip, Checkbox, } from '@patternfly/react-core';
import { AppContext } from 'src/loaders/app-context';
import { BaseHeader, Breadcrumbs, LinkTabs, Logo, RepoSelector, Pagination, AlertList, closeAlertMixin, StatefulDropdown, DeleteModal, SignSingleCertificateModal, SignAllCertificatesModal, ImportModal, } from 'src/components';
import { CollectionAPI, SignCollectionAPI, MyNamespaceAPI, } from 'src/api';
import { Paths, formatPath } from 'src/paths';
import { waitForTask, canSign as canSignNS, parsePulpIDFromURL, } from 'src/utilities';
import { ParamHelper } from 'src/utilities/param-helper';
import { DateComponent } from '../date-component/date-component';
import { Constants } from 'src/constants';
import { SignatureBadge } from '../signing';
var CollectionHeader = /** @class */ (function (_super) {
    __extends(CollectionHeader, _super);
    function CollectionHeader(props) {
        var _this = _super.call(this, props) || this;
        _this.ignoreParams = ['showing', 'keywords'];
        _this.updatePaginationParams = function (_a) {
            var page = _a.page, page_size = _a.page_size;
            _this.setState({
                modalPagination: {
                    page: page,
                    pageSize: page_size,
                },
            });
        };
        _this.signCollection = function () {
            var errorAlert = function (status) {
                if (status === void 0) { status = 500; }
                return ({
                    variant: 'danger',
                    title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["API Error: ", ""], ["API Error: ", ""])), status),
                    description: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Failed to sign all versions in the collection."], ["Failed to sign all versions in the collection."]))),
                });
            };
            _this.setState({
                alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                    {
                        id: 'loading-signing',
                        variant: 'success',
                        title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Signing started for all versions in collection \"", "\""], ["Signing started for all versions in collection \"", "\""])), _this.props.collection.name),
                    },
                ], false),
                isOpenSignAllModal: false,
            });
            SignCollectionAPI.sign({
                signing_service: _this.context.settings.GALAXY_COLLECTION_SIGNING_SERVICE,
                distro_base_path: _this.context.selectedRepo,
                namespace: _this.props.collection.namespace.name,
                collection: _this.props.collection.name,
            })
                .then(function (result) {
                waitForTask(result.data.task_id)
                    .then(function () {
                    _this.props.updateParams({});
                })
                    .catch(function (error) {
                    _this.setState({
                        alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [errorAlert(error)], false),
                    });
                })
                    .finally(function () {
                    _this.setState({
                        alerts: _this.state.alerts.filter(function (x) { return (x === null || x === void 0 ? void 0 : x.id) !== 'loading-signing'; }),
                    });
                });
            })
                .catch(function (error) {
                // The request failed in the first place
                _this.setState({
                    alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [errorAlert(error.response.status)], false),
                });
            });
        };
        _this.signVersion = function () {
            var errorAlert = function (status) {
                if (status === void 0) { status = 500; }
                return ({
                    variant: 'danger',
                    title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["API Error: ", ""], ["API Error: ", ""])), status),
                    description: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Failed to sign the version."], ["Failed to sign the version."]))),
                });
            };
            _this.setState({
                alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                    {
                        id: 'loading-signing',
                        variant: 'success',
                        title: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Signing started for collection \"", " v", "\"."], ["Signing started for collection \"", " v", "\"."])), _this.props.collection.name, _this.props.collection.latest_version.version),
                    },
                ], false),
                isOpenSignModal: false,
            });
            SignCollectionAPI.sign({
                signing_service: _this.context.settings.GALAXY_COLLECTION_SIGNING_SERVICE,
                distro_base_path: _this.context.selectedRepo,
                namespace: _this.props.collection.namespace.name,
                collection: _this.props.collection.name,
                version: _this.props.collection.latest_version.version,
            })
                .then(function (result) {
                waitForTask(result.data.task_id)
                    .then(function () {
                    _this.props.updateParams({});
                })
                    .catch(function (error) {
                    _this.setState({
                        alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [errorAlert(error)], false),
                    });
                })
                    .finally(function () {
                    _this.setState({
                        alerts: _this.state.alerts.filter(function (x) { return (x === null || x === void 0 ? void 0 : x.id) !== 'loading-signing'; }),
                    });
                });
            })
                .catch(function (error) {
                // The request failed in the first place
                _this.setState({
                    alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [errorAlert(error.response.status)], false),
                });
            });
        };
        _this.deleteCollectionVersion = function (collectionVersion) {
            var _a = _this.state, deleteCollection = _a.deleteCollection, name = _a.deleteCollection.name;
            CollectionAPI.deleteCollectionVersion(_this.context.selectedRepo, deleteCollection)
                .then(function (res) {
                var taskId = parsePulpIDFromURL(res.data.task);
                var name = deleteCollection.name;
                waitForTask(taskId).then(function () {
                    if (deleteCollection.all_versions.length > 1) {
                        var topVersion = deleteCollection.all_versions.filter(function (_a) {
                            var version = _a.version;
                            return version !== collectionVersion;
                        });
                        _this.props.updateParams(ParamHelper.setParam(_this.props.params, 'version', topVersion[0].version));
                        _this.setState({
                            deleteCollection: null,
                            collectionVersion: null,
                            isDeletionPending: false,
                            alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                                {
                                    variant: 'success',
                                    title: (React.createElement(Trans, null,
                                        "Collection \"",
                                        name,
                                        " v",
                                        collectionVersion,
                                        "\" has been successfully deleted.")),
                                },
                            ], false),
                        });
                    }
                    else {
                        // last version in collection => collection will be deleted => redirect
                        _this.context.setAlerts(__spreadArray(__spreadArray([], _this.context.alerts, true), [
                            {
                                variant: 'success',
                                title: (React.createElement(Trans, null,
                                    "Collection \"",
                                    name,
                                    " v",
                                    collectionVersion,
                                    "\" has been successfully deleted.")),
                            },
                        ], false));
                        _this.setState({
                            redirect: formatPath(Paths.namespaceByRepo, {
                                repo: _this.context.selectedRepo,
                                namespace: deleteCollection.namespace.name,
                            }),
                        });
                    }
                });
            })
                .catch(function (err) {
                var _a = err.response, _b = _a.data, detail = _b.detail, dependent_collection_versions = _b.dependent_collection_versions, status = _a.status, statusText = _a.statusText;
                if (status === 400) {
                    var dependencies = (React.createElement(React.Fragment, null,
                        React.createElement(Trans, null, "Dependent collections"),
                        React.createElement(List, { className: 'dependent-collections-alert-list' }, dependent_collection_versions.map(function (d) { return (React.createElement(ListItem, { key: d }, d)); }))));
                    _this.setState({
                        deleteCollection: null,
                        collectionVersion: null,
                        isDeletionPending: false,
                        alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                            {
                                variant: 'danger',
                                title: detail,
                                description: dependencies,
                            },
                        ], false),
                    });
                }
                else {
                    _this.setState({
                        deleteCollection: null,
                        collectionVersion: null,
                        isDeletionPending: false,
                        alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                            {
                                variant: 'danger',
                                title: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Collection \"", " v", "\" could not be deleted."], ["Collection \"", " v", "\" could not be deleted."])), name, collectionVersion),
                                description: errorMessage(status, statusText),
                            },
                        ], false),
                    });
                }
            });
        };
        _this.deleteCollection = function () {
            var _a = _this.state, deleteCollection = _a.deleteCollection, name = _a.deleteCollection.name;
            CollectionAPI.deleteCollection(_this.context.selectedRepo, deleteCollection)
                .then(function (res) {
                var taskId = parsePulpIDFromURL(res.data.task);
                waitForTask(taskId).then(function () {
                    _this.context.setAlerts(__spreadArray(__spreadArray([], _this.context.alerts, true), [
                        {
                            variant: 'success',
                            title: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Collection \"", "\" has been successfully deleted."], ["Collection \"", "\" has been successfully deleted."])), name),
                        },
                    ], false));
                    _this.setState({
                        collectionVersion: null,
                        deleteCollection: null,
                        isDeletionPending: false,
                        redirect: formatPath(Paths.namespaceByRepo, {
                            repo: _this.context.selectedRepo,
                            namespace: deleteCollection.namespace.name,
                        }),
                    });
                });
            })
                .catch(function (err) {
                var _a = err.response, status = _a.status, statusText = _a.statusText;
                _this.setState({
                    collectionVersion: null,
                    deleteCollection: null,
                    isDeletionPending: false,
                    alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                        {
                            variant: 'danger',
                            title: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Collection \"", "\" could not be deleted."], ["Collection \"", "\" could not be deleted."])), name),
                            description: errorMessage(status, statusText),
                        },
                    ], false),
                });
            });
        };
        _this.closeModal = function () {
            _this.setState({ deleteCollection: null });
        };
        _this.state = {
            isOpenVersionsSelect: false,
            isOpenVersionsModal: false,
            isOpenSignModal: false,
            isOpenSignAllModal: false,
            modalPagination: {
                page: 1,
                pageSize: Constants.DEFAULT_PAGINATION_OPTIONS[1],
            },
            deleteCollection: null,
            collectionVersion: null,
            confirmDelete: false,
            alerts: [],
            redirect: null,
            noDependencies: false,
            isDeletionPending: false,
            updateCollection: null,
            showImportModal: false,
        };
        return _this;
    }
    CollectionHeader.prototype.componentDidMount = function () {
        this.getUsedbyDependencies();
    };
    CollectionHeader.prototype.render = function () {
        var _this = this;
        var _a;
        var _b = this.props, collection = _b.collection, params = _b.params, updateParams = _b.updateParams, breadcrumbs = _b.breadcrumbs, activeTab = _b.activeTab, className = _b.className;
        var _c = this.state, modalPagination = _c.modalPagination, isOpenVersionsModal = _c.isOpenVersionsModal, isOpenVersionsSelect = _c.isOpenVersionsSelect, redirect = _c.redirect, noDependencies = _c.noDependencies, collectionVersion = _c.collectionVersion, deleteCollection = _c.deleteCollection, confirmDelete = _c.confirmDelete, isDeletionPending = _c.isDeletionPending, showImportModal = _c.showImportModal, updateCollection = _c.updateCollection;
        var numOfshownVersions = 10;
        var all_versions = __spreadArray([], collection.all_versions, true);
        var match = all_versions.find(function (x) { return x.version === collection.latest_version.version; });
        if (!match) {
            all_versions.push({
                id: collection.latest_version.id,
                version: collection.latest_version.version,
                created: collection.latest_version.created_at,
                sign_state: collection.latest_version.sign_state,
            });
        }
        var urlKeys = [
            { key: 'documentation', name: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Docs site"], ["Docs site"]))) },
            { key: 'homepage', name: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Website"], ["Website"]))) },
            { key: 'issues', name: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Issue tracker"], ["Issue tracker"]))) },
            { key: 'repository', name: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Repo"], ["Repo"]))) },
        ];
        var latestVersion = collection.latest_version.created_at;
        var display_signatures = (((_a = this.context) === null || _a === void 0 ? void 0 : _a.featureFlags) || {}).display_signatures;
        var signedString = function (v) {
            if (display_signatures && 'sign_state' in v) {
                return v.sign_state === 'signed' ? t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["(signed)"], ["(signed)"]))) : t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["(unsigned)"], ["(unsigned)"])));
            }
            else {
                return '';
            }
        };
        var isLatestVersion = function (v) {
            return "".concat(moment(v.created).fromNow(), " ").concat(signedString(v), "\n      ").concat(v.version === all_versions[0].version ? t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["(latest)"], ["(latest)"]))) : '');
        };
        var collectionName = collection.name, namespace = collection.namespace;
        var company = namespace.company || namespace.name;
        if (redirect) {
            return React.createElement(Redirect, { push: true, to: redirect });
        }
        var canSign = canSignNS(this.context, namespace);
        var dropdownItems = [
            noDependencies
                ? this.context.user.model_permissions.delete_collection && (React.createElement(DropdownItem, { key: 'delete-collection-enabled', onClick: function () { return _this.openDeleteModalWithConfirm(); }, "data-cy": 'delete-collection-dropdown' }, t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Delete entire collection"], ["Delete entire collection"])))))
                : this.context.user.model_permissions.delete_collection && (React.createElement(Tooltip, { key: 'delete-collection-disabled', position: 'left', content: React.createElement(Trans, null,
                        "Cannot delete until collections ",
                        React.createElement("br", null),
                        "that depend on this collection ",
                        React.createElement("br", null),
                        "have been deleted.") },
                    React.createElement(DropdownItem, { isDisabled: true }, t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Delete entire collection"], ["Delete entire collection"])))))),
            this.context.user.model_permissions.delete_collection && (React.createElement(DropdownItem, { "data-cy": 'delete-version-dropdown', key: 'delete-collection-version', onClick: function () {
                    return _this.openDeleteModalWithConfirm(collection.latest_version.version);
                } }, t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Delete version ", ""], ["Delete version ", ""])), collection.latest_version.version))),
            canSign && (React.createElement(DropdownItem, { key: 'sign-all', onClick: function () { return _this.setState({ isOpenSignAllModal: true }); } }, t(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Sign entire collection"], ["Sign entire collection"]))))),
            canSign && (React.createElement(DropdownItem, { key: 'sign-version', onClick: function () { return _this.setState({ isOpenSignModal: true }); } }, t(templateObject_21 || (templateObject_21 = __makeTemplateObject(["Sign version ", ""], ["Sign version ", ""])), collection.latest_version.version))),
            React.createElement(DropdownItem, { onClick: function () { return _this.deprecate(collection); }, key: 'deprecate' }, collection.deprecated ? t(templateObject_22 || (templateObject_22 = __makeTemplateObject(["Undeprecate"], ["Undeprecate"]))) : t(templateObject_23 || (templateObject_23 = __makeTemplateObject(["Deprecate"], ["Deprecate"])))),
            React.createElement(DropdownItem, { key: 'upload-collection-version', onClick: function () { return _this.checkUploadPrivilleges(collection); }, "data-cy": 'upload-collection-version-dropdown' }, t(templateObject_24 || (templateObject_24 = __makeTemplateObject(["Upload new version"], ["Upload new version"])))),
        ].filter(Boolean);
        return (React.createElement(React.Fragment, null,
            showImportModal && (React.createElement(ImportModal, { isOpen: showImportModal, onUploadSuccess: function () {
                    return _this.setState({
                        redirect: formatPath(Paths.myImports, {}, {
                            namespace: updateCollection.namespace.name,
                        }),
                    });
                }, 
                // onCancel
                setOpen: function (isOpen, warn) { return _this.toggleImportModal(isOpen, warn); }, collection: updateCollection, namespace: updateCollection.namespace.name })),
            canSign && (React.createElement(React.Fragment, null,
                React.createElement(SignAllCertificatesModal, { name: collectionName, numberOfAffected: collection.total_versions, affectedUnsigned: collection.unsigned_versions, isOpen: this.state.isOpenSignAllModal, onSubmit: this.signCollection, onCancel: function () {
                        _this.setState({ isOpenSignAllModal: false });
                    } }),
                React.createElement(SignSingleCertificateModal, { name: collectionName, version: collection.latest_version.version, isOpen: this.state.isOpenSignModal, onSubmit: this.signVersion, onCancel: function () { return _this.setState({ isOpenSignModal: false }); } }))),
            React.createElement(Modal, { isOpen: isOpenVersionsModal, title: t(templateObject_25 || (templateObject_25 = __makeTemplateObject(["Collection versions"], ["Collection versions"]))), variant: 'small', onClose: function () { return _this.setState({ isOpenVersionsModal: false }); } },
                React.createElement(List, { isPlain: true },
                    React.createElement("div", { className: 'versions-modal-header' },
                        React.createElement(Text, null, t(templateObject_26 || (templateObject_26 = __makeTemplateObject(["", "'s versions."], ["", "'s versions."])), collectionName)),
                        React.createElement(Pagination, { isTop: true, params: {
                                page: modalPagination.page,
                                page_size: modalPagination.pageSize,
                            }, updateParams: this.updatePaginationParams, count: all_versions.length })),
                    this.paginateVersions(all_versions).map(function (v, i) { return (React.createElement(ListItem, { key: i },
                        React.createElement(Button, { variant: 'link', isInline: true, onClick: function () {
                                updateParams(ParamHelper.setParam(params, 'version', v.version.toString()));
                                _this.setState({ isOpenVersionsModal: false });
                            } },
                            "v",
                            v.version),
                        ' ', t(templateObject_27 || (templateObject_27 = __makeTemplateObject(["released ", ""], ["released ", ""])), isLatestVersion(v)))); })),
                React.createElement(Pagination, { params: {
                        page: modalPagination.page,
                        page_size: modalPagination.pageSize,
                    }, updateParams: this.updatePaginationParams, count: all_versions.length })),
            deleteCollection && (React.createElement(DeleteModal, { spinner: isDeletionPending, cancelAction: this.closeModal, deleteAction: function () {
                    return _this.setState({ isDeletionPending: true }, function () {
                        collectionVersion
                            ? _this.deleteCollectionVersion(collectionVersion)
                            : _this.deleteCollection();
                    });
                }, isDisabled: !confirmDelete || isDeletionPending, title: collectionVersion
                    ? t(templateObject_28 || (templateObject_28 = __makeTemplateObject(["Delete collection version?"], ["Delete collection version?"]))) : t(templateObject_29 || (templateObject_29 = __makeTemplateObject(["Delete collection?"], ["Delete collection?"]))) },
                React.createElement(React.Fragment, null,
                    React.createElement(Text, { style: { paddingBottom: 'var(--pf-global--spacer--md)' } }, collectionVersion ? (React.createElement(React.Fragment, null, deleteCollection.all_versions.length === 1 ? (React.createElement(Trans, null,
                        "Deleting",
                        ' ',
                        React.createElement("b", null,
                            deleteCollection.name,
                            " v",
                            collectionVersion),
                        ' ',
                        "and its data will be lost and this will cause the entire collection to be deleted.")) : (React.createElement(Trans, null,
                        "Deleting",
                        ' ',
                        React.createElement("b", null,
                            deleteCollection.name,
                            " v",
                            collectionVersion),
                        ' ',
                        "and its data will be lost.")))) : (React.createElement(Trans, null,
                        "Deleting ",
                        React.createElement("b", null, deleteCollection.name),
                        " and its data will be lost."))),
                    React.createElement(Checkbox, { isChecked: confirmDelete, onChange: function (val) { return _this.setState({ confirmDelete: val }); }, label: t(templateObject_30 || (templateObject_30 = __makeTemplateObject(["I understand that this action cannot be undone."], ["I understand that this action cannot be undone."]))), id: 'delete_confirm' })))),
            React.createElement(BaseHeader, { className: className, title: collection.name, logo: collection.namespace.avatar_url && (React.createElement(Logo, { alt: t(templateObject_31 || (templateObject_31 = __makeTemplateObject(["", " logo"], ["", " logo"])), company), className: 'image', fallbackToDefault: true, image: collection.namespace.avatar_url, size: '40px', unlockWidth: true })), contextSelector: React.createElement(RepoSelector, { selectedRepo: this.context.selectedRepo, path: Paths.searchByRepo, isDisabled: true }), breadcrumbs: React.createElement(Breadcrumbs, { links: breadcrumbs }), versionControl: React.createElement("div", { className: 'install-version-column' },
                    React.createElement("span", null, t(templateObject_32 || (templateObject_32 = __makeTemplateObject(["Version"], ["Version"])))),
                    React.createElement("div", { className: 'install-version-dropdown' },
                        React.createElement(Select, { isOpen: isOpenVersionsSelect, onToggle: function (isOpenVersionsSelect) {
                                return _this.setState({ isOpenVersionsSelect: isOpenVersionsSelect });
                            }, variant: SelectVariant.single, onSelect: function () {
                                return _this.setState({ isOpenVersionsSelect: false });
                            }, selections: "v".concat(collection.latest_version.version), "aria-label": t(templateObject_33 || (templateObject_33 = __makeTemplateObject(["Select collection version"], ["Select collection version"]))), loadingVariant: numOfshownVersions < all_versions.length
                                ? {
                                    text: t(templateObject_34 || (templateObject_34 = __makeTemplateObject(["View more"], ["View more"]))),
                                    onClick: function () {
                                        return _this.setState({
                                            isOpenVersionsModal: true,
                                            isOpenVersionsSelect: false,
                                        });
                                    },
                                }
                                : null }, this.renderSelectVersions(all_versions, numOfshownVersions).map(function (v) { return (React.createElement(SelectOption, { key: v.version, value: "v".concat(v.version), onClick: function () {
                                return updateParams(ParamHelper.setParam(params, 'version', v.version.toString()));
                            } },
                            React.createElement(Trans, null,
                                v.version,
                                " released ",
                                isLatestVersion(v)))); }))),
                    latestVersion ? (React.createElement("span", { className: 'last-updated' },
                        React.createElement(Trans, null,
                            "Last updated ",
                            React.createElement(DateComponent, { date: latestVersion })))) : null,
                    React.createElement(SignatureBadge, { isCompact: true, signState: collection.latest_version.sign_state })), pageControls: dropdownItems.length > 0 ? (React.createElement("div", { "data-cy": 'kebab-toggle' },
                    React.createElement(StatefulDropdown, { items: dropdownItems }))) : null },
                collection.deprecated && (React.createElement(Alert, { variant: 'danger', isInline: true, title: t(templateObject_35 || (templateObject_35 = __makeTemplateObject(["This collection has been deprecated."], ["This collection has been deprecated."]))) })),
                React.createElement(AlertList, { alerts: this.state.alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
                React.createElement("div", { className: 'hub-tab-link-container' },
                    React.createElement("div", { className: 'tabs' }, this.renderTabs(activeTab)),
                    React.createElement("div", { className: 'links' },
                        React.createElement("div", null,
                            React.createElement(ExternalLinkAltIcon, null)),
                        urlKeys.map(function (link) {
                            var url = collection.latest_version.metadata[link.key];
                            if (!url) {
                                return null;
                            }
                            return (React.createElement("div", { className: 'link', key: link.key },
                                React.createElement("a", { href: url, target: '_blank', rel: 'noreferrer' }, link.name)));
                        }))))));
    };
    CollectionHeader.prototype.checkUploadPrivilleges = function (collection) {
        var _this = this;
        var addAlert = function () {
            _this.setState({
                alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                    {
                        title: t(templateObject_36 || (templateObject_36 = __makeTemplateObject(["You don't have rights to do this operation."], ["You don't have rights to do this operation."]))),
                        variant: 'warning',
                    },
                ], false),
            });
        };
        MyNamespaceAPI.get(collection.namespace.name, {
            include_related: 'my_permissions',
        })
            .then(function (value) {
            if (value.data.related_fields.my_permissions.includes('galaxy.upload_to_namespace')) {
                _this.setState({
                    updateCollection: collection,
                    showImportModal: true,
                });
            }
            else {
                addAlert();
            }
        })
            .catch(function () {
            addAlert();
        });
    };
    CollectionHeader.prototype.renderTabs = function (active) {
        var _a = this.props, params = _a.params, repo = _a.repo;
        var pathParams = {
            namespace: this.props.collection.namespace.name,
            collection: this.props.collection.name,
            repo: repo,
        };
        var reduced = ParamHelper.getReduced(params, this.ignoreParams);
        var tabs = [
            {
                active: active === 'install',
                title: t(templateObject_37 || (templateObject_37 = __makeTemplateObject(["Install"], ["Install"]))),
                link: formatPath(Paths.collectionByRepo, pathParams, reduced),
            },
            {
                active: active === 'documentation',
                title: t(templateObject_38 || (templateObject_38 = __makeTemplateObject(["Documentation"], ["Documentation"]))),
                link: formatPath(Paths.collectionDocsIndexByRepo, pathParams, reduced),
            },
            {
                active: active === 'contents',
                title: t(templateObject_39 || (templateObject_39 = __makeTemplateObject(["Contents"], ["Contents"]))),
                link: formatPath(Paths.collectionContentListByRepo, pathParams, reduced),
            },
            {
                active: active === 'import-log',
                title: t(templateObject_40 || (templateObject_40 = __makeTemplateObject(["Import log"], ["Import log"]))),
                link: formatPath(Paths.collectionImportLogByRepo, pathParams, reduced),
            },
            {
                active: active === 'dependencies',
                title: t(templateObject_41 || (templateObject_41 = __makeTemplateObject(["Dependencies"], ["Dependencies"]))),
                link: formatPath(Paths.collectionDependenciesByRepo, pathParams, reduced),
            },
        ];
        return React.createElement(LinkTabs, { tabs: tabs });
    };
    CollectionHeader.prototype.renderSelectVersions = function (versions, count) {
        return versions.slice(0, count);
    };
    CollectionHeader.prototype.paginateVersions = function (versions) {
        var modalPagination = this.state.modalPagination;
        return versions.slice(modalPagination.pageSize * (modalPagination.page - 1), modalPagination.pageSize * modalPagination.page);
    };
    CollectionHeader.prototype.deprecate = function (collection) {
        var _this = this;
        CollectionAPI.setDeprecation(collection, !collection.deprecated, this.context.selectedRepo)
            .then(function (res) {
            var taskId = parsePulpIDFromURL(res.data.task);
            return waitForTask(taskId).then(function () {
                var title = !collection.deprecated
                    ? t(templateObject_42 || (templateObject_42 = __makeTemplateObject(["The collection \"", "\" has been successfully deprecated."], ["The collection \"", "\" has been successfully deprecated."])), collection.name) : t(templateObject_43 || (templateObject_43 = __makeTemplateObject(["The collection \"", "\" has been successfully undeprecated."], ["The collection \"", "\" has been successfully undeprecated."])), collection.name);
                _this.setState({
                    alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                        {
                            title: title,
                            variant: 'success',
                        },
                    ], false),
                });
                if (_this.props.reload) {
                    _this.props.reload();
                }
            });
        })
            .catch(function (err) {
            var _a = err.response, status = _a.status, statusText = _a.statusText;
            _this.setState({
                collectionVersion: null,
                alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                    {
                        variant: 'danger',
                        title: !collection.deprecated
                            ? t(templateObject_44 || (templateObject_44 = __makeTemplateObject(["Collection \"", "\" could not be deprecated."], ["Collection \"", "\" could not be deprecated."])), collection.name) : t(templateObject_45 || (templateObject_45 = __makeTemplateObject(["Collection \"", "\" could not be undeprecated."], ["Collection \"", "\" could not be undeprecated."])), collection.name),
                        description: errorMessage(status, statusText),
                    },
                ], false),
            });
        });
    };
    CollectionHeader.prototype.toggleImportModal = function (isOpen, warning) {
        if (warning) {
            this.setState({
                alerts: __spreadArray(__spreadArray([], this.state.alerts, true), [{ title: warning, variant: 'warning' }], false),
            });
        }
        this.setState({ showImportModal: isOpen });
    };
    CollectionHeader.prototype.openDeleteModalWithConfirm = function (version) {
        if (version === void 0) { version = null; }
        this.setState({
            deleteCollection: this.props.collection,
            collectionVersion: version,
            confirmDelete: false,
        });
    };
    CollectionHeader.prototype.getUsedbyDependencies = function () {
        var _this = this;
        var _a = this.props.collection, name = _a.name, namespace = _a.namespace;
        CollectionAPI.getUsedDependenciesByCollection(namespace.name, name)
            .then(function (_a) {
            var data = _a.data;
            _this.setState({ noDependencies: !data.data.length });
        })
            .catch(function (err) {
            var _a = err.response, status = _a.status, statusText = _a.statusText;
            _this.setState({
                alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                    {
                        variant: 'danger',
                        title: t(templateObject_46 || (templateObject_46 = __makeTemplateObject(["Dependencies for collection \"", "\" could not be displayed."], ["Dependencies for collection \"", "\" could not be displayed."])), name),
                        description: errorMessage(status, statusText),
                    },
                ], false),
            });
        });
    };
    Object.defineProperty(CollectionHeader.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    CollectionHeader.contextType = AppContext;
    return CollectionHeader;
}(React.Component));
export { CollectionHeader };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36, templateObject_37, templateObject_38, templateObject_39, templateObject_40, templateObject_41, templateObject_42, templateObject_43, templateObject_44, templateObject_45, templateObject_46;
//# sourceMappingURL=collection-header.js.map