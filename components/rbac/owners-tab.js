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
import { t, Trans } from '@lingui/macro';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { sortBy } from 'lodash';
import { Button, DropdownItem, Toolbar, ToolbarContent, ToolbarItem, } from '@patternfly/react-core';
import { DeleteModal, EmptyStateNoData, ExpandableRow, GroupRolePermissions, ListItemActions, LoadingPageSpinner, PreviewRoles, RoleListTable, SelectGroup, SelectRoles, SortTable, WizardModal, } from 'src/components';
import { ParamHelper } from 'src/utilities';
var OwnersTab = /** @class */ (function (_super) {
    __extends(OwnersTab, _super);
    function OwnersTab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OwnersTab.prototype.render = function () {
        var _this = this;
        var _a = this.props, groups = _a.groups, group = _a.group, canEditOwners = _a.canEditOwners;
        var _b = this.props, showGroupRemoveModal = _b.showGroupRemoveModal, showGroupSelectWizard = _b.showGroupSelectWizard;
        var loading = !groups;
        var noData = (groups === null || groups === void 0 ? void 0 : groups.length) === 0;
        var buttonAdd = (React.createElement(Button, { onClick: function () {
                return _this.props.updateProps({
                    showGroupSelectWizard: {},
                });
            } }, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Select a group"], ["Select a group"])))));
        return loading ? (React.createElement(LoadingPageSpinner, null)) : (React.createElement(React.Fragment, null,
            showGroupRemoveModal ? this.renderGroupRemoveModal() : null,
            showGroupSelectWizard ? this.renderGroupSelectWizard() : null,
            noData ? (React.createElement(EmptyStateNoData, { title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["There are currently no owners assigned."], ["There are currently no owners assigned."]))), description: canEditOwners
                    ? t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Please add an owner by using the button below."], ["Please add an owner by using the button below."]))) : '', button: canEditOwners ? buttonAdd : null })) : group ? (this.renderRoles({ group: group })) : (this.renderGroups({ buttonAdd: buttonAdd, groups: groups }))));
    };
    OwnersTab.prototype.renderGroups = function (_a) {
        var _this = this;
        var buttonAdd = _a.buttonAdd, groups = _a.groups;
        var canEditOwners = this.props.canEditOwners;
        var sortedGroups = sortBy(groups, 'name');
        return (React.createElement(React.Fragment, null,
            canEditOwners && (React.createElement("div", null,
                React.createElement(Toolbar, null,
                    React.createElement(ToolbarContent, null,
                        React.createElement(ToolbarItem, null, buttonAdd))))),
            React.createElement("table", { "aria-label": t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Group list"], ["Group list"]))), className: 'hub-c-table-content pf-c-table' },
                React.createElement(SortTable, { options: {
                        headers: [
                            {
                                title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Group"], ["Group"]))),
                                type: 'none',
                                id: 'name',
                            },
                            {
                                title: '',
                                type: 'none',
                                id: 'kebab',
                            },
                        ],
                    }, params: {}, updateParams: function () { return null; } }),
                React.createElement("tbody", null, sortedGroups.map(function (group, i) { return _this.renderGroupRow(group, i); })))));
    };
    OwnersTab.prototype.renderGroupRow = function (group, index) {
        var _this = this;
        var _a = this.props, urlPrefix = _a.urlPrefix, canEditOwners = _a.canEditOwners;
        var dropdownItems = [
            canEditOwners && (React.createElement(DropdownItem, { key: 'remove', onClick: function () {
                    _this.props.updateProps({
                        showGroupRemoveModal: group,
                    });
                } },
                React.createElement(Trans, null, "Remove group"))),
        ];
        return (React.createElement("tr", { "data-cy": "OwnersTab-row-".concat(group.name), key: index },
            React.createElement("td", null,
                React.createElement(Link, { to: urlPrefix +
                        '?' +
                        ParamHelper.getQueryString({
                            group: (group === null || group === void 0 ? void 0 : group.id) || (group === null || group === void 0 ? void 0 : group.name),
                            tab: 'owners',
                        }) }, group.name)),
            React.createElement(ListItemActions, { kebabItems: dropdownItems })));
    };
    OwnersTab.prototype.renderRoles = function (_a) {
        var _this = this;
        var group = _a.group;
        var canEditOwners = this.props.canEditOwners;
        var _b = this.props, showRoleRemoveModal = _b.showRoleRemoveModal, showRoleSelectWizard = _b.showRoleSelectWizard;
        var roles = group === null || group === void 0 ? void 0 : group.object_roles;
        var sortedRoles = sortBy(roles);
        if (!group) {
            return null;
        }
        var buttonAdd = (React.createElement(Button, { onClick: function () {
                return _this.props.updateProps({
                    showRoleSelectWizard: {},
                });
            } }, t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Add roles"], ["Add roles"])))));
        return (React.createElement(React.Fragment, null,
            showRoleRemoveModal ? this.renderRoleRemoveModal(group) : null,
            showRoleSelectWizard ? this.renderRoleSelectWizard(group) : null,
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
                            title: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Role"], ["Role"]))),
                            type: 'none',
                            id: 'role',
                        },
                        {
                            title: '',
                            type: 'none',
                            id: 'kebab',
                        },
                    ],
                } }, sortedRoles.map(function (role, i) { return (React.createElement(ExpandableRow, { key: i, rowIndex: i, expandableRowContent: React.createElement(GroupRolePermissions, { name: role }), "data-cy": "RoleListTable-ExpandableRow-row-".concat(role) },
                React.createElement("td", null, role),
                React.createElement(ListItemActions, { kebabItems: [
                        canEditOwners && (React.createElement(DropdownItem, { key: 'remove-role', onClick: function () {
                                return _this.props.updateProps({ showRoleRemoveModal: role });
                            } }, t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Remove role"], ["Remove role"]))))),
                    ] }))); }))));
    };
    OwnersTab.prototype.renderGroupRemoveModal = function () {
        var _this = this;
        var group = this.props.showGroupRemoveModal;
        var groupname = group.name;
        var name = this.props.name;
        return (React.createElement(DeleteModal, { cancelAction: function () {
                return _this.props.updateProps({ showGroupRemoveModal: null });
            }, deleteAction: function () { return _this.props.removeGroup(group); }, title: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Remove group ", "?"], ["Remove group ", "?"])), groupname) },
            React.createElement(Trans, null,
                "You are about to remove ",
                React.createElement("b", null, groupname),
                " from ",
                React.createElement("b", null, name),
                ".",
                React.createElement("br", null),
                "This will also remove all associated permissions.")));
    };
    OwnersTab.prototype.renderRoleRemoveModal = function (group) {
        var _this = this;
        var groupname = group.name;
        var name = this.props.name;
        var role = this.props.showRoleRemoveModal;
        return (React.createElement(DeleteModal, { cancelAction: function () {
                return _this.props.updateProps({ showRoleRemoveModal: null });
            }, deleteAction: function () { return _this.props.removeRole(role, group); }, title: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Remove role ", "?"], ["Remove role ", "?"])), role) },
            React.createElement(Trans, null,
                "You are about to remove ",
                React.createElement("b", null, role),
                " from ",
                React.createElement("b", null, groupname),
                " for",
                ' ',
                React.createElement("b", null, name),
                ".",
                React.createElement("br", null),
                "This will also remove all associated permissions.")));
    };
    OwnersTab.prototype.renderGroupSelectWizard = function () {
        var _this = this;
        var _a = this.props, groups = _a.groups, pulpObjectType = _a.pulpObjectType, selectRolesMessage = _a.selectRolesMessage;
        var _b = this.props.showGroupSelectWizard, group = _b.group, _c = _b.roles, roles = _c === void 0 ? [] : _c;
        var hasGroup = !!group;
        var hasRoles = !!(roles === null || roles === void 0 ? void 0 : roles.length);
        // if we enable edit, find group in groups, convert object_roles name to { role: name }
        var assignedRoles = [];
        var steps = [
            {
                id: 0,
                name: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Select a group"], ["Select a group"]))),
                component: (React.createElement(SelectGroup, { assignedGroups: groups, selectedGroup: group, updateGroup: function (group) {
                        return _this.props.updateProps({
                            showGroupSelectWizard: { group: group, roles: roles },
                        });
                    } })),
                backButtonText: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Cancel"], ["Cancel"]))),
                enableNext: hasGroup,
            },
            {
                id: 1,
                name: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Select role(s)"], ["Select role(s)"]))),
                component: (React.createElement(SelectRoles, { assignedRoles: assignedRoles, selectedRoles: roles, onRolesUpdate: function (roles) {
                        return _this.props.updateProps({
                            showGroupSelectWizard: { group: group, roles: roles },
                        });
                    }, message: selectRolesMessage, pulpObjectType: pulpObjectType })),
                canJumpTo: hasGroup,
                enableNext: hasGroup && hasRoles,
            },
            {
                id: 2,
                name: t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Preview"], ["Preview"]))),
                component: React.createElement(PreviewRoles, { group: group, selectedRoles: roles }),
                nextButtonText: t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Add"], ["Add"]))),
                canJumpTo: hasGroup && hasRoles,
                isFinished: true,
            },
        ];
        return (React.createElement(WizardModal, { steps: steps, title: t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Select a group"], ["Select a group"]))), onClose: function () {
                return _this.props.updateProps({
                    showGroupSelectWizard: null,
                });
            }, onSave: function () { return _this.props.addGroup(group, roles); } }));
    };
    OwnersTab.prototype.renderRoleSelectWizard = function (group) {
        var _this = this;
        var _a;
        var pulpObjectType = this.props.pulpObjectType;
        var _b = this.props.showRoleSelectWizard.roles, roles = _b === void 0 ? [] : _b;
        var hasRoles = !!(roles === null || roles === void 0 ? void 0 : roles.length);
        var assignedRoles = ((_a = group === null || group === void 0 ? void 0 : group.object_roles) === null || _a === void 0 ? void 0 : _a.map(function (name) { return ({ role: name }); })) || [];
        var steps = [
            {
                id: 0,
                name: t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Select role(s)"], ["Select role(s)"]))),
                component: (React.createElement(SelectRoles, { assignedRoles: assignedRoles, selectedRoles: roles, onRolesUpdate: function (roles) {
                        return _this.props.updateProps({ showRoleSelectWizard: { roles: roles } });
                    }, pulpObjectType: pulpObjectType })),
                backButtonText: t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Cancel"], ["Cancel"]))),
                enableNext: hasRoles,
            },
            {
                id: 1,
                name: t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Preview"], ["Preview"]))),
                component: React.createElement(PreviewRoles, { group: group, selectedRoles: roles }),
                nextButtonText: t(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Add"], ["Add"]))),
                canJumpTo: hasRoles,
                isFinished: true,
            },
        ];
        return (React.createElement(WizardModal, { steps: steps, title: t(templateObject_21 || (templateObject_21 = __makeTemplateObject(["Select role(s)"], ["Select role(s)"]))), onClose: function () {
                return _this.props.updateProps({
                    showRoleSelectWizard: null,
                });
            }, onSave: function () { return _this.props.addRole(group, roles); } }));
    };
    return OwnersTab;
}(React.Component));
export { OwnersTab };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21;
//# sourceMappingURL=owners-tab.js.map