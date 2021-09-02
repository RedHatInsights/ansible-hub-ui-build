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
import * as React from 'react';
import { withRouter, Link, Redirect, } from 'react-router-dom';
import { Section } from '@redhat-cloud-services/frontend-components';
import { Toolbar, ToolbarGroup, ToolbarItem, ToolbarContent, Button, DropdownItem, Label, Tooltip, LabelGroup, } from '@patternfly/react-core';
import { UserPlusIcon } from '@patternfly/react-icons';
import { UserAPI } from 'src/api';
import { ParamHelper, filterIsSet } from 'src/utilities';
import { StatefulDropdown, CompoundFilter, LoadingPageSpinner, AppliedFilters, Pagination, SortTable, AlertList, closeAlertMixin, BaseHeader, Main, EmptyStateNoData, EmptyStateUnauthorized, EmptyStateFilter, DateComponent, } from 'src/components';
import { DeleteUserModal } from './delete-user-modal';
import { Paths, formatPath } from 'src/paths';
import { AppContext } from 'src/loaders/app-context';
var UserList = /** @class */ (function (_super) {
    __extends(UserList, _super);
    function UserList(props) {
        var _this = _super.call(this, props) || this;
        _this.deleteUser = function (user) {
            _this.setState({ deleteUser: user, showDeleteModal: true });
        };
        _this.closeModal = function (didDelete) {
            return _this.setState({
                deleteUser: undefined,
                showDeleteModal: false,
            }, function () {
                if (didDelete) {
                    _this.queryUsers();
                }
            });
        };
        var params = ParamHelper.parseParamString(props.location.search, [
            'page',
            'page_size',
        ]);
        if (!params['page_size']) {
            params['page_size'] = 10;
        }
        if (!params['sort']) {
            params['sort'] = 'username';
        }
        _this.state = {
            deleteUser: undefined,
            showDeleteModal: false,
            params: params,
            users: [],
            loading: true,
            itemCount: 0,
            alerts: [],
            unauthorized: false,
        };
        return _this;
    }
    UserList.prototype.componentDidMount = function () {
        if (!this.context.user || !this.context.user.model_permissions.view_user) {
            this.setState({ unauthorized: true });
        }
        else {
            this.queryUsers();
        }
    };
    UserList.prototype.render = function () {
        var _this = this;
        var _a = this.state, params = _a.params, itemCount = _a.itemCount, loading = _a.loading, redirect = _a.redirect, showDeleteModal = _a.showDeleteModal, deleteUser = _a.deleteUser, alerts = _a.alerts, unauthorized = _a.unauthorized;
        var user = this.context.user;
        if (redirect) {
            return React.createElement(Redirect, { to: redirect });
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            React.createElement(DeleteUserModal, { isOpen: showDeleteModal, closeModal: this.closeModal, user: deleteUser, addAlert: function (text, variant, description) {
                    if (description === void 0) { description = undefined; }
                    return _this.setState({
                        alerts: alerts.concat([
                            { title: text, variant: variant, description: description },
                        ]),
                    });
                } }),
            React.createElement(BaseHeader, { title: 'Users' }),
            unauthorized ? (React.createElement(EmptyStateUnauthorized, null)) : (React.createElement(Main, null,
                React.createElement(Section, { className: 'body' },
                    React.createElement("div", { className: 'toolbar' },
                        React.createElement(Toolbar, null,
                            React.createElement(ToolbarContent, null,
                                React.createElement(ToolbarGroup, null,
                                    React.createElement(ToolbarItem, null,
                                        React.createElement(CompoundFilter, { updateParams: function (p) {
                                                return _this.updateParams(p, function () { return _this.queryUsers(); });
                                            }, params: params, filterConfig: [
                                                {
                                                    id: 'username',
                                                    title: 'Username',
                                                },
                                                {
                                                    id: 'first_name',
                                                    title: 'First name',
                                                },
                                                {
                                                    id: 'last_name',
                                                    title: 'Last name',
                                                },
                                                {
                                                    id: 'email',
                                                    title: 'Email',
                                                },
                                            ] }))),
                                !!user && user.model_permissions.add_user ? (React.createElement(ToolbarGroup, null,
                                    React.createElement(ToolbarItem, null,
                                        React.createElement(Link, { to: Paths.createUser },
                                            React.createElement(Button, null, "Create user"))))) : null)),
                        React.createElement(Pagination, { params: params, updateParams: function (p) {
                                return _this.updateParams(p, function () { return _this.queryUsers(); });
                            }, count: itemCount, isTop: true })),
                    React.createElement("div", null,
                        React.createElement(AppliedFilters, { updateParams: function (p) {
                                return _this.updateParams(p, function () { return _this.queryUsers(); });
                            }, params: params, ignoredParams: ['page_size', 'page', 'sort'] })),
                    loading ? React.createElement(LoadingPageSpinner, null) : this.renderTable(params),
                    React.createElement("div", { style: { paddingTop: '24px', paddingBottom: '8px' } },
                        React.createElement(Pagination, { params: params, updateParams: function (p) {
                                return _this.updateParams(p, function () { return _this.queryUsers(); });
                            }, count: itemCount })))))));
    };
    UserList.prototype.renderTable = function (params) {
        var _this = this;
        var users = this.state.users;
        if (users.length === 0) {
            return filterIsSet(params, [
                'username',
                'first_name',
                'last_name',
                'email',
            ]) ? (React.createElement(EmptyStateFilter, null)) : (React.createElement(EmptyStateNoData, { title: 'No users yet', description: 'Users will appear once created', button: React.createElement(Link, { to: Paths.createUser },
                    React.createElement(Button, { variant: 'primary' }, "Create")) }));
        }
        var sortTableOptions = {
            headers: [
                {
                    title: 'Username',
                    type: 'alpha',
                    id: 'username',
                },
                {
                    title: 'First name',
                    type: 'alpha',
                    id: 'first_name',
                },
                {
                    title: 'Last name',
                    type: 'alpha',
                    id: 'last_name',
                },
                {
                    title: 'Email',
                    type: 'alpha',
                    id: 'email',
                },
                {
                    id: 'groups',
                    title: 'Groups',
                    type: 'none',
                },
                {
                    title: 'Created',
                    type: 'numeric',
                    id: 'date_joined',
                },
                {
                    title: '',
                    type: 'none',
                    id: 'kebab',
                },
            ],
        };
        return (React.createElement("table", { "aria-label": 'User list', className: 'content-table pf-c-table' },
            React.createElement(SortTable, { options: sortTableOptions, params: params, updateParams: function (p) { return _this.updateParams(p, function () { return _this.queryUsers(); }); } }),
            React.createElement("tbody", null, users.map(function (user, i) { return _this.renderTableRow(user, i); }))));
    };
    UserList.prototype.renderTableRow = function (user, index) {
        var _this = this;
        var dropdownItems = [];
        if (!!this.context.user &&
            this.context.user.model_permissions.change_user) {
            dropdownItems.push(React.createElement(DropdownItem, { key: 'edit', component: React.createElement(Link, { to: formatPath(Paths.editUser, {
                        userID: user.id,
                    }) }, "Edit") }));
        }
        if (!!this.context.user &&
            this.context.user.model_permissions.delete_user) {
            dropdownItems.push(React.createElement(DropdownItem, { key: 'delete', onClick: function () { return _this.deleteUser(user); } }, "Delete"));
        }
        return (React.createElement("tr", { "aria-labelledby": user.username, key: index },
            React.createElement("td", null,
                React.createElement(Link, { to: formatPath(Paths.userDetail, { userID: user.id }) }, user.username),
                user.is_superuser && (React.createElement(React.Fragment, null,
                    ' ',
                    React.createElement(Tooltip, { content: 'Super users have all system permissions regardless of what groups they are in.' },
                        React.createElement(Label, { icon: React.createElement(UserPlusIcon, null), color: 'orange' }, "Super user"))))),
            React.createElement("td", null, user.first_name),
            React.createElement("td", null, user.last_name),
            React.createElement("td", null, user.email),
            React.createElement("td", null,
                React.createElement(LabelGroup, null, user.groups.map(function (g) { return (React.createElement(Label, { key: g.id }, g.name)); }))),
            React.createElement("td", null,
                React.createElement(DateComponent, { date: user.date_joined })),
            React.createElement("td", null, dropdownItems.length > 0 ? (React.createElement(StatefulDropdown, { items: dropdownItems })) : null)));
    };
    UserList.prototype.queryUsers = function () {
        var _this = this;
        this.setState({ loading: true }, function () {
            return UserAPI.list(_this.state.params).then(function (result) {
                return _this.setState({
                    users: result.data.data,
                    itemCount: result.data.meta.count,
                    loading: false,
                });
            });
        });
    };
    Object.defineProperty(UserList.prototype, "updateParams", {
        get: function () {
            return ParamHelper.updateParamsMixin();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserList.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    return UserList;
}(React.Component));
export default withRouter(UserList);
UserList.contextType = AppContext;
//# sourceMappingURL=user-list.js.map