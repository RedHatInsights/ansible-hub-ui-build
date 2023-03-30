var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import '../app.scss';
import '@patternfly/patternfly/patternfly.scss';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { UIVersion } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { hasPermission as hasPermissionUtil } from 'src/utilities';
import { AppContext } from '../app-context';
import { StandaloneLayout } from './layout';
import { StandaloneRoutes } from './routes';
var App = function (_props) {
    var location = useLocation();
    var _a = useState([]), alerts = _a[0], setAlerts = _a[1];
    var _b = useState(null), featureFlags = _b[0], setFeatureFlags = _b[1];
    var _c = useState(null), settings = _c[0], setSettings = _c[1];
    var _d = useState(null), user = _d[0], setUser = _d[1];
    var updateInitialData = function (_a) {
        var alerts = _a.alerts, featureFlags = _a.featureFlags, settings = _a.settings, user = _a.user;
        setAlerts(alerts);
        setFeatureFlags(featureFlags);
        setSettings(settings);
        setUser(user);
    };
    var queueAlert = function (alert) { return setAlerts(function (alerts) { return __spreadArray(__spreadArray([], alerts, true), [alert], false); }); };
    var hasPermission = function (name) {
        return hasPermissionUtil({
            user: user,
            settings: settings,
            featureFlags: featureFlags,
        }, name);
    };
    var component = React.createElement(StandaloneRoutes, { updateInitialData: updateInitialData });
    // Hide navs on login page
    if (location.pathname !== formatPath(Paths.login) &&
        location.pathname !== UI_EXTERNAL_LOGIN_URI) {
        component = (React.createElement(StandaloneLayout, { featureFlags: featureFlags, settings: settings, user: user, setUser: setUser, hasPermission: hasPermission }, component));
    }
    return (React.createElement(AppContext.Provider, { value: {
            alerts: alerts,
            featureFlags: featureFlags,
            queueAlert: queueAlert,
            setAlerts: setAlerts,
            setUser: setUser,
            settings: settings,
            user: user,
            hasPermission: hasPermission,
        } },
        component,
        React.createElement(UIVersion, null)));
};
export default App;
//# sourceMappingURL=loader.js.map