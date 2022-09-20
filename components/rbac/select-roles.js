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
import React, { useEffect, useState } from 'react';
import { Flex, FlexItem, Label } from '@patternfly/react-core';
import { RoleAPI } from 'src/api';
import { CompoundFilter, RoleListTable, Pagination, AppliedFilters, LoadingPageSpinner, CheckboxRow, EmptyStateFilter, EmptyStateNoData, } from 'src/components';
import { filterIsSet, translateLockedRolesDescription } from 'src/utilities';
export var SelectRoles = function (_a) {
    var assignedRoles = _a.assignedRoles, selectedRoles = _a.selectedRoles, onRolesUpdate = _a.onRolesUpdate, message = _a.message, pulpObjectType = _a.pulpObjectType;
    var _b = useState(''), inputText = _b[0], setInputText = _b[1];
    var _c = useState([]), roles = _c[0], setRoles = _c[1];
    var _d = useState(0), rolesItemCount = _d[0], setRolesItemCount = _d[1];
    var _e = useState(true), loading = _e[0], setLoading = _e[1];
    var _f = useState({
        page: 1,
        page_size: 10,
        sort: 'name',
    }), localParams = _f[0], setLocalParams = _f[1];
    useEffect(function () {
        queryRoles();
    }, [localParams]);
    var queryRoles = function () {
        setLoading(true);
        RoleAPI.list(__assign({ name__startswith: 'galaxy.' }, localParams), pulpObjectType).then(function (_a) {
            var data = _a.data;
            setRoles(data.results);
            setRolesItemCount(data.count);
            setLoading(false);
        });
    };
    if (loading) {
        return (React.createElement("div", { className: 'hub-custom-wizard-layout hub-loading-wizard' },
            React.createElement(LoadingPageSpinner, null)));
    }
    var isRoleSelected = function (name) {
        return selectedRoles.map(function (r) { return r.name; }).includes(name);
    };
    var noData = roles.length === 0;
    if (noData && !filterIsSet(localParams, ['name__icontains'])) {
        return (React.createElement("div", { className: 'hub-custom-wizard-layout hub-no-data' },
            React.createElement(EmptyStateNoData, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["No assignable roles."], ["No assignable roles."]))), description: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["There are currently no roles that can be assigned to this group."], ["There are currently no roles that can be assigned to this group."]))) })));
    }
    var isAssigned = function (name) { return assignedRoles.some(function (role) { return role.role === name; }); };
    var tabHeader = {
        headers: [
            {
                title: '',
                type: 'none',
                id: 'expander',
            },
            {
                title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Role"], ["Role"]))),
                type: 'alpha',
                id: 'name',
            },
            {
                title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Description"], ["Description"]))),
                type: 'none',
                id: 'description',
            },
        ],
    };
    return (React.createElement("div", { className: 'hub-custom-wizard-layout' },
        React.createElement(Flex, { justifyContent: {
                default: noData
                    ? 'justifyContentFlexStart'
                    : 'justifyContentSpaceBetween',
            }, direction: { default: 'column' } },
            React.createElement(FlexItem, { className: 'hub-select-roles-content' },
                React.createElement(Flex, { justifyContent: {
                        default: noData
                            ? 'justifyContentFlexStart'
                            : 'justifyContentSpaceBetween',
                    }, direction: { default: 'column' } },
                    message && (React.createElement(FlexItem, null,
                        React.createElement(Flex, null,
                            React.createElement(FlexItem, null, message)))),
                    Object.keys(selectedRoles).length !== 0 && (React.createElement(FlexItem, null,
                        React.createElement(Flex, null,
                            React.createElement(FlexItem, null,
                                React.createElement("strong", null,
                                    React.createElement(Trans, null, "Selected roles"))),
                            React.createElement(FlexItem, { flex: { default: 'flex_1' } },
                                React.createElement(Flex, null, selectedRoles.map(function (role) { return (React.createElement(FlexItem, { key: role.name, className: 'hub-permission', "data-cy": "HubPermission-".concat(role.name) },
                                    React.createElement(Label, { onClose: function () {
                                            return onRolesUpdate(selectedRoles.filter(function (r) { return r.name !== role.name; }));
                                        } }, role.name))); })))))),
                    React.createElement(FlexItem, null,
                        React.createElement("div", { className: 'hub-filter' },
                            React.createElement(CompoundFilter, { inputText: inputText, onChange: function (inputText) { return setInputText(inputText); }, params: localParams, updateParams: function (p) { return setLocalParams(p); }, filterConfig: [
                                    {
                                        id: 'name__icontains',
                                        title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Name"], ["Name"]))),
                                    },
                                ] })),
                        React.createElement(AppliedFilters, { updateParams: function (p) {
                                setLocalParams(p);
                                setInputText('');
                            }, params: localParams, niceNames: { name__icontains: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Name"], ["Name"]))) }, ignoredParams: ['sort', 'page_size', 'page'], style: { marginTop: '8px' } })),
                    React.createElement(FlexItem, { style: { flexGrow: 1 } }, noData && filterIsSet(localParams, ['name__icontains']) ? (React.createElement("div", { className: 'hub-no-filter-data' },
                        React.createElement(EmptyStateFilter, null))) : (React.createElement("div", { className: 'hub-selected-roles-list' },
                        React.createElement(RoleListTable, { isStickyHeader: true, params: localParams, updateParams: function (p) {
                                setLocalParams(p);
                            }, tableHeader: tabHeader }, roles.map(function (role, i) { return (React.createElement(CheckboxRow, { rowIndex: i, key: role.name, isSelected: isRoleSelected(role.name) || isAssigned(role.name), onSelect: function () {
                                return onRolesUpdate(isRoleSelected(role.name)
                                    ? selectedRoles.filter(function (r) { return r.name !== role.name; })
                                    : __spreadArray(__spreadArray([], selectedRoles, true), [role], false));
                            }, isDisabled: isAssigned(role.name), "data-cy": "RoleListTable-CheckboxRow-row-".concat(role.name) },
                            React.createElement("td", null, role.name),
                            React.createElement("td", null, translateLockedRolesDescription(role.name, role.description)))); }))))))),
            !noData && (React.createElement(FlexItem, null,
                React.createElement(Pagination, { params: localParams, updateParams: function (p) { return setLocalParams(p); }, count: rolesItemCount }))))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=select-roles.js.map