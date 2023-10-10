var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { Trans, t } from '@lingui/macro';
import { Banner, DropdownItem, DropdownSeparator, Page, PageHeader, PageHeaderTools, PageSidebar, } from '@patternfly/react-core';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ActiveUserAPI, } from 'src/api';
import { AboutModalWindow, LanguageSwitcher, LoginLink, SmallLogo, StatefulDropdown, } from 'src/components';
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
        userName =
            [user.first_name, user.last_name].filter(Boolean).join(' ') ||
                user.username;
        userDropdownItems = [
            React.createElement(DropdownItem, { isDisabled: true, key: 'username' },
                React.createElement(Trans, null,
                    "Username: ",
                    user.username)),
            React.createElement(DropdownSeparator, { key: 'separator' }),
            React.createElement(DropdownItem, { key: 'profile', component: React.createElement(Link, { to: formatPath(Paths.userProfileSettings) }, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["My profile"], ["My profile"])))) }),
            React.createElement(DropdownItem, { key: 'logout', "aria-label": 'logout', onClick: function () {
                    return ActiveUserAPI.logout()
                        .then(function () { return ActiveUserAPI.getUser().catch(function () { return null; }); })
                        .then(function (user) { return setUser(user); });
                } }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Logout"], ["Logout"])))),
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
        aboutModal = (React.createElement(AboutModalWindow, { isOpen: aboutModalVisible, onClose: function () { return setAboutModalVisible(false); }, user: user, userName: userName }));
    }
    var Header = (React.createElement(PageHeader, { logo: React.createElement(SmallLogo, { alt: APPLICATION_NAME }), logoComponent: function (_a) {
            var children = _a.children;
            return (React.createElement(Link, { to: formatPath(Paths.landingPage) }, children));
        }, headerTools: React.createElement(PageHeaderTools, null,
            React.createElement(LanguageSwitcher, null),
            user ? (React.createElement(StatefulDropdown, { ariaLabel: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Docs dropdown"], ["Docs dropdown"]))), "data-cy": 'docs-dropdown', defaultText: React.createElement(QuestionCircleIcon, null), items: docsDropdownItems, toggleType: 'icon' })) : null,
            !user || user.is_anonymous ? (React.createElement(LoginLink, { next: location.pathname })) : (React.createElement(StatefulDropdown, { ariaLabel: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["User dropdown"], ["User dropdown"]))), "data-cy": 'user-dropdown', defaultText: userName, items: userDropdownItems, toggleType: 'dropdown' }))), showNavToggle: true }));
    var Sidebar = (React.createElement(PageSidebar, { theme: 'dark', nav: React.createElement(StandaloneMenu, { context: { user: user, settings: settings, featureFlags: featureFlags, hasPermission: hasPermission } }) }));
    return (React.createElement(Page, { isManagedSidebar: true, header: Header, sidebar: Sidebar },
        (featureFlags === null || featureFlags === void 0 ? void 0 : featureFlags.ai_deny_index) ? (React.createElement(Banner, null,
            React.createElement(Trans, null,
                "Thanks for trying out the new and improved Galaxy, please share your feedback on",
                ' ',
                React.createElement("a", { href: 'https://forum.ansible.com/', target: '_blank', rel: 'noreferrer' }, "forum.ansible.com"),
                "."))) : null,
        children,
        aboutModalVisible && aboutModal));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=layout.js.map