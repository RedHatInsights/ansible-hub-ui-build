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
import { errorMessage, DeleteCollectionUtils } from 'src/utilities';
import './header.scss';
import { Redirect } from 'react-router-dom';
import * as moment from 'moment';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import { Select, SelectOption, SelectVariant, List, ListItem, Modal, Alert, Text, Button, DropdownItem, } from '@patternfly/react-core';
import { AppContext } from 'src/loaders/app-context';
import { BaseHeader, Breadcrumbs, LinkTabs, Logo, RepoSelector, Pagination, AlertList, closeAlertMixin, StatefulDropdown, SignSingleCertificateModal, SignAllCertificatesModal, UploadSingCertificateModal, ImportModal, DeleteCollectionModal, } from 'src/components';
import { CollectionAPI, SignCollectionAPI, MyNamespaceAPI, Repositories, CertificateUploadAPI, } from 'src/api';
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
                    title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Failed to sign all versions in the collection."], ["Failed to sign all versions in the collection."]))),
                    description: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["API Error: ", ""], ["API Error: ", ""])), status),
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
                    title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Failed to sign the version."], ["Failed to sign the version."]))),
                    description: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["API Error: ", ""], ["API Error: ", ""])), status),
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
            uploadCertificateModalOpen: false,
            versionToUploadCertificate: undefined,
        };
        return _this;
    }
    CollectionHeader.prototype.componentDidMount = function () {
        var _this = this;
        var collection = this.props.collection;
        DeleteCollectionUtils.getUsedbyDependencies(collection)
            .then(function (noDependencies) { return _this.setState({ noDependencies: noDependencies }); })
            .catch(function (alert) { return _this.addAlert(alert); });
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
            { key: 'documentation', name: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Docs site"], ["Docs site"]))) },
            { key: 'homepage', name: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Website"], ["Website"]))) },
            { key: 'issues', name: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Issue tracker"], ["Issue tracker"]))) },
            { key: 'repository', name: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Repo"], ["Repo"]))) },
        ];
        var latestVersion = collection.latest_version.created_at;
        var _d = ((_a = this.context) === null || _a === void 0 ? void 0 : _a.featureFlags) || {}, display_signatures = _d.display_signatures, can_upload_signatures = _d.can_upload_signatures;
        var signedString = function (v) {
            if (display_signatures && 'sign_state' in v) {
                return v.sign_state === 'signed' ? t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["(signed)"], ["(signed)"]))) : t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["(unsigned)"], ["(unsigned)"])));
            }
            else {
                return '';
            }
        };
        var isLatestVersion = function (v) {
            return "".concat(moment(v.created).fromNow(), " ").concat(signedString(v), "\n      ").concat(v.version === all_versions[0].version ? t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["(latest)"], ["(latest)"]))) : '');
        };
        var collectionName = collection.name, namespace = collection.namespace;
        var company = namespace.company || namespace.name;
        if (redirect) {
            return React.createElement(Redirect, { push: true, to: redirect });
        }
        var canSign = canSignNS(this.context, namespace);
        var hasPermission = this.context.hasPermission;
        var dropdownItems = [
            DeleteCollectionUtils.deleteMenuOption({
                canDeleteCollection: hasPermission('ansible.delete_collection'),
                noDependencies: noDependencies,
                onClick: function () { return _this.openDeleteModalWithConfirm(); },
            }),
            hasPermission('ansible.delete_collection') && (React.createElement(DropdownItem, { "data-cy": 'delete-version-dropdown', key: 'delete-collection-version', onClick: function () {
                    return _this.openDeleteModalWithConfirm(collection.latest_version.version);
                } }, t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Delete version ", ""], ["Delete version ", ""])), collection.latest_version.version))),
            canSign && !can_upload_signatures && (React.createElement(DropdownItem, { key: 'sign-all', "data-cy": 'sign-collection-button', onClick: function () { return _this.setState({ isOpenSignAllModal: true }); } }, t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Sign entire collection"], ["Sign entire collection"]))))),
            canSign && (React.createElement(DropdownItem, { key: 'sign-version', onClick: function () {
                    if (can_upload_signatures) {
                        _this.setState({
                            uploadCertificateModalOpen: true,
                            versionToUploadCertificate: collection.latest_version,
                        });
                    }
                    else {
                        _this.setState({ isOpenSignModal: true });
                    }
                }, "data-cy": 'sign-version-button' }, t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Sign version ", ""], ["Sign version ", ""])), collection.latest_version.version))),
            React.createElement(DropdownItem, { onClick: function () { return _this.deprecate(collection); }, key: 'deprecate' }, collection.deprecated ? t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Undeprecate"], ["Undeprecate"]))) : t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Deprecate"], ["Deprecate"])))),
            React.createElement(DropdownItem, { key: 'upload-collection-version', onClick: function () { return _this.checkUploadPrivilleges(collection); }, "data-cy": 'upload-collection-version-dropdown' }, t(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Upload new version"], ["Upload new version"])))),
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
                React.createElement(UploadSingCertificateModal, { isOpen: this.state.uploadCertificateModalOpen, onCancel: function () { return _this.closeUploadCertificateModal(); }, onSubmit: function (d) { return _this.submitCertificate(d); } }),
                React.createElement(SignAllCertificatesModal, { name: collectionName, isOpen: this.state.isOpenSignAllModal, onSubmit: this.signCollection, onCancel: function () {
                        _this.setState({ isOpenSignAllModal: false });
                    } }),
                React.createElement(SignSingleCertificateModal, { name: collectionName, version: collection.latest_version.version, isOpen: this.state.isOpenSignModal, onSubmit: this.signVersion, onCancel: function () { return _this.setState({ isOpenSignModal: false }); } }))),
            React.createElement(Modal, { isOpen: isOpenVersionsModal, title: t(templateObject_21 || (templateObject_21 = __makeTemplateObject(["Collection versions"], ["Collection versions"]))), variant: 'small', onClose: function () { return _this.setState({ isOpenVersionsModal: false }); } },
                React.createElement(List, { isPlain: true },
                    React.createElement("div", { className: 'versions-modal-header' },
                        React.createElement(Text, null, t(templateObject_22 || (templateObject_22 = __makeTemplateObject(["", "'s versions."], ["", "'s versions."])), collectionName)),
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
                        ' ', t(templateObject_23 || (templateObject_23 = __makeTemplateObject(["updated ", ""], ["updated ", ""])), isLatestVersion(v)))); })),
                React.createElement(Pagination, { params: {
                        page: modalPagination.page,
                        page_size: modalPagination.pageSize,
                    }, updateParams: this.updatePaginationParams, count: all_versions.length })),
            React.createElement(DeleteCollectionModal, { deleteCollection: deleteCollection, isDeletionPending: isDeletionPending, confirmDelete: confirmDelete, setConfirmDelete: function (confirmDelete) { return _this.setState({ confirmDelete: confirmDelete }); }, collectionVersion: collectionVersion, cancelAction: function () { return _this.setState({ deleteCollection: null }); }, deleteAction: function () {
                    return _this.setState({ isDeletionPending: true }, function () {
                        collectionVersion
                            ? _this.deleteCollectionVersion(collectionVersion)
                            : DeleteCollectionUtils.deleteCollection({
                                collection: deleteCollection,
                                setState: function (state) { return _this.setState(state); },
                                load: null,
                                redirect: formatPath(Paths.namespaceByRepo, {
                                    repo: _this.context.selectedRepo,
                                    namespace: deleteCollection.namespace.name,
                                }),
                                selectedRepo: _this.context.selectedRepo,
                                addAlert: function (alert) {
                                    return _this.context.setAlerts(__spreadArray(__spreadArray([], _this.state.alerts, true), [alert], false));
                                },
                            });
                    });
                } }),
            React.createElement(BaseHeader, { className: className, title: collection.name, logo: collection.namespace.avatar_url && (React.createElement(Logo, { alt: t(templateObject_24 || (templateObject_24 = __makeTemplateObject(["", " logo"], ["", " logo"])), company), className: 'image', fallbackToDefault: true, image: collection.namespace.avatar_url, size: '40px', unlockWidth: true })), contextSelector: React.createElement(RepoSelector, { selectedRepo: this.context.selectedRepo, path: Paths.searchByRepo, isDisabled: true }), breadcrumbs: React.createElement(Breadcrumbs, { links: breadcrumbs }), versionControl: React.createElement("div", { className: 'install-version-column' },
                    React.createElement("span", null, t(templateObject_25 || (templateObject_25 = __makeTemplateObject(["Version"], ["Version"])))),
                    React.createElement("div", { className: 'install-version-dropdown' },
                        React.createElement(Select, { isOpen: isOpenVersionsSelect, onToggle: function (isOpenVersionsSelect) {
                                return _this.setState({ isOpenVersionsSelect: isOpenVersionsSelect });
                            }, variant: SelectVariant.single, onSelect: function () {
                                return _this.setState({ isOpenVersionsSelect: false });
                            }, selections: "v".concat(collection.latest_version.version), "aria-label": t(templateObject_26 || (templateObject_26 = __makeTemplateObject(["Select collection version"], ["Select collection version"]))), loadingVariant: numOfshownVersions < all_versions.length
                                ? {
                                    text: t(templateObject_27 || (templateObject_27 = __makeTemplateObject(["View more"], ["View more"]))),
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
                                " updated ",
                                isLatestVersion(v)))); }))),
                    latestVersion ? (React.createElement("span", { className: 'last-updated' },
                        React.createElement(Trans, null,
                            "Last updated ",
                            React.createElement(DateComponent, { date: latestVersion })))) : null,
                    React.createElement(SignatureBadge, { isCompact: true, signState: collection.latest_version.sign_state })), pageControls: dropdownItems.length > 0 ? (React.createElement("div", { "data-cy": 'kebab-toggle' },
                    React.createElement(StatefulDropdown, { items: dropdownItems }))) : null },
                collection.deprecated && (React.createElement(Alert, { variant: 'danger', isInline: true, title: t(templateObject_28 || (templateObject_28 = __makeTemplateObject(["This collection has been deprecated."], ["This collection has been deprecated."]))) })),
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
                        title: t(templateObject_29 || (templateObject_29 = __makeTemplateObject(["You don't have rights to do this operation."], ["You don't have rights to do this operation."]))),
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
                title: t(templateObject_30 || (templateObject_30 = __makeTemplateObject(["Install"], ["Install"]))),
                link: formatPath(Paths.collectionByRepo, pathParams, reduced),
            },
            {
                active: active === 'documentation',
                title: t(templateObject_31 || (templateObject_31 = __makeTemplateObject(["Documentation"], ["Documentation"]))),
                link: formatPath(Paths.collectionDocsIndexByRepo, pathParams, reduced),
            },
            {
                active: active === 'contents',
                title: t(templateObject_32 || (templateObject_32 = __makeTemplateObject(["Contents"], ["Contents"]))),
                link: formatPath(Paths.collectionContentListByRepo, pathParams, reduced),
            },
            {
                active: active === 'import-log',
                title: t(templateObject_33 || (templateObject_33 = __makeTemplateObject(["Import log"], ["Import log"]))),
                link: formatPath(Paths.collectionImportLogByRepo, pathParams, reduced),
            },
            {
                active: active === 'dependencies',
                title: t(templateObject_34 || (templateObject_34 = __makeTemplateObject(["Dependencies"], ["Dependencies"]))),
                link: formatPath(Paths.collectionDependenciesByRepo, pathParams, reduced),
            },
        ];
        return React.createElement(LinkTabs, { tabs: tabs });
    };
    CollectionHeader.prototype.renderSelectVersions = function (versions, count) {
        return versions.slice(0, count);
    };
    CollectionHeader.prototype.submitCertificate = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var version, response, signed_collection;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        version = this.state.versionToUploadCertificate;
                        return [4 /*yield*/, Repositories.getRepository({
                                name: this.context.selectedRepo,
                            })];
                    case 1:
                        response = _a.sent();
                        signed_collection = "".concat(PULP_API_BASE_PATH, "content/ansible/collection_versions/").concat(version.id, "/");
                        this.setState({
                            alerts: this.state.alerts.concat({
                                id: 'upload-certificate',
                                variant: 'info',
                                title: t(templateObject_35 || (templateObject_35 = __makeTemplateObject(["The certificate for \"", " ", " v", "\" is being uploaded."], ["The certificate for \"", " ", " v", "\" is being uploaded."])), version.namespace, version.name, version.version),
                            }),
                        });
                        this.closeUploadCertificateModal();
                        CertificateUploadAPI.upload({
                            file: file,
                            repository: response.data.results[0].pulp_href,
                            signed_collection: signed_collection,
                        })
                            .then(function (result) {
                            return waitForTask(parsePulpIDFromURL(result.data.task)).then(function () {
                                if (_this.props.reload) {
                                    _this.props.reload();
                                }
                                _this.setState({
                                    alerts: _this.state.alerts
                                        .filter(function (_a) {
                                        var id = _a.id;
                                        return id !== 'upload-certificate';
                                    })
                                        .concat({
                                        variant: 'success',
                                        title: t(templateObject_36 || (templateObject_36 = __makeTemplateObject(["Certificate for collection \"", " ", " v", "\" has been successfully uploaded."], ["Certificate for collection \"", " ", " v", "\" has been successfully uploaded."])), version.namespace, version.name, version.version),
                                    }),
                                });
                            });
                        })
                            .catch(function (error) {
                            _this.setState({
                                alerts: _this.state.alerts
                                    .filter(function (_a) {
                                    var id = _a.id;
                                    return id !== 'upload-certificate';
                                })
                                    .concat({
                                    variant: 'danger',
                                    title: t(templateObject_37 || (templateObject_37 = __makeTemplateObject(["The certificate for \"", " ", " v", "\" could not be saved."], ["The certificate for \"", " ", " v", "\" could not be saved."])), version.namespace, version.name, version.version),
                                    description: error,
                                }),
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CollectionHeader.prototype.closeUploadCertificateModal = function () {
        this.setState({
            uploadCertificateModalOpen: false,
            versionToUploadCertificate: undefined,
        });
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
                    ? t(templateObject_38 || (templateObject_38 = __makeTemplateObject(["The collection \"", "\" has been successfully deprecated."], ["The collection \"", "\" has been successfully deprecated."])), collection.name) : t(templateObject_39 || (templateObject_39 = __makeTemplateObject(["The collection \"", "\" has been successfully undeprecated."], ["The collection \"", "\" has been successfully undeprecated."])), collection.name);
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
                            ? t(templateObject_40 || (templateObject_40 = __makeTemplateObject(["Collection \"", "\" could not be deprecated."], ["Collection \"", "\" could not be deprecated."])), collection.name) : t(templateObject_41 || (templateObject_41 = __makeTemplateObject(["Collection \"", "\" could not be undeprecated."], ["Collection \"", "\" could not be undeprecated."])), collection.name),
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
    CollectionHeader.prototype.addAlert = function (alert) {
        this.setState({
            alerts: __spreadArray(__spreadArray([], this.state.alerts, true), [alert], false),
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
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36, templateObject_37, templateObject_38, templateObject_39, templateObject_40, templateObject_41;
//# sourceMappingURL=collection-header.js.map