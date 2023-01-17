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
import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { CertificationDashboard, CollectionContent, CollectionDependencies, CollectionDetail, CollectionDocs, CollectionImportLog, EditNamespace, EditRole, EditUser, ExecutionEnvironmentDetail, ExecutionEnvironmentDetailActivities, ExecutionEnvironmentDetailImages, ExecutionEnvironmentDetailOwners, ExecutionEnvironmentList, ExecutionEnvironmentManifest, ExecutionEnvironmentRegistryList, GroupDetail, GroupList, LegacyNamespace, LegacyNamespaces, LegacyRole, LegacyRoles, LoginPage, MyImports, MyNamespaces, NamespaceDetail, NotFound, Partners, RepositoryList, RoleCreate, RoleList, Search, SignatureKeysList, TaskDetail, TaskListView, TokenPageStandalone, UserCreate, UserDetail, UserList, UserProfile, } from 'src/containers';
import { AppContext, useContext } from 'src/loaders/app-context';
import { loadContext } from 'src/loaders/load-context';
import { Paths, formatPath } from 'src/paths';
var AuthHandler = function (_a) {
    var Component = _a.component, isDisabled = _a.isDisabled, noAuth = _a.noAuth, path = _a.path, updateInitialData = _a.updateInitialData;
    var _b = useContext(), user = _b.user, settings = _b.settings, featureFlags = _b.featureFlags;
    var _c = useState(!user || !settings || !featureFlags), isLoading = _c[0], setLoading = _c[1];
    var pathname = useLocation().pathname;
    useEffect(function () {
        // This component is mounted on every route change, so it's a good place
        // to check for an active user.
        if (user && settings && featureFlags) {
            return;
        }
        loadContext()
            .then(function (data) { return updateInitialData(data); })
            .then(function () { return setLoading(false); });
    }, []);
    if (isLoading) {
        return null;
    }
    var isExternalAuth = featureFlags.external_authentication;
    if (!user && !noAuth) {
        // NOTE: also update LoginLink when changing this
        if (isExternalAuth && UI_EXTERNAL_LOGIN_URI) {
            window.location.replace(UI_EXTERNAL_LOGIN_URI);
            return null;
        }
        return React.createElement(Navigate, { to: formatPath(Paths.login, {}, { next: pathname }) });
    }
    // only enforce this if feature flags are set. Otherwise the container
    // registry will always return a 404 on the first load.
    if (isDisabled) {
        return React.createElement(NotFound, { path: path });
    }
    return React.createElement(Component, { path: path });
};
var StandaloneRoutes = /** @class */ (function (_super) {
    __extends(StandaloneRoutes, _super);
    function StandaloneRoutes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Note: must be ordered from most specific to least specific
    StandaloneRoutes.prototype.getRoutes = function () {
        var _a = this.context, featureFlags = _a.featureFlags, user = _a.user;
        var isContainerDisabled = true;
        var isUserMgmtDisabled = false;
        if (featureFlags) {
            isContainerDisabled = !featureFlags.execution_environments;
            isUserMgmtDisabled = featureFlags.external_authentication;
        }
        return [
            {
                component: ExecutionEnvironmentDetailActivities,
                path: Paths.executionEnvironmentDetailActivitiesWithNamespace,
                isDisabled: isContainerDisabled,
            },
            {
                component: ExecutionEnvironmentDetailOwners,
                path: Paths.executionEnvironmentDetailOwnersWithNamespace,
                isDisabled: isContainerDisabled,
            },
            {
                component: ExecutionEnvironmentManifest,
                path: Paths.executionEnvironmentManifestWithNamespace,
                isDisabled: isContainerDisabled,
            },
            {
                component: ExecutionEnvironmentDetailImages,
                path: Paths.executionEnvironmentDetailImagesWithNamespace,
                isDisabled: isContainerDisabled,
            },
            {
                component: ExecutionEnvironmentDetail,
                path: Paths.executionEnvironmentDetailWithNamespace,
                isDisabled: isContainerDisabled,
            },
            {
                component: ExecutionEnvironmentDetailActivities,
                path: Paths.executionEnvironmentDetailActivities,
                isDisabled: isContainerDisabled,
            },
            {
                component: ExecutionEnvironmentDetailOwners,
                path: Paths.executionEnvironmentDetailOwners,
                isDisabled: isContainerDisabled,
            },
            {
                component: ExecutionEnvironmentManifest,
                path: Paths.executionEnvironmentManifest,
                isDisabled: isContainerDisabled,
            },
            {
                component: ExecutionEnvironmentDetailImages,
                path: Paths.executionEnvironmentDetailImages,
                isDisabled: isContainerDisabled,
            },
            {
                component: ExecutionEnvironmentDetail,
                path: Paths.executionEnvironmentDetail,
                isDisabled: isContainerDisabled,
            },
            {
                component: ExecutionEnvironmentList,
                path: Paths.executionEnvironments,
                isDisabled: isContainerDisabled,
            },
            {
                component: ExecutionEnvironmentRegistryList,
                path: Paths.executionEnvironmentsRegistries,
                isDisabled: isContainerDisabled,
            },
            // LEGACY ...
            { component: LegacyNamespace, path: Paths.legacyNamespace },
            { component: LegacyNamespaces, path: Paths.legacyNamespaces },
            { component: LegacyRole, path: Paths.legacyRole },
            { component: LegacyRoles, path: Paths.legacyRoles },
            {
                component: TaskListView,
                path: Paths.taskList,
            },
            { component: GroupList, path: Paths.groupList },
            { component: GroupDetail, path: Paths.groupDetail },
            { component: TaskDetail, path: Paths.taskDetail },
            { component: EditRole, path: Paths.roleEdit },
            {
                component: RoleCreate,
                path: Paths.createRole,
                isDisabled: !(user === null || user === void 0 ? void 0 : user.is_superuser),
            },
            { component: RoleList, path: Paths.roleList },
            { component: RepositoryList, path: Paths.repositories },
            { component: UserProfile, path: Paths.userProfileSettings },
            {
                component: UserCreate,
                path: Paths.createUser,
                isDisabled: isUserMgmtDisabled,
            },
            { component: SignatureKeysList, path: Paths.signatureKeys },
            {
                component: EditUser,
                path: Paths.editUser,
                isDisabled: isUserMgmtDisabled,
            },
            { component: UserDetail, path: Paths.userDetail },
            { component: UserList, path: Paths.userList },
            { component: CertificationDashboard, path: Paths.approvalDashboard },
            { component: NotFound, path: Paths.notFound },
            { component: TokenPageStandalone, path: Paths.token },
            { component: Partners, path: Paths[NAMESPACE_TERM] },
            { component: EditNamespace, path: Paths.editNamespace },
            { component: NamespaceDetail, path: Paths.myCollections },
            { component: NamespaceDetail, path: Paths.myCollectionsByRepo },
            { component: MyNamespaces, path: Paths.myNamespaces },
            { component: LoginPage, path: Paths.login, noAuth: true },
            { component: CollectionDocs, path: Paths.collectionDocsPageByRepo },
            { component: CollectionDocs, path: Paths.collectionDocsIndexByRepo },
            { component: CollectionDocs, path: Paths.collectionContentDocsByRepo },
            { component: CollectionContent, path: Paths.collectionContentListByRepo },
            { component: CollectionImportLog, path: Paths.collectionImportLogByRepo },
            {
                component: CollectionDependencies,
                path: Paths.collectionDependenciesByRepo,
            },
            { component: CollectionDetail, path: Paths.collectionByRepo },
            { component: NamespaceDetail, path: Paths.namespaceByRepo },
            { component: Search, path: Paths.searchByRepo },
            { component: CollectionDocs, path: Paths.collectionDocsPage },
            { component: CollectionDocs, path: Paths.collectionDocsIndex },
            { component: CollectionDocs, path: Paths.collectionContentDocs },
            { component: CollectionContent, path: Paths.collectionContentList },
            { component: CollectionImportLog, path: Paths.collectionImportLog },
            { component: MyImports, path: Paths.myImports },
            { component: CollectionDetail, path: Paths.collection },
            { component: NamespaceDetail, path: Paths.namespace },
            { component: Search, path: Paths.search },
        ];
    };
    StandaloneRoutes.prototype.render = function () {
        var updateInitialData = this.props.updateInitialData;
        return (React.createElement(Routes, null,
            this.getRoutes().map(function (_a, index) {
                var component = _a.component, isDisabled = _a.isDisabled, noAuth = _a.noAuth, path = _a.path;
                return (React.createElement(Route, { element: React.createElement(AuthHandler, { component: component, isDisabled: isDisabled, noAuth: noAuth, path: path, updateInitialData: updateInitialData }), key: index, path: path }));
            }),
            React.createElement(Route, { path: '*', element: React.createElement(AuthHandler, { component: NotFound, noAuth: true, path: null, updateInitialData: updateInitialData }) })));
    };
    StandaloneRoutes.contextType = AppContext;
    return StandaloneRoutes;
}(React.Component));
export { StandaloneRoutes };
//# sourceMappingURL=routes.js.map