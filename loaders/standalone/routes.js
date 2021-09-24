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
import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CertificationDashboard, CollectionContent, CollectionDetail, CollectionDocs, CollectionImportLog, CollectionDependencies, EditNamespace, LoginPage, MyImports, NamespaceDetail, MyNamespaces, Partners, NotFound, Search, TokenPageStandalone, UserList, EditUser, UserDetail, UserCreate, UserProfile, GroupList, GroupDetail, RepositoryList, ExecutionEnvironmentList, ExecutionEnvironmentRegistryList, ExecutionEnvironmentDetail, ExecutionEnvironmentDetailActivities, ExecutionEnvironmentDetailImages, ExecutionEnvironmentManifest, TaskListView, TaskDetail, } from 'src/containers';
import { ActiveUserAPI, FeatureFlagsAPI, SettingsAPI, } from 'src/api';
import { AppContext } from '../app-context';
import { Paths, formatPath } from 'src/paths';
var AuthHandler = /** @class */ (function (_super) {
    __extends(AuthHandler, _super);
    function AuthHandler(props, context) {
        var _this = _super.call(this, props) || this;
        _this.state = { isLoading: !context.user };
        return _this;
    }
    AuthHandler.prototype.componentDidMount = function () {
        var _this = this;
        // This component is mounted on every route change, so it's a good place
        // to check for an active user.
        var _a = this.context, user = _a.user, settings = _a.settings;
        if (!user || !settings) {
            var promises = [];
            promises.push(FeatureFlagsAPI.get());
            promises.push(ActiveUserAPI.getUser());
            promises.push(SettingsAPI.get());
            Promise.all(promises)
                .then(function (results) {
                _this.props.updateInitialData(results[1], results[0].data, results[2].data, function () { return _this.setState({ isLoading: false }); });
            })
                .catch(function () { return _this.setState({ isLoading: false }); });
        }
    };
    AuthHandler.prototype.render = function () {
        var isLoading = this.state.isLoading;
        var _a = this.props, Component = _a.Component, noAuth = _a.noAuth, props = __rest(_a, ["Component", "noAuth"]);
        var _b = this.context, user = _b.user, featureFlags = _b.featureFlags;
        var isExternalAuth = false;
        if (featureFlags) {
            isExternalAuth = featureFlags.external_authentication;
        }
        if (isLoading) {
            return null;
        }
        if (!user && !noAuth) {
            if (isExternalAuth && UI_EXTERNAL_LOGIN_URI) {
                window.location.replace(UI_EXTERNAL_LOGIN_URI);
                return React.createElement("div", null);
            }
            return (React.createElement(Redirect, { push: true, to: formatPath(Paths.login, {}, { next: props.location.pathname }) }));
        }
        // only enforce this if feature flags are set. Otherwise the container
        // registry will always return a 404 on the first load.
        if (this.props.isDisabled) {
            return React.createElement(Redirect, { push: true, to: Paths.notFound });
        }
        return React.createElement(Component, __assign({}, props));
    };
    AuthHandler.contextType = AppContext;
    return AuthHandler;
}(React.Component));
var Routes = /** @class */ (function (_super) {
    __extends(Routes, _super);
    function Routes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Note: must be ordered from most specific to least specific
    Routes.prototype.getRoutes = function () {
        var featureFlags = this.context.featureFlags;
        var isContainerDisabled = true;
        var isUserMgmtDisabled = false;
        if (featureFlags) {
            isContainerDisabled = !featureFlags.execution_environments;
            isUserMgmtDisabled = featureFlags.external_authentication;
        }
        return [
            {
                comp: ExecutionEnvironmentDetailActivities,
                path: Paths.executionEnvironmentDetailActivities,
                isDisabled: isContainerDisabled,
            },
            {
                comp: ExecutionEnvironmentManifest,
                path: Paths.executionEnvironmentManifest,
                isDisabled: isContainerDisabled,
            },
            {
                comp: ExecutionEnvironmentDetailImages,
                path: Paths.executionEnvironmentDetailImages,
                isDisabled: isContainerDisabled,
            },
            {
                comp: ExecutionEnvironmentDetail,
                path: Paths.executionEnvironmentDetail,
                isDisabled: isContainerDisabled,
            },
            {
                comp: ExecutionEnvironmentList,
                path: Paths.executionEnvironments,
                isDisabled: isContainerDisabled,
            },
            {
                comp: ExecutionEnvironmentRegistryList,
                path: Paths.executionEnvironmentsRegistries,
                isDisabled: isContainerDisabled,
            },
            {
                comp: TaskListView,
                path: Paths.taskList,
            },
            { comp: GroupList, path: Paths.groupList },
            { comp: GroupDetail, path: Paths.groupDetail },
            { comp: TaskDetail, path: Paths.taskDetail },
            { comp: RepositoryList, path: Paths.repositories },
            { comp: UserProfile, path: Paths.userProfileSettings },
            {
                comp: UserCreate,
                path: Paths.createUser,
                isDisabled: isUserMgmtDisabled,
            },
            { comp: EditUser, path: Paths.editUser, isDisabled: isUserMgmtDisabled },
            { comp: UserDetail, path: Paths.userDetail },
            { comp: UserList, path: Paths.userList },
            { comp: CertificationDashboard, path: Paths.approvalDashboard },
            { comp: NotFound, path: Paths.notFound },
            { comp: TokenPageStandalone, path: Paths.token },
            { comp: Partners, path: Paths[NAMESPACE_TERM] },
            { comp: EditNamespace, path: Paths.editNamespace },
            { comp: NamespaceDetail, path: Paths.myCollections },
            { comp: NamespaceDetail, path: Paths.myCollectionsByRepo },
            { comp: MyNamespaces, path: Paths.myNamespaces },
            { comp: LoginPage, path: Paths.login, noAuth: true },
            { comp: CollectionDocs, path: Paths.collectionDocsPageByRepo },
            { comp: CollectionDocs, path: Paths.collectionDocsIndexByRepo },
            { comp: CollectionDocs, path: Paths.collectionContentDocsByRepo },
            { comp: CollectionContent, path: Paths.collectionContentListByRepo },
            { comp: CollectionImportLog, path: Paths.collectionImportLogByRepo },
            {
                comp: CollectionDependencies,
                path: Paths.collectionDependenciesByRepo,
            },
            { comp: CollectionDetail, path: Paths.collectionByRepo },
            { comp: NamespaceDetail, path: Paths.namespaceByRepo },
            { comp: Search, path: Paths.searchByRepo },
            { comp: CollectionDocs, path: Paths.collectionDocsPage },
            { comp: CollectionDocs, path: Paths.collectionDocsIndex },
            { comp: CollectionDocs, path: Paths.collectionContentDocs },
            { comp: CollectionContent, path: Paths.collectionContentList },
            { comp: CollectionImportLog, path: Paths.collectionImportLog },
            { comp: MyImports, path: Paths.myImports },
            { comp: CollectionDetail, path: Paths.collection },
            { comp: NamespaceDetail, path: Paths.namespace },
            { comp: Search, path: Paths.search },
        ];
    };
    Routes.prototype.render = function () {
        var _this = this;
        return (React.createElement(Switch, null, this.getRoutes().map(function (route, index) { return (React.createElement(Route, { key: index, render: function (props) { return (React.createElement(AuthHandler, __assign({ updateInitialData: _this.props.updateInitialData, noAuth: route.noAuth, Component: route.comp, isDisabled: route.isDisabled }, props))); }, path: route.path })); })));
    };
    Routes.contextType = AppContext;
    return Routes;
}(React.Component));
export { Routes };
//# sourceMappingURL=routes.js.map