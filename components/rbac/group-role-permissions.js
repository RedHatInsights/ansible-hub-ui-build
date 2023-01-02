import React, { useEffect, useState } from 'react';
import { RoleAPI } from 'src/api';
import { PermissionCategories, LoadingPageSpinner } from 'src/components';
import { translateLockedRolesDescription } from 'src/utilities';
export var GroupRolePermissions = function (_a) {
    var name = _a.name;
    var _b = useState(null), role = _b[0], setRole = _b[1];
    useEffect(function () {
        RoleAPI.list({ name: name }).then(function (_a) {
            var data = _a.data;
            var selectedRole = data.results[0];
            setRole(selectedRole);
        });
    }, []);
    if (!role) {
        return React.createElement(LoadingPageSpinner, null);
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("p", null, translateLockedRolesDescription(role.name, role.description)),
        React.createElement(PermissionCategories, { permissions: role.permissions, showCustom: true, showEmpty: false })));
};
//# sourceMappingURL=group-role-permissions.js.map