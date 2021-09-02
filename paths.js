var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { ParamHelper } from './utilities/param-helper';
export function formatPath(path, data, params) {
    var url = path;
    for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
        var k = _a[_i];
        url = url.replace(':' + k + '+', data[k]).replace(':' + k, data[k]);
    }
    if (params) {
        return url + "?" + ParamHelper.getQueryString(params);
    }
    else {
        return url;
    }
}
export var Paths;
(function (Paths) {
    Paths["executionEnvironmentDetailActivities"] = "/containers/:container+/_content/activity";
    Paths["executionEnvironmentDetailImages"] = "/containers/:container+/_content/images";
    Paths["executionEnvironmentDetail"] = "/containers/:container+";
    Paths["executionEnvironments"] = "/containers";
    Paths["executionEnvironmentManifest"] = "/containers/:container+/_content/images/:digest";
    Paths["groupList"] = "/group-list";
    Paths["groupDetail"] = "/group/:group";
    Paths["myCollections"] = "/my-namespaces/:namespace";
    Paths["myNamespaces"] = "/my-namespaces";
    Paths["editNamespace"] = "/my-namespaces/edit/:namespace";
    Paths["myImports"] = "/my-imports";
    Paths["login"] = "/login";
    Paths["logout"] = "/logout";
    Paths["search"] = "/";
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