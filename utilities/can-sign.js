export var canSign = function (_a, namespace) {
    var _b;
    var featureFlags = _a.featureFlags;
    var permissions = ((_b = namespace === null || namespace === void 0 ? void 0 : namespace.related_fields) === null || _b === void 0 ? void 0 : _b.my_permissions) || [];
    return ((featureFlags === null || featureFlags === void 0 ? void 0 : featureFlags.collection_signing) &&
        permissions.includes('galaxy.change_namespace') &&
        permissions.includes('galaxy.upload_to_namespace'));
};
//# sourceMappingURL=can-sign.js.map