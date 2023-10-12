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
import { Trans, t } from '@lingui/macro';
import { Button, DropdownItem, Spinner, Toolbar, ToolbarContent, ToolbarItem, } from '@patternfly/react-core';
import { sortBy } from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import { DeleteModal, EmptyStateNoData, EmptyStateXs, ExpandableRow, ListItemActions, LoadingPageSpinner, PreviewRoles, RoleListTable, RolePermissions, SelectGroup, SelectRoles, SelectUser, SortTable, WizardModal, } from 'src/components';
import { ParamHelper } from 'src/utilities';
var SectionTitle = function (_a) {
    var title = _a.title;
    return (React.createElement("h2", { className: 'pf-c-title' }, title));
};
var SectionSeparator = function () { return (React.createElement("div", { style: {
        backgroundColor: 'var(--pf-global--BackgroundColor--light-300)',
        height: '16px',
        margin: '16px -16px',
    } })); };
var AccessTab = /** @class */ (function (_super) {
    __extends(AccessTab, _super);
    function AccessTab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccessTab.prototype.render = function () {
        var _this = this;
        var _a = this.props, canEditOwners = _a.canEditOwners, group = _a.group, groups = _a.groups, showGroupRemoveModal = _a.showGroupRemoveModal, showGroupSelectWizard = _a.showGroupSelectWizard, showUserRemoveModal = _a.showUserRemoveModal, showUserSelectWizard = _a.showUserSelectWizard, user = _a.user, users = _a.users, updateProps = _a.updateProps;
        var loading = !groups && !users;
        var noData = (users === null || users === void 0 ? void 0 : users.length) === 0 && (groups === null || groups === void 0 ? void 0 : groups.length) === 0;
        var buttonAdd = function (title, props) { return (React.createElement(Button, { key: title, onClick: function () { return updateProps(props); } }, title)); };
        var buttonUserAdd = buttonAdd(t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Select a user"], ["Select a user"]))), {
            showUserSelectWizard: {},
        });
        var buttonGroupAdd = buttonAdd(t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Select a group"], ["Select a group"]))), {
            showGroupSelectWizard: {},
        });
        return loading ? (React.createElement(LoadingPageSpinner, null)) : (React.createElement(React.Fragment, null,
            showUserRemoveModal ? this.renderUserRemoveModal() : null,
            showUserSelectWizard ? this.renderUserSelectWizard() : null,
            showGroupRemoveModal ? this.renderGroupRemoveModal() : null,
            showGroupSelectWizard ? this.renderGroupSelectWizard() : null,
            noData ? (React.createElement(EmptyStateNoData, { title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["There are currently no owners assigned."], ["There are currently no owners assigned."]))), description: canEditOwners
                    ? t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Please add an owner by using the buttons below."], ["Please add an owner by using the buttons below."]))) : '', button: canEditOwners ? (React.createElement(React.Fragment, null,
                    buttonUserAdd,
                    " ",
                    buttonGroupAdd)) : null })) : user || group ? (this.renderRoles()) : (React.createElement(React.Fragment, null,
                this.renderSection({
                    buttonAdd: buttonUserAdd,
                    canEditOwners: canEditOwners,
                    emptyStateTitle: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["There are currently no users assigned."], ["There are currently no users assigned."]))),
                    emptyStateExtra: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Except for members of groups below."], ["Except for members of groups below."]))),
                    items: users,
                    renderItems: function () {
                        return _this.renderList({
                            ariaLabel: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["User list"], ["User list"]))),
                            canEditOwners: canEditOwners,
                            itemName: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["User"], ["User"]))),
                            buttonAdd: buttonUserAdd,
                            items: users,
                            renderItem: function (item, index) { return _this.renderUserRow(item, index); },
                            sortField: 'username',
                        });
                    },
                    title: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Users"], ["Users"]))),
                }),
                React.createElement(SectionSeparator, null),
                this.renderSection({
                    buttonAdd: buttonGroupAdd,
                    canEditOwners: canEditOwners,
                    emptyStateTitle: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["There are currently no groups assigned."], ["There are currently no groups assigned."]))),
                    items: groups,
                    renderItems: function () {
                        return _this.renderList({
                            ariaLabel: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Group list"], ["Group list"]))),
                            canEditOwners: canEditOwners,
                            itemName: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Group"], ["Group"]))),
                            buttonAdd: buttonGroupAdd,
                            items: groups,
                            renderItem: function (item, index) { return _this.renderGroupRow(item, index); },
                            sortField: 'name',
                        });
                    },
                    title: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Groups"], ["Groups"]))),
                })))));
    };
    AccessTab.prototype.renderSection = function (_a) {
        var buttonAdd = _a.buttonAdd, canEditOwners = _a.canEditOwners, emptyStateTitle = _a.emptyStateTitle, _b = _a.emptyStateExtra, emptyStateExtra = _b === void 0 ? '' : _b, items = _a.items, renderItems = _a.renderItems, title = _a.title;
        var loading = !items;
        var noData = (items === null || items === void 0 ? void 0 : items.length) === 0;
        return (React.createElement(React.Fragment, null,
            React.createElement(SectionTitle, { title: title }),
            loading ? (React.createElement(Spinner, null)) : noData ? (React.createElement(EmptyStateXs, { title: emptyStateTitle, description: React.createElement(React.Fragment, null,
                    emptyStateExtra,
                    emptyStateExtra && React.createElement("br", null),
                    canEditOwners
                        ? t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Please add an owner by using the button below."], ["Please add an owner by using the button below."]))) : ''), button: canEditOwners ? buttonAdd : null })) : (renderItems())));
    };
    AccessTab.prototype.renderList = function (_a) {
        var ariaLabel = _a.ariaLabel, buttonAdd = _a.buttonAdd, canEditOwners = _a.canEditOwners, itemName = _a.itemName, items = _a.items, renderItem = _a.renderItem, sortField = _a.sortField;
        var sorted = sortBy(items, sortField);
        return (React.createElement(React.Fragment, null,
            canEditOwners && (React.createElement("div", null,
                React.createElement(Toolbar, null,
                    React.createElement(ToolbarContent, null,
                        React.createElement(ToolbarItem, null, buttonAdd))))),
            React.createElement("table", { "aria-label": ariaLabel, className: 'hub-c-table-content pf-c-table' },
                React.createElement(SortTable, { options: {
                        headers: [
                            {
                                title: itemName,
                                type: 'none',
                                id: sortField,
                            },
                            {
                                title: '',
                                type: 'none',
                                id: 'kebab',
                            },
                        ],
                    }, params: {}, updateParams: function () { return null; } }),
                React.createElement("tbody", null, sorted.map(renderItem)))));
    };
    AccessTab.prototype.renderUserRow = function (user, index) {
        var _a = this.props, urlPrefix = _a.urlPrefix, canEditOwners = _a.canEditOwners, updateProps = _a.updateProps;
        var dropdownItems = [
            canEditOwners && (React.createElement(DropdownItem, { key: 'remove', onClick: function () {
                    return updateProps({
                        showUserRemoveModal: user,
                    });
                } },
                React.createElement(Trans, null, "Remove user"))),
        ];
        return (React.createElement("tr", { "data-cy": "AccessTab-row-user-".concat(user.username), key: index },
            React.createElement("td", null,
                React.createElement(Link, { to: urlPrefix +
                        '?' +
                        ParamHelper.getQueryString({
                            user: user.username,
                            tab: 'access',
                        }) }, user.username)),
            React.createElement(ListItemActions, { kebabItems: dropdownItems })));
    };
    AccessTab.prototype.renderGroupRow = function (group, index) {
        var _a = this.props, urlPrefix = _a.urlPrefix, canEditOwners = _a.canEditOwners, updateProps = _a.updateProps;
        var dropdownItems = [
            canEditOwners && (React.createElement(DropdownItem, { key: 'remove', onClick: function () {
                    return updateProps({
                        showGroupRemoveModal: group,
                    });
                } },
                React.createElement(Trans, null, "Remove group"))),
        ];
        return (React.createElement("tr", { "data-cy": "AccessTab-row-group-".concat(group.name), key: index },
            React.createElement("td", null,
                React.createElement(Link, { to: urlPrefix +
                        '?' +
                        ParamHelper.getQueryString({
                            group: group.name,
                            tab: 'access',
                        }) }, group.name)),
            React.createElement(ListItemActions, { kebabItems: dropdownItems })));
    };
    AccessTab.prototype.renderRoles = function () {
        var _a = this.props, canEditOwners = _a.canEditOwners, group = _a.group, showRoleRemoveModal = _a.showRoleRemoveModal, showRoleSelectWizard = _a.showRoleSelectWizard, updateProps = _a.updateProps, user = _a.user;
        if ((!user && !group) || (user && group)) {
            return null;
        }
        var roles = (user || group).object_roles;
        var sortedRoles = sortBy(roles);
        var buttonAdd = (React.createElement(Button, { onClick: function () {
                return updateProps({
                    showRoleSelectWizard: {},
                });
            } }, t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Add roles"], ["Add roles"])))));
        return (React.createElement(React.Fragment, null,
            showRoleRemoveModal ? this.renderRoleRemoveModal() : null,
            showRoleSelectWizard ? this.renderRoleSelectWizard() : null,
            React.createElement("h3", { className: 'pf-c-title' },
                user ? React.createElement(Trans, null,
                    "User ",
                    user.username) : null,
                group ? React.createElement(Trans, null,
                    "Group ",
                    group.name) : null),
            canEditOwners && (React.createElement("div", null,
                React.createElement(Toolbar, null,
                    React.createElement(ToolbarContent, null,
                        React.createElement(ToolbarItem, null, buttonAdd))))),
            React.createElement(RoleListTable, { params: {}, updateParams: function () { return null; }, tableHeader: {
                    headers: [
                        {
                            title: '',
                            type: 'none',
                            id: 'expander',
                        },
                        {
                            title: t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Role"], ["Role"]))),
                            type: 'none',
                            id: 'role',
                        },
                        {
                            title: '',
                            type: 'none',
                            id: 'kebab',
                        },
                    ],
                } }, sortedRoles.map(function (role, i) { return (React.createElement(ExpandableRow, { key: i, rowIndex: i, expandableRowContent: React.createElement(RolePermissions, { name: role }), "data-cy": "RoleListTable-ExpandableRow-row-".concat(role) },
                React.createElement("td", null, role),
                React.createElement(ListItemActions, { kebabItems: [
                        canEditOwners && (React.createElement(DropdownItem, { key: 'remove-role', onClick: function () { return updateProps({ showRoleRemoveModal: role }); } }, t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Remove role"], ["Remove role"]))))),
                    ] }))); }))));
    };
    AccessTab.prototype.renderUserRemoveModal = function () {
        var _this = this;
        var _a = this.props, name = _a.name, user = _a.showUserRemoveModal;
        if (!user) {
            return;
        }
        var username = user.username;
        return (React.createElement(DeleteModal, { cancelAction: function () {
                return _this.props.updateProps({ showUserRemoveModal: null });
            }, deleteAction: function () { return _this.props.removeUser(user); }, title: t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Remove user ", "?"], ["Remove user ", "?"])), username) },
            React.createElement(Trans, null,
                "You are about to remove ",
                React.createElement("b", null, username),
                " from ",
                React.createElement("b", null, name),
                ".",
                React.createElement("br", null),
                "This will also remove all associated permissions.")));
    };
    AccessTab.prototype.renderGroupRemoveModal = function () {
        var _this = this;
        var _a = this.props, name = _a.name, group = _a.showGroupRemoveModal;
        if (!group) {
            return;
        }
        var groupname = group.name;
        return (React.createElement(DeleteModal, { cancelAction: function () {
                return _this.props.updateProps({ showGroupRemoveModal: null });
            }, deleteAction: function () { return _this.props.removeGroup(group); }, title: t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Remove group ", "?"], ["Remove group ", "?"])), groupname) },
            React.createElement(Trans, null,
                "You are about to remove ",
                React.createElement("b", null, groupname),
                " from ",
                React.createElement("b", null, name),
                ".",
                React.createElement("br", null),
                "This will also remove all associated permissions.")));
    };
    AccessTab.prototype.renderRoleRemoveModal = function () {
        var _this = this;
        var _a = this.props, name = _a.name, user = _a.user, group = _a.group, role = _a.showRoleRemoveModal;
        var userOrGroupName = (group === null || group === void 0 ? void 0 : group.name) || (user === null || user === void 0 ? void 0 : user.username);
        return (React.createElement(DeleteModal, { cancelAction: function () {
                return _this.props.updateProps({ showRoleRemoveModal: null });
            }, deleteAction: function () {
                group && _this.props.removeRole(role, group);
                user && _this.props.removeUserRole(role, user);
            }, title: t(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Remove role ", "?"], ["Remove role ", "?"])), role) },
            React.createElement(Trans, null,
                "You are about to remove ",
                React.createElement("b", null, role),
                " from ",
                React.createElement("b", null, userOrGroupName),
                ' ',
                "for ",
                React.createElement("b", null, name),
                ".",
                React.createElement("br", null),
                "This will also remove all associated permissions.")));
    };
    AccessTab.prototype.renderUserSelectWizard = function () {
        var _this = this;
        var _a = this.props, users = _a.users, pulpObjectType = _a.pulpObjectType, selectRolesMessage = _a.selectRolesMessage, _b = _a.showUserSelectWizard, user = _b.user, _c = _b.roles, roles = _c === void 0 ? [] : _c, updateProps = _a.updateProps;
        var hasUser = !!user;
        var hasRoles = !!(roles === null || roles === void 0 ? void 0 : roles.length);
        // if we enable edit, find user in users, convert object_roles name to { role: name }
        var assignedRoles = [];
        var steps = [
            {
                id: 0,
                name: t(templateObject_21 || (templateObject_21 = __makeTemplateObject(["Select a user"], ["Select a user"]))),
                component: (React.createElement(SelectUser, { assignedUsers: users, selectedUser: user, updateUser: function (user) {
                        return updateProps({
                            showUserSelectWizard: { user: user, roles: roles },
                        });
                    } })),
                backButtonText: t(templateObject_22 || (templateObject_22 = __makeTemplateObject(["Cancel"], ["Cancel"]))),
                enableNext: hasUser,
            },
            {
                id: 1,
                name: t(templateObject_23 || (templateObject_23 = __makeTemplateObject(["Select role(s)"], ["Select role(s)"]))),
                component: (React.createElement(SelectRoles, { assignedRoles: assignedRoles, selectedRoles: roles, onRolesUpdate: function (roles) {
                        return updateProps({
                            showUserSelectWizard: { user: user, roles: roles },
                        });
                    }, message: selectRolesMessage, pulpObjectType: pulpObjectType })),
                canJumpTo: hasUser,
                enableNext: hasUser && hasRoles,
            },
            {
                id: 2,
                name: t(templateObject_24 || (templateObject_24 = __makeTemplateObject(["Preview"], ["Preview"]))),
                component: React.createElement(PreviewRoles, { user: user, selectedRoles: roles }),
                nextButtonText: t(templateObject_25 || (templateObject_25 = __makeTemplateObject(["Add"], ["Add"]))),
                canJumpTo: hasUser && hasRoles,
                isFinished: true,
            },
        ];
        return (React.createElement(WizardModal, { steps: steps, title: t(templateObject_26 || (templateObject_26 = __makeTemplateObject(["Select a user"], ["Select a user"]))), onClose: function () {
                return updateProps({
                    showUserSelectWizard: null,
                });
            }, onSave: function () { return _this.props.addUser(user, roles); } }));
    };
    AccessTab.prototype.renderGroupSelectWizard = function () {
        var _this = this;
        var _a = this.props, groups = _a.groups, pulpObjectType = _a.pulpObjectType, selectRolesMessage = _a.selectRolesMessage, _b = _a.showGroupSelectWizard, group = _b.group, _c = _b.roles, roles = _c === void 0 ? [] : _c, updateProps = _a.updateProps;
        var hasGroup = !!group;
        var hasRoles = !!(roles === null || roles === void 0 ? void 0 : roles.length);
        // if we enable edit, find group in groups, convert object_roles name to { role: name }
        var assignedRoles = [];
        var steps = [
            {
                id: 0,
                name: t(templateObject_27 || (templateObject_27 = __makeTemplateObject(["Select a group"], ["Select a group"]))),
                component: (React.createElement(SelectGroup, { assignedGroups: groups, selectedGroup: group, updateGroup: function (group) {
                        return updateProps({
                            showGroupSelectWizard: { group: group, roles: roles },
                        });
                    } })),
                backButtonText: t(templateObject_28 || (templateObject_28 = __makeTemplateObject(["Cancel"], ["Cancel"]))),
                enableNext: hasGroup,
            },
            {
                id: 1,
                name: t(templateObject_29 || (templateObject_29 = __makeTemplateObject(["Select role(s)"], ["Select role(s)"]))),
                component: (React.createElement(SelectRoles, { assignedRoles: assignedRoles, selectedRoles: roles, onRolesUpdate: function (roles) {
                        return updateProps({
                            showGroupSelectWizard: { group: group, roles: roles },
                        });
                    }, message: selectRolesMessage, pulpObjectType: pulpObjectType })),
                canJumpTo: hasGroup,
                enableNext: hasGroup && hasRoles,
            },
            {
                id: 2,
                name: t(templateObject_30 || (templateObject_30 = __makeTemplateObject(["Preview"], ["Preview"]))),
                component: React.createElement(PreviewRoles, { group: group, selectedRoles: roles }),
                nextButtonText: t(templateObject_31 || (templateObject_31 = __makeTemplateObject(["Add"], ["Add"]))),
                canJumpTo: hasGroup && hasRoles,
                isFinished: true,
            },
        ];
        return (React.createElement(WizardModal, { steps: steps, title: t(templateObject_32 || (templateObject_32 = __makeTemplateObject(["Select a group"], ["Select a group"]))), onClose: function () {
                return updateProps({
                    showGroupSelectWizard: null,
                });
            }, onSave: function () { return _this.props.addGroup(group, roles); } }));
    };
    AccessTab.prototype.renderRoleSelectWizard = function () {
        var _this = this;
        var _a;
        var _b = this.props, group = _b.group, pulpObjectType = _b.pulpObjectType, _c = _b.showRoleSelectWizard.roles, roles = _c === void 0 ? [] : _c, updateProps = _b.updateProps, user = _b.user;
        var hasRoles = !!(roles === null || roles === void 0 ? void 0 : roles.length);
        var assignedRoles = ((_a = (group || user || {}).object_roles) === null || _a === void 0 ? void 0 : _a.map(function (name) { return ({ role: name }); })) || [];
        var steps = [
            {
                id: 0,
                name: t(templateObject_33 || (templateObject_33 = __makeTemplateObject(["Select role(s)"], ["Select role(s)"]))),
                component: (React.createElement(SelectRoles, { assignedRoles: assignedRoles, selectedRoles: roles, onRolesUpdate: function (roles) {
                        return updateProps({ showRoleSelectWizard: { roles: roles } });
                    }, pulpObjectType: pulpObjectType })),
                backButtonText: t(templateObject_34 || (templateObject_34 = __makeTemplateObject(["Cancel"], ["Cancel"]))),
                enableNext: hasRoles,
            },
            {
                id: 1,
                name: t(templateObject_35 || (templateObject_35 = __makeTemplateObject(["Preview"], ["Preview"]))),
                component: (React.createElement(PreviewRoles, { user: user, group: group, selectedRoles: roles })),
                nextButtonText: t(templateObject_36 || (templateObject_36 = __makeTemplateObject(["Add"], ["Add"]))),
                canJumpTo: hasRoles,
                isFinished: true,
            },
        ];
        return (React.createElement(WizardModal, { steps: steps, title: t(templateObject_37 || (templateObject_37 = __makeTemplateObject(["Select role(s)"], ["Select role(s)"]))), onClose: function () {
                return updateProps({
                    showRoleSelectWizard: null,
                });
            }, onSave: function () {
                group && _this.props.addRole(group, roles);
                user && _this.props.addUserRole(user, roles);
            } }));
    };
    return AccessTab;
}(React.Component));
export { AccessTab };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36, templateObject_37;
//# sourceMappingURL=access-tab.js.map