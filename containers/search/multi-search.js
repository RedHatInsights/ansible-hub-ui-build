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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { t } from '@lingui/macro';
import { DataList, Label, Tooltip } from '@patternfly/react-core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CollectionVersionAPI, ExecutionEnvironmentAPI, LegacyNamespaceAPI, LegacyRoleAPI, NamespaceAPI, } from 'src/api';
import { AlertList, BaseHeader, CollectionListItem, EmptyStateXs, LegacyNamespaceListItem, LegacyRoleListItem, LoadingPageSpinner, Main, MultiSearchSearch, NamespaceListItem, closeAlert, } from 'src/components';
import { useContext } from 'src/loaders/app-context';
import { Paths, formatEEPath, formatPath } from 'src/paths';
import { ParamHelper, handleHttpError, withRouter, } from 'src/utilities';
var PageSection = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (React.createElement("section", __assign({ className: 'body' }, rest), children));
};
var SectionSeparator = function () { return React.createElement("section", null, "\u00A0"); };
var SectionTitle = function (_a) {
    var children = _a.children;
    return (React.createElement("h2", { className: 'pf-c-title' }, children));
};
var Section = function (_a) {
    var children = _a.children, title = _a.title;
    return (React.createElement(React.Fragment, null,
        React.createElement(SectionSeparator, null),
        React.createElement(PageSection, null,
            React.createElement(SectionTitle, null, title),
            children)));
};
var loading = [];
export var MultiSearch = function (props) {
    var featureFlags = useContext().featureFlags;
    var _a = useState([]), alerts = _a[0], setAlerts = _a[1];
    var _b = useState({}), params = _b[0], setParams = _b[1];
    var _c = useState([]), collections = _c[0], setCollections = _c[1];
    var _d = useState([]), roles = _d[0], setRoles = _d[1];
    var _e = useState([]), namespaces = _e[0], setNamespaces = _e[1];
    var _f = useState([]), roleNamespaces = _f[0], setRoleNamespaces = _f[1];
    var _g = useState([]), containers = _g[0], setContainers = _g[1];
    var keywords = (params === null || params === void 0 ? void 0 : params.keywords) || '';
    function addAlert(alert) {
        setAlerts(function (prevAlerts) { return __spreadArray(__spreadArray([], prevAlerts, true), [alert], false); });
    }
    function query() {
        if (!keywords) {
            setCollections([]);
            setNamespaces([]);
            setRoles([]);
            setRoleNamespaces([]);
            setContainers([]);
            return;
        }
        var shared = { page_size: 10 };
        setCollections(loading);
        CollectionVersionAPI.list(__assign(__assign({}, shared), { keywords: keywords, is_highest: true }))
            .then(function (_a) {
            var data = _a.data.data;
            return setCollections(data || []);
        })
            .catch(handleHttpError(t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Failed to search collections (", ")"], ["Failed to search collections (", ")"])), keywords), function () { return setCollections([]); }, addAlert));
        setNamespaces(loading);
        NamespaceAPI.list(__assign(__assign({}, shared), { keywords: keywords }))
            .then(function (_a) {
            var data = _a.data.data;
            return setNamespaces(data || []);
        })
            .catch(handleHttpError(t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Failed to search namespaces (", ")"], ["Failed to search namespaces (", ")"])), keywords), function () { return setNamespaces([]); }, addAlert));
        if (featureFlags.legacy_roles) {
            setRoles(loading);
            LegacyRoleAPI.list(__assign(__assign({}, shared), { keywords: keywords }))
                .then(function (_a) {
                var results = _a.data.results;
                return setRoles(results || []);
            })
                .catch(handleHttpError(t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Failed to search roles (", ")"], ["Failed to search roles (", ")"])), keywords), function () { return setRoles([]); }, addAlert));
            setRoleNamespaces(loading);
            LegacyNamespaceAPI.list(__assign(__assign({}, shared), { keywords: keywords }))
                .then(function (_a) {
                var results = _a.data.results;
                return setRoleNamespaces(results || []);
            })
                .catch(handleHttpError(t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Failed to search role namespaces (", ")"], ["Failed to search role namespaces (", ")"])), keywords), function () { return setRoleNamespaces([]); }, addAlert));
        }
        if (featureFlags.execution_environments) {
            setContainers(loading);
            ExecutionEnvironmentAPI.list(__assign(__assign({}, shared), { name__icontains: keywords }))
                .then(function (_a) {
                var data = _a.data.data;
                return setContainers(data || []);
            })
                .catch(handleHttpError(t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Failed to search execution environments (", ")"], ["Failed to search execution environments (", ")"])), keywords), function () { return setContainers([]); }, addAlert));
        }
    }
    function updateParams(params) {
        delete params.page;
        props.navigate({
            search: '?' + ParamHelper.getQueryString(params || []),
        });
        setParams(params);
    }
    useEffect(function () {
        setParams(ParamHelper.parseParamString(props.location.search));
    }, [props.location.search]);
    useEffect(function () {
        query();
    }, [keywords]);
    var ResultsSection = function (_a) {
        var children = _a.children, items = _a.items, showAllLink = _a.showAllLink, showMoreLink = _a.showMoreLink, title = _a.title;
        return items === loading || !keywords || items.length ? (React.createElement(Section, { title: title }, items === loading ? (React.createElement(LoadingPageSpinner, null)) : !keywords ? (showAllLink) : (React.createElement(React.Fragment, null,
            children,
            showMoreLink,
            React.createElement("br", null),
            showAllLink)))) : null;
    };
    var NotFoundSection = function (_a) {
        var emptyStateTitle = _a.emptyStateTitle, items = _a.items, showAllLink = _a.showAllLink, title = _a.title;
        return keywords && items !== loading && !items.length ? (React.createElement(Section, { title: title },
            React.createElement(EmptyStateXs, { title: emptyStateTitle, description: showAllLink }))) : null;
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(BaseHeader, { title: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Search"], ["Search"]))) }),
        React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return closeAlert(i, { alerts: alerts, setAlerts: setAlerts }); } }),
        React.createElement(Main, null,
            React.createElement(MultiSearchSearch, { params: params, updateParams: function (p) { return updateParams(p); } }),
            React.createElement(ResultsSection, { items: collections, title: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Collections"], ["Collections"]))), showAllLink: React.createElement(Link, { to: formatPath(Paths.collections) }, t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Show all collections"], ["Show all collections"])))), showMoreLink: React.createElement(Link, { to: formatPath(Paths.collections, {}, { keywords: keywords }) }, t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Show more collections"], ["Show more collections"])))) },
                React.createElement(DataList, { "aria-label": t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Available matching collections"], ["Available matching collections"]))) }, collections.map(function (c, i) { return (React.createElement(CollectionListItem, { key: i, collection: c, displaySignatures: featureFlags.display_signatures, showNamespace: true })); }))),
            React.createElement(ResultsSection, { items: namespaces, title: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Namespaces"], ["Namespaces"]))), showAllLink: React.createElement(Link, { to: formatPath(Paths.namespaces) }, t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Show all namespaces"], ["Show all namespaces"])))), showMoreLink: React.createElement(Link, { to: formatPath(Paths.namespaces, {}, { keywords: keywords }) }, t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Show more namespaces"], ["Show more namespaces"])))) },
                React.createElement(DataList, { "aria-label": t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Available matching namespaces"], ["Available matching namespaces"]))) }, namespaces.map(function (ns, i) { return (React.createElement(NamespaceListItem, { key: i, namespace: ns })); }))),
            featureFlags.legacy_roles ? (React.createElement(ResultsSection, { items: roles, title: t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Roles"], ["Roles"]))), showAllLink: React.createElement(Link, { to: formatPath(Paths.legacyRoles) }, t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Show all roles"], ["Show all roles"])))), showMoreLink: React.createElement(Link, { to: formatPath(Paths.legacyRoles, {}, { keywords: keywords }) }, t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Show more roles"], ["Show more roles"])))) },
                React.createElement(DataList, { "aria-label": t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Available matching roles"], ["Available matching roles"]))) }, roles.map(function (r) { return (React.createElement(LegacyRoleListItem, { key: r.id, role: r, show_thumbnail: true })); })))) : null,
            featureFlags.legacy_roles ? (React.createElement(ResultsSection, { items: roleNamespaces, title: t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Role namespaces"], ["Role namespaces"]))), showAllLink: React.createElement(Link, { to: formatPath(Paths.legacyNamespaces) }, t(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Show all role namespaces"], ["Show all role namespaces"])))), showMoreLink: React.createElement(Link, { to: formatPath(Paths.legacyNamespaces, {}, { keywords: keywords }) }, t(templateObject_21 || (templateObject_21 = __makeTemplateObject(["Show more role namespaces"], ["Show more role namespaces"])))) },
                React.createElement(DataList, { "aria-label": t(templateObject_22 || (templateObject_22 = __makeTemplateObject(["Available matching role namespaces"], ["Available matching role namespaces"]))) }, roleNamespaces.map(function (r) { return (React.createElement(LegacyNamespaceListItem, { key: r.id, namespace: r })); })))) : null,
            featureFlags.execution_environments ? (React.createElement(ResultsSection, { items: containers, title: t(templateObject_23 || (templateObject_23 = __makeTemplateObject(["Execution environments"], ["Execution environments"]))), showAllLink: React.createElement(Link, { to: formatPath(Paths.executionEnvironments) }, t(templateObject_24 || (templateObject_24 = __makeTemplateObject(["Show all execution environments"], ["Show all execution environments"])))), showMoreLink: React.createElement(Link, { to: formatPath(Paths.executionEnvironments, {}, { name__icontains: keywords }) }, t(templateObject_25 || (templateObject_25 = __makeTemplateObject(["Show more execution environments"], ["Show more execution environments"])))) },
                React.createElement(DataList, { "aria-label": t(templateObject_26 || (templateObject_26 = __makeTemplateObject(["Available matching execution environments"], ["Available matching execution environments"]))) }, containers.map(function (item, index) { return (React.createElement("section", { className: 'card-layout', key: index },
                    React.createElement("div", { className: 'card-wrapper' },
                        React.createElement("article", { className: 'pf-c-card hub-c-card-ns-container' },
                            React.createElement("div", { className: 'pf-c-card__title' },
                                React.createElement(Link, { to: formatEEPath(Paths.executionEnvironmentDetail, {
                                        container: item.pulp.distribution.base_path,
                                    }) }, item.name)),
                            React.createElement("div", { className: 'pf-c-card__body pf-m-truncate' }, item.description ? (React.createElement(Tooltip, { content: item.description }, item.description)) : null),
                            React.createElement("div", { className: 'pf-c-card__footer' },
                                React.createElement(Label, null, item.pulp.repository.remote ? t(templateObject_27 || (templateObject_27 = __makeTemplateObject(["Remote"], ["Remote"]))) : t(templateObject_28 || (templateObject_28 = __makeTemplateObject(["Local"], ["Local"]))))))))); })))) : null,
            React.createElement(SectionSeparator, null),
            React.createElement("hr", null),
            React.createElement(NotFoundSection, { items: collections, title: t(templateObject_29 || (templateObject_29 = __makeTemplateObject(["Collections"], ["Collections"]))), emptyStateTitle: t(templateObject_30 || (templateObject_30 = __makeTemplateObject(["No matching collections found."], ["No matching collections found."]))), showAllLink: React.createElement(Link, { to: formatPath(Paths.collections) }, t(templateObject_31 || (templateObject_31 = __makeTemplateObject(["Show all collections"], ["Show all collections"])))) }),
            React.createElement(NotFoundSection, { items: namespaces, title: t(templateObject_32 || (templateObject_32 = __makeTemplateObject(["Namespaces"], ["Namespaces"]))), emptyStateTitle: t(templateObject_33 || (templateObject_33 = __makeTemplateObject(["No matching namespaces found."], ["No matching namespaces found."]))), showAllLink: React.createElement(Link, { to: formatPath(Paths.namespaces) }, t(templateObject_34 || (templateObject_34 = __makeTemplateObject(["Show all namespaces"], ["Show all namespaces"])))) }),
            featureFlags.legacy_roles ? (React.createElement(NotFoundSection, { items: roles, title: t(templateObject_35 || (templateObject_35 = __makeTemplateObject(["Roles"], ["Roles"]))), emptyStateTitle: t(templateObject_36 || (templateObject_36 = __makeTemplateObject(["No matching roles found."], ["No matching roles found."]))), showAllLink: React.createElement(Link, { to: formatPath(Paths.legacyRoles) }, t(templateObject_37 || (templateObject_37 = __makeTemplateObject(["Show all roles"], ["Show all roles"])))) })) : null,
            featureFlags.legacy_roles ? (React.createElement(NotFoundSection, { items: roleNamespaces, title: t(templateObject_38 || (templateObject_38 = __makeTemplateObject(["Role namespaces"], ["Role namespaces"]))), emptyStateTitle: t(templateObject_39 || (templateObject_39 = __makeTemplateObject(["No matching role namespaces found."], ["No matching role namespaces found."]))), showAllLink: React.createElement(Link, { to: formatPath(Paths.legacyNamespaces) }, t(templateObject_40 || (templateObject_40 = __makeTemplateObject(["Show all role namespaces"], ["Show all role namespaces"])))) })) : null,
            featureFlags.execution_environments ? (React.createElement(NotFoundSection, { items: containers, title: t(templateObject_41 || (templateObject_41 = __makeTemplateObject(["Execution Environments"], ["Execution Environments"]))), emptyStateTitle: t(templateObject_42 || (templateObject_42 = __makeTemplateObject(["No matching execution environments found."], ["No matching execution environments found."]))), showAllLink: React.createElement(Link, { to: formatPath(Paths.executionEnvironments) }, t(templateObject_43 || (templateObject_43 = __makeTemplateObject(["Show all execution environments"], ["Show all execution environments"])))) })) : null)));
};
export default withRouter(MultiSearch);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36, templateObject_37, templateObject_38, templateObject_39, templateObject_40, templateObject_41, templateObject_42, templateObject_43;
//# sourceMappingURL=multi-search.js.map