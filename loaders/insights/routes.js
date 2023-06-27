import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoadingPageWithHeader } from 'src/components';
import { Paths } from 'src/paths';
var AnsibleRemoteDetail = lazy(function () { return import('src/containers/ansible-remote/detail'); });
var AnsibleRemoteEdit = lazy(function () { return import('src/containers/ansible-remote/edit'); });
var AnsibleRemoteList = lazy(function () { return import('src/containers/ansible-remote/list'); });
var AnsibleRepositoryDetail = lazy(function () { return import('src/containers/ansible-repository/detail'); });
var AnsibleRepositoryEdit = lazy(function () { return import('src/containers/ansible-repository/edit'); });
var AnsibleRepositoryList = lazy(function () { return import('src/containers/ansible-repository/list'); });
var CertificationDashboard = lazy(function () {
    return import('src/containers/certification-dashboard/certification-dashboard');
});
var CollectionContent = lazy(function () { return import('src/containers/collection-detail/collection-content'); });
var CollectionDependencies = lazy(function () { return import('src/containers/collection-detail/collection-dependencies'); });
var CollectionDetail = lazy(function () { return import('src/containers/collection-detail/collection-detail'); });
var CollectionDocs = lazy(function () { return import('src/containers/collection-detail/collection-docs'); });
var CollectionImportLog = lazy(function () { return import('src/containers/collection-detail/collection-import-log'); });
var CollectionDistributions = lazy(function () { return import('src/containers/collection-detail/collection-distributions'); });
var EditNamespace = lazy(function () { return import('src/containers/edit-namespace/edit-namespace'); });
var MyImports = lazy(function () { return import('src/containers/my-imports/my-imports'); });
var MyNamespaces = lazy(function () { return import('src/containers/namespace-list/my-namespaces'); });
var NamespaceDetail = lazy(function () { return import('src/containers/namespace-detail/namespace-detail'); });
var NotFound = lazy(function () { return import('src/containers/not-found/not-found'); });
var Partners = lazy(function () { return import('src/containers/namespace-list/partners'); });
var Search = lazy(function () { return import('src/containers/search/search'); });
var SignatureKeysList = lazy(function () { return import('src/containers/signature-keys/list'); });
var TaskDetail = lazy(function () { return import('src/containers/task-management/task_detail'); });
var TaskListView = lazy(function () { return import('src/containers/task-management/task-list-view'); });
var TokenInsights = lazy(function () { return import('src/containers/token/token-insights'); });
var routes = [
    { path: Paths.ansibleRemoteDetail, component: AnsibleRemoteDetail },
    { path: Paths.ansibleRemoteEdit, component: AnsibleRemoteEdit },
    { path: Paths.ansibleRemotes, component: AnsibleRemoteList },
    { path: Paths.ansibleRepositories, component: AnsibleRepositoryList },
    { path: Paths.ansibleRepositoryDetail, component: AnsibleRepositoryDetail },
    { path: Paths.ansibleRepositoryEdit, component: AnsibleRepositoryEdit },
    {
        path: Paths.approvalDashboard,
        component: CertificationDashboard,
    },
    { path: Paths.notFound, component: NotFound },
    { path: Paths.token, component: TokenInsights },
    { path: Paths.partners, component: Partners },
    { path: Paths.editNamespace, component: EditNamespace },
    { path: Paths.myCollections, component: NamespaceDetail },
    { path: Paths.myCollectionsByRepo, component: NamespaceDetail },
    { path: Paths.myNamespaces, component: MyNamespaces },
    { path: Paths.signatureKeys, component: SignatureKeysList },
    { path: Paths.taskList, component: TaskListView },
    { path: Paths.taskDetail, component: TaskDetail },
    {
        path: Paths.collectionDocsPageByRepo,
        component: CollectionDocs,
    },
    {
        path: Paths.collectionDocsIndexByRepo,
        component: CollectionDocs,
    },
    {
        path: Paths.collectionContentDocsByRepo,
        component: CollectionDocs,
    },
    {
        path: Paths.collectionContentListByRepo,
        component: CollectionContent,
    },
    {
        path: Paths.collectionImportLogByRepo,
        component: CollectionImportLog,
    },
    {
        path: Paths.collectionDependenciesByRepo,
        component: CollectionDependencies,
    },
    {
        component: CollectionDistributions,
        path: Paths.collectionDistributionsByRepo,
    },
    { path: Paths.collectionByRepo, component: CollectionDetail },
    { path: Paths.namespaceDetail, component: NamespaceDetail },
    { path: Paths.collections, component: Search },
    { path: Paths.collectionDocsPage, component: CollectionDocs },
    { path: Paths.collectionDocsIndex, component: CollectionDocs },
    {
        path: Paths.collectionContentDocs,
        component: CollectionDocs,
    },
    {
        path: Paths.collectionContentList,
        component: CollectionContent,
    },
    {
        path: Paths.collectionImportLog,
        component: CollectionImportLog,
    },
    { path: Paths.myImports, component: MyImports },
    { path: Paths.namespace, component: NamespaceDetail },
    { path: Paths.collections, component: Search },
    { path: '/', component: Search },
];
/**
 * changes routes depending on the path
 * https://reactrouter.com/en/main/route/route
 */
export var InsightsRoutes = function () {
    return (React.createElement(Suspense, { fallback: React.createElement(LoadingPageWithHeader, null) },
        React.createElement(Routes, null,
            routes.map(function (_a, index) {
                var Component = _a.component, path = _a.path;
                return (React.createElement(Route, { key: index, path: path, element: React.createElement(Component, { path: path }) }));
            }),
            React.createElement(Route, { path: '*', element: React.createElement(NotFound, { path: null }) }))));
};
//# sourceMappingURL=routes.js.map