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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { Trans, t } from '@lingui/macro';
import { Bullseye, DataList } from '@patternfly/react-core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from 'src/../static/images/not_found.svg';
import { CollectionVersionAPI, LegacyRoleAPI } from 'src/api';
import { BaseHeader, CollectionListItem, EmptyStateNoData, LegacyRoleListItem, LoadingPageSpinner, Main, } from 'src/components';
import { useContext } from 'src/loaders/app-context';
import { Paths, formatPath } from 'src/paths';
import { ParamHelper, withRouter } from 'src/utilities';
var PageSection = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (React.createElement("section", __assign({ className: 'body' }, rest), children));
};
var SectionSeparator = function () { return React.createElement("section", null, "\u00A0"); };
var SectionTitle = function (_a) {
    var children = _a.children;
    return (React.createElement("h2", { className: 'pf-c-title' }, children));
};
export var Dispatch = function (props) {
    var featureFlags = useContext().featureFlags;
    var pathname = ParamHelper.parseParamString(props.location.search).pathname;
    var _a = pathname.split('/').filter(Boolean), namespace = _a[0], name = _a[1];
    var _b = useState(null), collections = _b[0], setCollections = _b[1];
    var _c = useState(null), roles = _c[0], setRoles = _c[1];
    useEffect(function () {
        CollectionVersionAPI.list({ namespace: namespace, name: name, is_highest: true })
            .then(function (_a) {
            var data = _a.data.data;
            return setCollections(data || []);
        })
            .catch(function () { return setCollections([]); });
        if (featureFlags.legacy_roles) {
            LegacyRoleAPI.list({ username: namespace, name: name })
                .then(function (_a) {
                var results = _a.data.results;
                return setRoles(results || []);
            })
                .catch(function () { return setRoles([]); });
        }
    }, [pathname]);
    return (React.createElement(React.Fragment, null,
        React.createElement(BaseHeader, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["404 - Page not found"], ["404 - Page not found"]))) }),
        React.createElement(Main, null,
            React.createElement(PageSection, null,
                React.createElement(Bullseye, null,
                    React.createElement("div", { className: 'hub-c-bullseye__center' },
                        React.createElement("img", { src: NotFoundImage, alt: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Not found"], ["Not found"]))), width: '128px' }),
                        React.createElement("div", null, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["We couldn't find the page you're looking for!"], ["We couldn't find the page you're looking for!"])))),
                        React.createElement("div", { className: 'pf-c-content' },
                            React.createElement(Trans, null,
                                "Pathname",
                                ' ',
                                React.createElement("pre", { style: { display: 'inline-block' } }, pathname),
                                ' ',
                                "could refer to a collection or a role."),
                            ' ',
                            featureFlags.legacy_roles ? null : (React.createElement(Trans, null, "Roles are not currently enabled.")))))),
            React.createElement(SectionSeparator, null),
            React.createElement(PageSection, null,
                React.createElement(SectionTitle, null, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Collections"], ["Collections"])))),
                collections === null ? (React.createElement(LoadingPageSpinner, null)) : collections.length === 0 ? (React.createElement(EmptyStateNoData, { title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["No matching collections found."], ["No matching collections found."]))), description: React.createElement(Link, { to: formatPath(Paths.collections) }, t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Show all collections"], ["Show all collections"])))) })) : (React.createElement(React.Fragment, null,
                    React.createElement(DataList, { "aria-label": t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Available matching collections"], ["Available matching collections"]))) }, collections.map(function (c, i) { return (React.createElement(CollectionListItem, { key: i, collection: c, displaySignatures: featureFlags.display_signatures, showNamespace: true })); })),
                    React.createElement(Link, { to: formatPath(Paths.collections) }, t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Show all collections"], ["Show all collections"]))))))),
            featureFlags.legacy_roles ? (React.createElement(React.Fragment, null,
                React.createElement(SectionSeparator, null),
                React.createElement(PageSection, null,
                    React.createElement(SectionTitle, null, t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Legacy roles"], ["Legacy roles"])))),
                    roles === null ? (React.createElement(LoadingPageSpinner, null)) : roles.length === 0 ? (React.createElement(EmptyStateNoData, { title: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["No matching legacy roles found."], ["No matching legacy roles found."]))), description: React.createElement(Link, { to: formatPath(Paths.legacyRoles) }, t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Show all legacy roles"], ["Show all legacy roles"])))) })) : (React.createElement(React.Fragment, null,
                        React.createElement(DataList, { "aria-label": t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Available matching legacy roles"], ["Available matching legacy roles"]))) }, roles.map(function (r) { return (React.createElement(LegacyRoleListItem, { key: r.id, role: r, show_thumbnail: true })); })),
                        React.createElement(Link, { to: formatPath(Paths.legacyRoles) }, t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Show all legacy roles"], ["Show all legacy roles"]))))))))) : null)));
};
export default withRouter(Dispatch);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
//# sourceMappingURL=dispatch.js.map