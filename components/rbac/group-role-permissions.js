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
import React, { useEffect, useState } from 'react';
import { RoleAPI } from 'src/api';
import { Constants } from 'src/constants';
import { RolePermissions, LoadingPageSpinner } from 'src/components';
export var GroupRolePermissions = function (_a) {
    var name = _a.name, filteredPermissions = _a.filteredPermissions;
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
    if (!filteredPermissions) {
        filteredPermissions = __assign({}, Constants.HUMAN_PERMISSIONS);
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("p", null, role.description),
        React.createElement(RolePermissions, { filteredPermissions: filteredPermissions, selectedPermissions: role.permissions, showCustom: true, showEmpty: false })));
};
//# sourceMappingURL=group-role-permissions.js.map