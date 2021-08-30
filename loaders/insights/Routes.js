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
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import asyncComponent from 'src/utilities/asyncComponent';
import some from 'lodash/some';
import { Paths } from 'src/paths';
/**
 * Aysnc imports of components
 *
 * https://webpack.js.org/guides/code-splitting/
 * https://reactjs.org/docs/code-splitting.html
 *
 * pros:
 *      1) code splitting
 *      2) can be used in server-side rendering
 * cons:
 *      1) nameing chunk names adds unnecessary docs to code,
 *         see the difference with DashboardMap and InventoryDeployments.
 *
 */
var EditNamespace = asyncComponent(function () {
    return import(
    /* webpackChunkName: "namespace_detail" */
    '../../containers/edit-namespace/edit-namespace');
});
var CollectionDetail = asyncComponent(function () {
    return import(
    /* webpackChunkName: "collection_detail" */
    '../../containers/collection-detail/collection-detail');
});
var CollectionContent = asyncComponent(function () {
    return import(
    /* webpackChunkName: "collection_detail" */
    '../../containers/collection-detail/collection-content');
});
var CollectionDocs = asyncComponent(function () {
    return import(
    /* webpackChunkName: "collection_detail" */
    '../../containers/collection-detail/collection-docs');
});
var CollectionImportLog = asyncComponent(function () {
    return import(
    /* webpackChunkName: "collection_detail" */
    '../../containers/collection-detail/collection-import-log');
});
var NotFound = asyncComponent(function () {
    return import(
    /* webpackChunkName: "not_found" */
    '../../containers/not-found/not-found');
});
var MyNamespaces = asyncComponent(function () {
    return import(
    /* webpackChunkName: "namespace_list" */
    '../../containers/namespace-list/my-namespaces');
});
var ManageNamespace = asyncComponent(function () {
    return import(
    /* webpackChunkName: "namespace_detail" */
    '../../containers/namespace-detail/namespace-detail');
});
var PartnerDetail = asyncComponent(function () {
    return import(
    /* webpackChunkName: "namespace_detail" */
    '../../containers/namespace-detail/namespace-detail');
});
var Partners = asyncComponent(function () {
    return import(
    /* webpackChunkName: "namespace_list" */
    '../../containers/namespace-list/' + NAMESPACE_TERM);
});
var MyImports = asyncComponent(function () {
    return import(
    /* webpackChunkName: "my_imports" */
    '../../containers/my-imports/my-imports');
});
var Search = asyncComponent(function () {
    return import(
    /* webpackChunkName: "search" */
    '../../containers/search/search');
});
var TokenPage = asyncComponent(function () {
    return import(
    /* webpackChunkName: "settings" */
    '../../containers/token/token-insights');
});
var CertificationDashboard = asyncComponent(function () {
    return import(
    /* webpackChunkName: "settings" */
    '../../containers/certification-dashboard/certification-dashboard');
});
var Repository = asyncComponent(function () {
    return import(
    /* webpackChunkName: "repository-list" */
    '../../containers/repositories/repository-list');
});
var InsightsRoute = function (_a) {
    var Component = _a.component, rootClass = _a.rootClass, rest = __rest(_a, ["component", "rootClass"]);
    var root = document.getElementById('root');
    root.removeAttribute('class');
    root.classList.add("page__" + rootClass, 'pf-c-page__main');
    root.setAttribute('role', 'main');
    return React.createElement(Route, __assign({}, rest, { component: Component }));
};
InsightsRoute.propTypes = {
    component: PropTypes.func,
    rootClass: PropTypes.string,
};
/**
 * the Switch component changes routes depending on the path.
 *
 * Route properties:
 *      exact - path must match exactly,
 *      path - https://prod.foo.redhat.com:1337/insights/advisor/rules
 *      component - component to be rendered when a route has been chosen.
 */
export var Routes = function (props) {
    var path = props.childProps.location.pathname;
    return (React.createElement(Switch, null,
        React.createElement(InsightsRoute, { path: Paths.repositories, component: Repository, rootClass: 'root' }),
        React.createElement(InsightsRoute, { path: Paths.approvalDashboard, component: CertificationDashboard, rootClass: 'root' }),
        React.createElement(InsightsRoute, { path: Paths.notFound, component: NotFound, rootClass: 'root' }),
        React.createElement(InsightsRoute, { path: Paths.token, component: TokenPage, rootClass: 'root' }),
        React.createElement(InsightsRoute, { path: Paths[NAMESPACE_TERM], component: Partners, rootClass: 'root' }),
        React.createElement(InsightsRoute, { path: Paths.editNamespace, component: EditNamespace, rootClass: 'root' }),
        React.createElement(InsightsRoute, { path: Paths.myCollections, component: ManageNamespace, rootClass: 'root' }),
        React.createElement(InsightsRoute, { path: Paths.myCollectionsByRepo, component: ManageNamespace, rootClass: 'root' }),
        React.createElement(InsightsRoute, { path: Paths.myNamespaces, component: MyNamespaces, rootClass: 'root' }),
        React.createElement(InsightsRoute, { path: Paths.collectionDocsPageByRepo, component: CollectionDocs, rootClass: 'root' }),
        React.createElement(InsightsRoute, { path: Paths.collectionDocsIndexByRepo, component: CollectionDocs, rootClass: 'root' }),
        React.createElement(InsightsRoute, { path: Paths.collectionContentDocsByRepo, component: CollectionDocs, rootClass: 'root' }),
        React.createElement(InsightsRoute, { path: Paths.collectionContentListByRepo, component: CollectionContent, rootClass: 'root' }),
        React.createElement(InsightsRoute, { path: Paths.collectionImportLogByRepo, component: CollectionImportLog, rootClass: 'root' }),
        React.createElement(InsightsRoute, { path: Paths.collectionByRepo, component: CollectionDetail, rootClass: 'root' }),
        React.createElement(InsightsRoute, { path: Paths.namespaceByRepo, component: PartnerDetail, rootClass: 'root' }),
        React.createElement(InsightsRoute, { path: Paths.searchByRepo, component: Search, rootClass: 'root' }),
        React.createElement(InsightsRoute, { path: Paths.collectionDocsPage, component: CollectionDocs, rootClass: 'root' }),
        React.createElement(InsightsRoute, { path: Paths.collectionDocsIndex, component: CollectionDocs, rootClass: 'root' }),
        React.createElement(InsightsRoute, { path: Paths.collectionContentDocs, component: CollectionDocs, rootClass: 'root' }),
        React.createElement(InsightsRoute, { path: Paths.collectionContentList, component: CollectionContent, rootClass: 'root' }),
        React.createElement(InsightsRoute, { path: Paths.collectionImportLog, component: CollectionImportLog, rootClass: 'root' }),
        React.createElement(InsightsRoute, { path: Paths.myImports, component: MyImports, rootClass: 'root' }),
        React.createElement(InsightsRoute, { path: Paths.collection, component: CollectionDetail, rootClass: 'root' }),
        React.createElement(InsightsRoute, { path: Paths.namespace, component: PartnerDetail, rootClass: 'root' }),
        React.createElement(InsightsRoute, { path: Paths.search, component: Search, rootClass: 'root' }),
        React.createElement(Route, { render: function () {
                return some(Paths, function (p) { return p === path; }) ? null : (React.createElement(Redirect, { to: Paths.notFound }));
            } })));
};
//# sourceMappingURL=Routes.js.map