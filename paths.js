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
import { t } from '@lingui/macro';
import { Constants } from 'src/constants';
import { ParamHelper } from 'src/utilities';
export function formatPath(path, data, params) {
    if (data === void 0) { data = {}; }
    // insights router has basename="/", "/beta/" or "/preview/", with hub under a nested "ansible/automation-hub" route - our urls are relative to that
    var url = DEPLOYMENT_MODE === Constants.INSIGHTS_DEPLOYMENT_MODE
        ? UI_BASE_PATH.replace('/preview/', '/')
            .replace('/beta/', '/')
            .replace(/\/$/, '')
        : '';
    url += path + '/';
    url = url.replaceAll('//', '/');
    for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
        var k = _a[_i];
        url = url.replace(':' + k, encodeURIComponent(data[k]));
    }
    if (params) {
        var path_1 = "".concat(url, "?").concat(ParamHelper.getQueryString(params));
        return path_1;
    }
    else {
        return url;
    }
}
// handle long/short EE routes:
// (path, container: 'namespaced/name') -> (pathWithNamespace, { namespace: 'namespaced', container: 'name' })
// (path, container: 'simple') -> (path, { container: 'simple' })
// see also withContainerParamFix
export function formatEEPath(path, data, params) {
    var _a;
    var _b;
    var pathsWithNamespace = (_a = {},
        _a[Paths.executionEnvironmentDetail] = Paths.executionEnvironmentDetailWithNamespace,
        _a[Paths.executionEnvironmentDetailActivities] = Paths.executionEnvironmentDetailActivitiesWithNamespace,
        _a[Paths.executionEnvironmentDetailImages] = Paths.executionEnvironmentDetailImagesWithNamespace,
        _a[Paths.executionEnvironmentDetailAccess] = Paths.executionEnvironmentDetailAccessWithNamespace,
        _a[Paths.executionEnvironmentManifest] = Paths.executionEnvironmentManifestWithNamespace,
        _a);
    if ((_b = data.container) === null || _b === void 0 ? void 0 : _b.includes('/')) {
        var _c = data.container.split('/'), namespace = _c[0], container = _c[1];
        var pathWithNamespace = pathsWithNamespace[path];
        return formatPath(pathWithNamespace, __assign(__assign({}, data), { namespace: namespace, container: container }), params);
    }
    return formatPath(path, data, params);
}
export var Paths;
(function (Paths) {
    Paths["ansibleRemoteDetail"] = "/ansible/remotes/:name";
    Paths["ansibleRemoteEdit"] = "/ansible/remotes/:name/edit";
    Paths["ansibleRemotes"] = "/ansible/remotes";
    Paths["ansibleRepositories"] = "/ansible/repositories";
    Paths["ansibleRepositoryDetail"] = "/ansible/repositories/:name";
    Paths["ansibleRepositoryEdit"] = "/ansible/repositories/:name/edit";
    Paths["dispatch"] = "/dispatch";
    Paths["executionEnvironmentDetail"] = "/containers/:container";
    Paths["executionEnvironmentDetailWithNamespace"] = "/containers/:namespace/:container";
    Paths["executionEnvironmentDetailActivities"] = "/containers/:container/_content/activity";
    Paths["executionEnvironmentDetailActivitiesWithNamespace"] = "/containers/:namespace/:container/_content/activity";
    Paths["executionEnvironmentDetailImages"] = "/containers/:container/_content/images";
    Paths["executionEnvironmentDetailImagesWithNamespace"] = "/containers/:namespace/:container/_content/images";
    Paths["executionEnvironmentDetailAccess"] = "/containers/:container/_content/access";
    Paths["executionEnvironmentDetailAccessWithNamespace"] = "/containers/:namespace/:container/_content/access";
    Paths["executionEnvironmentManifest"] = "/containers/:container/_content/images/:digest";
    Paths["executionEnvironmentManifestWithNamespace"] = "/containers/:namespace/:container/_content/images/:digest";
    Paths["executionEnvironments"] = "/containers";
    Paths["executionEnvironmentsRegistries"] = "/registries";
    Paths["roleEdit"] = "/role/:role";
    Paths["roleList"] = "/roles";
    Paths["createRole"] = "/roles/create";
    Paths["groupList"] = "/group-list";
    Paths["groupDetail"] = "/group/:group";
    Paths["taskDetail"] = "/task/:task";
    Paths["myCollections"] = "/my-namespaces/:namespace";
    Paths["myNamespaces"] = "/my-namespaces";
    Paths["editNamespace"] = "/my-namespaces/edit/:namespace";
    Paths["myImports"] = "/my-imports";
    Paths["login"] = "/login";
    Paths["logout"] = "/logout";
    Paths["landingPage"] = "/";
    Paths["legacyRole"] = "/standalone/roles/:username/:name";
    Paths["legacyRoles"] = "/standalone/roles/";
    Paths["legacyNamespace"] = "/standalone/namespaces/:namespaceid";
    Paths["legacyNamespaces"] = "/standalone/namespaces/";
    Paths["searchByRepo"] = "/repo/:repo";
    Paths["myCollectionsByRepo"] = "/repo/:repo/my-namespaces/:namespace";
    Paths["collectionByRepo"] = "/repo/:repo/:namespace/:collection";
    Paths["collectionDocsPage"] = "/:namespace/:collection/docs/:page";
    Paths["collectionDocsIndex"] = "/:namespace/:collection/docs";
    Paths["collectionContentDocs"] = "/:namespace/:collection/content/:type/:name";
    Paths["collectionContentList"] = "/:namespace/:collection/content";
    Paths["collectionImportLog"] = "/:namespace/:collection/import-log";
    Paths["collectionDocsPageByRepo"] = "/repo/:repo/:namespace/:collection/docs/:page";
    Paths["collectionDocsIndexByRepo"] = "/repo/:repo/:namespace/:collection/docs";
    Paths["collectionContentDocsByRepo"] = "/repo/:repo/:namespace/:collection/content/:type/:name";
    Paths["collectionContentListByRepo"] = "/repo/:repo/:namespace/:collection/content";
    Paths["collectionImportLogByRepo"] = "/repo/:repo/:namespace/:collection/import-log";
    Paths["collectionDependenciesByRepo"] = "/repo/:repo/:namespace/:collection/dependencies";
    Paths["collectionDistributionsByRepo"] = "/repo/:repo/:namespace/:collection/distributions";
    Paths["namespaceByRepo"] = "/repo/:repo/:namespace";
    Paths["namespace"] = "/:namespace";
    Paths["namespaceDetail"] = "/namespaces/:namespace";
    Paths["partners"] = "/partners";
    Paths["namespaces"] = "/namespaces";
    Paths["notFound"] = "/not-found";
    Paths["token"] = "/token";
    Paths["approvalDashboard"] = "/approval-dashboard";
    Paths["userList"] = "/users";
    Paths["createUser"] = "/users/create";
    Paths["editUser"] = "/users/:userID/edit";
    Paths["userDetail"] = "/users/:userID";
    Paths["userProfileSettings"] = "/settings/user-profile";
    Paths["taskList"] = "/tasks";
    Paths["signatureKeys"] = "/signature-keys";
    Paths["collections"] = "/collections";
    // for compatibility with old beta routes, remove later
    Paths["compatLegacyRole"] = "/legacy/roles/:username/:name";
    Paths["compatLegacyRoles"] = "/legacy/roles/";
    Paths["compatLegacyNamespace"] = "/legacy/namespaces/:namespaceid";
    Paths["compatLegacyNamespaces"] = "/legacy/namespaces/";
})(Paths || (Paths = {}));
export var namespaceBreadcrumb = function () {
    return ({
        namespaces: { name: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Namespaces"], ["Namespaces"]))), url: formatPath(Paths.namespaces) },
        partners: { name: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Partners"], ["Partners"]))), url: formatPath(Paths.partners) },
    })[NAMESPACE_TERM];
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=paths.js.map