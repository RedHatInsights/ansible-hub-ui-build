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
import { t, Trans } from '@lingui/macro';
import * as React from 'react';
import './group-management.scss';
import { withRouter, Link, Redirect, } from 'react-router-dom';
import { GroupAPI, UserAPI, } from 'src/api';
import { filterIsSet, mapErrorMessages, ParamHelper, } from 'src/utilities';
import { AlertList, AppliedFilters, BaseHeader, closeAlertMixin, CompoundFilter, DeleteGroupModal, EmptyStateFilter, EmptyStateNoData, EmptyStateUnauthorized, GroupModal, LoadingPageSpinner, Main, Pagination, SortTable, StatefulDropdown, } from 'src/components';
import { Button, DropdownItem, Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, } from '@patternfly/react-core';
import { formatPath, Paths } from 'src/paths';
import { AppContext } from 'src/loaders/app-context';
var GroupList = /** @class */ (function (_super) {
    __extends(GroupList, _super);
    function GroupList(props) {
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
            params: params,
            loading: true,
            itemCount: 0,
            alerts: [],
            groups: [],
            createModalVisible: false,
            deleteModalVisible: false,
            editModalVisible: false,
            selectedGroup: null,
            groupError: null,
            unauthorized: false,
            inputText: '',
        };
        return _this;
    }
    GroupList.prototype.componentDidMount = function () {
        if (!this.context.user || !this.context.user.model_permissions.view_group) {
            this.setState({ unauthorized: true });
        }
        else {
            this.queryGroups();
        }
    };
    GroupList.prototype.render = function () {
        var _this = this;
        var _a = this.state, redirect = _a.redirect, itemCount = _a.itemCount, params = _a.params, loading = _a.loading, createModalVisible = _a.createModalVisible, deleteModalVisible = _a.deleteModalVisible, editModalVisible = _a.editModalVisible, alerts = _a.alerts, groups = _a.groups, unauthorized = _a.unauthorized;
        var user = this.context.user;
        var noData = groups.length === 0 && !filterIsSet(params, ['name']);
        if (redirect) {
            return React.createElement(Redirect, { push: true, to: redirect });
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            createModalVisible ? this.renderCreateModal() : null,
            deleteModalVisible ? this.renderDeleteModal() : null,
            editModalVisible ? this.renderEditModal() : null,
            React.createElement(BaseHeader, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Groups"], ["Groups"]))) }),
            unauthorized ? (React.createElement(EmptyStateUnauthorized, null)) : loading ? (React.createElement(LoadingPageSpinner, null)) : noData ? (React.createElement(EmptyStateNoData, { title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["No groups yet"], ["No groups yet"]))), description: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Groups will appear once created"], ["Groups will appear once created"]))), button: !!user &&
                    user.model_permissions.add_group && (React.createElement(Button, { variant: 'primary', onClick: function () { return _this.setState({ createModalVisible: true }); } }, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Create"], ["Create"]))))) })) : (React.createElement(Main, null,
                React.createElement("section", { className: 'body' },
                    React.createElement("div", { className: 'hub-group-list-toolbar' },
                        React.createElement(Toolbar, null,
                            React.createElement(ToolbarContent, null,
                                React.createElement(ToolbarGroup, null,
                                    React.createElement(ToolbarItem, null,
                                        React.createElement(CompoundFilter, { inputText: this.state.inputText, onChange: function (val) { return _this.setState({ inputText: val }); }, updateParams: function (p) {
                                                return _this.updateParams(p, function () { return _this.queryGroups(); });
                                            }, params: params, filterConfig: [
                                                {
                                                    id: 'name',
                                                    title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Group"], ["Group"]))),
                                                },
                                            ] }))),
                                !!user && user.model_permissions.add_group && (React.createElement(ToolbarGroup, null,
                                    React.createElement(ToolbarItem, null,
                                        React.createElement(Button, { onClick: function () {
                                                return _this.setState({ createModalVisible: true });
                                            } }, t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Create"], ["Create"]))))))))),
                        React.createElement(Pagination, { params: params, updateParams: function (p) {
                                return _this.updateParams(p, function () { return _this.queryGroups(); });
                            }, count: itemCount, isTop: true })),
                    React.createElement("div", null,
                        React.createElement(AppliedFilters, { updateParams: function (p) {
                                _this.updateParams(p, function () { return _this.queryGroups(); });
                                _this.setState({ inputText: '' });
                            }, params: params, ignoredParams: ['page_size', 'page', 'sort'] })),
                    loading ? React.createElement(LoadingPageSpinner, null) : this.renderTable(params),
                    React.createElement(Pagination, { params: params, updateParams: function (p) {
                            return _this.updateParams(p, function () { return _this.queryGroups(); });
                        }, count: itemCount }))))));
    };
    GroupList.prototype.renderCreateModal = function () {
        var _this = this;
        return (React.createElement(GroupModal, { onCancel: function () {
                return _this.setState({ createModalVisible: false, groupError: null });
            }, onSave: function (value) { return _this.saveGroup(value); }, clearErrors: function () { return _this.setState({ groupError: null }); }, errorMessage: this.state.groupError }));
    };
    GroupList.prototype.renderEditModal = function () {
        var _this = this;
        return (React.createElement(GroupModal, { onCancel: function () {
                return _this.setState({ editModalVisible: false, groupError: null });
            }, onSave: function (value) { return _this.editGroup(value); }, clearErrors: function () { return _this.setState({ groupError: null }); }, group: this.state.selectedGroup, errorMessage: this.state.groupError }));
    };
    GroupList.prototype.renderDeleteModal = function () {
        var _this = this;
        var name = this.state.selectedGroup && this.state.selectedGroup.name;
        var _a = this.state, users = _a.deleteModalUsers, count = _a.deleteModalCount;
        if (!users) {
            this.queryUsers();
        }
        return (React.createElement(DeleteGroupModal, { count: count, cancelAction: function () { return _this.hideDeleteModal(); }, deleteAction: function () { return _this.selectedGroup(_this.state.selectedGroup); }, name: name, users: users }));
    };
    GroupList.prototype.hideDeleteModal = function () {
        this.setState({
            deleteModalCount: null,
            deleteModalUsers: null,
            deleteModalVisible: false,
        });
    };
    GroupList.prototype.queryUsers = function () {
        var _this = this;
        UserAPI.list({
            groups__name: this.state.selectedGroup.name,
            page: 0,
            page_size: 10,
        })
            .then(function (result) {
            return _this.setState({
                deleteModalUsers: result.data.data,
                deleteModalCount: result.data.meta.count,
            });
        })
            .catch(function (e) {
            return _this.setState({
                deleteModalVisible: false,
                selectedGroup: null,
                alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                    {
                        variant: 'danger',
                        title: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Error loading users."], ["Error loading users."]))),
                        description: e === null || e === void 0 ? void 0 : e.message,
                    },
                ], false),
            });
        });
    };
    GroupList.prototype.saveGroup = function (value) {
        var _this = this;
        GroupAPI.create({ name: value })
            .then(function (result) {
            _this.setState({
                redirect: formatPath(Paths.groupDetail, {
                    group: result.data.id,
                }),
                createModalVisible: false,
            });
        })
            .catch(function (error) { return _this.setState({ groupError: mapErrorMessages(error) }); });
    };
    GroupList.prototype.editGroup = function (value) {
        var _this = this;
        GroupAPI.update(this.state.selectedGroup.id.toString(), {
            name: value,
            pulp_href: this.state.selectedGroup.pulp_href,
            id: this.state.selectedGroup.id,
        })
            .then(function (result) {
            _this.setState({
                redirect: '/group/' + result.data.id,
                editModalVisible: false,
                selectedGroup: null,
            });
        })
            .catch(function () {
            return _this.setState({
                editModalVisible: false,
                selectedGroup: null,
                alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                    {
                        variant: 'danger',
                        title: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Error editing group."], ["Error editing group."]))),
                    },
                ], false),
            });
        });
    };
    GroupList.prototype.renderTable = function (params) {
        var _this = this;
        var groups = this.state.groups;
        if (groups.length === 0) {
            return React.createElement(EmptyStateFilter, null);
        }
        var sortTableOptions = {
            headers: [
                {
                    title: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Group"], ["Group"]))),
                    type: 'alpha',
                    id: 'name',
                },
                {
                    title: '',
                    type: 'none',
                    id: 'kebab',
                },
            ],
        };
        return (React.createElement("table", { "aria-label": t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Group list"], ["Group list"]))), className: 'hub-c-table-content pf-c-table' },
            React.createElement(SortTable, { options: sortTableOptions, params: params, updateParams: function (p) { return _this.updateParams(p, function () { return _this.queryGroups(); }); } }),
            React.createElement("tbody", null, groups.map(function (group, i) { return _this.renderTableRow(group, i); }))));
    };
    GroupList.prototype.renderTableRow = function (group, index) {
        var _this = this;
        var user = this.context.user;
        var dropdownItems = [
            React.createElement(React.Fragment, { key: 'dropdown' },
                React.createElement(DropdownItem, { key: 'edit', onClick: function () {
                        _this.setState({
                            selectedGroup: __assign({}, group),
                            redirect: formatPath(Paths.groupDetail, {
                                group: group.id,
                            }, { isEditing: true }),
                        });
                    } },
                    React.createElement(Trans, null, "Edit")),
                !!user && user.model_permissions.delete_group && (React.createElement(DropdownItem, { "aria-label": 'Delete', key: 'delete', onClick: function () {
                        _this.setState({
                            selectedGroup: group,
                            deleteModalVisible: true,
                        });
                    } },
                    React.createElement(Trans, null, "Delete")))),
        ];
        return (React.createElement("tr", { "aria-labelledby": group.name, key: index },
            React.createElement("td", null,
                React.createElement(Link, { to: formatPath(Paths.groupDetail, {
                        group: group.id,
                    }) }, group.name)),
            React.createElement("td", null, dropdownItems.length > 0 && (React.createElement(StatefulDropdown, { items: dropdownItems })))));
    };
    Object.defineProperty(GroupList.prototype, "updateParams", {
        get: function () {
            return ParamHelper.updateParamsMixin();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupList.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    GroupList.prototype.selectedGroup = function (group) {
        var _this = this;
        GroupAPI.delete(group.id)
            .then(function () {
            _this.hideDeleteModal();
            _this.setState({
                loading: true,
                selectedGroup: null,
                alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                    {
                        variant: 'success',
                        title: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Successfully deleted group."], ["Successfully deleted group."]))),
                    },
                ], false),
            });
            _this.queryGroups();
        })
            .catch(function () {
            return _this.setState({
                alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                    {
                        variant: 'danger',
                        title: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Error deleting group."], ["Error deleting group."]))),
                    },
                ], false),
            });
        });
    };
    GroupList.prototype.queryGroups = function () {
        var _this = this;
        this.setState({ loading: true }, function () {
            return GroupAPI.list(_this.state.params)
                .then(function (result) {
                return _this.setState({
                    groups: result.data.data,
                    itemCount: result.data.meta.count,
                    loading: false,
                });
            })
                .catch(function (e) {
                return _this.setState({
                    groups: [],
                    itemCount: 0,
                    loading: false,
                    alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                        {
                            variant: 'danger',
                            title: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Error loading groups."], ["Error loading groups."]))),
                            description: e === null || e === void 0 ? void 0 : e.message,
                        },
                    ], false),
                });
            });
        });
    };
    return GroupList;
}(React.Component));
export default withRouter(GroupList);
GroupList.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
//# sourceMappingURL=group-list.js.map