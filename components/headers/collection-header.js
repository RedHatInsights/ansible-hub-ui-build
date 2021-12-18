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
import './header.scss';
import { Redirect } from 'react-router-dom';
import * as moment from 'moment';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import { Select, SelectOption, SelectVariant, List, ListItem, Modal, Alert, Text, Button, DropdownItem, Tooltip, Checkbox, } from '@patternfly/react-core';
import { AppContext } from 'src/loaders/app-context';
import { BaseHeader, Breadcrumbs, LinkTabs, Logo, RepoSelector, Pagination, AlertList, closeAlertMixin, StatefulDropdown, DeleteModal, } from 'src/components';
import { CollectionAPI } from 'src/api';
import { Paths, formatPath } from 'src/paths';
import { waitForTask } from 'src/utilities';
import { ParamHelper } from 'src/utilities/param-helper';
import { DateComponent } from '../date-component/date-component';
import { Constants } from 'src/constants';
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
        _this.deleteCollectionVersion = function (collectionVersion) {
            var deleteCollection = _this.state.deleteCollection;
            CollectionAPI.deleteCollectionVersion(_this.context.selectedRepo, deleteCollection)
                .then(function (res) {
                var taskId = _this.getIdFromTask(res.data.task);
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
                                    title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Successfully deleted collection version."], ["Successfully deleted collection version."]))),
                                },
                            ], false),
                        });
                    }
                    else {
                        // last version in collection => collection will be deleted => redirect
                        _this.context.setAlerts(__spreadArray(__spreadArray([], _this.context.alerts, true), [
                            {
                                variant: 'success',
                                title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Successfully deleted collection."], ["Successfully deleted collection."]))),
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
                var _a = err.response, _b = _a.data, detail = _b.detail, dependent_collection_versions = _b.dependent_collection_versions, status = _a.status;
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
                                title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Error deleting collection version."], ["Error deleting collection version."]))),
                                description: err === null || err === void 0 ? void 0 : err.message,
                            },
                        ], false),
                    });
                }
            });
        };
        _this.deleteCollection = function () {
            var deleteCollection = _this.state.deleteCollection;
            CollectionAPI.deleteCollection(_this.context.selectedRepo, deleteCollection)
                .then(function (res) {
                var taskId = _this.getIdFromTask(res.data.task);
                waitForTask(taskId).then(function () {
                    _this.context.setAlerts(__spreadArray(__spreadArray([], _this.context.alerts, true), [
                        {
                            variant: 'success',
                            title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Successfully deleted collection."], ["Successfully deleted collection."]))),
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
                return _this.setState({
                    collectionVersion: null,
                    deleteCollection: null,
                    isDeletionPending: false,
                    alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                        {
                            variant: 'danger',
                            title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Error deleting collection."], ["Error deleting collection."]))),
                            description: err === null || err === void 0 ? void 0 : err.message,
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
        };
        return _this;
    }
    CollectionHeader.prototype.componentDidMount = function () {
        this.getUsedbyDependencies();
    };
    CollectionHeader.prototype.render = function () {
        var _this = this;
        var _a = this.props, collection = _a.collection, params = _a.params, updateParams = _a.updateParams, breadcrumbs = _a.breadcrumbs, activeTab = _a.activeTab, className = _a.className;
        var _b = this.state, modalPagination = _b.modalPagination, isOpenVersionsModal = _b.isOpenVersionsModal, isOpenVersionsSelect = _b.isOpenVersionsSelect, redirect = _b.redirect, noDependencies = _b.noDependencies, collectionVersion = _b.collectionVersion, deleteCollection = _b.deleteCollection, confirmDelete = _b.confirmDelete, isDeletionPending = _b.isDeletionPending;
        var numOfshownVersions = 10;
        var all_versions = __spreadArray([], collection.all_versions, true);
        var match = all_versions.find(function (x) { return x.version === collection.latest_version.version; });
        if (!match) {
            all_versions.push({
                id: collection.latest_version.id,
                version: collection.latest_version.version,
                created: collection.latest_version.created_at,
            });
        }
        var urlKeys = [
            { key: 'documentation', name: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Docs site"], ["Docs site"]))) },
            { key: 'homepage', name: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Website"], ["Website"]))) },
            { key: 'issues', name: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Issue tracker"], ["Issue tracker"]))) },
            { key: 'repository', name: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Repo"], ["Repo"]))) },
        ];
        var latestVersion = collection.latest_version.created_at;
        var isLatestVersion = function (v) {
            return "".concat(moment(v.created).fromNow(), " ").concat(v.version === all_versions[0].version ? t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["(latest)"], ["(latest)"]))) : '');
        };
        var collectionName = collection.name;
        var company = collection.namespace.company || collection.namespace.name;
        if (redirect) {
            return React.createElement(Redirect, { push: true, to: redirect });
        }
        var dropdownItems = [
            noDependencies
                ? this.context.user.model_permissions.delete_collection && (React.createElement(DropdownItem, { key: 1, onClick: function () { return _this.openDeleteModalWithConfirm(); }, "data-cy": 'delete-collection-dropdown' }, t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Delete entire collection"], ["Delete entire collection"])))))
                : this.context.user.model_permissions.delete_collection && (React.createElement(Tooltip, { position: 'left', content: React.createElement(Trans, null,
                        "Cannot delete until collections ",
                        React.createElement("br", null),
                        "that depend on this collection ",
                        React.createElement("br", null),
                        "have been deleted.") },
                    React.createElement(DropdownItem, { isDisabled: true }, t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Delete entire collection"], ["Delete entire collection"])))))),
            this.context.user.model_permissions.delete_collection && (React.createElement("div", { "data-cy": 'delete-version-dropdown' },
                React.createElement(DropdownItem, { key: '2', onClick: function () {
                        return _this.openDeleteModalWithConfirm(collection.latest_version.version);
                    } }, t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Delete version ", ""], ["Delete version ", ""])), collection.latest_version.version)))),
        ].filter(Boolean);
        return (React.createElement(React.Fragment, null,
            React.createElement(Modal, { isOpen: isOpenVersionsModal, title: t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Collection versions"], ["Collection versions"]))), variant: 'small', onClose: function () { return _this.setState({ isOpenVersionsModal: false }); } },
                React.createElement(List, { isPlain: true },
                    React.createElement("div", { className: 'versions-modal-header' },
                        React.createElement(Text, null, t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["", "'s versions."], ["", "'s versions."])), collectionName)),
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
                        ' ', t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["released ", ""], ["released ", ""])), isLatestVersion(v)))); })),
                React.createElement(Pagination, { params: {
                        page: modalPagination.page,
                        page_size: modalPagination.pageSize,
                    }, updateParams: this.updatePaginationParams, count: all_versions.length })),
            deleteCollection && (React.createElement(DeleteModal, { spinner: isDeletionPending, cancelAction: this.closeModal, deleteAction: function () {
                    return _this.setState({ isDeletionPending: true }, function () {
                        !!collectionVersion
                            ? _this.deleteCollectionVersion(collectionVersion)
                            : _this.deleteCollection();
                    });
                }, isDisabled: !confirmDelete || isDeletionPending, title: collectionVersion
                    ? t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Delete collection version?"], ["Delete collection version?"]))) : t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Delete collection?"], ["Delete collection?"]))) },
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
                    React.createElement(Checkbox, { isChecked: confirmDelete, onChange: function (val) { return _this.setState({ confirmDelete: val }); }, label: t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["I understand that this action cannot be undone."], ["I understand that this action cannot be undone."]))), id: 'delete_confirm' })))),
            React.createElement(BaseHeader, { className: className, title: collection.name, logo: collection.namespace.avatar_url && (React.createElement(Logo, { alt: t(templateObject_20 || (templateObject_20 = __makeTemplateObject(["", " logo"], ["", " logo"])), company), className: 'image', fallbackToDefault: true, image: collection.namespace.avatar_url, size: '40px', unlockWidth: true })), contextSelector: React.createElement(RepoSelector, { selectedRepo: this.context.selectedRepo, path: Paths.searchByRepo, isDisabled: true }), breadcrumbs: React.createElement(Breadcrumbs, { links: breadcrumbs }), versionControl: React.createElement("div", { className: 'install-version-column' },
                    React.createElement("span", null, t(templateObject_21 || (templateObject_21 = __makeTemplateObject(["Version"], ["Version"])))),
                    React.createElement("div", { className: 'install-version-dropdown' },
                        React.createElement(Select, { isOpen: isOpenVersionsSelect, onToggle: function (isOpenVersionsSelect) {
                                return _this.setState({ isOpenVersionsSelect: isOpenVersionsSelect });
                            }, variant: SelectVariant.single, onSelect: function () {
                                return _this.setState({ isOpenVersionsSelect: false });
                            }, selections: "v".concat(collection.latest_version.version), "aria-label": t(templateObject_22 || (templateObject_22 = __makeTemplateObject(["Select collection version"], ["Select collection version"]))), loadingVariant: numOfshownVersions < all_versions.length
                                ? {
                                    text: t(templateObject_23 || (templateObject_23 = __makeTemplateObject(["View more"], ["View more"]))),
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
                            React.createElement(DateComponent, { date: latestVersion })))) : null), pageControls: dropdownItems.length > 0 ? (React.createElement("div", { "data-cy": 'kebab-toggle' },
                    React.createElement(StatefulDropdown, { items: dropdownItems }))) : null },
                collection.deprecated && (React.createElement(Alert, { variant: 'danger', isInline: true, title: t(templateObject_24 || (templateObject_24 = __makeTemplateObject(["This collection has been deprecated."], ["This collection has been deprecated."]))) })),
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
                                React.createElement("a", { href: url, target: '_blank' }, link.name)));
                        }))))));
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
                title: t(templateObject_25 || (templateObject_25 = __makeTemplateObject(["Install"], ["Install"]))),
                link: formatPath(Paths.collectionByRepo, pathParams, reduced),
            },
            {
                active: active === 'documentation',
                title: t(templateObject_26 || (templateObject_26 = __makeTemplateObject(["Documentation"], ["Documentation"]))),
                link: formatPath(Paths.collectionDocsIndexByRepo, pathParams, reduced),
            },
            {
                active: active === 'contents',
                title: t(templateObject_27 || (templateObject_27 = __makeTemplateObject(["Contents"], ["Contents"]))),
                link: formatPath(Paths.collectionContentListByRepo, pathParams, reduced),
            },
            {
                active: active === 'import-log',
                title: t(templateObject_28 || (templateObject_28 = __makeTemplateObject(["Import log"], ["Import log"]))),
                link: formatPath(Paths.collectionImportLogByRepo, pathParams, reduced),
            },
            {
                active: active === 'dependencies',
                title: t(templateObject_29 || (templateObject_29 = __makeTemplateObject(["Dependencies"], ["Dependencies"]))),
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
            return _this.setState({
                alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                    {
                        variant: 'danger',
                        title: t(templateObject_30 || (templateObject_30 = __makeTemplateObject(["Error getting collection's dependencies."], ["Error getting collection's dependencies."]))),
                        description: err === null || err === void 0 ? void 0 : err.message,
                    },
                ], false),
            });
        });
    };
    CollectionHeader.prototype.getIdFromTask = function (task) {
        return task.match(/tasks\/([a-zA-Z0-9-]+)/i)[1];
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
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30;
//# sourceMappingURL=collection-header.js.map