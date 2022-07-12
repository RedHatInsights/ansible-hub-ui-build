export var canSign = function (_a, namespace) {
    var _b;
    var featureFlags = _a.featureFlags;
    var can_create_signatures = (featureFlags || {}).can_create_signatures;
    var permissions = ((_b = namespace === null || namespace === void 0 ? void 0 : namespace.related_fields) === null || _b === void 0 ? void 0 : _b.my_permissions) || [];
    return (can_create_signatures &&
        permissions.includes('galaxy.change_namespace') &&
        permissions.includes('galaxy.upload_to_namespace'));
};
//# sourceMappingURL=can-sign.js.map