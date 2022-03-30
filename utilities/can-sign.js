export var canSign = function (context) {
    return context.featureFlags.collection_signing &&
        context.user.model_permissions.sign_collections_on_namespace;
};
//# sourceMappingURL=can-sign.js.map