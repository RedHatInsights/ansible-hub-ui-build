var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import React, { Component } from 'react';
import { withRouter, matchPath } from 'react-router-dom';
import { connect } from 'react-redux';
import { Alert } from '@patternfly/react-core';
import { Routes } from './Routes';
import '../app.scss';
import { AppContext } from '../app-context';
import { loadContext } from '../load-context';
import { Paths } from 'src/paths';
import { UIVersion } from 'src/components';
import { hasPermission } from 'src/utilities';
var DEFAULT_REPO = 'published';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.setUser = function (user) {
            _this.setState({ user: user });
        };
        _this.setAlerts = function (alerts) {
            _this.setState({ alerts: alerts });
        };
        _this.isRepoURL = function (location) {
            return matchPath(location, {
                path: Paths.collectionByRepo,
            });
        };
        _this.setRepo = function (_repo) {
            throw new Error('RepoSelector & setRepo only available in standalone');
        };
        _this.state = {
            alerts: [],
            featureFlags: null,
            selectedRepo: DEFAULT_REPO,
            settings: null,
            user: null,
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        window.insights.chrome.init();
        window.insights.chrome.identifyApp('automation-hub', APPLICATION_NAME);
        // This listens for insights navigation events, so this will fire
        // when items in the nav are clicked or the app is loaded for the first
        // time
        this.appNav = window.insights.chrome.on('APP_NAVIGATION', function (event) {
            var _a;
            // might be undefined early in the load, or may not happen at all
            if (!((_a = event === null || event === void 0 ? void 0 : event.domEvent) === null || _a === void 0 ? void 0 : _a.href)) {
                return;
            }
            // basename is either `/ansible/automation-hub` or `/beta/ansible/automation-hub`, remove trailing /
            // menu events don't have the /beta, converting
            var basename = _this.props.basename
                .replace(/^\/beta\//, '/')
                .replace(/\/$/, '');
            // domEvent: has the right href, always starts with /ansible/ansible-hub, no /beta prefix
            // go to the href, relative to our *actual* basename (basename has no trailing /, so a path will start with / unless empty
            var href = event.domEvent.href.replace(basename, '') || '/';
            _this.props.history.push(href);
        });
        loadContext().then(function (data) { return _this.setState(data); });
    };
    App.prototype.componentWillUnmount = function () {
        this.appNav();
    };
    App.prototype.componentDidUpdate = function () {
        // This is sort of a dirty hack to make it so that collection details can
        // view repositories other than "published", but all other views are locked
        // to "published"
        // We do this because there is not currently a way to toggle repositories
        // in automation hub on console.redhat.com, so it's important to ensure the user
        // always lands on the published repo
        // check if the URL matches the base path for the collection detail page
        var match = this.isRepoURL(this.props.location.pathname);
        if (match) {
            // if the URL matches, allow the repo to be switched to the repo defined in
            // the url
            if (match.params['repo'] !== this.state.selectedRepo) {
                this.setState({ selectedRepo: match.params['repo'] });
            }
        }
        else {
            // For all other URLs, switch the global state back to the "publised" repo
            // if the repo is set to anything else.
            if (this.state.selectedRepo !== DEFAULT_REPO) {
                this.setState({ selectedRepo: DEFAULT_REPO });
            }
        }
    };
    App.prototype.render = function () {
        var _this = this;
        // block the page from rendering if we're on a repo route and the repo in the
        // url doesn't match the current state
        // This gives componentDidUpdate a chance to recognize that route has chnaged
        // and update the internal state to match the route before any pages can
        // redirect the URL to a 404 state.
        var match = this.isRepoURL(this.props.location.pathname);
        if (match && match.params['repo'] !== this.state.selectedRepo) {
            return null;
        }
        // Wait for the user data to load before any of the child components are
        // rendered. This will prevent API calls from happening
        // before the app can authenticate
        if (!this.state.user) {
            return null;
        }
        return (React.createElement(AppContext.Provider, { value: {
                alerts: this.state.alerts,
                featureFlags: this.state.featureFlags,
                selectedRepo: this.state.selectedRepo,
                setAlerts: this.setAlerts,
                setRepo: this.setRepo,
                setUser: this.setUser,
                settings: this.state.settings,
                user: this.state.user,
                hasPermission: function (name) {
                    return hasPermission({
                        user: _this.state.user,
                        settings: _this.state.settings,
                        featureFlags: _this.state.featureFlags,
                    }, name);
                },
            } },
            React.createElement(Alert, { isInline: true, variant: 'info', title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["The Automation Hub sync toggle is now only supported in AAP 2.0. Previous versions of AAP will continue automatically syncing all collections."], ["The Automation Hub sync toggle is now only supported in AAP 2.0. Previous versions of AAP will continue automatically syncing all collections."]))) }),
            React.createElement(Routes, { childProps: this.props }),
            React.createElement(UIVersion, null)));
    };
    return App;
}(Component));
/**
 * withRouter: https://reacttraining.com/react-router/web/api/withRouter
 * connect: https://github.com/reactjs/react-redux/blob/master/docs/api.md
 *          https://reactjs.org/docs/higher-order-components.html
 */
export default withRouter(connect()(App));
var templateObject_1;
//# sourceMappingURL=insights-loader.js.map