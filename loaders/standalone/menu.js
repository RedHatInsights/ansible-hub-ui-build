var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
/* eslint react/prop-types: 0 */
import { t } from '@lingui/macro';
import { Nav, NavExpandable, NavGroup, NavItem, NavList, } from '@patternfly/react-core';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import { reject, some } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Paths, formatPath } from 'src/paths';
import { hasPermission } from 'src/utilities';
var menuItem = function (name, options) {
    if (options === void 0) { options = {}; }
    return (__assign(__assign({ active: false, condition: function () { return true; } }, options), { type: 'item', name: name }));
};
var menuSection = function (name, options, items) {
    if (options === void 0) { options = {}; }
    if (items === void 0) { items = []; }
    return (__assign(__assign({ active: false, condition: function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            return some(items, function (item) { return item.condition.apply(item, params); });
        } }, options), { type: 'section', name: name, items: items }));
};
function standaloneMenu(_a) {
    var repository = _a.repository;
    return [
        menuSection(t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Collections"], ["Collections"]))), {}, [
            menuItem(t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Collections"], ["Collections"]))), {
                url: formatPath(Paths.searchByRepo, {
                    repo: repository || 'published',
                }),
                condition: function (_a) {
                    var settings = _a.settings, user = _a.user;
                    return settings.GALAXY_ENABLE_UNAUTHENTICATED_COLLECTION_ACCESS ||
                        !user.is_anonymous;
                },
            }),
            menuItem(t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Namespaces"], ["Namespaces"]))), {
                url: formatPath(Paths[NAMESPACE_TERM]),
                condition: function (_a) {
                    var settings = _a.settings, user = _a.user;
                    return settings.GALAXY_ENABLE_UNAUTHENTICATED_COLLECTION_ACCESS ||
                        !user.is_anonymous;
                },
            }),
            menuItem(t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Repository Management"], ["Repository Management"]))), {
                condition: function (_a) {
                    var user = _a.user;
                    return !user.is_anonymous;
                },
                url: formatPath(Paths.repositories),
            }),
            menuItem(t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["API token management"], ["API token management"]))), {
                url: formatPath(Paths.token),
                condition: function (_a) {
                    var user = _a.user;
                    return !user.is_anonymous;
                },
            }),
            menuItem(t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Approval"], ["Approval"]))), {
                condition: function (context) {
                    return hasPermission(context, 'ansible.modify_ansible_repo_content');
                },
                url: formatPath(Paths.approvalDashboard),
            }),
        ]),
        menuSection(t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Execution Environments"], ["Execution Environments"]))), {
            condition: function (_a) {
                var featureFlags = _a.featureFlags, user = _a.user;
                return featureFlags.execution_environments && !user.is_anonymous;
            },
        }, [
            menuItem(t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Execution Environments"], ["Execution Environments"]))), {
                url: formatPath(Paths.executionEnvironments),
            }),
            menuItem(t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Remote Registries"], ["Remote Registries"]))), {
                url: formatPath(Paths.executionEnvironmentsRegistries),
            }),
        ]),
        menuSection(t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Legacy"], ["Legacy"]))), {
            condition: function (_a) {
                var featureFlags = _a.featureFlags;
                return featureFlags.legacy_roles;
            },
        }, [
            menuItem(t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Legacy Roles"], ["Legacy Roles"]))), {
                url: formatPath(Paths.legacyRoles),
            }),
            menuItem(t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Legacy Namespaces"], ["Legacy Namespaces"]))), {
                url: formatPath(Paths.legacyNamespaces),
            }),
        ]),
        menuItem(t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Task Management"], ["Task Management"]))), {
            url: formatPath(Paths.taskList),
            condition: function (_a) {
                var user = _a.user;
                return !user.is_anonymous;
            },
        }),
        menuItem(t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Signature Keys"], ["Signature Keys"]))), {
            url: formatPath(Paths.signatureKeys),
            condition: function (_a) {
                var featureFlags = _a.featureFlags, user = _a.user;
                return (featureFlags.collection_signing || featureFlags.container_signing) &&
                    !user.is_anonymous;
            },
        }),
        menuItem(t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Documentation"], ["Documentation"]))), {
            url: 'https://access.redhat.com/documentation/en-us/red_hat_ansible_automation_platform/',
            external: true,
            condition: function (_a) {
                var settings = _a.settings, user = _a.user;
                return settings.GALAXY_ENABLE_UNAUTHENTICATED_COLLECTION_ACCESS ||
                    !user.is_anonymous;
            },
        }),
        menuSection(t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["User Access"], ["User Access"]))), {}, [
            menuItem(t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Users"], ["Users"]))), {
                condition: function (context) { return hasPermission(context, 'galaxy.view_user'); },
                url: formatPath(Paths.userList),
            }),
            menuItem(t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Groups"], ["Groups"]))), {
                condition: function (context) { return hasPermission(context, 'galaxy.view_group'); },
                url: formatPath(Paths.groupList),
            }),
            menuItem(t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Roles"], ["Roles"]))), {
                condition: function (context) { return hasPermission(context, 'galaxy.view_group'); },
                url: formatPath(Paths.roleList),
            }),
        ]),
    ];
}
function activateMenu(items, pathname) {
    items.forEach(function (item) {
        item.active =
            item.type === 'section'
                ? activateMenu(item.items, pathname)
                : pathname.replace(/\/$/, '').startsWith(item.url.replace(/\/$/, ''));
    });
    return some(items, 'active');
}
function ItemOrSection(_a) {
    var item = _a.item, context = _a.context, expandedSections = _a.expandedSections;
    return item.type === 'section' ? (React.createElement(MenuSection, { section: item, context: context, expandedSections: expandedSections })) : (React.createElement(MenuItem, { item: item, context: context }));
}
function MenuItem(_a) {
    var item = _a.item, context = _a.context;
    return item.condition(context) ? (React.createElement(NavItem, { isActive: item.active, onClick: function (e) {
            item.onclick && item.onclick();
            e.stopPropagation();
        } }, item.url && item.external ? (React.createElement("a", { href: item.url, "data-cy": item['data-cy'], target: '_blank', rel: 'noreferrer' },
        item.name,
        React.createElement(ExternalLinkAltIcon, { style: { position: 'absolute', right: '32px' } }))) : item.url ? (React.createElement(Link, { to: item.url }, item.name)) : (item.name))) : null;
}
function MenuSection(_a) {
    var section = _a.section, context = _a.context, expandedSections = _a.expandedSections;
    return section.condition(context) ? (React.createElement(NavExpandable, { title: section.name, groupId: section.name, isActive: section.active, isExpanded: expandedSections.includes(section.name) },
        React.createElement(Menu, { items: section.items, context: context, expandedSections: expandedSections }))) : null;
}
function Menu(_a) {
    var items = _a.items, context = _a.context, expandedSections = _a.expandedSections;
    return (React.createElement(React.Fragment, null, items.map(function (item) { return (React.createElement(ItemOrSection, { key: item.name, item: item, context: context, expandedSections: expandedSections })); })));
}
export var StandaloneMenu = function (_a) {
    var repository = _a.repository, context = _a.context;
    var _b = useState([]), expandedSections = _b[0], setExpandedSections = _b[1];
    var location = useLocation();
    var _c = useState([]), menu = _c[0], setMenu = _c[1];
    useEffect(function () {
        setMenu(standaloneMenu({ repository: repository }));
    }, [repository]);
    useEffect(function () {
        activateMenu(menu, location.pathname);
        setExpandedSections(menu.filter(function (i) { return i.type === 'section' && i.active; }).map(function (i) { return i.name; }));
    }, [menu, location.pathname]);
    var onToggle = function (_a) {
        var groupId = _a.groupId, isExpanded = _a.isExpanded;
        setExpandedSections(isExpanded
            ? __spreadArray(__spreadArray([], expandedSections, true), [groupId], false) : reject(expandedSections, function (name) { return name === groupId; }));
    };
    var StandaloneNav = function (_a) {
        var _b = _a.children, children = _b === void 0 ? null : _b;
        return (React.createElement(Nav, { theme: 'dark', onToggle: onToggle },
            React.createElement(NavList, null,
                React.createElement(NavGroup, { className: 'nav-title', title: APPLICATION_NAME }),
                children)));
    };
    if (!context.user || !context.settings || !context.featureFlags) {
        return React.createElement(StandaloneNav, null);
    }
    return (React.createElement(StandaloneNav, null,
        React.createElement(Menu, { items: menu, context: context, expandedSections: expandedSections })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19;
//# sourceMappingURL=menu.js.map