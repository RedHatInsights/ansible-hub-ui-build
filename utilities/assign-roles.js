import { sortBy } from 'lodash';
export var assignRoles = function (roles) {
    var userRoles = {};
    var groupRoles = {};
    roles.forEach(function (_a) {
        var users = _a.users, groups = _a.groups, role = _a.role;
        (users || []).forEach(function (username) {
            userRoles[username] || (userRoles[username] = []);
            userRoles[username].push(role);
        });
        (groups || []).forEach(function (name) {
            groupRoles[name] || (groupRoles[name] = []);
            groupRoles[name].push(role);
        });
    });
    return {
        users: sortBy(Object.entries(userRoles).map(function (_a) {
            var username = _a[0], object_roles = _a[1];
            return ({
                username: username,
                object_roles: object_roles,
            });
        }), 'username'),
        groups: sortBy(Object.entries(groupRoles).map(function (_a) {
            var name = _a[0], object_roles = _a[1];
            return ({
                name: name,
                object_roles: object_roles,
            });
        }), 'name'),
    };
};
//# sourceMappingURL=assign-roles.js.map