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
import { CollectionAPI, CollectionVersionAPI, } from 'src/api';
import { Paths, formatPath } from 'src/paths';
// Caches the collection data when matching, prevents redundant fetches between collection detail tabs
var cache = {
    repository: null,
    namespace: null,
    name: null,
    version: null,
    collections: [],
    collectionsCount: 0,
    collection: null,
    content: null,
};
export function loadCollection(_a) {
    var forceReload = _a.forceReload, matchParams = _a.matchParams, navigate = _a.navigate, setCollection = _a.setCollection, stateParams = _a.stateParams;
    var version = stateParams.version;
    var name = matchParams.collection, namespace = matchParams.namespace, repo = matchParams.repo;
    // try loading from cache
    if (!forceReload &&
        cache.repository === repo &&
        cache.namespace === namespace &&
        cache.name === name &&
        cache.version === version) {
        setCollection(cache.collections, cache.collection, cache.content, cache.collectionsCount);
        return;
    }
    var requestParams = __assign(__assign({}, (repo ? { repository_name: repo } : {})), { namespace: namespace, name: name });
    var currentVersion = (version
        ? CollectionVersionAPI.list(__assign(__assign({}, requestParams), { version: version }))
        : CollectionVersionAPI.list(__assign(__assign({}, requestParams), { is_highest: true }))).then(function (_a) {
        var data = _a.data;
        return data.data[0];
    });
    var content = currentVersion
        .then(function (collection) {
        return CollectionAPI.getContent(namespace, name, collection.collection_version.version);
    })
        .then(function (_a) {
        var results = _a.data.results;
        return results[0];
    })
        .catch(function () { return navigate(formatPath(Paths.notFound)); });
    // Note: this only provides the first page - containing the latest version, and all items for the version *selector*,
    // but the version *modal* is using a separate call, in CollectionHeader updatePaginationParams
    var versions = CollectionVersionAPI.list(__assign(__assign({}, requestParams), { order_by: '-version', page_size: 10 }))
        .then(function (_a) {
        var data = _a.data;
        return data;
    })
        .catch(function () { return ({ data: [], meta: { count: 0 } }); });
    return Promise.all([versions, currentVersion, content]).then(function (_a) {
        var _b = _a[0], collections = _b.data, collectionsCount = _b.meta.count, collection = _a[1], content = _a[2];
        setCollection(collections, collection, content, collectionsCount);
        cache.repository = repo;
        cache.namespace = namespace;
        cache.name = name;
        cache.version = version;
        cache.collections = collections;
        cache.collectionsCount = collectionsCount;
        cache.collection = collection;
        cache.content = content;
    });
}
//# sourceMappingURL=base.js.map