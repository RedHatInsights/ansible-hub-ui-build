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
import { errorMessage } from 'src/utilities';
import { withRouter, Link, Redirect, } from 'react-router-dom';
import { AlertList, APISearchTypeAhead, AppliedFilters, BaseHeader, Breadcrumbs, closeAlertMixin, CompoundFilter, DateComponent, DeleteGroupModal, DeleteModal, EmptyStateFilter, EmptyStateNoData, EmptyStateUnauthorized, ListItemActions, LoadingPageWithHeader, Main, Pagination, SortTable, Tabs, } from 'src/components';
import { GroupAPI, UserAPI, } from 'src/api';
import { filterIsSet, ParamHelper } from 'src/utilities';
import { formatPath, Paths } from 'src/paths';
import { Button, DropdownItem, Modal, Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, } from '@patternfly/react-core';
import { AppContext } from 'src/loaders/app-context';
import GroupDetailRoleManagement from './group-detail-role-management/group-detail-role-management';
var GroupDetail = /** @class */ (function (_super) {
    __extends(GroupDetail, _super);
    function GroupDetail(props) {
        var _this = _super.call(this, props) || this;
        _this.nonQueryStringParams = ['group'];
        _this.userQueryStringParams = ['username', 'first_name', 'last_name', 'email'];
        _this.roleQueryStringParams = ['role__icontains'];
        var id = _this.props.match.params['group'];
        var params = ParamHelper.parseParamString(props.location.search, [
            'page',
            'page_size',
        ]);
        _this.state = {
            group: null,
            users: null,
            allUsers: null,
            params: {
                id: id,
                page: 0,
                page_size: params['page_size'] || 10,
                sort: params['sort'] || (params['tab'] === 'access' ? 'role' : 'username'),
                tab: params['tab'] || 'access',
            },
            itemCount: 0,
            alerts: [],
            addModalVisible: false,
            options: undefined,
            selected: [],
            showDeleteModal: false,
            showUserRemoveModal: null,
            permissions: [],
            originalPermissions: [],
            unauthorised: false,
            inputText: '',
        };
        return _this;
    }
    GroupDetail.prototype.componentDidMount = function () {
        var _a = this.context, user = _a.user, hasPermission = _a.hasPermission;
        if (!user || user.is_anonymous || !hasPermission('galaxy.view_group')) {
            this.setState({ unauthorised: true });
        }
        else {
            this.queryGroup();
        }
    };
    GroupDetail.prototype.render = function () {
        var _this = this;
        if (this.state.redirect) {
            return React.createElement(Redirect, { push: true, to: this.state.redirect });
        }
        var _a = this.state, addModalVisible = _a.addModalVisible, alerts = _a.alerts, group = _a.group, params = _a.params, showDeleteModal = _a.showDeleteModal, showUserRemoveModal = _a.showUserRemoveModal, users = _a.users, unauthorised = _a.unauthorised;
        var _b = this.context, user = _b.user, hasPermission = _b.hasPermission;
        var tabs = [{ id: 'access', name: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Access"], ["Access"]))) }];
        if (!!user && hasPermission('galaxy.view_user')) {
            tabs.push({ id: 'users', name: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Users"], ["Users"]))) });
        }
        if (!group && alerts && alerts.length) {
            return (React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return _this.closeAlert(i); } }));
        }
        if (unauthorised) {
            return React.createElement(EmptyStateUnauthorized, null);
        }
        if (!group) {
            return React.createElement(LoadingPageWithHeader, null);
        }
        if (params.tab == 'users' && !users && !unauthorised) {
            this.queryUsers();
            return React.createElement(LoadingPageWithHeader, null);
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            addModalVisible ? this.renderAddModal() : null,
            showDeleteModal ? this.renderGroupDeleteModal() : null,
            showUserRemoveModal ? this.renderUserRemoveModal() : null,
            React.createElement(BaseHeader, { title: group.name, breadcrumbs: React.createElement(Breadcrumbs, { links: [
                        { url: Paths.groupList, name: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Groups"], ["Groups"]))) },
                        { name: group.name },
                    ] }), pageControls: this.renderControls() },
                React.createElement("div", { className: 'hub-tab-link-container' },
                    React.createElement("div", { className: 'tabs' },
                        React.createElement(Tabs, { tabs: tabs, params: params, updateParams: function (p) { return _this.updateParams(p); } })))),
            React.createElement(Main, { "data-cy": 'main-tabs' },
                params.tab == 'access' ? this.renderGroupDetail() : null,
                params.tab == 'users' ? this.renderUsers(users) : null)));
    };
    GroupDetail.prototype.renderControls = function () {
        var _this = this;
        var _a = this.context, hasPermission = _a.hasPermission, user = _a.user;
        if (!user || !hasPermission('galaxy.delete_group')) {
            return null;
        }
        return (React.createElement(ToolbarItem, null,
            React.createElement(Button, { onClick: function () { return _this.setState({ showDeleteModal: true }); }, variant: 'secondary' }, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Delete"], ["Delete"]))))));
    };
    GroupDetail.prototype.renderGroupDetail = function () {
        var _this = this;
        var _a = this.state, params = _a.params, group = _a.group;
        return (React.createElement(GroupDetailRoleManagement, { params: params, updateParams: function (p) { return _this.updateParams(p); }, context: this.context, group: group, addAlert: function (title, variant, description) {
                return _this.addAlert(title, variant, description);
            }, nonQueryParams: this.userQueryStringParams }));
    };
    GroupDetail.prototype.renderAddModal = function () {
        var _this = this;
        if (this.state.options === undefined) {
            this.loadOptions();
            return null;
        }
        var close = function () { return _this.setState({ addModalVisible: false, selected: [] }); };
        return (React.createElement(Modal, { variant: 'large', onClose: close, isOpen: true, "aria-label": t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["add-user-modal"], ["add-user-modal"]))), title: '', header: React.createElement("span", { className: 'pf-c-content' },
                React.createElement("h2", null, t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Add selected users to group"], ["Add selected users to group"])))),
                ' '), actions: [
                React.createElement(Button, { key: 'add', variant: 'primary', isDisabled: this.state.selected.length === 0, onClick: function () {
                        return _this.addUserToGroup(_this.state.selected, _this.state.group).then(close);
                    } }, t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Add"], ["Add"])))),
                React.createElement(Button, { key: 'cancel', variant: 'link', onClick: close }, t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Cancel"], ["Cancel"])))),
            ] },
            React.createElement(APISearchTypeAhead, { results: this.state.options, loadResults: function (name) {
                    return UserAPI.list({ username__contains: name, page_size: 1000 })
                        .then(function (result) {
                        var filteredUsers = [];
                        result.data.data.forEach(function (user) {
                            filteredUsers.push({
                                id: user.id,
                                name: user.username,
                            });
                        });
                        filteredUsers = filteredUsers.filter(function (x) {
                            return !_this.state.selected.find(function (s) { return s.name === x.name; }) &&
                                !_this.state.users.find(function (u) { return u.id === x.id; });
                        });
                        _this.setState({
                            options: filteredUsers,
                        });
                    })
                        .catch(function (e) {
                        var _a = e.response, status = _a.status, statusText = _a.statusText;
                        _this.addAlert(t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Users list could not be displayed."], ["Users list could not be displayed."]))), 'danger', errorMessage(status, statusText));
                    });
                }, onSelect: function (event, selection) {
                    var selectedUser = _this.state.options.find(function (x) { return x.name === selection; });
                    if (selectedUser) {
                        var newOptions = _this.state.options.filter(function (x) { return x.name !== selection; });
                        _this.setState({
                            selected: __spreadArray(__spreadArray([], _this.state.selected, true), [selectedUser], false),
                            options: newOptions,
                        });
                    }
                    else {
                        var deselectedUser = _this.state.selected.find(function (x) { return x.name === selection; });
                        var newSelected = _this.state.selected.filter(function (x) { return x.name !== selection; });
                        _this.setState({
                            selected: newSelected,
                            options: __spreadArray(__spreadArray([], _this.state.options, true), [deselectedUser], false),
                        });
                    }
                }, placeholderText: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Select users"], ["Select users"]))), selections: this.state.selected, menuAppendTo: 'parent', multiple: true, onClear: function () {
                    return _this.setState({
                        selected: [],
                        options: __spreadArray(__spreadArray([], _this.state.options, true), _this.state.selected, true),
                    });
                }, isDisabled: false, style: { overflowY: 'auto', maxHeight: '350px' } })));
    };
    GroupDetail.prototype.renderGroupDeleteModal = function () {
        var _this = this;
        var _a = this.state, group = _a.group, users = _a.users, itemCount = _a.itemCount;
        var deleteAction = function () {
            GroupAPI.delete(group.id)
                .then(function () {
                _this.setState({
                    showDeleteModal: false,
                });
                _this.addAlert(t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Group \"", "\" has been successfully deleted."], ["Group \"", "\" has been successfully deleted."])), group), 'success');
                _this.setState({ redirect: Paths.groupList });
            })
                .catch(function (e) {
                var _a = e.response, status = _a.status, statusText = _a.statusText;
                _this.addAlert(t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Group \"", "\" could not be deleted."], ["Group \"", "\" could not be deleted."])), group), 'danger', errorMessage(status, statusText));
            });
        };
        var hasPermission = this.context.hasPermission;
        var view_user = hasPermission('galaxy.view_user').view_user;
        if (!users && view_user) {
            this.queryUsers();
        }
        return (React.createElement(DeleteGroupModal, { count: itemCount, cancelAction: function () { return _this.setState({ showDeleteModal: false }); }, deleteAction: deleteAction, name: group.name, users: users, canViewUsers: view_user }));
    };
    GroupDetail.prototype.renderUserRemoveModal = function () {
        var _this = this;
        var group = this.state.group;
        var user = this.state.showUserRemoveModal;
        var username = user.username;
        var groupname = group.name;
        return (React.createElement(DeleteModal, { cancelAction: function () { return _this.setState({ showUserRemoveModal: null }); }, deleteAction: function () { return _this.deleteUser(user); }, title: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Remove user from group?"], ["Remove user from group?"]))) },
            React.createElement(Trans, null,
                "User ",
                React.createElement("b", null, username),
                " will be removed from group ",
                React.createElement("b", null, groupname),
                ".")));
    };
    GroupDetail.prototype.addUserToGroup = function (selectedUsers, group) {
        var _this = this;
        return Promise.all(selectedUsers.map(function (_a) {
            var id = _a.id;
            var user = _this.state.allUsers.find(function (x) { return x.id === id; });
            return UserAPI.update(id.toString(), __assign(__assign({}, user), { groups: __spreadArray(__spreadArray([], user.groups, true), [group], false) }));
        }))
            .then(function () {
            _this.addAlert(t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["User \"", "\" has been successfully added to group \"", "\"."], ["User \"", "\" has been successfully added to group \"", "\"."])), selectedUsers[0].name, _this.state.group.name), 'success');
        })
            .catch(function (e) {
            var _a = e.response, status = _a.status, statusText = _a.statusText;
            _this.addAlert(t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["User \"", "\" could not be added to group \"", "\"."], ["User \"", "\" could not be added to group \"", "\"."])), selectedUsers[0].name, _this.state.group.name), 'danger', errorMessage(status, statusText));
        })
            .then(function () { return _this.queryUsers(); });
    };
    GroupDetail.prototype.loadOptions = function () {
        var _this = this;
        UserAPI.list({ page_size: 1000 })
            .then(function (result) {
            var options = result.data.data
                .filter(function (user) { return !_this.state.users.find(function (u) { return u.id === user.id; }); })
                .map(function (option) { return ({ id: option.id, name: option.username }); });
            _this.setState({ options: options, allUsers: result.data.data });
        })
            .catch(function (e) {
            var _a = e.response, status = _a.status, statusText = _a.statusText;
            _this.addAlert(t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Users list could not be displayed."], ["Users list could not be displayed."]))), 'danger', errorMessage(status, statusText));
        });
    };
    GroupDetail.prototype.addAlert = function (title, variant, description) {
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
    GroupDetail.prototype.renderUsers = function (users) {
        var _this = this;
        var _a = this.state, itemCount = _a.itemCount, params = _a.params;
        var _b = this.context, user = _b.user, featureFlags = _b.featureFlags, hasPermission = _b.hasPermission;
        var noData = itemCount === 0 &&
            !filterIsSet(this.state.params, [
                'username',
                'first_name',
                'last_name',
                'email',
                'role__icontains',
            ]);
        var isUserMgmtDisabled = false;
        if (featureFlags) {
            isUserMgmtDisabled = featureFlags.external_authentication;
        }
        if (noData) {
            return (React.createElement(EmptyStateNoData, { title: t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["No users yet"], ["No users yet"]))), description: t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Users will appear once added to this group"], ["Users will appear once added to this group"]))), button: !!user &&
                    hasPermission('galaxy.change_group') &&
                    !isUserMgmtDisabled && (React.createElement(Button, { variant: 'primary', onClick: function () { return _this.setState({ addModalVisible: true }); } }, t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Add"], ["Add"]))))) }));
        }
        return (React.createElement("section", { className: 'body' },
            React.createElement("div", { className: 'toolbar' },
                React.createElement(Toolbar, null,
                    React.createElement(ToolbarContent, null,
                        React.createElement(ToolbarGroup, null,
                            React.createElement(ToolbarItem, null,
                                React.createElement(CompoundFilter, { inputText: this.state.inputText, onChange: function (text) { return _this.setState({ inputText: text }); }, updateParams: function (p) {
                                        return _this.updateParams(p, function () { return _this.queryUsers(); });
                                    }, params: params, filterConfig: [
                                        {
                                            id: 'username',
                                            title: t(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Username"], ["Username"]))),
                                        },
                                        {
                                            id: 'first_name',
                                            title: t(templateObject_21 || (templateObject_21 = __makeTemplateObject(["First name"], ["First name"]))),
                                        },
                                        {
                                            id: 'last_name',
                                            title: t(templateObject_22 || (templateObject_22 = __makeTemplateObject(["Last name"], ["Last name"]))),
                                        },
                                        {
                                            id: 'email',
                                            title: t(templateObject_23 || (templateObject_23 = __makeTemplateObject(["Email"], ["Email"]))),
                                        },
                                    ] }))),
                        !!user &&
                            hasPermission('galaxy.change_group') &&
                            !isUserMgmtDisabled && (React.createElement(ToolbarGroup, null,
                            React.createElement(ToolbarItem, null,
                                React.createElement(Button, { onClick: function () { return _this.setState({ addModalVisible: true }); } }, t(templateObject_24 || (templateObject_24 = __makeTemplateObject(["Add"], ["Add"]))))))))),
                React.createElement(Pagination, { params: params, updateParams: function (p) { return _this.updateParams(p, function () { return _this.queryUsers(); }); }, count: itemCount, isTop: true })),
            React.createElement("div", null,
                React.createElement(AppliedFilters, { updateParams: function (p) {
                        _this.updateParams(p, function () { return _this.queryUsers(); });
                        _this.setState({ inputText: '' });
                    }, params: params, ignoredParams: [
                        'id',
                        'page',
                        'page_size',
                        'sort',
                        'tab',
                        'role__icontains',
                    ] })),
            this.renderUsersTable(users),
            React.createElement("div", { style: { paddingTop: '24px', paddingBottom: '8px' } },
                React.createElement(Pagination, { params: params, updateParams: function (p) { return _this.updateParams(p, function () { return _this.queryUsers(); }); }, count: itemCount })),
            ' '));
    };
    GroupDetail.prototype.renderUsersTable = function (users) {
        var _this = this;
        var params = this.state.params;
        if (users.length === 0) {
            return React.createElement(EmptyStateFilter, null);
        }
        var sortTableOptions = {
            headers: [
                {
                    title: t(templateObject_25 || (templateObject_25 = __makeTemplateObject(["Username"], ["Username"]))),
                    type: 'alpha',
                    id: 'username',
                },
                {
                    title: t(templateObject_26 || (templateObject_26 = __makeTemplateObject(["Email"], ["Email"]))),
                    type: 'alpha',
                    id: 'email',
                },
                {
                    title: t(templateObject_27 || (templateObject_27 = __makeTemplateObject(["Last name"], ["Last name"]))),
                    type: 'alpha',
                    id: 'last_name',
                },
                {
                    title: t(templateObject_28 || (templateObject_28 = __makeTemplateObject(["First name"], ["First name"]))),
                    type: 'alpha',
                    id: 'first_name',
                },
                {
                    title: t(templateObject_29 || (templateObject_29 = __makeTemplateObject(["Created"], ["Created"]))),
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
        return (React.createElement("table", { "aria-label": t(templateObject_30 || (templateObject_30 = __makeTemplateObject(["User list"], ["User list"]))), className: 'hub-c-table-content pf-c-table' },
            React.createElement(SortTable, { options: sortTableOptions, params: params, updateParams: function (p) { return _this.updateParams(p, function () { return _this.queryUsers(); }); } }),
            React.createElement("tbody", null, users.map(function (user, i) { return _this.renderTableRow(user, i); }))));
    };
    GroupDetail.prototype.renderTableRow = function (user, index) {
        var _this = this;
        var currentUser = this.context.user;
        var _a = this.context, featureFlags = _a.featureFlags, hasPermission = _a.hasPermission;
        var isUserMgmtDisabled = featureFlags === null || featureFlags === void 0 ? void 0 : featureFlags.external_authentication;
        var dropdownItems = [
            !!currentUser &&
                hasPermission('galaxy.change_group') &&
                !isUserMgmtDisabled && (React.createElement(DropdownItem, { key: 'delete', onClick: function () { return _this.setState({ showUserRemoveModal: user }); } }, t(templateObject_31 || (templateObject_31 = __makeTemplateObject(["Remove"], ["Remove"]))))),
        ];
        return (React.createElement("tr", { "data-cy": "GroupDetail-users-".concat(user.username), key: index },
            React.createElement("td", null,
                React.createElement(Link, { to: formatPath(Paths.userDetail, { userID: user.id }) }, user.username)),
            React.createElement("td", null, user.email),
            React.createElement("td", null, user.last_name),
            React.createElement("td", null, user.first_name),
            React.createElement("td", null,
                React.createElement(DateComponent, { date: user.date_joined })),
            React.createElement(ListItemActions, { kebabItems: dropdownItems })));
    };
    GroupDetail.prototype.queryUsers = function () {
        var _this = this;
        var params = __assign(__assign({}, ParamHelper.getReduced(this.state.params, __spreadArray([], this.roleQueryStringParams, true))), { sort: ParamHelper.validSortParams(this.state.params['sort'], this.userQueryStringParams, 'username'), groups__name: this.state.group.name });
        UserAPI.list(__assign({}, params))
            .then(function (result) {
            return _this.setState({
                users: result.data.data,
                itemCount: result.data.meta.count,
            });
        })
            .catch(function (e) {
            var _a = e.response, status = _a.status, statusText = _a.statusText;
            _this.addAlert(t(templateObject_32 || (templateObject_32 = __makeTemplateObject(["Users list could not be displayed."], ["Users list could not be displayed."]))), 'danger', errorMessage(status, statusText));
        });
    };
    GroupDetail.prototype.queryGroup = function () {
        var _this = this;
        GroupAPI.get(this.state.params.id)
            .then(function (result) {
            _this.setState({ group: result.data });
        })
            .catch(function (e) {
            if (e.response.status === 404) {
                _this.setState({ redirect: Paths.notFound });
            }
            else {
                var _a = e.response, status_1 = _a.status, statusText = _a.statusText;
                _this.addAlert(t(templateObject_33 || (templateObject_33 = __makeTemplateObject(["Group could not be displayed."], ["Group could not be displayed."]))), 'danger', errorMessage(status_1, statusText));
            }
        });
        this.setState({
            users: null,
        });
    };
    GroupDetail.prototype.deleteUser = function (user) {
        var _this = this;
        user.groups = user.groups.filter(function (group) {
            return group.id != _this.state.params.id;
        });
        var name = this.state.group.name;
        UserAPI.update(user.id, user)
            .then(function () {
            _this.setState({
                showUserRemoveModal: null,
            });
            _this.addAlert(t(templateObject_34 || (templateObject_34 = __makeTemplateObject(["User \"", "\" has been successfully removed from group \"", "\"."], ["User \"", "\" has been successfully removed from group \"", "\"."])), user.username, name), 'success');
            _this.queryUsers();
        })
            .catch(function (e) {
            var _a = e.response, status = _a.status, statusText = _a.statusText;
            _this.addAlert(t(templateObject_35 || (templateObject_35 = __makeTemplateObject(["User \"", "\" could not be removed from group \"", "\"."], ["User \"", "\" could not be removed from group \"", "\"."])), user.username, name), 'danger', errorMessage(status, statusText));
        });
    };
    Object.defineProperty(GroupDetail.prototype, "updateParams", {
        get: function () {
            return ParamHelper.updateParamsMixin(this.nonQueryStringParams);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupDetail.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    return GroupDetail;
}(React.Component));
export default withRouter(GroupDetail);
GroupDetail.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35;
//# sourceMappingURL=group-detail.js.map