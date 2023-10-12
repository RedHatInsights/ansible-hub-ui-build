import { Trans } from '@lingui/macro';
import { Divider, Flex, FlexItem, Label } from '@patternfly/react-core';
import React from 'react';
import { Tooltip } from 'src/components';
import { useContext } from 'src/loaders/app-context';
import { translateLockedRolesDescription } from 'src/utilities';
var splitByDot = function (perm) {
    var _a = perm.split('.', 2), category = _a[0], permission = _a[1];
    var catTitle = category.charAt(0).toUpperCase() + category.slice(1);
    return (React.createElement(React.Fragment, null,
        React.createElement("strong", null,
            catTitle,
            ":"),
        "\u00A0",
        permission));
};
export var PreviewRoles = function (_a) {
    var user = _a.user, group = _a.group, selectedRoles = _a.selectedRoles;
    var model_permissions = useContext().user.model_permissions;
    return (React.createElement("div", { className: 'hub-custom-wizard-layout' },
        React.createElement("p", null,
            user ? (React.createElement(Trans, null,
                "The following roles will be applied to user:",
                ' ',
                React.createElement("strong", null, user.username))) : null,
            group ? (React.createElement(Trans, null,
                "The following roles will be applied to group:",
                ' ',
                React.createElement("strong", null, group.name))) : null),
        React.createElement(Flex, { direction: { default: 'column' }, className: 'hub-preview-roles' }, selectedRoles.map(function (role) { return (React.createElement(React.Fragment, { key: role.name },
            React.createElement(FlexItem, null,
                React.createElement("strong", null, role.name),
                ' ',
                role.description &&
                    "- ".concat(translateLockedRolesDescription(role.name, role.description)),
                React.createElement(Flex, { className: 'hub-permissions' }, role.permissions.map(function (permission) {
                    var _a;
                    return (React.createElement(FlexItem, { key: permission, className: 'hub-permission', "data-cy": "HubPermission-".concat(permission) },
                        React.createElement(Tooltip, { content: ((_a = model_permissions[permission]) === null || _a === void 0 ? void 0 : _a.name) || permission },
                            React.createElement(Label, null, splitByDot(permission)))));
                }))),
            React.createElement(FlexItem, null,
                React.createElement(Divider, null)))); }))));
};
//# sourceMappingURL=preview-roles.js.map