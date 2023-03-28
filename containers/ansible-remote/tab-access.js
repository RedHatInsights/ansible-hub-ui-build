var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import React, { useEffect, useState } from 'react';
import { AnsibleRemoteAPI, GroupAPI, } from 'src/api';
import { AccessTab } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { errorMessage, parsePulpIDFromURL } from 'src/utilities';
export var RemoteAccessTab = function (_a) {
    var item = _a.item, _b = _a.actionContext, addAlert = _b.addAlert, params = _b.state.params, hasPermission = _b.hasPermission;
    var id = (item === null || item === void 0 ? void 0 : item.pulp_href) && parsePulpIDFromURL(item.pulp_href);
    var _c = useState(item === null || item === void 0 ? void 0 : item.name), name = _c[0], setName = _c[1];
    var _d = useState(null), groups = _d[0], setGroups = _d[1]; // loading
    var _e = useState(false), canEditOwners = _e[0], setCanEditOwners = _e[1];
    var _f = useState(null), selectedGroup = _f[0], setSelectedGroup = _f[1];
    var _g = useState(null), showGroupRemoveModal = _g[0], setShowGroupRemoveModal = _g[1];
    var _h = useState(null), showGroupSelectWizard = _h[0], setShowGroupSelectWizard = _h[1];
    var _j = useState(null), showRoleRemoveModal = _j[0], setShowRoleRemoveModal = _j[1];
    var _k = useState(null), showRoleSelectWizard = _k[0], setShowRoleSelectWizard = _k[1];
    var query = function () {
        setGroups(null);
        AnsibleRemoteAPI.myPermissions(id)
            .then(function (_a) {
            var permissions = _a.data.permissions;
            AnsibleRemoteAPI.listRoles(id)
                .then(function (_a) {
                var roles = _a.data.roles;
                var groupRoles = [];
                for (var _i = 0, roles_1 = roles; _i < roles_1.length; _i++) {
                    var _b = roles_1[_i], groups_2 = _b.groups, role = _b.role;
                    var _loop_1 = function (name_1) {
                        var groupIndex = groupRoles.findIndex(function (g) { return g.name === name_1; });
                        if (groupIndex == -1) {
                            groupRoles.push({ name: name_1, object_roles: [role] });
                        }
                        else {
                            groupRoles[groupIndex].object_roles.push(role);
                        }
                    };
                    for (var _c = 0, groups_1 = groups_2; _c < groups_1.length; _c++) {
                        var name_1 = groups_1[_c];
                        _loop_1(name_1);
                    }
                }
                setName(name);
                setGroups(groupRoles);
                setCanEditOwners(permissions.includes('ansible.change_collectionremote') ||
                    hasPermission('ansible.change_collectionremote'));
            })
                .catch(function () {
                setGroups([]);
            });
        })
            .catch(function () {
            setGroups([]);
            setCanEditOwners(false);
        });
    };
    var updateGroupRoles = function (_a) {
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
    var addGroup = function (group, roles) {
        var rolePromises = roles.map(function (role) {
            return AnsibleRemoteAPI.addRole(id, {
                role: role.name,
                groups: [group.name],
            });
        });
        updateGroupRoles({
            roles: rolePromises,
            alertSuccess: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Group \"", "\" has been successfully added to \"", "\"."], ["Group \"", "\" has been successfully added to \"", "\"."])), group.name, name),
            alertFailure: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Group \"", "\" could not be added to \"", "\"."], ["Group \"", "\" could not be added to \"", "\"."])), group.name, name),
            stateUpdate: { showGroupSelectWizard: null },
        });
    };
    var removeGroup = function (group) {
        var roles = group.object_roles.map(function (role) {
            return AnsibleRemoteAPI.removeRole(id, {
                role: role,
                groups: [group.name],
            });
        });
        updateGroupRoles({
            roles: roles,
            alertSuccess: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Group \"", "\" has been successfully removed from \"", "\"."], ["Group \"", "\" has been successfully removed from \"", "\"."])), group.name, name),
            alertFailure: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Group \"", "\" could not be removed from \"", "\"."], ["Group \"", "\" could not be removed from \"", "\"."])), group.name, name),
            stateUpdate: { showGroupRemoveModal: null },
        });
    };
    var addRole = function (group, roles) {
        var rolePromises = roles.map(function (role) {
            return AnsibleRemoteAPI.addRole(id, {
                role: role.name,
                groups: [group.name],
            });
        });
        updateGroupRoles({
            roles: rolePromises,
            alertSuccess: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Group \"", "\" roles successfully updated in \"", "\"."], ["Group \"", "\" roles successfully updated in \"", "\"."])), group.name, name),
            alertFailure: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Group \"", "\" roles could not be update in \"", "\"."], ["Group \"", "\" roles could not be update in \"", "\"."])), group.name, name),
            stateUpdate: { showRoleSelectWizard: null },
        });
    };
    var removeRole = function (role, group) {
        var removedRole = AnsibleRemoteAPI.removeRole(id, {
            role: role,
            groups: [group.name],
        });
        updateGroupRoles({
            roles: [removedRole],
            alertSuccess: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Group \"", "\" roles successfully updated in \"", "\"."], ["Group \"", "\" roles successfully updated in \"", "\"."])), group.name, name),
            alertFailure: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Group \"", "\" roles could not be update in \"", "\"."], ["Group \"", "\" roles could not be update in \"", "\"."])), group.name, name),
            stateUpdate: { showRoleRemoveModal: null },
        });
    };
    var updateProps = function (props) {
        Object.entries(props).forEach(function (_a) {
            var k = _a[0], v = _a[1];
            switch (k) {
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
    return (React.createElement(AccessTab, { addGroup: addGroup, addRole: addRole, canEditOwners: canEditOwners, group: selectedGroup, groups: groups, name: name, pulpObjectType: 'remotes/ansible/collection', removeGroup: removeGroup, removeRole: removeRole, selectRolesMessage: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["The selected roles will be added to this specific Ansible remote."], ["The selected roles will be added to this specific Ansible remote."]))), showGroupRemoveModal: showGroupRemoveModal, showGroupSelectWizard: showGroupSelectWizard, showRoleRemoveModal: showRoleRemoveModal, showRoleSelectWizard: showRoleSelectWizard, updateProps: updateProps, urlPrefix: formatPath(Paths.ansibleRemoteDetail, {
            name: name,
        }) }));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=tab-access.js.map