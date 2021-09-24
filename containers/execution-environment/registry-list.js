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
import * as React from 'react';
import { t, Trans } from '@lingui/macro';
import { withRouter } from 'react-router-dom';
import { Button, DropdownItem, Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, } from '@patternfly/react-core';
import { ExecutionEnvironmentRegistryAPI } from 'src/api';
import { ParamHelper, filterIsSet, lastSyncStatus, lastSynced, mapErrorMessages, } from 'src/utilities';
import { AlertList, AppliedFilters, BaseHeader, CompoundFilter, DateComponent, DeleteModal, EmptyStateFilter, EmptyStateNoData, LoadingPageSpinner, Main, Pagination, RemoteForm, SortTable, StatefulDropdown, closeAlertMixin, EmptyStateUnauthorized, } from 'src/components';
import { AppContext } from 'src/loaders/app-context';
var ExecutionEnvironmentRegistryList = /** @class */ (function (_super) {
    __extends(ExecutionEnvironmentRegistryList, _super);
    function ExecutionEnvironmentRegistryList(props) {
        var _this = _super.call(this, props) || this;
        var params = ParamHelper.parseParamString(props.location.search, [
            'page',
            'page_size',
        ]);
        if (!params['page_size']) {
            params['page_size'] = 10;
        }
        if (!params['sort']) {
            params['sort'] = 'name';
        }
        _this.state = {
            alerts: [],
            itemCount: 0,
            items: [],
            loading: true,
            params: params,
            remoteFormErrors: {},
            remoteFormNew: false,
            remoteToEdit: null,
            remoteUnmodified: null,
            showDeleteModal: false,
            showRemoteFormModal: false,
        };
        return _this;
    }
    ExecutionEnvironmentRegistryList.prototype.componentDidMount = function () {
        this.queryRegistries();
    };
    ExecutionEnvironmentRegistryList.prototype.render = function () {
        var _this = this;
        var _a = this.state, alerts = _a.alerts, itemCount = _a.itemCount, items = _a.items, loading = _a.loading, params = _a.params, remoteFormErrors = _a.remoteFormErrors, remoteFormNew = _a.remoteFormNew, remoteToEdit = _a.remoteToEdit, remoteUnmodified = _a.remoteUnmodified, showDeleteModal = _a.showDeleteModal, showRemoteFormModal = _a.showRemoteFormModal;
        var noData = items.length === 0 && !filterIsSet(params, ['name__icontains']);
        var addButton = (React.createElement(Button, { onClick: function () {
                return _this.setState({
                    remoteFormErrors: {},
                    remoteFormNew: true,
                    remoteToEdit: {
                        name: '',
                        // API defaults to true when not sending anything, make the UI fit
                        tls_validation: true,
                        write_only_fields: [
                            { name: 'username', is_set: false },
                            { name: 'password', is_set: false },
                            { name: 'proxy_username', is_set: false },
                            { name: 'proxy_password', is_set: false },
                            { name: 'client_key', is_set: false },
                        ],
                    },
                    remoteUnmodified: null,
                    showRemoteFormModal: true,
                });
            } },
            React.createElement(Trans, null, "Add remote registry")));
        if (this.context.user.is_anonymous) {
            return React.createElement(EmptyStateUnauthorized, null);
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            showRemoteFormModal && (React.createElement(RemoteForm, { remote: remoteToEdit, remoteType: 'registry', updateRemote: function (r) { return _this.setState({ remoteToEdit: r }); }, saveRemote: function () {
                    var _a = _this.state, remoteFormNew = _a.remoteFormNew, remoteToEdit = _a.remoteToEdit;
                    var newRemote = __assign({}, remoteToEdit);
                    if (remoteFormNew) {
                        // prevent "This field may not be blank." when writing in and then deleting username/password/etc
                        // only when creating, edit diffs with remoteUnmodified
                        Object.keys(newRemote).forEach(function (k) {
                            if (newRemote[k] === '' || newRemote[k] == null) {
                                delete newRemote[k];
                            }
                        });
                    }
                    var promise = remoteFormNew
                        ? ExecutionEnvironmentRegistryAPI.create(newRemote)
                        : ExecutionEnvironmentRegistryAPI.smartUpdate(remoteToEdit.pk, remoteToEdit, remoteUnmodified);
                    promise
                        .then(function (r) {
                        _this.setState({
                            remoteToEdit: null,
                            remoteUnmodified: null,
                            showRemoteFormModal: false,
                        }, function () { return _this.queryRegistries(); });
                    })
                        .catch(function (err) {
                        return _this.setState({ remoteFormErrors: mapErrorMessages(err) });
                    });
                }, errorMessages: remoteFormErrors, showModal: showRemoteFormModal, closeModal: function () {
                    return _this.setState({
                        remoteToEdit: null,
                        remoteUnmodified: null,
                        showRemoteFormModal: false,
                    });
                }, allowEditName: remoteFormNew, title: remoteFormNew ? t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Add remote registry"], ["Add remote registry"]))) : t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Edit remote registry"], ["Edit remote registry"]))) })),
            showDeleteModal && remoteToEdit && (React.createElement(DeleteModal, { cancelAction: function () {
                    return _this.setState({ showDeleteModal: false, remoteToEdit: null });
                }, deleteAction: function () { return _this.deleteRegistry(remoteToEdit); }, title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Delete remote registry?"], ["Delete remote registry?"]))), children: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["", " will be deleted."], ["", " will be deleted."])), remoteToEdit.name) })),
            React.createElement(BaseHeader, { title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Remote Registries"], ["Remote Registries"]))) }),
            noData && !loading ? (React.createElement(EmptyStateNoData, { title: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["No remote registries yet"], ["No remote registries yet"]))), description: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["You currently have no remote registries."], ["You currently have no remote registries."]))), button: addButton })) : (React.createElement(Main, null, loading ? (React.createElement(LoadingPageSpinner, null)) : (React.createElement("section", { className: 'body' },
                React.createElement("div", { className: 'container-list-toolbar' },
                    React.createElement(Toolbar, null,
                        React.createElement(ToolbarContent, null,
                            React.createElement(ToolbarGroup, null,
                                React.createElement(ToolbarItem, null,
                                    React.createElement(CompoundFilter, { updateParams: function (p) {
                                            p['page'] = 1;
                                            _this.updateParams(p, function () {
                                                return _this.queryRegistries();
                                            });
                                        }, params: params, filterConfig: [
                                            {
                                                id: 'name__icontains',
                                                title: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Name"], ["Name"]))),
                                            },
                                        ] })),
                                React.createElement(ToolbarItem, null, addButton)))),
                    React.createElement(Pagination, { params: params, updateParams: function (p) {
                            return _this.updateParams(p, function () { return _this.queryRegistries(); });
                        }, count: itemCount, isTop: true })),
                React.createElement("div", null,
                    React.createElement(AppliedFilters, { updateParams: function (p) {
                            return _this.updateParams(p, function () { return _this.queryRegistries(); });
                        }, params: params, ignoredParams: ['page_size', 'page', 'sort'], niceNames: {
                            name__icontains: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Name"], ["Name"]))),
                        } })),
                this.renderTable(params),
                React.createElement("div", { style: { paddingTop: '24px', paddingBottom: '8px' } },
                    React.createElement(Pagination, { params: params, updateParams: function (p) {
                            return _this.updateParams(p, function () { return _this.queryRegistries(); });
                        }, count: itemCount }))))))));
    };
    ExecutionEnvironmentRegistryList.prototype.renderTable = function (params) {
        var _this = this;
        var items = this.state.items;
        if (items.length === 0) {
            return React.createElement(EmptyStateFilter, null);
        }
        var sortTableOptions = {
            headers: [
                {
                    title: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Name"], ["Name"]))),
                    type: 'alpha',
                    id: 'name',
                },
                {
                    title: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Created"], ["Created"]))),
                    type: 'alpha',
                    id: 'created_at',
                },
                {
                    title: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Last updated"], ["Last updated"]))),
                    type: 'alpha',
                    id: 'updated_at',
                },
                {
                    title: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Registry URL"], ["Registry URL"]))),
                    type: 'alpha',
                    id: 'url',
                },
                {
                    title: t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Registry sync status"], ["Registry sync status"]))),
                    type: 'none',
                    id: 'last_sync_task',
                },
                {
                    title: '',
                    type: 'none',
                    id: 'controls',
                },
            ],
        };
        return (React.createElement("table", { className: 'content-table pf-c-table' },
            React.createElement(SortTable, { options: sortTableOptions, params: params, updateParams: function (p) {
                    return _this.updateParams(p, function () { return _this.queryRegistries(); });
                } }),
            React.createElement("tbody", null, items.map(function (user, i) { return _this.renderTableRow(user, i); }))));
    };
    ExecutionEnvironmentRegistryList.prototype.renderTableRow = function (item, index) {
        var _this = this;
        return (React.createElement("tr", { "aria-labelledby": item.name, key: index },
            React.createElement("td", null, item.name),
            React.createElement("td", null,
                React.createElement(DateComponent, { date: item.created_at })),
            React.createElement("td", null,
                React.createElement(DateComponent, { date: item.updated_at })),
            React.createElement("td", null, item.url),
            React.createElement("td", null,
                lastSyncStatus(item) || '---',
                lastSynced(item)),
            React.createElement("td", null,
                React.createElement(Button, { variant: 'secondary', onClick: function () { return _this.syncRegistry(item); } },
                    React.createElement(Trans, null, "Sync from registry")),
                ' ',
                React.createElement(StatefulDropdown, { items: [
                        React.createElement(DropdownItem, { key: 'edit', onClick: function () {
                                return _this.setState({
                                    remoteFormErrors: {},
                                    remoteFormNew: false,
                                    remoteToEdit: __assign({}, item),
                                    remoteUnmodified: __assign({}, item),
                                    showRemoteFormModal: true,
                                });
                            } },
                            React.createElement(Trans, null, "Edit")),
                        React.createElement(DropdownItem, { key: 'delete', onClick: function () {
                                return _this.setState({
                                    showDeleteModal: true,
                                    remoteToEdit: item,
                                });
                            } },
                            React.createElement(Trans, null, "Delete")),
                    ] }))));
    };
    ExecutionEnvironmentRegistryList.prototype.queryRegistries = function () {
        var _this = this;
        this.setState({ loading: true }, function () {
            return ExecutionEnvironmentRegistryAPI.list(_this.state.params).then(function (result) {
                return _this.setState({
                    items: result.data.data,
                    itemCount: result.data.meta.count,
                    loading: false,
                });
            });
        });
    };
    ExecutionEnvironmentRegistryList.prototype.deleteRegistry = function (_a) {
        var _this = this;
        var name = _a.name;
        ExecutionEnvironmentRegistryAPI.delete(name)
            .then(function () {
            return _this.addAlert(t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Successfully deleted remote registry ", ""], ["Successfully deleted remote registry ", ""])), name), 'success');
        })
            .catch(function () {
            return _this.addAlert(t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Failed to delete remote registry ", ""], ["Failed to delete remote registry ", ""])), name), 'danger');
        })
            .then(function () {
            return _this.setState({ showDeleteModal: false, remoteToEdit: null });
        });
    };
    ExecutionEnvironmentRegistryList.prototype.syncRegistry = function (_a) {
        var _this = this;
        var name = _a.name;
        ExecutionEnvironmentRegistryAPI.sync(name)
            .then(function () { return _this.addAlert(t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Sync initiated for ", ""], ["Sync initiated for ", ""])), name), 'success'); })
            .catch(function () { return _this.addAlert(t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Sync failed for ", ""], ["Sync failed for ", ""])), name), 'danger'); });
    };
    ExecutionEnvironmentRegistryList.prototype.addAlert = function (title, variant, description) {
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
    Object.defineProperty(ExecutionEnvironmentRegistryList.prototype, "updateParams", {
        get: function () {
            return ParamHelper.updateParamsMixin();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExecutionEnvironmentRegistryList.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    return ExecutionEnvironmentRegistryList;
}(React.Component));
export default withRouter(ExecutionEnvironmentRegistryList);
ExecutionEnvironmentRegistryList.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18;
//# sourceMappingURL=registry-list.js.map