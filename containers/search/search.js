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
import { Button, DataList, DropdownItem, Switch } from '@patternfly/react-core';
import cx from 'classnames';
import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { CollectionAPI, CollectionVersionAPI, MyNamespaceAPI, MySyncListAPI, } from 'src/api';
import { AlertList, BaseHeader, CardListSwitcher, CollectionCard, CollectionFilter, CollectionListItem, DeleteCollectionModal, EmptyStateFilter, EmptyStateNoData, ImportModal, LoadingPageSpinner, Pagination, StatefulDropdown, closeAlertMixin, } from 'src/components';
import { Constants } from 'src/constants';
import { AppContext } from 'src/loaders/app-context';
import { Paths, formatPath } from 'src/paths';
import { DeleteCollectionUtils, errorMessage, filterIsSet, parsePulpIDFromURL, waitForTask, withRouter, } from 'src/utilities';
import { ParamHelper } from 'src/utilities/param-helper';
import './search.scss';
var Search = /** @class */ (function (_super) {
    __extends(Search, _super);
    function Search(props) {
        var _this = _super.call(this, props) || this;
        var params = ParamHelper.parseParamString(props.location.search, [
            'page',
            'page_size',
        ]);
        if (!params['page_size']) {
            params['page_size'] = Constants.CARD_DEFAULT_PAGE_SIZE;
        }
        // Load view type from local storage if it's not set. This allows a
        // user's view type preference to persist
        if (!params['view_type']) {
            params['view_type'] = localStorage.getItem(Constants.SEARCH_VIEW_TYPE_LOCAL_KEY);
        }
        _this.state = {
            collections: [],
            params: params,
            numberOfResults: 0,
            loading: true,
            synclist: undefined,
            alerts: [],
            updateCollection: null,
            showImportModal: false,
            redirect: null,
            noDependencies: false,
            deleteCollection: null,
            confirmDelete: false,
            isDeletionPending: false,
        };
        return _this;
    }
    Search.prototype.componentDidMount = function () {
        this.load();
    };
    Search.prototype.load = function () {
        this.queryCollections();
        if (DEPLOYMENT_MODE === Constants.INSIGHTS_DEPLOYMENT_MODE) {
            this.getSynclist();
        }
    };
    Search.prototype.addAlert = function (alert) {
        this.setState({
            alerts: __spreadArray(__spreadArray([], this.state.alerts, true), [alert], false),
        });
    };
    Object.defineProperty(Search.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    Search.prototype.render = function () {
        var _this = this;
        if (this.state.redirect) {
            return React.createElement(Navigate, { to: this.state.redirect });
        }
        var _a = this.state, loading = _a.loading, collections = _a.collections, params = _a.params, numberOfResults = _a.numberOfResults, showImportModal = _a.showImportModal, updateCollection = _a.updateCollection, deleteCollection = _a.deleteCollection, confirmDelete = _a.confirmDelete, isDeletionPending = _a.isDeletionPending;
        var noData = collections.length === 0 &&
            !filterIsSet(params, [
                'keywords',
                'tags',
                'is_signed',
                'repository_name',
                'namespace',
            ]);
        var updateParams = function (p) {
            return _this.updateParams(p, function () { return _this.queryCollections(); });
        };
        return (React.createElement("div", { className: 'search-page' },
            React.createElement(AlertList, { alerts: this.state.alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            React.createElement(DeleteCollectionModal, { deleteCollection: deleteCollection, collections: collections, isDeletionPending: isDeletionPending, confirmDelete: confirmDelete, setConfirmDelete: function (confirmDelete) { return _this.setState({ confirmDelete: confirmDelete }); }, cancelAction: function () { return _this.setState({ deleteCollection: null }); }, deleteAction: function () {
                    return _this.setState({ isDeletionPending: true }, function () {
                        return DeleteCollectionUtils.deleteCollection({
                            collection: deleteCollection,
                            setState: function (state) { return _this.setState(state); },
                            load: function () { return _this.load(); },
                            redirect: false,
                            addAlert: function (alert) { return _this.addAlert(alert); },
                        });
                    });
                } }),
            showImportModal && (React.createElement(ImportModal, { isOpen: showImportModal, onUploadSuccess: function () {
                    return _this.setState({
                        redirect: formatPath(Paths.myImports, {}, {
                            namespace: updateCollection.collection_version.namespace,
                        }),
                    });
                }, 
                // onCancel
                setOpen: function (isOpen, warn) { return _this.toggleImportModal(isOpen, warn); }, collection: updateCollection.collection_version, namespace: updateCollection.collection_version.namespace })),
            React.createElement(BaseHeader, { className: 'header', title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Collections"], ["Collections"]))) }, !noData && (React.createElement("div", { className: 'hub-toolbar-wrapper' },
                React.createElement("div", { className: 'toolbar' },
                    React.createElement(CollectionFilter, { ignoredParams: ['page', 'page_size', 'sort', 'view_type'], params: params, updateParams: updateParams }),
                    React.createElement("div", { className: 'hub-pagination-container' },
                        React.createElement("div", { className: 'card-list-switcher' },
                            React.createElement(CardListSwitcher, { size: 'sm', params: params, updateParams: function (p) {
                                    return _this.updateParams(p, function () {
                                        // Note, we have to use this.state.params instead
                                        // of params in the callback because the callback
                                        // executes before the page can re-run render
                                        // which means params doesn't contain the most
                                        // up to date state
                                        return localStorage.setItem(Constants.SEARCH_VIEW_TYPE_LOCAL_KEY, _this.state.params.view_type);
                                    });
                                } })),
                        React.createElement(Pagination, { params: params, updateParams: updateParams, count: numberOfResults, perPageOptions: Constants.CARD_DEFAULT_PAGINATION_OPTIONS, isTop: true })))))),
            loading ? (React.createElement(LoadingPageSpinner, null)) : noData ? (React.createElement(EmptyStateNoData, { title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["No collections yet"], ["No collections yet"]))), description: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Collections will appear once uploaded"], ["Collections will appear once uploaded"]))) })) : (React.createElement(React.Fragment, null,
                React.createElement("section", { className: 'collection-container' }, this.renderCollections(collections, params, updateParams)),
                React.createElement("section", { className: 'footer' },
                    React.createElement(Pagination, { params: params, updateParams: function (p) {
                            return _this.updateParams(p, function () { return _this.queryCollections(); });
                        }, perPageOptions: Constants.CARD_DEFAULT_PAGINATION_OPTIONS, count: numberOfResults }))))));
    };
    Search.prototype.toggleImportModal = function (isOpen, warning) {
        if (warning) {
            this.setState({
                alerts: __spreadArray(__spreadArray([], this.state.alerts, true), [{ title: warning, variant: 'warning' }], false),
            });
        }
        this.setState({ showImportModal: isOpen });
    };
    Search.prototype.renderCollections = function (collections, params, updateParams) {
        if (collections.length === 0) {
            return (React.createElement(EmptyStateFilter, { clearAllFilters: function () {
                    ParamHelper.clearAllFilters({
                        params: params,
                        ignoredParams: ['page', 'page_size', 'sort', 'view_type'],
                        updateParams: updateParams,
                    });
                } }));
        }
        if (params.view_type === 'list') {
            return this.renderList(collections);
        }
        else {
            return this.renderCards(collections);
        }
    };
    Search.prototype.renderCards = function (collections) {
        var _this = this;
        return (React.createElement("div", { className: 'hub-cards' }, collections.map(function (c, i) {
            return (React.createElement(CollectionCard, __assign({ className: 'card', key: i }, c, { footer: _this.renderSyncToogle(c.collection_version.name, c.collection_version.namespace), menu: _this.renderMenu(false, c), displaySignatures: _this.context.featureFlags.display_signatures })));
        })));
    };
    Search.prototype.handleControlClick = function (collection) {
        var _this = this;
        var name = collection.collection_version.name;
        CollectionAPI.setDeprecation(collection)
            .then(function (res) {
            var taskId = parsePulpIDFromURL(res.data.task);
            return waitForTask(taskId).then(function () {
                var title = !collection.deprecated
                    ? t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["The collection \"", "\" has been successfully deprecated."], ["The collection \"", "\" has been successfully deprecated."])), name) : t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["The collection \"", "\" has been successfully undeprecated."], ["The collection \"", "\" has been successfully undeprecated."])), name);
                _this.setState({
                    alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                        {
                            title: title,
                            variant: 'success',
                        },
                    ], false),
                });
                _this.load();
            });
        })
            .catch(function (err) {
            var _a = err.response, status = _a.status, statusText = _a.statusText;
            _this.setState({
                alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                    {
                        variant: 'danger',
                        title: !collection.deprecated
                            ? t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Collection \"", "\" could not be deprecated."], ["Collection \"", "\" could not be deprecated."])), name) : t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Collection \"", "\" could not be undeprecated."], ["Collection \"", "\" could not be undeprecated."])), name),
                        description: errorMessage(status, statusText),
                    },
                ], false),
            });
        });
    };
    Search.prototype.renderMenu = function (list, collection) {
        var _this = this;
        var hasPermission = this.context.hasPermission;
        var menuItems = [
            DeleteCollectionUtils.deleteMenuOption({
                canDeleteCollection: hasPermission('ansible.delete_collection'),
                noDependencies: null,
                onClick: function () {
                    return DeleteCollectionUtils.tryOpenDeleteModalWithConfirm({
                        addAlert: function (alert) { return _this.addAlert(alert); },
                        setState: function (state) { return _this.setState(state); },
                        collection: collection,
                    });
                },
            }),
            hasPermission('galaxy.upload_to_namespace') && (React.createElement(DropdownItem, { onClick: function () { return _this.handleControlClick(collection); }, key: 'deprecate' }, collection.is_deprecated ? t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Undeprecate"], ["Undeprecate"]))) : t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Deprecate"], ["Deprecate"]))))),
            !list && hasPermission('galaxy.upload_to_namespace') && (React.createElement(DropdownItem, { onClick: function () { return _this.checkUploadPrivilleges(collection); }, key: 'upload new version' }, t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Upload new version"], ["Upload new version"]))))),
        ].filter(Boolean);
        var displayMenu = menuItems.length > 0;
        return (React.createElement(React.Fragment, null,
            list && hasPermission('galaxy.upload_to_namespace') && (React.createElement(Button, { onClick: function () { return _this.checkUploadPrivilleges(collection); }, variant: 'secondary' }, t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Upload new version"], ["Upload new version"]))))),
            React.createElement("span", { className: cx(!displayMenu && 'hidden-menu-space') }, displayMenu && (React.createElement(StatefulDropdown, { items: menuItems, ariaLabel: 'collection-kebab' })))));
    };
    Search.prototype.renderSyncToogle = function (name, namespace) {
        var _this = this;
        var synclist = this.state.synclist;
        if (!synclist) {
            return null;
        }
        return (React.createElement(Switch, { id: namespace + '.' + name, className: 'sync-toggle', label: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Sync"], ["Sync"]))), isChecked: this.isCollectionSynced(name, namespace), onChange: function () { return _this.toggleCollectionSync(name, namespace); } }));
    };
    Search.prototype.checkUploadPrivilleges = function (collection) {
        var _this = this;
        var addAlert = function () {
            _this.setState({
                alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                    {
                        title: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["You don't have rights to do this operation."], ["You don't have rights to do this operation."]))),
                        variant: 'warning',
                    },
                ], false),
            });
        };
        MyNamespaceAPI.get(collection.collection_version.namespace, {
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
    Search.prototype.toggleCollectionSync = function (name, namespace) {
        var _this = this;
        var synclist = __assign({}, this.state.synclist);
        var colIndex = synclist.collections.findIndex(function (el) { return el.name === name && el.namespace === namespace; });
        if (colIndex < 0) {
            synclist.collections.push({ name: name, namespace: namespace });
        }
        else {
            synclist.collections.splice(colIndex, 1);
        }
        MySyncListAPI.update(synclist.id, synclist).then(function (response) {
            _this.setState({ synclist: response.data });
            MySyncListAPI.curate(synclist.id).then(function () { return null; });
        });
    };
    Search.prototype.isCollectionSynced = function (name, namespace) {
        var synclist = this.state.synclist;
        var found = synclist.collections.find(function (el) { return el.name === name && el.namespace === namespace; });
        if (synclist.policy === 'include') {
            return !(found === undefined);
        }
        else {
            return found === undefined;
        }
    };
    Search.prototype.renderList = function (collections) {
        var _this = this;
        return (React.createElement("div", { className: 'list-container' },
            React.createElement("div", { className: 'hub-list' },
                React.createElement(DataList, { className: 'data-list', "aria-label": t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["List of Collections"], ["List of Collections"]))) }, collections.map(function (c, i) { return (React.createElement(CollectionListItem, __assign({ showNamespace: true, key: i }, c, { controls: React.createElement(React.Fragment, null,
                        _this.renderSyncToogle(c.collection_version.name, c.collection_version.namespace),
                        _this.renderMenu(true, c)), displaySignatures: _this.context.featureFlags.display_signatures }))); })))));
    };
    Search.prototype.getSynclist = function () {
        var _this = this;
        MySyncListAPI.list().then(function (result) {
            // ignore results if more than 1 is returned
            // TODO: should we throw an error for this or just ignore it?
            if (result.data.meta.count === 1) {
                _this.setState({ synclist: result.data.data[0] });
            }
            else {
                console.error("my-synclist returned ".concat(result.data.meta.count, " synclists"));
            }
        });
    };
    Search.prototype.queryCollections = function () {
        var _this = this;
        this.setState({ loading: true }, function () {
            CollectionVersionAPI.list(__assign(__assign({}, ParamHelper.getReduced(_this.state.params, ['view_type'])), { is_deprecated: false, repository_label: '!hide_from_search', is_highest: true })).then(function (result) {
                _this.setState({
                    collections: result.data.data,
                    numberOfResults: result.data.meta.count,
                    loading: false,
                });
            });
        });
    };
    Object.defineProperty(Search.prototype, "updateParams", {
        get: function () {
            return ParamHelper.updateParamsMixin();
        },
        enumerable: false,
        configurable: true
    });
    return Search;
}(React.Component));
export default withRouter(Search);
Search.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
//# sourceMappingURL=search.js.map