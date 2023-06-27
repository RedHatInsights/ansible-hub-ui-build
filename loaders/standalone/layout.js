var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { Trans, t } from '@lingui/macro';
import { DropdownItem, DropdownSeparator, Page, PageHeader, PageHeaderTools, PageSidebar, } from '@patternfly/react-core';
import { ExternalLinkAltIcon, QuestionCircleIcon, } from '@patternfly/react-icons';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from 'src/../static/images/logo_large.svg';
import { ActiveUserAPI, } from 'src/api';
import { AboutModalWindow, LoginLink, SmallLogo, StatefulDropdown, } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { StandaloneMenu } from './menu';
export var StandaloneLayout = function (_a) {
    var children = _a.children, featureFlags = _a.featureFlags, hasPermission = _a.hasPermission, setUser = _a.setUser, settings = _a.settings, user = _a.user;
    var location = useLocation();
    var _b = useState(false), aboutModalVisible = _b[0], setAboutModalVisible = _b[1];
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
                React.createElement(Trans, null,
                    "Username: ",
                    user.username)),
            React.createElement(DropdownSeparator, { key: 'separator' }),
            React.createElement(DropdownItem, { key: 'profile', component: React.createElement(Link, { to: formatPath(Paths.userProfileSettings) }, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["My profile"], ["My profile"])))) }),
            React.createElement(DropdownItem, { key: 'logout', "aria-label": 'logout', onClick: function () { return ActiveUserAPI.logout().then(function () { return setUser(null); }); } }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Logout"], ["Logout"])))),
        ];
        docsDropdownItems = [
            React.createElement(DropdownItem, { key: 'customer_support', href: 'https://access.redhat.com/support', target: '_blank' },
                React.createElement(Trans, null,
                    "Customer Support ",
                    React.createElement(ExternalLinkAltIcon, null))),
            React.createElement(DropdownItem, { key: 'training', href: 'https://www.ansible.com/resources/webinars-training', target: '_blank' },
                React.createElement(Trans, null,
                    "Training ",
                    React.createElement(ExternalLinkAltIcon, null))),
            React.createElement(DropdownItem, { key: 'about', onClick: function () { return setAboutModalVisible(true); } }, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["About"], ["About"])))),
        ];
        aboutModal = (React.createElement(AboutModalWindow, { isOpen: aboutModalVisible, trademark: '', brandImageSrc: Logo, onClose: function () { return setAboutModalVisible(false); }, brandImageAlt: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Galaxy Logo"], ["Galaxy Logo"]))), productName: APPLICATION_NAME, user: user, userName: userName }));
    }
    var Header = (React.createElement(PageHeader, { logo: React.createElement(SmallLogo, { alt: APPLICATION_NAME }), logoComponent: function (_a) {
            var children = _a.children;
            return (React.createElement(Link, { to: formatPath(Paths.landingPage) }, children));
        }, headerTools: React.createElement(PageHeaderTools, null, !user || user.is_anonymous ? (React.createElement(LoginLink, { next: location.pathname })) : (React.createElement("div", null,
            React.createElement(StatefulDropdown, { ariaLabel: 'docs-dropdown', defaultText: React.createElement(QuestionCircleIcon, null), items: docsDropdownItems, toggleType: 'icon' }),
            React.createElement(StatefulDropdown, { ariaLabel: 'user-dropdown', defaultText: userName, items: userDropdownItems, toggleType: 'dropdown' })))), showNavToggle: true }));
    var Sidebar = (React.createElement(PageSidebar, { theme: 'dark', nav: React.createElement(StandaloneMenu, { context: { user: user, settings: settings, featureFlags: featureFlags, hasPermission: hasPermission } }) }));
    return (React.createElement(Page, { isManagedSidebar: true, header: Header, sidebar: Sidebar },
        children,
        aboutModalVisible && aboutModal));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=layout.js.map