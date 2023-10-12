var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import React, { useEffect, useState } from 'react';
import { AnsibleRepositoryAPI, GroupAPI, UserAPI, } from 'src/api';
import { AccessTab } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { canEditAnsibleRepositoryAccess } from 'src/permissions';
import { assignRoles, errorMessage, parsePulpIDFromURL } from 'src/utilities';
export var RepositoryAccessTab = function (_a) {
    var item = _a.item, _b = _a.actionContext, addAlert = _b.addAlert, featureFlags = _b.featureFlags, hasPermission = _b.hasPermission, params = _b.state.params, user = _b.user;
    var id = (item === null || item === void 0 ? void 0 : item.pulp_href) && parsePulpIDFromURL(item.pulp_href);
    var _c = useState(item === null || item === void 0 ? void 0 : item.name), name = _c[0], setName = _c[1];
    var _d = useState(null), groups = _d[0], setGroups = _d[1]; // loading
    var _e = useState(null), users = _e[0], setUsers = _e[1]; // loading
    var _f = useState(false), canEditOwners = _f[0], setCanEditOwners = _f[1];
    var _g = useState(null), selectedGroup = _g[0], setSelectedGroup = _g[1];
    var _h = useState(null), selectedUser = _h[0], setSelectedUser = _h[1];
    var _j = useState(null), showUserRemoveModal = _j[0], setShowUserRemoveModal = _j[1];
    var _k = useState(null), showUserSelectWizard = _k[0], setShowUserSelectWizard = _k[1];
    var _l = useState(null), showGroupRemoveModal = _l[0], setShowGroupRemoveModal = _l[1];
    var _m = useState(null), showGroupSelectWizard = _m[0], setShowGroupSelectWizard = _m[1];
    var _o = useState(null), showRoleRemoveModal = _o[0], setShowRoleRemoveModal = _o[1];
    var _p = useState(null), showRoleSelectWizard = _p[0], setShowRoleSelectWizard = _p[1];
    var query = function () {
        setUsers(null);
        setGroups(null);
        AnsibleRepositoryAPI.myPermissions(id)
            .then(function (_a) {
            var permissions = _a.data.permissions;
            setCanEditOwners(canEditAnsibleRepositoryAccess({
                hasPermission: hasPermission,
                hasObjectPermission: function (p) {
                    return permissions.includes(p);
                },
                user: user,
                featureFlags: featureFlags,
            }));
            // TODO handle pagination
            AnsibleRepositoryAPI.listRoles(id, { page_size: 100 })
                .then(function (_a) {
                var roles = _a.data.roles;
                var _b = assignRoles(roles), users = _b.users, groups = _b.groups;
                setName(name);
                setUsers(users);
                setGroups(groups);
            })
                .catch(function () {
                setUsers([]);
                setGroups([]);
            });
        })
            .catch(function () {
            setUsers([]);
            setGroups([]);
            setCanEditOwners(false);
        });
    };
    var updateRoles = function (_a) {
        var roles = _a.roles, alertSuccess = _a.alertSuccess, alertFailure = _a.alertFailure, stateUpdate = _a.stateUpdate;
        Promise.all(roles)
            .then(function () {
            addAlert({
                title: alertSuccess,
                variant: 'success',
            });
            query();
        })
            .catch(function (_a) {
            var _b = _a.response, status = _b.status, statusText = _b.statusText;
            addAlert({
                title: alertFailure,
                variant: 'danger',
                description: errorMessage(status, statusText),
            });
        })
            .finally(function () {
            updateProps(stateUpdate);
        });
    };
    var addUser = function (user, roles) {
        var rolePromises = roles.map(function (role) {
            return AnsibleRepositoryAPI.addRole(id, {
                role: role.name,
                users: [user.username],
            });
        });
        updateRoles({
            roles: rolePromises,
            alertSuccess: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["User \"", "\" has been successfully added to \"", "\"."], ["User \"", "\" has been successfully added to \"", "\"."])), user.username, name),
            alertFailure: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["User \"", "\" could not be added to \"", "\"."], ["User \"", "\" could not be added to \"", "\"."])), user.username, name),
            stateUpdate: { showUserSelectWizard: null },
        });
    };
    var removeUser = function (user) {
        var roles = user.object_roles.map(function (role) {
            return AnsibleRepositoryAPI.removeRole(id, {
                role: role,
                users: [user.username],
            });
        });
        updateRoles({
            roles: roles,
            alertSuccess: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["User \"", "\" has been successfully removed from \"", "\"."], ["User \"", "\" has been successfully removed from \"", "\"."])), user.username, name),
            alertFailure: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["User \"", "\" could not be removed from \"", "\"."], ["User \"", "\" could not be removed from \"", "\"."])), user.username, name),
            stateUpdate: { showUserRemoveModal: null },
        });
    };
    var addGroup = function (group, roles) {
        var rolePromises = roles.map(function (role) {
            return AnsibleRepositoryAPI.addRole(id, {
                role: role.name,
                groups: [group.name],
            });
        });
        updateRoles({
            roles: rolePromises,
            alertSuccess: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Group \"", "\" has been successfully added to \"", "\"."], ["Group \"", "\" has been successfully added to \"", "\"."])), group.name, name),
            alertFailure: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Group \"", "\" could not be added to \"", "\"."], ["Group \"", "\" could not be added to \"", "\"."])), group.name, name),
            stateUpdate: { showGroupSelectWizard: null },
        });
    };
    var removeGroup = function (group) {
        var roles = group.object_roles.map(function (role) {
            return AnsibleRepositoryAPI.removeRole(id, {
                role: role,
                groups: [group.name],
            });
        });
        updateRoles({
            roles: roles,
            alertSuccess: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Group \"", "\" has been successfully removed from \"", "\"."], ["Group \"", "\" has been successfully removed from \"", "\"."])), group.name, name),
            alertFailure: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Group \"", "\" could not be removed from \"", "\"."], ["Group \"", "\" could not be removed from \"", "\"."])), group.name, name),
            stateUpdate: { showGroupRemoveModal: null },
        });
    };
    var addUserRole = function (user, roles) {
        var rolePromises = roles.map(function (role) {
            return AnsibleRepositoryAPI.addRole(id, {
                role: role.name,
                users: [user.username],
            });
        });
        updateRoles({
            roles: rolePromises,
            alertSuccess: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["User \"", "\" roles successfully updated in \"", "\"."], ["User \"", "\" roles successfully updated in \"", "\"."])), user.username, name),
            alertFailure: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["User \"", "\" roles could not be update in \"", "\"."], ["User \"", "\" roles could not be update in \"", "\"."])), user.username, name),
            stateUpdate: { showRoleSelectWizard: null },
        });
    };
    var removeUserRole = function (role, user) {
        var removedRole = AnsibleRepositoryAPI.removeRole(id, {
            role: role,
            users: [user.username],
        });
        updateRoles({
            roles: [removedRole],
            alertSuccess: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["User \"", "\" roles successfully updated in \"", "\"."], ["User \"", "\" roles successfully updated in \"", "\"."])), user.username, name),
            alertFailure: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["User \"", "\" roles could not be update in \"", "\"."], ["User \"", "\" roles could not be update in \"", "\"."])), user.username, name),
            stateUpdate: { showRoleRemoveModal: null },
        });
    };
    var addRole = function (group, roles) {
        var rolePromises = roles.map(function (role) {
            return AnsibleRepositoryAPI.addRole(id, {
                role: role.name,
                groups: [group.name],
            });
        });
        updateRoles({
            roles: rolePromises,
            alertSuccess: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Group \"", "\" roles successfully updated in \"", "\"."], ["Group \"", "\" roles successfully updated in \"", "\"."])), group.name, name),
            alertFailure: t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Group \"", "\" roles could not be update in \"", "\"."], ["Group \"", "\" roles could not be update in \"", "\"."])), group.name, name),
            stateUpdate: { showRoleSelectWizard: null },
        });
    };
    var removeRole = function (role, group) {
        var removedRole = AnsibleRepositoryAPI.removeRole(id, {
            role: role,
            groups: [group.name],
        });
        updateRoles({
            roles: [removedRole],
            alertSuccess: t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Group \"", "\" roles successfully updated in \"", "\"."], ["Group \"", "\" roles successfully updated in \"", "\"."])), group.name, name),
            alertFailure: t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Group \"", "\" roles could not be update in \"", "\"."], ["Group \"", "\" roles could not be update in \"", "\"."])), group.name, name),
            stateUpdate: { showRoleRemoveModal: null },
        });
    };
    var updateProps = function (props) {
        Object.entries(props).forEach(function (_a) {
            var k = _a[0], v = _a[1];
            switch (k) {
                case 'showUserRemoveModal':
                    setShowUserRemoveModal(v);
                    break;
                case 'showUserSelectWizard':
                    setShowUserSelectWizard(v);
                    break;
                case 'showGroupRemoveModal':
                    setShowGroupRemoveModal(v);
                    break;
                case 'showGroupSelectWizard':
                    setShowGroupSelectWizard(v);
                    break;
                case 'showRoleRemoveModal':
                    setShowRoleRemoveModal(v);
                    break;
                case 'showRoleSelectWizard':
                    setShowRoleSelectWizard(v);
                    break;
                default:
                    console.error('updateProps', k, v);
            }
        });
    };
    useEffect(query, [item.pulp_href]);
    useEffect(function () {
        if (!users) {
            return;
        }
        if (!(params === null || params === void 0 ? void 0 : params.user)) {
            setSelectedUser(null);
            return;
        }
        UserAPI.list({ username: params.user }).then(function (_a) {
            var data = _a.data.data;
            setSelectedUser(users.find(function (u) { return u.username === data[0].username; }));
        });
    }, [params === null || params === void 0 ? void 0 : params.user, users]);
    useEffect(function () {
        if (!groups) {
            return;
        }
        if (!(params === null || params === void 0 ? void 0 : params.group)) {
            setSelectedGroup(null);
            return;
        }
        GroupAPI.list({ name: params.group }).then(function (_a) {
            var data = _a.data.data;
            setSelectedGroup(groups.find(function (g) { return g.name === data[0].name; }));
        });
    }, [params === null || params === void 0 ? void 0 : params.group, groups]);
    return (React.createElement(AccessTab, { addGroup: addGroup, addRole: addRole, addUser: addUser, addUserRole: addUserRole, canEditOwners: canEditOwners, group: selectedGroup, groups: groups, name: name, pulpObjectType: 'repositories/ansible/ansible', removeGroup: removeGroup, removeRole: removeRole, removeUser: removeUser, removeUserRole: removeUserRole, selectRolesMessage: t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["The selected roles will be added to this specific Ansible repository."], ["The selected roles will be added to this specific Ansible repository."]))), showGroupRemoveModal: showGroupRemoveModal, showGroupSelectWizard: showGroupSelectWizard, showRoleRemoveModal: showRoleRemoveModal, showRoleSelectWizard: showRoleSelectWizard, showUserRemoveModal: showUserRemoveModal, showUserSelectWizard: showUserSelectWizard, updateProps: updateProps, user: selectedUser, users: users, urlPrefix: formatPath(Paths.ansibleRepositoryDetail, {
            name: name,
        }) }));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17;
//# sourceMappingURL=tab-access.js.map