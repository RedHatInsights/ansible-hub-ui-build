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
import { errorMessage } from 'src/utilities';
import { withRouter, Link } from 'react-router-dom';
import { Button, DropdownItem, Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, Tooltip, } from '@patternfly/react-core';
import { ExecutionEnvironmentRegistryAPI } from 'src/api';
import { ParamHelper, filterIsSet, lastSyncStatus, lastSynced, mapErrorMessages, parsePulpIDFromURL, } from 'src/utilities';
import { AlertList, AppliedFilters, BaseHeader, CompoundFilter, DateComponent, DeleteModal, EmptyStateFilter, EmptyStateNoData, LoadingPageSpinner, Main, Pagination, RemoteForm, SortTable, closeAlertMixin, EmptyStateUnauthorized, ListItemActions, } from 'src/components';
import { AppContext } from 'src/loaders/app-context';
import { Paths, formatPath } from 'src/paths';
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
            inputText: '',
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
        if (this.context.user.is_anonymous) {
            return React.createElement(EmptyStateUnauthorized, null);
        }
        var addButton = this.context.user.model_permissions
            .add_containerregistry ? (React.createElement(Button, { onClick: function () {
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
            React.createElement(Trans, null, "Add remote registry"))) : null;
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
                        .then(function () {
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
                }, deleteAction: function () { return _this.deleteRegistry(remoteToEdit); }, title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Delete remote registry?"], ["Delete remote registry?"]))) },
                React.createElement(Trans, null,
                    React.createElement("b", null, remoteToEdit.name),
                    " will be deleted."))),
            React.createElement(BaseHeader, { title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Remote Registries"], ["Remote Registries"]))) }),
            noData && !loading ? (React.createElement(EmptyStateNoData, { title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["No remote registries yet"], ["No remote registries yet"]))), description: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["You currently have no remote registries."], ["You currently have no remote registries."]))), button: addButton })) : (React.createElement(Main, null, loading ? (React.createElement(LoadingPageSpinner, null)) : (React.createElement("section", { className: 'body' },
                React.createElement("div", { className: 'hub-list-toolbar' },
                    React.createElement(Toolbar, null,
                        React.createElement(ToolbarContent, null,
                            React.createElement(ToolbarGroup, null,
                                React.createElement(ToolbarItem, null,
                                    React.createElement(CompoundFilter, { inputText: this.state.inputText, onChange: function (text) {
                                            return _this.setState({ inputText: text });
                                        }, updateParams: function (p) {
                                            p['page'] = 1;
                                            _this.updateParams(p, function () {
                                                return _this.queryRegistries();
                                            });
                                        }, params: params, filterConfig: [
                                            {
                                                id: 'name__icontains',
                                                title: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Name"], ["Name"]))),
                                            },
                                        ] })),
                                React.createElement(ToolbarItem, null, addButton)))),
                    React.createElement(Pagination, { params: params, updateParams: function (p) {
                            return _this.updateParams(p, function () { return _this.queryRegistries(); });
                        }, count: itemCount, isTop: true })),
                React.createElement("div", null,
                    React.createElement(AppliedFilters, { updateParams: function (p) {
                            _this.updateParams(p, function () { return _this.queryRegistries(); });
                            _this.setState({ inputText: '' });
                        }, params: params, ignoredParams: ['page_size', 'page', 'sort'], niceNames: {
                            name__icontains: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Name"], ["Name"]))),
                        } })),
                this.renderTable(params),
                React.createElement(Pagination, { params: params, updateParams: function (p) {
                        return _this.updateParams(p, function () { return _this.queryRegistries(); });
                    }, count: itemCount })))))));
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
                    title: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Name"], ["Name"]))),
                    type: 'alpha',
                    id: 'name',
                },
                {
                    title: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Created"], ["Created"]))),
                    type: 'alpha',
                    id: 'created_at',
                },
                {
                    title: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Last updated"], ["Last updated"]))),
                    type: 'alpha',
                    id: 'updated_at',
                },
                {
                    title: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Registry URL"], ["Registry URL"]))),
                    type: 'alpha',
                    id: 'url',
                },
                {
                    title: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Registry sync status"], ["Registry sync status"]))),
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
        return (React.createElement("table", { className: 'hub-c-table-content pf-c-table' },
            React.createElement(SortTable, { options: sortTableOptions, params: params, updateParams: function (p) {
                    return _this.updateParams(p, function () { return _this.queryRegistries(); });
                } }),
            React.createElement("tbody", null, items.map(function (user, i) { return _this.renderTableRow(user, i); }))));
    };
    ExecutionEnvironmentRegistryList.prototype.renderTableRow = function (item, index) {
        var _this = this;
        var buttons = [
            this.context.user.model_permissions.change_containerregistry && (React.createElement(Button, { key: 'sync', variant: 'secondary', onClick: function () { return _this.syncRegistry(item); } },
                React.createElement(Trans, null, "Sync from registry"))),
        ];
        var dropdownItems = [
            this.context.user.model_permissions.change_containerregistry && (React.createElement(DropdownItem, { key: 'edit', onClick: function () {
                    return _this.setState({
                        remoteFormErrors: {},
                        remoteFormNew: false,
                        remoteToEdit: __assign({}, item),
                        remoteUnmodified: __assign({}, item),
                        showRemoteFormModal: true,
                    });
                } },
                React.createElement(Trans, null, "Edit"))),
            this.context.user.model_permissions.delete_containerregistry && (React.createElement(DropdownItem, { key: 'delete', onClick: function () {
                    return _this.setState({
                        showDeleteModal: true,
                        remoteToEdit: item,
                    });
                } },
                React.createElement(Trans, null, "Delete"))),
            React.createElement(Tooltip, { key: 'index', content: item.is_indexable
                    ? t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Find execution environments in this registry"], ["Find execution environments in this registry"]))) : t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Indexing execution environments is only supported on registry.redhat.io"], ["Indexing execution environments is only supported on registry.redhat.io"]))) },
                React.createElement(DropdownItem, { onClick: function () { return _this.indexRegistry(item); }, isDisabled: !item.is_indexable },
                    React.createElement(Trans, null, "Index execution environments"))),
        ].filter(Boolean);
        return (React.createElement("tr", { "data-cy": "ExecutionEnvironmentRegistryList-row-".concat(item.name), key: index },
            React.createElement("td", null, item.name),
            React.createElement("td", null,
                React.createElement(DateComponent, { date: item.created_at })),
            React.createElement("td", null,
                React.createElement(DateComponent, { date: item.updated_at })),
            React.createElement("td", null, item.url),
            React.createElement("td", null,
                lastSyncStatus(item) || '---',
                lastSynced(item)),
            React.createElement(ListItemActions, { kebabItems: dropdownItems, buttons: buttons })));
    };
    ExecutionEnvironmentRegistryList.prototype.queryRegistries = function (noLoading) {
        var _this = this;
        if (noLoading === void 0) { noLoading = false; }
        this.setState(noLoading ? null : { loading: true }, function () {
            return ExecutionEnvironmentRegistryAPI.list(_this.state.params).then(function (result) {
                var isAnyRunning = result.data.data.some(function (task) {
                    return ['running', 'waiting'].includes(task.last_sync_task.state);
                });
                if (isAnyRunning) {
                    setTimeout(function () { return _this.queryRegistries(true); }, 5000);
                }
                _this.setState({
                    items: result.data.data,
                    itemCount: result.data.meta.count,
                    loading: false,
                });
            });
        });
    };
    ExecutionEnvironmentRegistryList.prototype.deleteRegistry = function (_a) {
        var _this = this;
        var pk = _a.pk, name = _a.name;
        ExecutionEnvironmentRegistryAPI.delete(pk)
            .then(function () {
            return _this.addAlert(React.createElement(Trans, null,
                "Remote registry \"",
                name,
                "\" has been successfully deleted."), 'success');
        })
            .catch(function (err) {
            var _a = err.response, status = _a.status, statusText = _a.statusText;
            _this.addAlert(t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Remote registry \"", "\" could not be deleted."], ["Remote registry \"", "\" could not be deleted."])), name), 'danger', errorMessage(status, statusText));
        })
            .then(function () {
            _this.queryRegistries();
            _this.setState({ showDeleteModal: false, remoteToEdit: null });
        });
    };
    ExecutionEnvironmentRegistryList.prototype.syncRegistry = function (_a) {
        var _this = this;
        var pk = _a.pk, name = _a.name;
        ExecutionEnvironmentRegistryAPI.sync(pk)
            .then(function (result) {
            var task_id = parsePulpIDFromURL(result.data.task);
            _this.addAlert(React.createElement(Trans, null,
                "Sync started for remote registry \"",
                name,
                "\"."), 'info', React.createElement("span", null,
                React.createElement(Trans, null,
                    "See the task management",
                    ' ',
                    React.createElement(Link, { to: formatPath(Paths.taskDetail, { task: task_id }) },
                        "detail page",
                        ' '),
                    "for the status of this task.")));
            _this.queryRegistries(true);
        })
            .catch(function (err) {
            var _a = err.response, status = _a.status, statusText = _a.statusText;
            _this.addAlert(t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Remote registry \"", "\" could not be synced."], ["Remote registry \"", "\" could not be synced."])), name), 'danger', errorMessage(status, statusText));
        });
    };
    ExecutionEnvironmentRegistryList.prototype.indexRegistry = function (_a) {
        var _this = this;
        var pk = _a.pk, name = _a.name;
        ExecutionEnvironmentRegistryAPI.index(pk)
            .then(function (result) {
            var task_id = parsePulpIDFromURL(result.data.task);
            _this.addAlert(t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Indexing started for execution environment \"", "\"."], ["Indexing started for execution environment \"", "\"."])), name), 'success', React.createElement("span", null,
                React.createElement(Trans, null,
                    "See the task management",
                    ' ',
                    React.createElement(Link, { to: formatPath(Paths.taskDetail, { task: task_id }) }, "detail page"),
                    "for the status of this task.")));
        })
            .catch(function (err) {
            var _a = err.response, status = _a.status, statusText = _a.statusText;
            _this.addAlert(t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Execution environment \"", "\" could not be indexed."], ["Execution environment \"", "\" could not be indexed."])), name), 'danger', errorMessage(status, statusText));
        });
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
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19;
//# sourceMappingURL=registry-list.js.map