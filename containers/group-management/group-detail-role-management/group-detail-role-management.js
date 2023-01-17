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
import { Trans, t } from '@lingui/macro';
import { Button, DropdownItem, Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, } from '@patternfly/react-core';
import React, { useEffect, useState } from 'react';
import { GroupRoleAPI, } from 'src/api';
import { AppliedFilters, CompoundFilter, DeleteModal, EmptyStateFilter, EmptyStateNoData, ExpandableRow, ListItemActions, LoadingPageWithHeader, Pagination, PermissionCategories, PreviewRoles, RoleListTable, SelectRoles, WizardModal, } from 'src/components';
import { ParamHelper, errorMessage, filterIsSet, parsePulpIDFromURL, translateLockedRolesDescription, } from 'src/utilities';
import './group-detail-role-management.scss';
var GroupDetailRoleManagement = function (_a) {
    var params = _a.params, updateParams = _a.updateParams, context = _a.context, group = _a.group, addAlert = _a.addAlert, nonQueryParams = _a.nonQueryParams;
    var _b = useState(false), showAddRolesModal = _b[0], setShowAddRolesModal = _b[1];
    var _c = useState(null), selectedDeleteRole = _c[0], setSelectedDeleteRole = _c[1];
    var _d = useState(true), loading = _d[0], setLoading = _d[1];
    var _e = useState([]), roles = _e[0], setRoles = _e[1];
    var _f = useState(0), rolesItemCount = _f[0], setRolesItemCount = _f[1];
    var _g = useState([]), selectedRoles = _g[0], setSelectedRoles = _g[1];
    var _h = useState(params['role__icontains'] || ''), inputText = _h[0], setInputText = _h[1];
    var _j = useState(false), isRoleDeleting = _j[0], setIsRoleDeleting = _j[1];
    useEffect(function () {
        queryRolesWithPermissions();
        setInputText(params['role__icontains'] || '');
    }, [params]);
    var queryRolesWithPermissions = function () {
        setLoading(true);
        GroupRoleAPI.listRoles(group.id, __assign(__assign({}, ParamHelper.getReduced(__assign(__assign({}, params), { content_object: null }), __spreadArray([
            'id',
            'tab'
        ], nonQueryParams, true))), { sort: ParamHelper.validSortParams(params['sort'], ['role'], 'role') }))
            .then(function (_a) {
            var data = _a.data;
            setRoles(data.results);
            setRolesItemCount(data.count);
            setLoading(false);
        })
            .catch(function (e) {
            var _a = e.response, status = _a.status, statusText = _a.statusText;
            addAlert(t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Permissions for group \"", "\" could not be displayed."], ["Permissions for group \"", "\" could not be displayed."])), group.name), 'danger', errorMessage(status, statusText));
        });
    };
    var deleteRole = function () {
        var pulpId = parsePulpIDFromURL(selectedDeleteRole.pulp_href);
        setIsRoleDeleting(true);
        GroupRoleAPI.removeRole(group.id, pulpId)
            .then(function () {
            setIsRoleDeleting(false);
            addAlert(t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Role \"", "\" has been successfully removed."], ["Role \"", "\" has been successfully removed."])), selectedDeleteRole.role), 'success', t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["All associated permissions under this role were removed."], ["All associated permissions under this role were removed."]))));
        })
            .catch(function (err) {
            var _a = err.response, status = _a.status, statusText = _a.statusText;
            addAlert(t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Role \"", "\" could not be deleted."], ["Role \"", "\" could not be deleted."])), selectedDeleteRole.role), 'danger', errorMessage(status, statusText));
        })
            .finally(function () {
            setIsRoleDeleting(false);
            setSelectedDeleteRole(null);
            queryRolesWithPermissions();
        });
    };
    var deleteModal = (React.createElement(DeleteModal, { title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Delete role: ", ""], ["Delete role: ", ""])), selectedDeleteRole === null || selectedDeleteRole === void 0 ? void 0 : selectedDeleteRole.role), cancelAction: function () { return setSelectedDeleteRole(null); }, deleteAction: deleteRole, spinner: isRoleDeleting, isDisabled: isRoleDeleting, "data-cy": 'DeleteModal' },
        React.createElement(Trans, null,
            "You are about to remove ",
            React.createElement("strong", null, selectedDeleteRole === null || selectedDeleteRole === void 0 ? void 0 : selectedDeleteRole.role),
            " from",
            ' ',
            React.createElement("strong", null, group === null || group === void 0 ? void 0 : group.name),
            "."),
        React.createElement("br", null),
        React.createElement(Trans, null, "This will revoke all permissions associated with this role from the group.")));
    var hasPermission = context.hasPermission;
    var addRoles = hasPermission('galaxy.change_group') && (React.createElement(Button, { onClick: function () { return setShowAddRolesModal(true); }, variant: 'primary', "data-cy": 'add-roles' },
        React.createElement(Trans, null, "Add roles")));
    if (loading) {
        return (React.createElement("section", { className: 'body' },
            React.createElement(LoadingPageWithHeader, null)));
    }
    var noData = roles.length === 0 && !filterIsSet(params, ['role__icontains']);
    var noFilteredData = roles.length === 0 && filterIsSet(params, ['role__icontains']);
    var title = t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Add roles"], ["Add roles"])));
    var isPreviewEnabled = selectedRoles.length !== 0;
    var steps = [
        {
            id: 0,
            name: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Select role(s)"], ["Select role(s)"]))),
            component: (React.createElement(SelectRoles, { assignedRoles: roles, selectedRoles: selectedRoles, onRolesUpdate: function (roles) { return setSelectedRoles(roles); } })),
            backButtonText: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Cancel"], ["Cancel"]))),
            enableNext: isPreviewEnabled,
        },
        {
            id: 1,
            name: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Preview"], ["Preview"]))),
            component: React.createElement(PreviewRoles, { group: group, selectedRoles: selectedRoles }),
            nextButtonText: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Add"], ["Add"]))),
            canJumpTo: isPreviewEnabled,
            isFinished: true,
        },
    ];
    var tableHeader = {
        headers: [
            {
                title: '',
                type: 'none',
                id: 'expander',
            },
            {
                title: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Role"], ["Role"]))),
                type: 'alpha',
                id: 'role',
            },
            {
                title: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Description"], ["Description"]))),
                type: 'none',
                id: 'description',
            },
            {
                title: '',
                type: 'none',
                id: 'kebab',
            },
        ],
    };
    return (React.createElement(React.Fragment, null,
        selectedDeleteRole && deleteModal,
        showAddRolesModal && (React.createElement(WizardModal, { steps: steps, title: title, onClose: function () {
                setShowAddRolesModal(false);
                setSelectedRoles([]);
            }, onSave: function () {
                var selectedRolesPromises = selectedRoles.map(function (role) {
                    return GroupRoleAPI.addRoleToGroup(group.id, role)
                        .then(function () {
                        addAlert(t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Role ", " has been successfully added to ", "."], ["Role ", " has been successfully added to ", "."])), role.name, group.name), 'success');
                    })
                        .catch(function (e) {
                        var _a;
                        var _b = e.response, status = _b.status, statusText = _b.statusText, data = _b.data;
                        var errMessage = ((_a = data === null || data === void 0 ? void 0 : data.non_field_errors) === null || _a === void 0 ? void 0 : _a.length) > 0
                            ? data.non_field_errors[0]
                            : errorMessage(status, statusText);
                        addAlert(t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Role ", " could not be assigned to group ", "."], ["Role ", " could not be assigned to group ", "."])), role.name, group.name), 'danger', errMessage);
                    })
                        .finally(function () { return role; });
                });
                Promise.all(selectedRolesPromises).then(function () {
                    queryRolesWithPermissions();
                    setShowAddRolesModal(false);
                    setSelectedRoles([]);
                });
            } })),
        noData ? (React.createElement("section", { className: 'body hub-empty-state-box' },
            React.createElement(EmptyStateNoData, { title: t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["There are currently no roles assigned to this group."], ["There are currently no roles assigned to this group."]))), description: t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Please add a role by using the button below."], ["Please add a role by using the button below."]))), button: addRoles }))) : (React.createElement("section", { className: 'body' },
            React.createElement("div", { className: 'hub-list-toolbar' },
                React.createElement(Toolbar, null,
                    React.createElement(ToolbarContent, null,
                        React.createElement(ToolbarGroup, null,
                            React.createElement(ToolbarItem, null,
                                React.createElement(CompoundFilter, { inputText: inputText, onChange: function (p) { return setInputText(p); }, updateParams: updateParams, params: params, filterConfig: [
                                        {
                                            id: 'role__icontains',
                                            title: t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Name"], ["Name"]))),
                                        },
                                    ] })),
                            React.createElement(ToolbarItem, null, addRoles)))),
                React.createElement(Pagination, { count: rolesItemCount, params: params, updateParams: updateParams, isTop: true, isCompact: true })),
            React.createElement(AppliedFilters, { style: { marginTop: '16px' }, updateParams: function (p) { return updateParams(p); }, params: params, ignoredParams: __spreadArray([
                    'id',
                    'page',
                    'page_size',
                    'sort',
                    'tab'
                ], nonQueryParams, true), niceNames: {
                    role__icontains: t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Name"], ["Name"]))),
                } }),
            !noFilteredData ? (React.createElement(React.Fragment, null,
                React.createElement(RoleListTable, { params: params, updateParams: updateParams, tableHeader: tableHeader }, roles.map(function (role, i) { return (React.createElement(ExpandableRow, { key: i, rowIndex: i, expandableRowContent: React.createElement(PermissionCategories, { permissions: role.permissions, showCustom: true, showEmpty: false }), "data-cy": "RoleListTable-ExpandableRow-row-".concat(role.role) },
                    React.createElement("td", null, role.role),
                    React.createElement("td", null, translateLockedRolesDescription(role.role, role.description)),
                    React.createElement(ListItemActions, { kebabItems: [
                            hasPermission('galaxy.change_group') && (React.createElement(DropdownItem, { key: 'remove-role', onClick: function () { return setSelectedDeleteRole(role); } }, t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Remove role"], ["Remove role"]))))),
                        ] }))); })),
                React.createElement("div", { style: { paddingTop: '24px', paddingBottom: '8px' } },
                    React.createElement(Pagination, { params: params, updateParams: updateParams, count: rolesItemCount })))) : (React.createElement(EmptyStateFilter, { clearAllFilters: function () {
                    updateParams(ParamHelper.setParam(params, 'role__icontains', ''));
                } }))))));
};
export default GroupDetailRoleManagement;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19;
//# sourceMappingURL=group-detail-role-management.js.map