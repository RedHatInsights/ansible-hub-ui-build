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
import './user-management.scss';
import { withRouter, Link, Redirect, } from 'react-router-dom';
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
            inputText: '',
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
            return React.createElement(Redirect, { push: true, to: redirect });
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
            React.createElement(BaseHeader, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Users"], ["Users"]))) }),
            unauthorized ? (React.createElement(EmptyStateUnauthorized, null)) : (React.createElement(Main, null,
                React.createElement("section", { className: 'body' },
                    React.createElement("div", { className: 'hub-user-list-toolbar' },
                        React.createElement(Toolbar, null,
                            React.createElement(ToolbarContent, null,
                                React.createElement(ToolbarGroup, null,
                                    React.createElement(ToolbarItem, null,
                                        React.createElement(CompoundFilter, { inputText: this.state.inputText, onChange: function (input) {
                                                return _this.setState({ inputText: input });
                                            }, updateParams: function (p) {
                                                return _this.updateParams(p, function () { return _this.queryUsers(); });
                                            }, params: params, filterConfig: [
                                                {
                                                    id: 'username__contains',
                                                    title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Username"], ["Username"]))),
                                                },
                                                {
                                                    id: 'first_name__contains',
                                                    title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["First name"], ["First name"]))),
                                                },
                                                {
                                                    id: 'last_name__contains',
                                                    title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Last name"], ["Last name"]))),
                                                },
                                                {
                                                    id: 'email__contains',
                                                    title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Email"], ["Email"]))),
                                                },
                                            ] }))),
                                !!user && user.model_permissions.add_user ? (React.createElement(ToolbarGroup, null,
                                    React.createElement(ToolbarItem, null,
                                        React.createElement(Link, { to: Paths.createUser },
                                            React.createElement(Button, null, t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Create"], ["Create"])))))))) : null)),
                        React.createElement(Pagination, { params: params, updateParams: function (p) {
                                return _this.updateParams(p, function () { return _this.queryUsers(); });
                            }, count: itemCount, isTop: true })),
                    React.createElement("div", null,
                        React.createElement(AppliedFilters, { updateParams: function (p) {
                                _this.updateParams(p, function () { return _this.queryUsers(); });
                                _this.setState({ inputText: '' });
                            }, params: params, ignoredParams: ['page_size', 'page', 'sort'], niceNames: {
                                username__contains: 'Username',
                                first_name__contains: 'First name',
                                last_name__contains: 'Last name',
                                email__contains: 'Email',
                            } })),
                    loading ? React.createElement(LoadingPageSpinner, null) : this.renderTable(params),
                    React.createElement(Pagination, { params: params, updateParams: function (p) {
                            return _this.updateParams(p, function () { return _this.queryUsers(); });
                        }, count: itemCount }))))));
    };
    UserList.prototype.renderTable = function (params) {
        var _this = this;
        var users = this.state.users;
        if (users.length === 0) {
            return filterIsSet(params, [
                'username__contains',
                'first_name__contains',
                'last_name__contains',
                'email__contains',
            ]) ? (React.createElement(EmptyStateFilter, null)) : (React.createElement(EmptyStateNoData, { title: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["No users yet"], ["No users yet"]))), description: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Users will appear once created"], ["Users will appear once created"]))), button: React.createElement(Link, { to: Paths.createUser },
                    React.createElement(Button, { variant: 'primary' }, t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Create"], ["Create"]))))) }));
        }
        var sortTableOptions = {
            headers: [
                {
                    title: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Username"], ["Username"]))),
                    type: 'alpha',
                    id: 'username',
                },
                {
                    title: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["First name"], ["First name"]))),
                    type: 'alpha',
                    id: 'first_name',
                    className: 'pf-m-wrap',
                },
                {
                    title: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Last name"], ["Last name"]))),
                    type: 'alpha',
                    id: 'last_name',
                    className: 'pf-m-wrap',
                },
                {
                    title: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Email"], ["Email"]))),
                    type: 'alpha',
                    id: 'email',
                },
                {
                    id: 'groups',
                    title: t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Groups"], ["Groups"]))),
                    type: 'none',
                },
                {
                    title: t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Created"], ["Created"]))),
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
        return (React.createElement("table", { "aria-label": t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["User list"], ["User list"]))), className: 'hub-c-table-content pf-c-table' },
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
                    }) }, t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Edit"], ["Edit"])))) }));
        }
        if (!!this.context.user &&
            this.context.user.model_permissions.delete_user) {
            dropdownItems.push(React.createElement(DropdownItem, { key: 'delete', onClick: function () { return _this.deleteUser(user); } }, t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Delete"], ["Delete"])))));
        }
        return (React.createElement("tr", { "aria-labelledby": user.username, key: index },
            React.createElement("td", null,
                React.createElement(Link, { to: formatPath(Paths.userDetail, { userID: user.id }) }, user.username),
                user.is_superuser && (React.createElement(React.Fragment, null,
                    ' ',
                    React.createElement(Tooltip, { content: t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Super users have all system permissions regardless of what groups they are in."], ["Super users have all system permissions regardless of what groups they are in."]))) },
                        React.createElement(Label, { icon: React.createElement(UserPlusIcon, null), color: 'orange' }, t(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Super user"], ["Super user"])))))))),
            React.createElement("td", null, user.first_name),
            React.createElement("td", null, user.last_name),
            React.createElement("td", null, user.email),
            React.createElement("td", null,
                React.createElement(LabelGroup, null, user.groups.map(function (g) { return (React.createElement(Label, { key: g.id }, g.name)); }))),
            React.createElement("td", null,
                React.createElement(DateComponent, { date: user.date_joined })),
            React.createElement("td", { style: { paddingRight: '0px', textAlign: 'right' } }, dropdownItems.length > 0 ? (React.createElement(StatefulDropdown, { items: dropdownItems })) : null)));
    };
    UserList.prototype.queryUsers = function () {
        var _this = this;
        this.setState({ loading: true }, function () {
            return UserAPI.list(_this.state.params)
                .then(function (result) {
                return _this.setState({
                    users: result.data.data,
                    itemCount: result.data.meta.count,
                    loading: false,
                });
            })
                .catch(function (e) {
                return _this.setState({
                    users: [],
                    itemCount: 0,
                    loading: false,
                    alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                        {
                            variant: 'danger',
                            title: t(templateObject_21 || (templateObject_21 = __makeTemplateObject(["Error loading users."], ["Error loading users."]))),
                            description: e === null || e === void 0 ? void 0 : e.message,
                        },
                    ], false),
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
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21;
//# sourceMappingURL=user-list.js.map