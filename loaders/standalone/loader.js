import '../app.scss';
import '@patternfly/patternfly/patternfly.scss';
import React, { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import { UIVersion } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { hasPermission } from 'src/utilities';
import { AppContext } from '../app-context';
import { StandaloneLayout } from './layout';
import { StandaloneRoutes } from './routes';
var isRepoURL = function (pathname) {
    return matchPath({ path: formatPath(Paths.searchByRepo) + '*' }, pathname);
};
var App = function (_props) {
    var location = useLocation();
    var match = isRepoURL(location.pathname);
    var _a = useState([]), alerts = _a[0], setAlerts = _a[1];
    var _b = useState(null), featureFlags = _b[0], setFeatureFlags = _b[1];
    var _c = useState('published'), selectedRepo = _c[0], setSelectedRepo = _c[1];
    var _d = useState(null), settings = _d[0], setSettings = _d[1];
    var _e = useState(null), user = _e[0], setUser = _e[1];
    useEffect(function () {
        if (match && match.params.repo !== selectedRepo) {
            setSelectedRepo(match.params.repo);
        }
    }, [location]);
    // block the page from rendering if we're on a repo route and the repo in the
    // url doesn't match the current state
    // This gives componentDidUpdate a chance to recognize that route has chnaged
    // and update the internal state to match the route before any pages can
    // redirect the URL to a 404 state.
    if (match && match.params.repo !== selectedRepo) {
        return null;
    }
    var updateInitialData = function (_a) {
        var alerts = _a.alerts, featureFlags = _a.featureFlags, settings = _a.settings, user = _a.user;
        setAlerts(alerts);
        setFeatureFlags(featureFlags);
        setSettings(settings);
        setUser(user);
    };
    var component = React.createElement(StandaloneRoutes, { updateInitialData: updateInitialData });
    // Hide navs on login page
    if (location.pathname !== formatPath(Paths.login) &&
        location.pathname !== UI_EXTERNAL_LOGIN_URI) {
        component = (React.createElement(StandaloneLayout, { featureFlags: featureFlags, selectedRepo: selectedRepo, settings: settings, user: user, setUser: setUser }, component));
    }
    return (React.createElement(AppContext.Provider, { value: {
            alerts: alerts,
            featureFlags: featureFlags,
            selectedRepo: selectedRepo,
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
        component,
        React.createElement(UIVersion, null)));
};
export default App;
//# sourceMappingURL=loader.js.map