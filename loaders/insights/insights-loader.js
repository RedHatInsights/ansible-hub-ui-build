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
/* global insights */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter, matchPath } from 'react-router-dom';
import { connect } from 'react-redux';
import { Routes } from './Routes';
import '../app.scss';
import { AppContext } from '../app-context';
import { ActiveUserAPI, SettingsAPI } from 'src/api';
import { Paths } from 'src/paths';
var DEFAULT_REPO = 'published';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.setActiveUser = function (user) {
            _this.setState({ activeUser: user });
        };
        _this.setAlerts = function (alerts) {
            _this.setState({ alerts: alerts });
        };
        _this.isRepoURL = function (location) {
            return matchPath(location, {
                path: Paths.collectionByRepo,
            });
        };
        _this.state = {
            user: null,
            activeUser: null,
            selectedRepo: DEFAULT_REPO,
            alerts: [],
            settings: {},
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        insights.chrome.init();
        insights.chrome.identifyApp('automation-hub');
        // This listens for insights navigation events, so this will fire
        // when items in the nav are clicked or the app is loaded for the first
        // time
        this.appNav = insights.chrome.on('APP_NAVIGATION', function (event) {
            // might be undefined early in the load, or may not happen at all
            if (!(event === null || event === void 0 ? void 0 : event.domEvent)) {
                return;
            }
            // basename is either `/ansible/automation-hub` or `/beta/ansible/automation-hub`, no trailing /
            // menu events don't have the /beta, converting
            var basename = _this.props.basename.replace(/^\/beta\//, '/');
            if (event.domEvent.href) {
                // prod-beta
                // domEvent: has the right href, always starts with /ansible/ansible-hub, no /beta prefix
                // (navId: corresponds to the last url component, but not the same one, ansible-hub means /ansible/ansible-hub, partners means /ansible/ansible-hub/partners)
                // go to the href, relative to our *actual* basename (basename has no trailing /, so a path will start with / unless empty
                _this.props.history.push(event.domEvent.href.replace(basename, '') || '/');
            }
            else {
                // FIXME: may no longer be needed by the time this gets to prod-stable
                // prod-stable
                // (domEvent is a react event, no href (there is an absolute url in domEvent.target.href))
                // navId: corresponds to the first url component after prefix, "" means /ansible/ansible-hub, partners means /ansible/ansible-hub/partners
                _this.props.history.push("/".concat(event.navId));
            }
        });
        insights.chrome.auth
            .getUser()
            .then(function (user) { return _this.setState({ user: user }); });
        var promises = [];
        promises.push(ActiveUserAPI.getActiveUser());
        promises.push(SettingsAPI.get());
        Promise.all(promises).then(function (results) {
            _this.setState({
                activeUser: results[0].data,
                settings: results[1].data,
            });
        });
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
        if (!this.state.user || !this.state.activeUser) {
            return null;
        }
        else {
            return (React.createElement(AppContext.Provider, { value: {
                    user: this.state.activeUser,
                    setUser: this.setActiveUser,
                    selectedRepo: this.state.selectedRepo,
                    alerts: this.state.alerts,
                    setAlerts: this.setAlerts,
                    settings: this.state.settings,
                } },
                React.createElement(Routes, { childProps: this.props })));
        }
    };
    return App;
}(Component));
App.propTypes = {
    history: PropTypes.object,
    basename: PropTypes.string.isRequired,
};
/**
 * withRouter: https://reacttraining.com/react-router/web/api/withRouter
 * connect: https://github.com/reactjs/react-redux/blob/master/docs/api.md
 *          https://reactjs.org/docs/higher-order-components.html
 */
export default withRouter(connect()(App));
//# sourceMappingURL=insights-loader.js.map