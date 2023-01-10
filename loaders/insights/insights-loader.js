var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import React, { useEffect, useState } from 'react';
import { withRouter, matchPath } from 'react-router-dom';
import { connect } from 'react-redux';
import { Alert } from '@patternfly/react-core';
import useChrome from '@redhat-cloud-services/frontend-components/useChrome';
import { Routes } from './Routes';
import '../app.scss';
import { AppContext } from '../app-context';
import { loadContext } from '../load-context';
import { Paths } from 'src/paths';
import { UIVersion } from 'src/components';
import { hasPermission } from 'src/utilities';
var DEFAULT_REPO = 'published';
var isRepoURL = function (location) {
    return matchPath(location, { path: Paths.collectionByRepo });
};
var App = function (props) {
    var match = isRepoURL(props.location.pathname);
    var _a = useState([]), alerts = _a[0], setAlerts = _a[1];
    var _b = useState(null), featureFlags = _b[0], setFeatureFlags = _b[1];
    var _c = useState(DEFAULT_REPO), selectedRepo = _c[0], setSelectedRepo = _c[1];
    var _d = useState(null), settings = _d[0], setSettings = _d[1];
    var _e = useState(null), user = _e[0], setUser = _e[1];
    var setRepo = function (_repo) {
        throw new Error('RepoSelector & setRepo only available in standalone');
    };
    var _f = useChrome(), identifyApp = _f.identifyApp, on = _f.on, updateDocumentTitle = _f.updateDocumentTitle;
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
        // This listens for insights navigation events, so this will fire when items in the nav are clicked or the app is loaded for the first time
        var unregister = on('APP_NAVIGATION', function (event) {
            var _a;
            // might be undefined early in the load, or may not happen at all
            if (!((_a = event === null || event === void 0 ? void 0 : event.domEvent) === null || _a === void 0 ? void 0 : _a.href)) {
                return;
            }
            // basename is either `/ansible/automation-hub` or `/beta/ansible/automation-hub`, remove trailing /
            // menu events don't have the /beta, converting
            var basename = props.basename
                .replace(/^\/beta\//, '/')
                .replace(/\/$/, '');
            // domEvent: has the right href, always starts with /ansible/ansible-hub, no /beta prefix
            // go to the href, relative to our *actual* basename (basename has no trailing /, so a path will start with / unless empty
            var href = event.domEvent.href.replace(basename, '') || '/';
            props.history.push(href);
        });
        return function () {
            unregister === null || unregister === void 0 ? void 0 : unregister();
        };
    }, []);
    // componentDidUpdate
    useEffect(function () {
        // This is sort of a dirty hack to make it so that collection details can view repositories other than "published", but all other views are locked to "published"
        // We do this because there is not currently a way to toggle repositories in automation hub on console.redhat.com, so it's important to ensure the user always lands on the published repo
        // check if the URL matches the base path for the collection detail page
        if (match) {
            // if the URL matches, allow the repo to be switched to the repo defined in the url
            if (match.params['repo'] !== selectedRepo) {
                setSelectedRepo(match.params['repo']);
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
    if (match && match.params['repo'] !== selectedRepo) {
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
            setRepo: setRepo,
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
        React.createElement(Routes, { childProps: props }),
        React.createElement(UIVersion, null)));
};
/**
 * withRouter: https://reacttraining.com/react-router/web/api/withRouter
 * connect: https://github.com/reactjs/react-redux/blob/master/docs/api.md
 *          https://reactjs.org/docs/higher-order-components.html
 */
export default withRouter(connect()(App));
var templateObject_1;
//# sourceMappingURL=insights-loader.js.map