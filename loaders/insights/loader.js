var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import '../app.scss';
import { t } from '@lingui/macro';
import { Alert } from '@patternfly/react-core';
import useChrome from '@redhat-cloud-services/frontend-components/useChrome';
import React, { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import { UIVersion } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { hasPermission } from 'src/utilities';
import { AppContext } from '../app-context';
import { loadContext } from '../load-context';
import { InsightsRoutes } from './routes';
var DEFAULT_REPO = 'published';
var isRepoURL = function (pathname) {
    return matchPath({ path: formatPath(Paths.searchByRepo) + '*' }, pathname);
};
var App = function (_props) {
    var location = useLocation();
    var match = isRepoURL(location.pathname);
    var _a = useState([]), alerts = _a[0], setAlerts = _a[1];
    var _b = useState(null), featureFlags = _b[0], setFeatureFlags = _b[1];
    var _c = useState(DEFAULT_REPO), selectedRepo = _c[0], setSelectedRepo = _c[1];
    var _d = useState(null), settings = _d[0], setSettings = _d[1];
    var _e = useState(null), user = _e[0], setUser = _e[1];
    var _f = useChrome(), identifyApp = _f.identifyApp, updateDocumentTitle = _f.updateDocumentTitle;
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
    // componentDidUpdate
    useEffect(function () {
        // This is sort of a dirty hack to make it so that collection details can view repositories other than "published", but all other views are locked to "published"
        // We do this because there is not currently a way to toggle repositories in automation hub on console.redhat.com, so it's important to ensure the user always lands on the published repo
        // check if the URL matches the base path for the collection detail page
        if (match) {
            // if the URL matches, allow the repo to be switched to the repo defined in the url
            if (match.params.repo !== selectedRepo) {
                setSelectedRepo(match.params.repo);
            }
        }
        else {
            // For all other URLs, switch the global state back to the "publised" repo if the repo is set to anything else.
            if (selectedRepo !== DEFAULT_REPO) {
                setSelectedRepo(DEFAULT_REPO);
            }
        }
    });
    // block the page from rendering if we're on a repo route and the repo in the url doesn't match the current state
    // This gives componentDidUpdate a chance to recognize that route has changed and update the internal state to match the route before any pages can redirect the URL to a 404 state.
    if (match && match.params.repo !== selectedRepo) {
        return null;
    }
    // Wait for the user data to load before any of the child components are rendered. This will prevent API calls from happening before the app can authenticate
    if (!user) {
        return null;
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
        React.createElement(Alert, { isInline: true, variant: 'info', title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["The Automation Hub sync toggle is now only supported in AAP 2.0. Previous versions of AAP will continue automatically syncing all collections."], ["The Automation Hub sync toggle is now only supported in AAP 2.0. Previous versions of AAP will continue automatically syncing all collections."]))) }),
        React.createElement(InsightsRoutes, null),
        React.createElement(UIVersion, null)));
};
export default App;
var templateObject_1;
//# sourceMappingURL=loader.js.map