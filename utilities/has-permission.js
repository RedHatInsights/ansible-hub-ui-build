// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function hasPermission(_a, name) {
    var user = _a.user, settings = _a.settings, featureFlags = _a.featureFlags;
    if (!(user === null || user === void 0 ? void 0 : user.model_permissions)) {
        return false;
    }
    return !!user.model_permissions[name]['has_model_permission'];
}
//# sourceMappingURL=has-permission.js.map