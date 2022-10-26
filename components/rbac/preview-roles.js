import { Trans } from '@lingui/macro';
import React from 'react';
import { Flex, FlexItem, Label, Divider } from '@patternfly/react-core';
import { Tooltip } from 'src/components';
import { Constants } from 'src/constants';
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
    var group = _a.group, selectedRoles = _a.selectedRoles;
    return (React.createElement("div", { className: 'hub-custom-wizard-layout' },
        React.createElement("p", null,
            React.createElement(Trans, null,
                "The following roles will be applied to group:",
                ' ',
                React.createElement("strong", null, group.name))),
        React.createElement(Flex, { direction: { default: 'column' }, className: 'hub-preview-roles' }, selectedRoles.map(function (role) { return (React.createElement(React.Fragment, { key: role.name },
            React.createElement(FlexItem, null,
                React.createElement("strong", null, role.name),
                ' ',
                (role === null || role === void 0 ? void 0 : role.description) &&
                    "- ".concat(translateLockedRolesDescription(role.name, role.description)),
                React.createElement(Flex, { className: 'hub-permissions' }, role.permissions.map(function (permission) { return (React.createElement(FlexItem, { key: permission, className: 'hub-permission', "data-cy": "HubPermission-".concat(permission) },
                    React.createElement(Tooltip, { content: Constants.HUMAN_PERMISSIONS[permission] || permission },
                        React.createElement(Label, null, splitByDot(permission))))); }))),
            React.createElement(FlexItem, null,
                React.createElement(Divider, null)))); }))));
};
//# sourceMappingURL=preview-roles.js.map