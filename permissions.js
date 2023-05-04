export var isLoggedIn = function (_a) {
    var user = _a.user;
    return user && !user.is_anonymous;
};
var has_model_perms = function (permission) {
    return function (_a) {
        var hasPermission = _a.hasPermission, user = _a.user;
        return hasPermission(permission) || (user === null || user === void 0 ? void 0 : user.is_superuser);
    };
};
var has_model_or_obj_perms = function (permission) {
    return function (_a, item) {
        var hasPermission = _a.hasPermission, hasObjectPermission = _a.hasObjectPermission, user = _a.user;
        return hasPermission(permission) ||
            (hasObjectPermission === null || hasObjectPermission === void 0 ? void 0 : hasObjectPermission(permission, item)) ||
            (user === null || user === void 0 ? void 0 : user.is_superuser);
    };
};
// Ansible Remotes
export var canAddAnsibleRemote = has_model_perms('ansible.add_collectionremote');
export var canDeleteAnsibleRemote = has_model_or_obj_perms('ansible.delete_collectionremote');
export var canEditAnsibleRemote = has_model_or_obj_perms('ansible.change_collectionremote');
export var canViewAnsibleRemotes = has_model_or_obj_perms('ansible.view_collectionremote');
export var canEditAnsibleRemoteAccess = has_model_or_obj_perms('ansible.manage_roles_collectionremote');
// Ansible Repositories
export var canAddAnsibleRepository = has_model_perms('ansible.add_ansiblerepository');
export var canDeleteAnsibleRepository = has_model_or_obj_perms('ansible.delete_ansiblerepository');
export var canEditAnsibleRepository = has_model_or_obj_perms('ansible.change_ansiblerepository');
export var canSyncAnsibleRepository = canEditAnsibleRepository;
// everybody can list/view, not has_model_or_obj_perms('ansible.view_ansiblerepository'); under feature flag
export var canViewAnsibleRepositories = function (_a) {
    var user = _a.user, featureFlags = _a.featureFlags;
    return user && (featureFlags === null || featureFlags === void 0 ? void 0 : featureFlags.display_repositories);
};
export var canEditAnsibleRepositoryAccess = has_model_or_obj_perms('ansible.manage_roles_ansiblerepository');
// Ansible Repository Versions
// simulating has_repository_model_or_obj_perms by passing in repository as item
export var canRevertAnsibleRepositoryVersion = canEditAnsibleRepository;
//# sourceMappingURL=permissions.js.map