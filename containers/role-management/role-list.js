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
import React from 'react';
import { t, Trans } from '@lingui/macro';
import { i18n } from '@lingui/core';
import { AppContext } from 'src/loaders/app-context';
import { Link, withRouter, Redirect, } from 'react-router-dom';
import { Pagination, BaseHeader, closeAlertMixin, CompoundFilter, EmptyStateFilter, LoadingPageSpinner, Main, AlertList, EmptyStateUnauthorized, EmptyStateNoData, AppliedFilters, DeleteModal, RoleListTable, ExpandableRow, ListItemActions, PermissionChipSelector, DateComponent, } from 'src/components';
import { Button, DropdownItem, Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, Flex, FlexItem, Tooltip, } from '@patternfly/react-core';
import { errorMessage, filterIsSet, ParamHelper, parsePulpIDFromURL, twoWayMapper, translateLockedRolesDescription, } from 'src/utilities';
import { RoleAPI } from 'src/api/role';
import { Paths, formatPath } from 'src/paths';
import { Constants } from 'src/constants';
var RoleList = /** @class */ (function (_super) {
    __extends(RoleList, _super);
    function RoleList(props) {
        var _this = _super.call(this, props) || this;
        _this.renderDropdownItems = function (role) {
            var pulp_href = role.pulp_href, locked = role.locked;
            var roleID = parsePulpIDFromURL(pulp_href);
            var editItem = (React.createElement(DropdownItem, { key: 'edit', isDisabled: locked, onClick: function () {
                    return _this.setState({
                        redirect: formatPath(Paths.roleEdit, { role: roleID }),
                    });
                } }, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Edit"], ["Edit"])))));
            var deleteItem = (React.createElement(DropdownItem, { key: 'delete', isDisabled: locked, onClick: function () {
                    return _this.setState({
                        showDeleteModal: true,
                        roleToEdit: role,
                    });
                } }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Delete"], ["Delete"])))));
            var dropdownItems = _this.context.user.is_superuser
                ? [
                    // this.context.user.model_permissions.change_containerregistry &&
                    locked ? (React.createElement(Tooltip, { key: 'edit', content: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Built-in roles cannot be edited."], ["Built-in roles cannot be edited."]))) }, editItem)) : (editItem),
                    // this.context.user.model_permissions.delete_containerregistry &&
                    locked ? (React.createElement(Tooltip, { key: 'delete', content: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Built-in roles cannot be deleted."], ["Built-in roles cannot be deleted."]))) }, deleteItem)) : (deleteItem),
                ]
                : null;
            return dropdownItems;
        };
        _this.queryRoles = function () {
            var params = _this.state.params;
            _this.setState({ loading: true }, function () {
                RoleAPI.list(params)
                    .then(function (result) {
                    _this.setState({
                        roles: result.data.results,
                        roleCount: result.data.count,
                        loading: false,
                    });
                })
                    .catch(function (err) {
                    var _a = err.response, status = _a.status, statusText = _a.statusText;
                    _this.setState({
                        roleCount: 0,
                        loading: false,
                    });
                    _this.addAlert(t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Roles list could not be displayed."], ["Roles list could not be displayed."]))), 'danger', errorMessage(status, statusText));
                });
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
            params['sort'] = 'name';
        }
        if (!params['name__startswith']) {
            params['name__startswith'] = 'galaxy.';
        }
        _this.state = {
            redirect: null,
            roles: [],
            alerts: [],
            loading: true,
            inputText: '',
            params: params,
            roleCount: 0,
            unauthorized: false,
            selectedRole: null,
            expandedRoleNames: [],
            roleToEdit: null,
            showDeleteModal: false,
        };
        return _this;
    }
    RoleList.prototype.componentDidMount = function () {
        if (!this.context.user || this.context.user.is_anonymous) {
            this.setState({ loading: false, unauthorized: true });
        }
        else {
            this.queryRoles();
        }
    };
    RoleList.prototype.render = function () {
        var _this = this;
        var _a = this.state, redirect = _a.redirect, params = _a.params, loading = _a.loading, roleCount = _a.roleCount, alerts = _a.alerts, unauthorized = _a.unauthorized, showDeleteModal = _a.showDeleteModal, roleToEdit = _a.roleToEdit, roles = _a.roles;
        var noData = roleCount === 0 && !filterIsSet(params, ['name__icontains', 'locked']);
        var groups = Constants.PERMISSIONS;
        var featureFlags = this.context.featureFlags;
        var isUserMgmtDisabled = false;
        var filteredPermissions = __assign({}, Constants.HUMAN_PERMISSIONS);
        if (redirect) {
            return React.createElement(Redirect, { push: true, to: redirect });
        }
        if (featureFlags) {
            isUserMgmtDisabled = featureFlags.external_authentication;
        }
        if (isUserMgmtDisabled) {
            Constants.USER_GROUP_MGMT_PERMISSIONS.forEach(function (perm) {
                if (perm in filteredPermissions) {
                    delete filteredPermissions[perm];
                }
            });
        }
        var isSuperuser = this.context.user.is_superuser;
        var addRoles = isSuperuser && (React.createElement(Link, { to: Paths.createRole },
            React.createElement(Button, { variant: 'primary' }, t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Add roles"], ["Add roles"]))))));
        var tableHeader = [
            {
                title: '',
                type: 'none',
                id: 'expander',
            },
            {
                title: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Role name"], ["Role name"]))),
                type: 'alpha',
                id: 'name',
            },
            {
                title: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Description"], ["Description"]))),
                type: 'none',
                id: 'description',
            },
            {
                title: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Created"], ["Created"]))),
                type: 'number',
                id: 'pulp_created',
            },
            {
                title: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Editable"], ["Editable"]))),
                type: 'none',
                id: 'locked',
            },
        ];
        if (isSuperuser) {
            tableHeader = __spreadArray(__spreadArray([], tableHeader, true), [
                {
                    title: '',
                    type: 'none',
                    id: 'kebab',
                },
            ], false);
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            showDeleteModal && roleToEdit && (React.createElement(DeleteModal, { cancelAction: function () {
                    return _this.setState({ showDeleteModal: false, roleToEdit: null });
                }, deleteAction: function () { return _this.deleteRole(roleToEdit); }, title: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Delete role?"], ["Delete role?"]))), "data-cy": 'DeleteModal' },
                React.createElement(Trans, null,
                    React.createElement("p", null,
                        "Role ",
                        React.createElement("b", null, roleToEdit.name),
                        " will be permanently deleted."),
                    React.createElement("p", null, "This will also remove all associated permissions under this role.")))),
            React.createElement(BaseHeader, { title: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Roles"], ["Roles"]))) }),
            unauthorized ? (React.createElement(EmptyStateUnauthorized, null)) : noData && !loading ? (React.createElement(EmptyStateNoData, { title: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["There are currently no roles"], ["There are currently no roles"]))), description: t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Please add a role by using the button below."], ["Please add a role by using the button below."]))), button: addRoles })) : (React.createElement(Main, null, loading ? (React.createElement(LoadingPageSpinner, null)) : (React.createElement("section", { className: 'body' },
                React.createElement("div", { className: 'hub-list-toolbar' },
                    React.createElement(Toolbar, null,
                        React.createElement(ToolbarContent, null,
                            React.createElement(ToolbarGroup, null,
                                React.createElement(ToolbarItem, null,
                                    React.createElement(CompoundFilter, { inputText: this.state.inputText, onChange: function (text) {
                                            return _this.setState({ inputText: text });
                                        }, updateParams: function (p) {
                                            p['page'] = 1;
                                            _this.updateParams(p, function () { return _this.queryRoles(); });
                                        }, params: params, filterConfig: [
                                            {
                                                id: 'name__icontains',
                                                title: t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Role name"], ["Role name"]))),
                                            },
                                            {
                                                id: 'locked',
                                                title: t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Editable"], ["Editable"]))),
                                                inputType: 'select',
                                                options: [
                                                    {
                                                        id: 'true',
                                                        title: t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Built-in"], ["Built-in"]))),
                                                    },
                                                    {
                                                        id: 'false',
                                                        title: t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Editable"], ["Editable"]))),
                                                    },
                                                ],
                                            },
                                        ] })),
                                React.createElement(ToolbarItem, null, addRoles)))),
                    React.createElement(Pagination, { params: params, updateParams: function (p) {
                            return _this.updateParams(p, function () { return _this.queryRoles(); });
                        }, count: roleCount, isTop: true })),
                React.createElement("div", null,
                    React.createElement(AppliedFilters, { updateParams: function (p) {
                            _this.updateParams(p, function () { return _this.queryRoles(); });
                            _this.setState({ inputText: '' });
                        }, params: params, ignoredParams: ['page_size', 'page', 'sort', 'ordering'], niceValues: {
                            locked: { true: t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Built-in"], ["Built-in"]))), false: t(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Editable"], ["Editable"]))) },
                            name__startswith: { 'galaxy.': t(templateObject_21 || (templateObject_21 = __makeTemplateObject(["true"], ["true"]))) },
                        }, niceNames: {
                            locked: t(templateObject_22 || (templateObject_22 = __makeTemplateObject(["Editable"], ["Editable"]))),
                            name__icontains: t(templateObject_23 || (templateObject_23 = __makeTemplateObject(["Role name"], ["Role name"]))),
                            name__startswith: t(templateObject_24 || (templateObject_24 = __makeTemplateObject(["Galaxy only"], ["Galaxy only"]))),
                        } })),
                React.createElement(React.Fragment, null,
                    ' ',
                    roleCount ? (React.createElement(RoleListTable, { isStickyHeader: false, params: this.state.params, updateParams: function (p) {
                            _this.updateParams(p, function () { return _this.queryRoles(); });
                        }, tableHeader: { headers: tableHeader } }, roles.map(function (role, i) { return (React.createElement(ExpandableRow, { key: role.name, expandableRowContent: React.createElement(React.Fragment, null, groups.map(function (group) { return (React.createElement(Flex, { style: { marginTop: '16px' }, alignItems: { default: 'alignItemsCenter' }, key: group.name, className: group.name },
                            React.createElement(FlexItem, { style: { minWidth: '200px' } }, i18n._(group.label)),
                            React.createElement(FlexItem, { grow: { default: 'grow' } },
                                React.createElement(PermissionChipSelector, { availablePermissions: group.object_permissions
                                        .filter(function (perm) {
                                        return !role.permissions.find(function (selected) { return selected === perm; });
                                    })
                                        .map(function (value) {
                                        return twoWayMapper(value, filteredPermissions);
                                    })
                                        .sort(), selectedPermissions: role.permissions
                                        .filter(function (selected) {
                                        return group.object_permissions.find(function (perm) { return selected === perm; });
                                    })
                                        .map(function (value) {
                                        return twoWayMapper(value, filteredPermissions);
                                    }), menuAppendTo: 'inline', multilingual: true, isViewOnly: true })))); })), "data-cy": "RoleListTable-ExpandableRow-row-".concat(role.name), colSpan: 6, rowIndex: i },
                        React.createElement("td", { "data-cy": 'name-field' }, role.name),
                        React.createElement("td", null, translateLockedRolesDescription(role.name, role.description)),
                        React.createElement("td", null,
                            React.createElement(DateComponent, { date: role.pulp_created })),
                        React.createElement("td", null, role.locked ? (React.createElement(Tooltip, { content: t(templateObject_25 || (templateObject_25 = __makeTemplateObject(["Built-in roles cannot be edited or deleted."], ["Built-in roles cannot be edited or deleted."]))) },
                            React.createElement("span", { style: { whiteSpace: 'nowrap' } }, t(templateObject_26 || (templateObject_26 = __makeTemplateObject(["Built-in"], ["Built-in"])))))) : (t(templateObject_27 || (templateObject_27 = __makeTemplateObject(["Editable"], ["Editable"]))))),
                        isSuperuser && (React.createElement(ListItemActions, { kebabItems: _this.renderDropdownItems(role) })))); }))) : (React.createElement(EmptyStateFilter, null)),
                    React.createElement(Pagination, { params: params, updateParams: function (p) {
                            return _this.updateParams(p, function () { return _this.queryRoles(); });
                        }, count: roleCount }))))))));
    };
    RoleList.prototype.deleteRole = function (_a) {
        var _this = this;
        var pulp_href = _a.pulp_href, name = _a.name;
        var roleID = parsePulpIDFromURL(pulp_href);
        RoleAPI.delete(roleID)
            .then(function () {
            return _this.addAlert(t(templateObject_28 || (templateObject_28 = __makeTemplateObject(["Role \"", "\" has been successfully deleted."], ["Role \"", "\" has been successfully deleted."])), name), 'success');
        })
            .catch(function (e) {
            var _a = e.response, status = _a.status, statusText = _a.statusText;
            _this.addAlert(t(templateObject_29 || (templateObject_29 = __makeTemplateObject(["Role \"", "\" could not be deleted."], ["Role \"", "\" could not be deleted."])), name), 'danger', errorMessage(status, statusText));
        })
            .then(function () {
            _this.queryRoles();
            _this.setState({ showDeleteModal: false, roleToEdit: null });
        });
    };
    Object.defineProperty(RoleList.prototype, "updateParams", {
        get: function () {
            return ParamHelper.updateParamsMixin();
        },
        enumerable: false,
        configurable: true
    });
    RoleList.prototype.addAlert = function (title, variant, description) {
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
    Object.defineProperty(RoleList.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    return RoleList;
}(React.Component));
export { RoleList };
export default withRouter(RoleList);
RoleList.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29;
//# sourceMappingURL=role-list.js.map