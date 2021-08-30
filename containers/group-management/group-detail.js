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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import * as React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { AlertList, APISearchTypeAhead, AppliedFilters, BaseHeader, Breadcrumbs, closeAlertMixin, CompoundFilter, DateComponent, EmptyStateFilter, EmptyStateNoData, LoadingPageWithHeader, Main, Pagination, PermissionChipSelector, SortTable, StatefulDropdown, Tabs, } from 'src/components';
import { GroupAPI, UserAPI } from 'src/api';
import { filterIsSet, ParamHelper, twoWayMapper } from 'src/utilities';
import { formatPath, Paths } from 'src/paths';
import { ActionGroup, Button, DropdownItem, Flex, FlexItem, Form, Modal, Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, } from '@patternfly/react-core';
import { Constants } from 'src/constants';
import { AppContext } from 'src/loaders/app-context';
import { DeleteGroupModal } from './delete-group-modal';
import { DeleteModal } from 'src/components/delete-modal/delete-modal';
var GroupDetail = /** @class */ (function (_super) {
    __extends(GroupDetail, _super);
    function GroupDetail(props) {
        var _this = _super.call(this, props) || this;
        _this.nonQueryStringParams = ['group'];
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
                sort: params['sort'] || 'username',
                tab: params['tab'] || 'permissions',
            },
            itemCount: 0,
            alerts: [],
            addModalVisible: false,
            options: undefined,
            selected: [],
            editPermissions: false,
            showDeleteModal: false,
            showUserRemoveModal: null,
            permissions: [],
            originalPermissions: [],
        };
        return _this;
    }
    GroupDetail.prototype.componentDidMount = function () {
        var _this = this;
        GroupAPI.get(this.state.params.id)
            .then(function (result) {
            _this.setState({ group: result.data });
        })
            .catch(function (e) {
            return _this.addAlert(_(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Error loading group."], ["Error loading group."]))), 'danger', e.message);
        });
        GroupAPI.getPermissions(this.state.params.id)
            .then(function (result) {
            _this.setState({
                originalPermissions: result.data.data.map(function (p) { return ({
                    id: p.id,
                    name: p.permission,
                }); }),
                permissions: result.data.data.map(function (x) { return x.permission; }),
            });
        })
            .catch(function (e) {
            return _this.addAlert(_(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Error loading permissions."], ["Error loading permissions."]))), 'danger', e.message);
        });
    };
    GroupDetail.prototype.render = function () {
        var _this = this;
        var _a = this.state, addModalVisible = _a.addModalVisible, alerts = _a.alerts, editPermissions = _a.editPermissions, group = _a.group, params = _a.params, showDeleteModal = _a.showDeleteModal, showUserRemoveModal = _a.showUserRemoveModal, users = _a.users;
        var user = this.context.user;
        var tabs = [_(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Permissions"], ["Permissions"])))];
        if (!!user && user.model_permissions.view_user) {
            tabs.push(_(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Users"], ["Users"]))));
        }
        if (!group && alerts && alerts.length) {
            return (React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return _this.closeAlert(i); } }));
        }
        if (!group) {
            return React.createElement(LoadingPageWithHeader, null);
        }
        if (params.tab == 'users' && !users) {
            this.queryUsers();
            return React.createElement(LoadingPageWithHeader, null);
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            addModalVisible ? this.renderAddModal() : null,
            showDeleteModal ? this.renderGroupDeleteModal() : null,
            showUserRemoveModal ? this.renderUserRemoveModal() : null,
            React.createElement(BaseHeader, { title: editPermissions && params.tab == 'permissions'
                    ? _(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Edit group permissions"], ["Edit group permissions"]))) : group.name, breadcrumbs: React.createElement(Breadcrumbs, { links: [
                        { url: Paths.groupList, name: _(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Groups"], ["Groups"]))) },
                        { name: group.name },
                    ] }), pageControls: this.renderControls() },
                React.createElement("div", { className: 'tab-link-container' },
                    React.createElement("div", { className: 'tabs' },
                        React.createElement(Tabs, { isDisabled: editPermissions, disabledTitle: _(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Please finish editing permissions first."], ["Please finish editing permissions first."]))), tabs: tabs, params: params, updateParams: function (p) { return _this.updateParams(p); } })))),
            React.createElement(Main, null,
                params.tab == 'permissions' ? this.renderPermissions() : null,
                params.tab == 'users' ? this.renderUsers(users) : null)));
    };
    GroupDetail.prototype.renderControls = function () {
        var _this = this;
        var user = this.context.user;
        var editPermissions = this.state.editPermissions;
        if (!user || !user.model_permissions.delete_group) {
            return null;
        }
        return (React.createElement(ToolbarItem, null,
            React.createElement(Button, { isDisabled: editPermissions, onClick: function () { return _this.setState({ showDeleteModal: true }); }, variant: 'secondary' }, _(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Delete"], ["Delete"]))))));
    };
    GroupDetail.prototype.actionSavePermissions = function () {
        var _this = this;
        var _a = this.state, group = _a.group, originalPermissions = _a.originalPermissions, permissions = _a.permissions;
        // Add permissions
        permissions.forEach(function (permission) {
            if (!originalPermissions.find(function (p) { return p.name === permission; })) {
                GroupAPI.addPermission(group.id, {
                    permission: permission,
                }).catch(function (e) {
                    return _this.addAlert(_(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Permission ", " was not added."], ["Permission ", " was not added."])), permission), 'danger', e.message);
                });
            }
        });
        // Remove permissions
        originalPermissions.forEach(function (original) {
            if (!permissions.includes(original.name)) {
                GroupAPI.removePermission(group.id, original.id).catch(function (e) {
                    return _this.addAlert(_(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Permission ", " was not removed."], ["Permission ", " was not removed."])), original.name), 'danger', e.message);
                });
            }
        });
        this.setState({ editPermissions: false });
    };
    GroupDetail.prototype.renderPermissions = function () {
        var _this = this;
        var groups = Constants.PERMISSIONS;
        var _a = this.state, editPermissions = _a.editPermissions, selectedPermissions = _a.permissions;
        var _b = this.context, user = _b.user, featureFlags = _b.featureFlags;
        var isUserMgmtDisabled = false;
        var filteredPermissions = __assign({}, Constants.HUMAN_PERMISSIONS);
        if (featureFlags) {
            isUserMgmtDisabled = featureFlags.external_authentication;
        }
        if (isUserMgmtDisabled) {
            Constants.USER_GROUP_MGMT_PERMISSIONS.forEach(function (perm) {
                if (filteredPermissions.hasOwnProperty(perm)) {
                    delete filteredPermissions[perm];
                }
            });
        }
        return (React.createElement("section", { className: 'body' },
            React.createElement("div", { style: { display: 'flex', justifyContent: 'flex-end' } }, !editPermissions && user.model_permissions.change_group && (React.createElement(Button, { onClick: function () { return _this.setState({ editPermissions: true }); } }, _(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Edit"], ["Edit"])))))),
            React.createElement("div", null, groups.map(function (group) { return (React.createElement(Flex, { style: { marginTop: '16px' }, alignItems: { default: 'alignItemsCenter' }, key: group.name, className: group.name },
                React.createElement(FlexItem, { style: { minWidth: '200px' } }, group.name),
                React.createElement(FlexItem, { grow: { default: 'grow' } },
                    React.createElement(PermissionChipSelector, { availablePermissions: group.object_permissions
                            .filter(function (perm) {
                            return !selectedPermissions.find(function (selected) { return selected === perm; });
                        })
                            .map(function (value) { return twoWayMapper(value, filteredPermissions); })
                            .sort(), selectedPermissions: selectedPermissions
                            .filter(function (selected) {
                            return group.object_permissions.find(function (perm) { return selected === perm; });
                        })
                            .map(function (value) { return twoWayMapper(value, filteredPermissions); }), setSelected: function (perms) { return _this.setState({ permissions: perms }); }, menuAppendTo: 'inline', isViewOnly: !editPermissions, onClear: function () {
                            var clearedPerms = group.object_permissions;
                            _this.setState({
                                permissions: _this.state.permissions.filter(function (x) { return !clearedPerms.includes(x); }),
                            });
                        }, onSelect: function (event, selection) {
                            var newPerms = new Set(_this.state.permissions);
                            if (newPerms.has(twoWayMapper(selection, filteredPermissions))) {
                                newPerms.delete(twoWayMapper(selection, filteredPermissions));
                            }
                            else {
                                newPerms.add(twoWayMapper(selection, filteredPermissions));
                            }
                            _this.setState({ permissions: Array.from(newPerms) });
                        } })))); })),
            editPermissions && (React.createElement(Form, null,
                React.createElement(ActionGroup, null,
                    React.createElement(Button, { variant: 'primary', onClick: function () { return _this.actionSavePermissions(); } }, _(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Save"], ["Save"])))),
                    React.createElement(Button, { variant: 'secondary', onClick: function () { return _this.setState({ editPermissions: false }); } }, _(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Cancel"], ["Cancel"])))))))));
    };
    GroupDetail.prototype.renderAddModal = function () {
        var _this = this;
        if (this.state.options === undefined) {
            this.loadOptions();
            return null;
        }
        var close = function () { return _this.setState({ addModalVisible: false, selected: [] }); };
        return (React.createElement(Modal, { variant: 'large', onClose: close, isOpen: true, "aria-label": 'add-user-modal', title: '', header: React.createElement("span", { className: 'pf-c-content' },
                React.createElement("h2", null, _(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Add selected users to group"], ["Add selected users to group"])))),
                ' '), actions: [
                React.createElement(Button, { key: 'add', variant: 'primary', isDisabled: this.state.selected.length === 0, onClick: function () {
                        return _this.addUserToGroup(_this.state.selected, _this.state.group).then(close);
                    } }, _(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Add"], ["Add"])))),
                React.createElement(Button, { key: 'cancel', variant: 'link', onClick: close }, _(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Cancel"], ["Cancel"])))),
            ] },
            React.createElement(APISearchTypeAhead, { results: this.state.options, loadResults: function (name) {
                    return UserAPI.list({ username__contains: name, page_size: 5 })
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
                        return _this.addAlert(_(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Error loading users."], ["Error loading users."]))), 'danger', e.message);
                    });
                }, onSelect: function (event, selection) {
                    var selectedUser = _this.state.options.find(function (x) { return x.name === selection; });
                    if (selectedUser) {
                        var newOptions = _this.state.options.filter(function (x) { return x.name !== selection; });
                        _this.setState({
                            selected: __spreadArray(__spreadArray([], _this.state.selected), [selectedUser]),
                            options: newOptions,
                        });
                    }
                    else {
                        var deselectedUser = _this.state.selected.find(function (x) { return x.name === selection; });
                        var newSelected = _this.state.selected.filter(function (x) { return x.name !== selection; });
                        _this.setState({
                            selected: newSelected,
                            options: __spreadArray(__spreadArray([], _this.state.options), [deselectedUser]),
                        });
                    }
                }, placeholderText: _(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Select users"], ["Select users"]))), selections: this.state.selected, menuAppendTo: 'parent', multiple: true, onClear: function () {
                    return _this.setState({
                        selected: [],
                        options: __spreadArray(__spreadArray([], _this.state.options), _this.state.selected),
                    });
                }, isDisabled: false })));
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
                _this.addAlert(_(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Successfully deleted group."], ["Successfully deleted group."]))), 'success');
                _this.props.history.push(Paths.groupList);
            })
                .catch(function (e) {
                return _this.addAlert(_(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Error deleting group."], ["Error deleting group."]))), 'danger', e.message);
            });
        };
        if (!users) {
            this.queryUsers();
        }
        return (React.createElement(DeleteGroupModal, { count: itemCount, cancelAction: function () { return _this.setState({ showDeleteModal: false }); }, deleteAction: deleteAction, name: group.name, users: users }));
    };
    GroupDetail.prototype.renderUserRemoveModal = function () {
        var _this = this;
        var group = this.state.group;
        var user = this.state.showUserRemoveModal;
        return (React.createElement(DeleteModal, { cancelAction: function () { return _this.setState({ showUserRemoveModal: null }); }, deleteAction: function () { return _this.deleteUser(user); }, title: _(templateObject_21 || (templateObject_21 = __makeTemplateObject(["Remove user from group?"], ["Remove user from group?"]))) },
            React.createElement("b", null, user.username),
            " will be removed from ",
            React.createElement("b", null, group.name),
            "."));
    };
    GroupDetail.prototype.addUserToGroup = function (selectedUsers, group) {
        var _this = this;
        return Promise.all(selectedUsers.map(function (_a) {
            var id = _a.id;
            var user = _this.state.allUsers.find(function (x) { return x.id === id; });
            return UserAPI.update(id.toString(), __assign(__assign({}, user), { groups: __spreadArray(__spreadArray([], user.groups), [group]) }));
        }))
            .catch(function (e) {
            return _this.addAlert(_(templateObject_22 || (templateObject_22 = __makeTemplateObject(["Error updating users."], ["Error updating users."]))), 'danger', e.message);
        })
            .then(function () { return _this.queryUsers(); });
    };
    GroupDetail.prototype.loadOptions = function () {
        var _this = this;
        UserAPI.list()
            .then(function (result) {
            var options = result.data.data
                .filter(function (user) { return !_this.state.users.find(function (u) { return u.id === user.id; }); })
                .map(function (option) { return ({ id: option.id, name: option.username }); });
            _this.setState({ options: options, allUsers: result.data.data });
        })
            .catch(function (e) {
            return _this.addAlert(_(templateObject_23 || (templateObject_23 = __makeTemplateObject(["Error loading users."], ["Error loading users."]))), 'danger', e.message);
        });
    };
    GroupDetail.prototype.addAlert = function (title, variant, description) {
        this.setState({
            alerts: __spreadArray(__spreadArray([], this.state.alerts), [
                {
                    description: description,
                    title: title,
                    variant: variant,
                },
            ]),
        });
    };
    GroupDetail.prototype.renderUsers = function (users) {
        var _this = this;
        var _a = this.state, params = _a.params, itemCount = _a.itemCount;
        var _b = this.context, user = _b.user, featureFlags = _b.featureFlags;
        var noData = itemCount === 0 &&
            !filterIsSet(params, ['username', 'first_name', 'last_name', 'email']);
        var isUserMgmtDisabled = false;
        if (featureFlags) {
            isUserMgmtDisabled = featureFlags.external_authentication;
        }
        if (noData) {
            return (React.createElement(EmptyStateNoData, { title: _(templateObject_24 || (templateObject_24 = __makeTemplateObject(["No users yet"], ["No users yet"]))), description: _(templateObject_25 || (templateObject_25 = __makeTemplateObject(["Users will appear once added to this group"], ["Users will appear once added to this group"]))), button: !!user &&
                    user.model_permissions.change_group &&
                    !isUserMgmtDisabled && (React.createElement(Button, { variant: 'primary', onClick: function () { return _this.setState({ addModalVisible: true }); } }, _(templateObject_26 || (templateObject_26 = __makeTemplateObject(["Add"], ["Add"]))))) }));
        }
        return (React.createElement("section", { className: 'body' },
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
                                            title: _(templateObject_27 || (templateObject_27 = __makeTemplateObject(["Username"], ["Username"]))),
                                        },
                                        {
                                            id: 'first_name',
                                            title: _(templateObject_28 || (templateObject_28 = __makeTemplateObject(["First name"], ["First name"]))),
                                        },
                                        {
                                            id: 'last_name',
                                            title: _(templateObject_29 || (templateObject_29 = __makeTemplateObject(["Last name"], ["Last name"]))),
                                        },
                                        {
                                            id: 'email',
                                            title: _(templateObject_30 || (templateObject_30 = __makeTemplateObject(["Email"], ["Email"]))),
                                        },
                                    ] }))),
                        !!user &&
                            user.model_permissions.change_group &&
                            !isUserMgmtDisabled && (React.createElement(ToolbarGroup, null,
                            React.createElement(ToolbarItem, null,
                                React.createElement(Button, { onClick: function () { return _this.setState({ addModalVisible: true }); } }, _(templateObject_31 || (templateObject_31 = __makeTemplateObject(["Add"], ["Add"]))))))))),
                React.createElement(Pagination, { params: params, updateParams: function (p) { return _this.updateParams(p, function () { return _this.queryUsers(); }); }, count: itemCount, isTop: true })),
            React.createElement("div", null,
                React.createElement(AppliedFilters, { updateParams: function (p) { return _this.updateParams(p, function () { return _this.queryUsers(); }); }, params: params, ignoredParams: ['page_size', 'page', 'sort', 'id', 'tab'] })),
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
                    title: _(templateObject_32 || (templateObject_32 = __makeTemplateObject(["Username"], ["Username"]))),
                    type: 'alpha',
                    id: 'username',
                },
                {
                    title: _(templateObject_33 || (templateObject_33 = __makeTemplateObject(["Email"], ["Email"]))),
                    type: 'alpha',
                    id: 'email',
                },
                {
                    title: _(templateObject_34 || (templateObject_34 = __makeTemplateObject(["Last name"], ["Last name"]))),
                    type: 'alpha',
                    id: 'last_name',
                },
                {
                    title: _(templateObject_35 || (templateObject_35 = __makeTemplateObject(["First name"], ["First name"]))),
                    type: 'alpha',
                    id: 'first_name',
                },
                {
                    title: _(templateObject_36 || (templateObject_36 = __makeTemplateObject(["Created"], ["Created"]))),
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
        return (React.createElement("table", { "aria-label": _(templateObject_37 || (templateObject_37 = __makeTemplateObject(["User list"], ["User list"]))), className: 'content-table pf-c-table' },
            React.createElement(SortTable, { options: sortTableOptions, params: params, updateParams: function (p) { return _this.updateParams(p, function () { return _this.queryUsers(); }); } }),
            React.createElement("tbody", null, users.map(function (user, i) { return _this.renderTableRow(user, i); }))));
    };
    GroupDetail.prototype.renderTableRow = function (user, index) {
        var _this = this;
        var currentUser = this.context.user;
        var featureFlags = this.context.featureFlags;
        var isUserMgmtDisabled = false;
        if (featureFlags) {
            isUserMgmtDisabled = featureFlags.external_authentication;
        }
        return (React.createElement("tr", { "aria-labelledby": user.username, key: index },
            React.createElement("td", null,
                React.createElement(Link, { to: formatPath(Paths.userDetail, { userID: user.id }) }, user.username)),
            React.createElement("td", null, user.email),
            React.createElement("td", null, user.last_name),
            React.createElement("td", null, user.first_name),
            React.createElement("td", null,
                React.createElement(DateComponent, { date: user.date_joined })),
            React.createElement("td", null,
                ' ',
                !!currentUser &&
                    currentUser.model_permissions.change_group &&
                    !isUserMgmtDisabled && (React.createElement(StatefulDropdown, { items: [
                        React.createElement(DropdownItem, { key: 'delete', onClick: function () { return _this.setState({ showUserRemoveModal: user }); } }, _(templateObject_38 || (templateObject_38 = __makeTemplateObject(["Remove"], ["Remove"])))),
                    ] })))));
    };
    GroupDetail.prototype.queryUsers = function () {
        var _this = this;
        UserAPI.list(__assign(__assign({}, this.state.params), { groups__name: this.state.group.name }))
            .then(function (result) {
            return _this.setState({
                users: result.data.data,
                itemCount: result.data.meta.count,
            });
        })
            .catch(function (e) {
            return _this.addAlert(_(templateObject_39 || (templateObject_39 = __makeTemplateObject(["Error loading users."], ["Error loading users."]))), 'danger', e.message);
        });
    };
    GroupDetail.prototype.deleteUser = function (user) {
        var _this = this;
        user.groups = user.groups.filter(function (group) {
            return group.id != _this.state.params.id;
        });
        UserAPI.update(user.id, user)
            .then(function () {
            _this.setState({
                showUserRemoveModal: null,
            });
            _this.addAlert(_(templateObject_40 || (templateObject_40 = __makeTemplateObject(["Successfully removed a user from a group."], ["Successfully removed a user from a group."]))), 'success');
            _this.queryUsers();
        })
            .catch(function (e) {
            return _this.addAlert(_(templateObject_41 || (templateObject_41 = __makeTemplateObject(["Error removing user from a group."], ["Error removing user from a group."]))), 'danger', e.message);
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
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36, templateObject_37, templateObject_38, templateObject_39, templateObject_40, templateObject_41;
//# sourceMappingURL=group-detail.js.map