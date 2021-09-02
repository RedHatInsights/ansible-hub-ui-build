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
import { withRouter, Link } from 'react-router-dom';
import { Section } from '@redhat-cloud-services/frontend-components';
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
            .catch(function (e) { return _this.addAlert('Error loading group.', 'danger', e.message); });
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
            return _this.addAlert('Error loading permissions.', 'danger', e.message);
        });
    };
    GroupDetail.prototype.render = function () {
        var _this = this;
        var _a = this.state, addModalVisible = _a.addModalVisible, alerts = _a.alerts, editPermissions = _a.editPermissions, group = _a.group, params = _a.params, showDeleteModal = _a.showDeleteModal, showUserRemoveModal = _a.showUserRemoveModal, users = _a.users;
        var user = this.context.user;
        var tabs = ['Permissions'];
        if (!!user && user.model_permissions.view_user) {
            tabs.push('Users');
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
                    ? 'Edit group permissions'
                    : group.name, breadcrumbs: React.createElement(Breadcrumbs, { links: [
                        { url: Paths.groupList, name: 'Groups' },
                        { name: group.name },
                    ] }), pageControls: this.renderControls() },
                React.createElement("div", { className: 'tab-link-container' },
                    React.createElement("div", { className: 'tabs' },
                        React.createElement(Tabs, { isDisabled: editPermissions, disabledTitle: 'Please finish editing permissions first.', tabs: tabs, params: params, updateParams: function (p) { return _this.updateParams(p); } })))),
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
            React.createElement(Button, { isDisabled: editPermissions, onClick: function () { return _this.setState({ showDeleteModal: true }); }, variant: 'secondary' }, "Delete")));
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
                    return _this.addAlert("Permission " + permission + " was not added.", 'danger', e.message);
                });
            }
        });
        // Remove permissions
        originalPermissions.forEach(function (original) {
            if (!permissions.includes(original.name)) {
                GroupAPI.removePermission(group.id, original.id).catch(function (e) {
                    return _this.addAlert("Permission " + original.name + " was not removed.", 'danger', e.message);
                });
            }
        });
        this.setState({ editPermissions: false });
    };
    GroupDetail.prototype.renderPermissions = function () {
        var _this = this;
        var groups = Constants.PERMISSIONS;
        var _a = this.state, editPermissions = _a.editPermissions, selectedPermissions = _a.permissions;
        var user = this.context.user;
        return (React.createElement(Section, { className: 'body' },
            React.createElement("div", { style: { display: 'flex', justifyContent: 'flex-end' } }, !editPermissions && user.model_permissions.change_group && (React.createElement(Button, { onClick: function () { return _this.setState({ editPermissions: true }); } }, "Edit"))),
            React.createElement("div", null, groups.map(function (group) { return (React.createElement(Flex, { style: { marginTop: '16px' }, alignItems: { default: 'alignItemsCenter' }, key: group.name, className: group.name },
                React.createElement(FlexItem, { style: { minWidth: '200px' } }, group.name),
                React.createElement(FlexItem, { grow: { default: 'grow' } },
                    React.createElement(PermissionChipSelector, { availablePermissions: group.object_permissions
                            .filter(function (perm) {
                            return !selectedPermissions.find(function (selected) { return selected === perm; });
                        })
                            .map(function (value) {
                            return twoWayMapper(value, Constants.HUMAN_PERMISSIONS);
                        })
                            .sort(), selectedPermissions: selectedPermissions
                            .filter(function (selected) {
                            return group.object_permissions.find(function (perm) { return selected === perm; });
                        })
                            .map(function (value) {
                            return twoWayMapper(value, Constants.HUMAN_PERMISSIONS);
                        }), setSelected: function (perms) { return _this.setState({ permissions: perms }); }, menuAppendTo: 'inline', isViewOnly: !editPermissions, onClear: function () {
                            var clearedPerms = group.object_permissions;
                            _this.setState({
                                permissions: _this.state.permissions.filter(function (x) { return !clearedPerms.includes(x); }),
                            });
                        }, onSelect: function (event, selection) {
                            var newPerms = new Set(_this.state.permissions);
                            if (newPerms.has(twoWayMapper(selection, Constants.HUMAN_PERMISSIONS))) {
                                newPerms.delete(twoWayMapper(selection, Constants.HUMAN_PERMISSIONS));
                            }
                            else {
                                newPerms.add(twoWayMapper(selection, Constants.HUMAN_PERMISSIONS));
                            }
                            _this.setState({ permissions: Array.from(newPerms) });
                        } })))); })),
            editPermissions && (React.createElement(Form, null,
                React.createElement(ActionGroup, null,
                    React.createElement(Button, { variant: 'primary', onClick: function () { return _this.actionSavePermissions(); } }, "Save"),
                    React.createElement(Button, { variant: 'secondary', onClick: function () { return _this.setState({ editPermissions: false }); } }, "Cancel"))))));
    };
    GroupDetail.prototype.renderAddModal = function () {
        var _this = this;
        if (this.state.options === undefined) {
            this.loadOptions();
            return null;
        }
        var close = function () { return _this.setState({ addModalVisible: false, selected: [] }); };
        return (React.createElement(Modal, { variant: 'large', onClose: close, isOpen: true, "aria-label": 'add-user-modal', title: '', header: React.createElement("span", { className: 'pf-c-content' },
                React.createElement("h2", null, "Add selected users to group"),
                ' '), actions: [
                React.createElement(Button, { key: 'add', variant: 'primary', isDisabled: this.state.selected.length === 0, onClick: function () {
                        return _this.addUserToGroup(_this.state.selected, _this.state.group).then(close);
                    } }, "Add"),
                React.createElement(Button, { key: 'cancel', variant: 'link', onClick: close }, "Cancel"),
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
                        return _this.addAlert('Error loading users.', 'danger', e.message);
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
                }, placeholderText: 'Select users', selections: this.state.selected, menuAppendTo: 'parent', multiple: true, onClear: function () {
                    return _this.setState({
                        selected: [],
                        options: __spreadArray(__spreadArray([], _this.state.options, true), _this.state.selected, true),
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
                _this.addAlert('Successfully deleted group.', 'success');
                _this.props.history.push(Paths.groupList);
            })
                .catch(function (e) {
                return _this.addAlert('Error deleting group.', 'danger', e.message);
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
        return (React.createElement(DeleteModal, { cancelAction: function () { return _this.setState({ showUserRemoveModal: null }); }, deleteAction: function () { return _this.deleteUser(user); }, title: 'Remove user from group?' },
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
            return UserAPI.update(id.toString(), __assign(__assign({}, user), { groups: __spreadArray(__spreadArray([], user.groups, true), [group], false) }));
        }))
            .catch(function (e) { return _this.addAlert('Error updating users.', 'danger', e.message); })
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
            .catch(function (e) { return _this.addAlert('Error loading users.', 'danger', e.message); });
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
        var _a = this.state, params = _a.params, itemCount = _a.itemCount;
        var user = this.context.user;
        var noData = itemCount === 0 &&
            !filterIsSet(params, ['username', 'first_name', 'last_name', 'email']);
        if (noData) {
            return (React.createElement(EmptyStateNoData, { title: 'No users yet', description: 'Users will appear once added to this group', button: !!user &&
                    user.model_permissions.change_group && (React.createElement(Button, { variant: 'primary', onClick: function () { return _this.setState({ addModalVisible: true }); } }, "Add")) }));
        }
        return (React.createElement(Section, { className: 'body' },
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
                        !!user && user.model_permissions.change_group && (React.createElement(ToolbarGroup, null,
                            React.createElement(ToolbarItem, null,
                                React.createElement(Button, { onClick: function () { return _this.setState({ addModalVisible: true }); } }, "Add")))))),
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
                    title: 'Username',
                    type: 'alpha',
                    id: 'username',
                },
                {
                    title: 'Email',
                    type: 'alpha',
                    id: 'email',
                },
                {
                    title: 'Last name',
                    type: 'alpha',
                    id: 'last_name',
                },
                {
                    title: 'First name',
                    type: 'alpha',
                    id: 'first_name',
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
    GroupDetail.prototype.renderTableRow = function (user, index) {
        var _this = this;
        var currentUser = this.context.user;
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
                !!currentUser && currentUser.model_permissions.change_group && (React.createElement(StatefulDropdown, { items: [
                        React.createElement(DropdownItem, { key: 'delete', onClick: function () { return _this.setState({ showUserRemoveModal: user }); } }, "Remove"),
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
            .catch(function (e) { return _this.addAlert('Error loading users.', 'danger', e.message); });
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
            _this.addAlert('Successfully removed a user from a group.', 'success');
            _this.queryUsers();
        })
            .catch(function (e) {
            return _this.addAlert('Error removing user from a group.', 'danger', e.message);
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
//# sourceMappingURL=group-detail.js.map