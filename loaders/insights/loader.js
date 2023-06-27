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
import useChrome from '@redhat-cloud-services/frontend-components/useChrome';
import React, { useEffect, useState } from 'react';
import { UIVersion } from 'src/components';
import { hasPermission } from 'src/utilities';
import { AppContext } from '../app-context';
import { loadContext } from '../load-context';
import { InsightsRoutes } from './routes';
var App = function (_props) {
    var _a = useState([]), alerts = _a[0], setAlerts = _a[1];
    var _b = useState(null), featureFlags = _b[0], setFeatureFlags = _b[1];
    var _c = useState(null), settings = _c[0], setSettings = _c[1];
    var _d = useState(null), user = _d[0], setUser = _d[1];
    var _e = useChrome(), identifyApp = _e.identifyApp, updateDocumentTitle = _e.updateDocumentTitle;
    // componentDidMount
    useEffect(function () {
        identifyApp('automation-hub');
        updateDocumentTitle(APPLICATION_NAME);
        loadContext().then(function (_a) {
            var alerts = _a.alerts, featureFlags = _a.featureFlags, settings = _a.settings, user = _a.user;
            setAlerts(alerts);
            setFeatureFlags(featureFlags);
            setSettings(settings);
            setUser(user);
        });
    }, []);
    // Wait for the user data to load before any of the child components are rendered. This will prevent API calls from happening before the app can authenticate
    if (!user) {
        return null;
    }
    var queueAlert = function (alert) { return setAlerts(function (alerts) { return __spreadArray(__spreadArray([], alerts, true), [alert], false); }); };
    return (React.createElement(AppContext.Provider, { value: {
            alerts: alerts,
            featureFlags: featureFlags,
            queueAlert: queueAlert,
            setAlerts: setAlerts,
            setUser: setUser,
            settings: settings,
            user: user,
            hasPermission: function (name) {
                return hasPermission({
                    user: user,
                    settings: settings,
                    featureFlags: featureFlags,
                }, name);
            },
        } },
        React.createElement(InsightsRoutes, null),
        React.createElement(UIVersion, null)));
};
export default App;
//# sourceMappingURL=loader.js.map