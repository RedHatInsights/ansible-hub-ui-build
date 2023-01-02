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
import * as React from 'react';
import { t } from '@lingui/macro';
import { AppContext } from 'src/loaders/app-context';
import { PermissionChipSelector } from 'src/components';
import { Constants } from 'src/constants';
import { Flex, FlexItem } from '@patternfly/react-core';
function knownPermissionsAndCategories(model_permissions, allPermissions) {
    if (allPermissions === void 0) { allPermissions = Object.keys(model_permissions); }
    var categories = {};
    Object.entries(model_permissions)
        .filter(function (_a) {
        var k = _a[0], _ = _a[1];
        return allPermissions.includes(k);
    })
        .forEach(function (_a) {
        var permission = _a[0], ui_category = _a[1].ui_category;
        categories[ui_category] || (categories[ui_category] = { label: ui_category, allPermissions: [] });
        categories[ui_category].allPermissions.push(permission);
    });
    return Object.values(categories);
}
var PermissionCategories = /** @class */ (function (_super) {
    __extends(PermissionCategories, _super);
    function PermissionCategories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PermissionCategories.prototype.render = function () {
        var _a = this.props, permissions = _a.permissions, setSelected = _a.setSelected, showCustom = _a.showCustom, showEmpty = _a.showEmpty;
        var _b = this.context, featureFlags = _b.featureFlags, user = _b.user;
        var model_permissions = user.model_permissions;
        var showUserManagement = !featureFlags.external_authentication;
        // show user/group permissions by default
        var userManagementFilter = function (permission) {
            return showUserManagement ||
                !Constants.USER_GROUP_MGMT_PERMISSIONS.includes(permission);
        };
        var allPermissions = Object.keys(model_permissions).filter(userManagementFilter);
        var groups = knownPermissionsAndCategories(model_permissions, allPermissions);
        var allGroups = showCustom
            ? __spreadArray(__spreadArray([], groups, true), [
                {
                    label: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Custom permissions"], ["Custom permissions"]))),
                    allPermissions: permissions
                        .filter(userManagementFilter)
                        .filter(function (permission) { return !allPermissions.includes(permission); }),
                },
            ], false) : groups;
        var withActive = allGroups.map(function (group) { return (__assign(__assign({}, group), { selectedPermissions: group.allPermissions.filter(function (permission) {
                return permissions.includes(permission);
            }), availablePermissions: group.allPermissions.filter(function (permission) { return !permissions.includes(permission); }) })); });
        var groupsToShow = showEmpty
            ? withActive
            : withActive.filter(function (group) { return group.selectedPermissions.length; });
        return (React.createElement(React.Fragment, null,
            groupsToShow.length ? null : (React.createElement(Flex, { style: { marginTop: '16px' }, alignItems: { default: 'alignItemsCenter' }, key: 'no-permissions', "data-cy": 'PermissionCategories-no-permissions' },
                React.createElement(FlexItem, { style: { minWidth: '200px' } }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["No permissions"], ["No permissions"])))),
                React.createElement(FlexItem, { grow: { default: 'grow' } }))),
            groupsToShow.map(function (group) { return (React.createElement(Flex, { style: { marginTop: '16px' }, alignItems: { default: 'alignItemsCenter' }, key: group.label, "data-cy": "PermissionCategories-".concat(group.label) },
                React.createElement(FlexItem, { style: { minWidth: '200px' } }, group.label),
                React.createElement(FlexItem, { grow: { default: 'grow' } },
                    React.createElement(PermissionChipSelector, { availablePermissions: group.availablePermissions, selectedPermissions: group.selectedPermissions, isViewOnly: !setSelected, onCategoryClear: function () {
                            return setSelected(permissions.filter(function (permission) {
                                return !group.allPermissions.includes(permission);
                            }));
                        }, onPermissionToggle: function (permission) {
                            var newPerms = new Set(permissions);
                            if (newPerms.has(permission)) {
                                newPerms.delete(permission);
                            }
                            else {
                                newPerms.add(permission);
                            }
                            setSelected(Array.from(newPerms));
                        } })))); })));
    };
    PermissionCategories.contextType = AppContext;
    return PermissionCategories;
}(React.Component));
export { PermissionCategories };
var templateObject_1, templateObject_2;
//# sourceMappingURL=permission-categories.js.map