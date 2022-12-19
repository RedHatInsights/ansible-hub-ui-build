var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { ParamHelper } from './utilities/param-helper';
export function formatPath(path, data, params) {
    var url = path + '/';
    for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
        var k = _a[_i];
        url = url.replace(':' + k + '+', data[k]).replace(':' + k, data[k]);
    }
    if (params) {
        var path_1 = "".concat(url, "?").concat(ParamHelper.getQueryString(params));
        return path_1;
    }
    else {
        return url;
    }
}
export var Paths;
(function (Paths) {
    Paths["executionEnvironmentDetailActivities"] = "/containers/:container+/_content/activity";
    Paths["executionEnvironmentDetailImages"] = "/containers/:container+/_content/images";
    Paths["executionEnvironmentDetailOwners"] = "/containers/:container+/_content/owners";
    Paths["executionEnvironmentDetail"] = "/containers/:container+";
    Paths["executionEnvironments"] = "/containers";
    Paths["executionEnvironmentManifest"] = "/containers/:container+/_content/images/:digest";
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
    Paths["search"] = "/";
    Paths["legacyRole"] = "/legacy/roles/:username/:name";
    Paths["legacyRoles"] = "/legacy/roles/";
    Paths["legacyNamespace"] = "/legacy/namespaces/:namespaceid";
    Paths["legacyNamespaces"] = "/legacy/namespaces/";
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
    Paths["namespaceByRepo"] = "/repo/:repo/:namespace";
    Paths["collection"] = "/:namespace/:collection";
    Paths["namespace"] = "/:namespace";
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
    Paths["repositories"] = "/repositories";
    Paths["taskList"] = "/tasks";
    Paths["signatureKeys"] = "/signature-keys";
})(Paths || (Paths = {}));
export var namespaceBreadcrumb = {
    name: {
        namespaces: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Namespaces"], ["Namespaces"]))),
        partners: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Partners"], ["Partners"]))),
    }[NAMESPACE_TERM],
    url: Paths[NAMESPACE_TERM],
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=paths.js.map