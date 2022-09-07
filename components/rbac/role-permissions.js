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
import { t } from '@lingui/macro';
import { i18n } from '@lingui/core';
import * as React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';
import { Constants } from 'src/constants';
import { PermissionChipSelector } from 'src/components';
import { twoWayMapper } from 'src/utilities';
export var RolePermissions = function (_a) {
    var filteredPermissions = _a.filteredPermissions, selectedPermissions = _a.selectedPermissions, setPermissions = _a.setPermissions, showCustom = _a.showCustom, showEmpty = _a.showEmpty;
    var permFilter = function (availablePermissions) {
        return selectedPermissions
            .filter(function (selected) {
            return availablePermissions.find(function (perm) { return selected === perm; });
        })
            .map(function (value) { var _a; return (_a = twoWayMapper(value, filteredPermissions)) !== null && _a !== void 0 ? _a : value; });
    };
    var getSelected = function (group) { return permFilter(group.object_permissions); };
    var customPermissions = selectedPermissions.filter(function (perm) { return !Object.keys(filteredPermissions).includes(perm); });
    var origGroups = Constants.PERMISSIONS.map(function (group) { return (__assign(__assign({}, group), { label: i18n._(group.label) })); });
    var allGroups = showCustom
        ? __spreadArray(__spreadArray([], origGroups, true), [
            {
                name: 'custom',
                label: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Custom permissions"], ["Custom permissions"]))),
                object_permissions: customPermissions,
            },
        ], false) : origGroups;
    var groups = showEmpty
        ? allGroups
        : allGroups.filter(function (group) { return getSelected(group).length; });
    return (React.createElement(React.Fragment, null, groups.map(function (group) { return (React.createElement(Flex, { style: { marginTop: '16px' }, alignItems: { default: 'alignItemsCenter' }, key: group.name, className: group.name },
        React.createElement(FlexItem, { style: { minWidth: '200px' } }, group.label),
        React.createElement(FlexItem, { grow: { default: 'grow' } },
            React.createElement(PermissionChipSelector, __assign({ isViewOnly: !setPermissions, menuAppendTo: 'inline', multilingual: true, selectedPermissions: getSelected(group).filter(Boolean) }, (setPermissions
                ? {
                    availablePermissions: group.object_permissions
                        .filter(function (perm) {
                        return !selectedPermissions.find(function (selected) { return selected === perm; });
                    })
                        .map(function (value) { return twoWayMapper(value, filteredPermissions); })
                        .sort(),
                    setSelected: setPermissions,
                    onClear: function () {
                        var clearedPermissions = group.object_permissions;
                        setPermissions(selectedPermissions.filter(function (x) { return !clearedPermissions.includes(x); }));
                    },
                    onSelect: function (event, selection) {
                        var newPermissions = new Set(selectedPermissions);
                        if (newPermissions.has(twoWayMapper(selection, filteredPermissions))) {
                            newPermissions.delete(twoWayMapper(selection, filteredPermissions));
                        }
                        else {
                            newPermissions.add(twoWayMapper(selection, filteredPermissions));
                        }
                        setPermissions(Array.from(newPermissions));
                    },
                }
                : {})))))); })));
};
var templateObject_1;
//# sourceMappingURL=role-permissions.js.map