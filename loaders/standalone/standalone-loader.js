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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// import PropTypes from 'prop-types';
import * as React from 'react';
import '../app.scss';
import { withRouter, Link, matchPath, } from 'react-router-dom';
import '@patternfly/patternfly/patternfly.scss';
import { DropdownItem, DropdownSeparator, Nav, NavExpandable, NavGroup, NavItem, NavList, Page, PageHeader, PageHeaderTools, PageSidebar, } from '@patternfly/react-core';
import { ExternalLinkAltIcon, QuestionCircleIcon, } from '@patternfly/react-icons';
import { reject, some } from 'lodash';
import { Routes } from './routes';
import { Paths, formatPath } from 'src/paths';
import { ActiveUserAPI } from 'src/api';
import { SmallLogo, StatefulDropdown } from 'src/components';
import { AboutModalWindow } from 'src/containers';
import { AppContext } from '../app-context';
import Logo from 'src/../static/images/logo_large.svg';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.updateInitialData = function (user, flags, callback) {
            return _this.setState({ user: user, featureFlags: flags }, function () {
                if (callback) {
                    callback();
                }
            });
        };
        _this.setUser = function (user, callback) {
            _this.setState({ user: user }, function () {
                if (callback) {
                    callback();
                }
            });
        };
        _this.setRepo = function (path) {
            _this.props.history.push(path);
        };
        _this.state = {
            user: null,
            selectedRepo: 'published',
            aboutModalVisible: false,
            toggleOpen: false,
            featureFlags: null,
            menuExpandedSections: [],
        };
        return _this;
    }
    App.prototype.componentDidUpdate = function (prevProps) {
        this.setRepoToURL();
    };
    App.prototype.componentDidMount = function () {
        this.setRepoToURL();
        var menu = this.menu();
        this.activateMenu(menu);
        this.setState({
            menuExpandedSections: menu
                .filter(function (i) { return i.type === 'section' && i.active; })
                .map(function (i) { return i.name; }),
        });
    };
    App.prototype.render = function () {
        var _this = this;
        var _a = this.state, featureFlags = _a.featureFlags, menuExpandedSections = _a.menuExpandedSections, selectedRepo = _a.selectedRepo, user = _a.user;
        // block the page from rendering if we're on a repo route and the repo in the
        // url doesn't match the current state
        // This gives componentDidUpdate a chance to recognize that route has chnaged
        // and update the internal state to match the route before any pages can
        // redirect the URL to a 404 state.
        var match = this.isRepoURL(this.props.location.pathname);
        if (match && match.params['repo'] !== selectedRepo) {
            return null;
        }
        var aboutModal = null;
        var docsDropdownItems = [];
        var userDropdownItems = [];
        var userName;
        if (user) {
            if (user.first_name || user.last_name) {
                userName = user.first_name + ' ' + user.last_name;
            }
            else {
                userName = user.username;
            }
            userDropdownItems = [
                React.createElement(DropdownItem, { isDisabled: true, key: 'username' },
                    "Username: ",
                    user.username),
                React.createElement(DropdownSeparator, { key: 'separator' }),
                React.createElement(DropdownItem, { key: 'profile', component: React.createElement(Link, { to: Paths.userProfileSettings }, "My profile") }),
                React.createElement(DropdownItem, { key: 'logout', "aria-label": 'logout', onClick: function () {
                        return ActiveUserAPI.logout().then(function () { return _this.setState({ user: null }); });
                    } }, "Logout"),
            ];
            docsDropdownItems = [
                React.createElement(DropdownItem, { key: 'customer_support', href: 'https://access.redhat.com/support', target: '_blank' },
                    "Customer Support ",
                    React.createElement(ExternalLinkAltIcon, null)),
                React.createElement(DropdownItem, { key: 'training', href: 'https://www.ansible.com/resources/webinars-training', target: '_blank' },
                    "Training ",
                    React.createElement(ExternalLinkAltIcon, null)),
                React.createElement(DropdownItem, { key: 'about', onClick: function () {
                        return _this.setState({ aboutModalVisible: true, toggleOpen: false });
                    } }, "About"),
            ];
            aboutModal = (React.createElement(AboutModalWindow, { isOpen: this.state.aboutModalVisible, trademark: '', brandImageSrc: Logo, onClose: function () { return _this.setState({ aboutModalVisible: false }); }, brandImageAlt: 'Galaxy Logo', productName: APPLICATION_NAME, user: user, userName: userName }));
        }
        var Header = (React.createElement(PageHeader, { logo: React.createElement(SmallLogo, { alt: APPLICATION_NAME }), logoComponent: function (_a) {
                var children = _a.children;
                return (React.createElement(Link, { to: formatPath(Paths.searchByRepo, {
                        repo: _this.state.selectedRepo,
                    }) }, children));
            }, headerTools: React.createElement(PageHeaderTools, null, !user ? (React.createElement(Link, { to: formatPath(Paths.login, {}, { next: this.props.location.pathname }) }, "Login")) : (React.createElement("div", null,
                React.createElement(StatefulDropdown, { ariaLabel: 'docs-dropdown', defaultText: React.createElement(QuestionCircleIcon, null), items: docsDropdownItems, toggleType: 'icon' }),
                React.createElement(StatefulDropdown, { ariaLabel: 'user-dropdown', defaultText: userName, items: userDropdownItems, toggleType: 'dropdown' })))), showNavToggle: true }));
        var menu = this.menu();
        this.activateMenu(menu);
        var ItemOrSection = function (_a) {
            var item = _a.item;
            return item.type === 'section' ? (React.createElement(MenuSection, { section: item })) : (React.createElement(MenuItem, { item: item }));
        };
        var MenuItem = function (_a) {
            var item = _a.item;
            return item.condition({ user: user, featureFlags: featureFlags }) ? (React.createElement(NavItem, { isActive: item.active, onClick: function (e) {
                    item.onclick && item.onclick();
                    e.stopPropagation();
                } }, item.url && item.external ? (React.createElement("a", { href: item.url, target: '_blank' },
                item.name,
                React.createElement(ExternalLinkAltIcon, { style: { position: 'absolute', right: '32px' } }))) : item.url ? (React.createElement(Link, { to: item.url }, item.name)) : (item.name))) : null;
        };
        var Menu = function (_a) {
            var items = _a.items;
            return (React.createElement(React.Fragment, null, items.map(function (item) { return (React.createElement(ItemOrSection, { key: item.name, item: item })); })));
        };
        var MenuSection = function (_a) {
            var section = _a.section;
            return section.condition({ user: user, featureFlags: featureFlags }) ? (React.createElement(NavExpandable, { title: section.name, groupId: section.name, isActive: section.active, isExpanded: menuExpandedSections.includes(section.name) },
                React.createElement(Menu, { items: section.items }))) : null;
        };
        var onToggle = function (_a) {
            var groupId = _a.groupId, isExpanded = _a.isExpanded;
            _this.setState({
                menuExpandedSections: isExpanded
                    ? __spreadArray(__spreadArray([], menuExpandedSections, true), [groupId], false) : reject(menuExpandedSections, function (name) { return name === groupId; }),
            });
        };
        var Sidebar = (React.createElement(PageSidebar, { theme: 'dark', nav: React.createElement(Nav, { theme: 'dark', onToggle: onToggle },
                React.createElement(NavList, null,
                    React.createElement(NavGroup, { className: 'nav-title', title: APPLICATION_NAME }),
                    user && featureFlags && React.createElement(Menu, { items: menu }))) }));
        // Hide navs on login page
        if (this.props.location.pathname === Paths.login) {
            return this.ctx(React.createElement(Routes, { updateInitialData: this.updateInitialData }));
        }
        return this.ctx(React.createElement(Page, { isManagedSidebar: true, header: Header, sidebar: Sidebar },
            this.state.aboutModalVisible && aboutModal,
            React.createElement(Routes, { updateInitialData: this.updateInitialData })));
    };
    App.prototype.menu = function () {
        var menuItem = function (name, options) {
            if (options === void 0) { options = {}; }
            return (__assign(__assign({ condition: function () { return true; } }, options), { type: 'item', name: name }));
        };
        var menuSection = function (name, options, items) {
            if (options === void 0) { options = {}; }
            if (items === void 0) { items = []; }
            return (__assign(__assign({ condition: function () {
                    var params = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        params[_i] = arguments[_i];
                    }
                    return some(items, function (item) { return item.condition.apply(item, params); });
                } }, options), { type: 'section', name: name, items: items }));
        };
        return [
            menuSection('Collections', {}, [
                menuItem('Collections', {
                    url: formatPath(Paths.searchByRepo, {
                        repo: this.state.selectedRepo,
                    }),
                }),
                menuItem('Namespaces', {
                    url: Paths[NAMESPACE_TERM],
                }),
                menuItem('Repository Management', {
                    url: Paths.repositories,
                }),
                menuItem('API Token', {
                    url: Paths.token,
                }),
                menuItem('Approval', {
                    condition: function (_a) {
                        var user = _a.user;
                        return user.model_permissions.move_collection;
                    },
                    url: Paths.approvalDashboard,
                }),
            ]),
            menuItem('Container Registry', {
                condition: function (_a) {
                    var featureFlags = _a.featureFlags;
                    return featureFlags.execution_environments;
                },
                url: Paths.executionEnvironments,
            }),
            menuItem('Documentation', {
                url: 'https://access.redhat.com/documentation/en-us/red_hat_ansible_automation_platform/',
                external: true,
            }),
            menuSection('User Access', {}, [
                menuItem('Users', {
                    condition: function (_a) {
                        var user = _a.user;
                        return user.model_permissions.view_user;
                    },
                    url: Paths.userList,
                }),
                menuItem('Groups', {
                    condition: function (_a) {
                        var user = _a.user;
                        return user.model_permissions.view_group;
                    },
                    url: Paths.groupList,
                }),
            ]),
        ];
    };
    App.prototype.activateMenu = function (items) {
        var _this = this;
        items.forEach(function (item) {
            return (item.active =
                item.type === 'section'
                    ? _this.activateMenu(item.items)
                    : _this.props.location.pathname.startsWith(item.url));
        });
        return some(items, 'active');
    };
    App.prototype.setRepoToURL = function () {
        var match = this.isRepoURL(this.props.location.pathname);
        if (match) {
            if (match.params['repo'] !== this.state.selectedRepo) {
                this.setState({ selectedRepo: match.params['repo'] });
            }
        }
    };
    App.prototype.isRepoURL = function (location) {
        return matchPath(location, {
            path: Paths.searchByRepo,
        });
    };
    App.prototype.ctx = function (component) {
        return (React.createElement(AppContext.Provider, { value: {
                user: this.state.user,
                setUser: this.setUser,
                selectedRepo: this.state.selectedRepo,
                setRepo: this.setRepo,
                featureFlags: this.state.featureFlags,
            } }, component));
    };
    return App;
}(React.Component));
export default withRouter(App);
//# sourceMappingURL=standalone-loader.js.map