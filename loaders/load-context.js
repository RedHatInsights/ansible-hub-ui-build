import { ActiveUserAPI, FeatureFlagsAPI, SettingsAPI, } from 'src/api';
export function loadContext() {
    var getFeatureFlags = FeatureFlagsAPI.get().then(function (_a) {
        var featureFlags = _a.data;
        return ({
            alerts: ((featureFlags === null || featureFlags === void 0 ? void 0 : featureFlags._messages) || []).map(function (msg) { return ({
                variant: 'warning',
                title: msg.split(':')[1],
            }); }),
            featureFlags: featureFlags,
        });
    });
    return Promise.all([
        ActiveUserAPI.getUser(),
        SettingsAPI.get(),
        getFeatureFlags,
    ])
        .then(function (_a) {
        var user = _a[0], settings = _a[1].data, _b = _a[2], alerts = _b.alerts, featureFlags = _b.featureFlags;
        return ({
            alerts: alerts,
            featureFlags: featureFlags,
            settings: settings,
            user: user,
        });
    })
        .catch(function () {
        // we need this even if ActiveUserAPI fails, otherwise isExternalAuth will always be false, breaking keycloak redirect
        return getFeatureFlags.then(function (_a) {
            var alerts = _a.alerts, featureFlags = _a.featureFlags;
            return ({
                alerts: alerts,
                featureFlags: featureFlags,
            });
        });
    });
}
//# sourceMappingURL=load-context.js.map