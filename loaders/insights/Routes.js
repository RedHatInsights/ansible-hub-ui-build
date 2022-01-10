import { Route, Switch, Redirect } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Paths } from 'src/paths';
import { LoadingPageWithHeader } from 'src/components';
var EditNamespace = lazy(function () {
    return import(
    /* webpackChunkName: "namespace_detail" */
    '../../containers/edit-namespace/edit-namespace');
});
var CollectionDetail = lazy(function () {
    return import(
    /* webpackChunkName: "collection_detail" */
    '../../containers/collection-detail/collection-detail');
});
var CollectionContent = lazy(function () {
    return import(
    /* webpackChunkName: "collection_detail" */
    '../../containers/collection-detail/collection-content');
});
var CollectionDocs = lazy(function () {
    return import(
    /* webpackChunkName: "collection_detail" */
    '../../containers/collection-detail/collection-docs');
});
var CollectionImportLog = lazy(function () {
    return import(
    /* webpackChunkName: "collection_detail" */
    '../../containers/collection-detail/collection-import-log');
});
var CollectionDependencies = lazy(function () {
    return import(
    /* webpackChunkName: "collection_detail" */
    '../../containers/collection-detail/collection-dependencies');
});
var NotFound = lazy(function () {
    return import(
    /* webpackChunkName: "not_found" */
    '../../containers/not-found/not-found');
});
var MyNamespaces = lazy(function () {
    return import(
    /* webpackChunkName: "namespace_list" */
    '../../containers/namespace-list/my-namespaces');
});
var ManageNamespace = lazy(function () {
    return import(
    /* webpackChunkName: "namespace_detail" */
    '../../containers/namespace-detail/namespace-detail');
});
var PartnerDetail = lazy(function () {
    return import(
    /* webpackChunkName: "namespace_detail" */
    '../../containers/namespace-detail/namespace-detail');
});
var Partners = lazy(function () {
    return import(
    /* webpackChunkName: "namespace_list" */
    '../../containers/namespace-list/' + NAMESPACE_TERM);
});
var MyImports = lazy(function () {
    return import(
    /* webpackChunkName: "my_imports" */
    '../../containers/my-imports/my-imports');
});
var Search = lazy(function () {
    return import(
    /* webpackChunkName: "search" */
    '../../containers/search/search');
});
var TokenPage = lazy(function () {
    return import(
    /* webpackChunkName: "settings" */
    '../../containers/token/token-insights');
});
var CertificationDashboard = lazy(function () {
    return import(
    /* webpackChunkName: "settings" */
    '../../containers/certification-dashboard/certification-dashboard');
});
var Repository = lazy(function () {
    return import(
    /* webpackChunkName: "repository-list" */
    '../../containers/repositories/repository-list');
});
/**
 * the Switch component changes routes depending on the path.
 *
 * Route properties:
 *      exact - path must match exactly,
 *      path - https://prod.foo.redhat.com:1337/insights/advisor/rules
 *      component - component to be rendered when a route has been chosen.
 */
export var Routes = function () {
    return (React.createElement(Suspense, { fallback: LoadingPageWithHeader },
        React.createElement(Switch, null,
            React.createElement(Route, { path: Paths.repositories, component: Repository }),
            React.createElement(Route, { path: Paths.approvalDashboard, component: CertificationDashboard }),
            React.createElement(Route, { path: Paths.notFound, component: NotFound }),
            React.createElement(Route, { path: Paths.token, component: TokenPage }),
            React.createElement(Route, { path: Paths[NAMESPACE_TERM], component: Partners }),
            React.createElement(Route, { path: Paths.editNamespace, component: EditNamespace }),
            React.createElement(Route, { path: Paths.myCollections, component: ManageNamespace }),
            React.createElement(Route, { path: Paths.myCollectionsByRepo, component: ManageNamespace }),
            React.createElement(Route, { path: Paths.myNamespaces, component: MyNamespaces }),
            React.createElement(Route, { path: Paths.collectionDocsPageByRepo, component: CollectionDocs }),
            React.createElement(Route, { path: Paths.collectionDocsIndexByRepo, component: CollectionDocs }),
            React.createElement(Route, { path: Paths.collectionContentDocsByRepo, component: CollectionDocs }),
            React.createElement(Route, { path: Paths.collectionContentListByRepo, component: CollectionContent }),
            React.createElement(Route, { path: Paths.collectionImportLogByRepo, component: CollectionImportLog }),
            React.createElement(Route, { path: Paths.collectionDependenciesByRepo, component: CollectionDependencies }),
            React.createElement(Route, { path: Paths.collectionByRepo, component: CollectionDetail }),
            React.createElement(Route, { path: Paths.namespaceByRepo, component: PartnerDetail }),
            React.createElement(Route, { path: Paths.searchByRepo, component: Search }),
            React.createElement(Route, { path: Paths.collectionDocsPage, component: CollectionDocs }),
            React.createElement(Route, { path: Paths.collectionDocsIndex, component: CollectionDocs }),
            React.createElement(Route, { path: Paths.collectionContentDocs, component: CollectionDocs }),
            React.createElement(Route, { path: Paths.collectionContentList, component: CollectionContent }),
            React.createElement(Route, { path: Paths.collectionImportLog, component: CollectionImportLog }),
            React.createElement(Route, { path: Paths.myImports, component: MyImports }),
            React.createElement(Route, { path: Paths.collection, component: CollectionDetail }),
            React.createElement(Route, { path: Paths.namespace, component: PartnerDetail }),
            React.createElement(Route, { path: Paths.search, component: Search }),
            React.createElement(Route, null,
                React.createElement(Redirect, { push: true, to: Paths.notFound })))));
};
Routes.propTypes = {
    childProps: PropTypes.shape({
        location: PropTypes.shape({
            pathname: PropTypes.string,
        }),
    }),
};
//# sourceMappingURL=Routes.js.map