import { CollectionAPI, CollectionVersionAPI, } from 'src/api';
import { Paths, formatPath } from 'src/paths';
export function loadCollection(_a) {
    var forceReload = _a.forceReload, matchParams = _a.matchParams, navigate = _a.navigate, setCollection = _a.setCollection, stateParams = _a.stateParams;
    var version = stateParams.version;
    var name = matchParams.collection, namespace = matchParams.namespace, repo = matchParams.repo;
    CollectionVersionAPI.getCached({
        repository_name: repo,
        namespace: namespace,
        name: name,
        order_by: '-version',
    }, forceReload)
        .then(function (collections) {
        var collection = version
            ? collections.find(function (_a) {
                var collection_version = _a.collection_version;
                return collection_version.version == version;
            })
            : collections.find(function (cv) { return cv.is_highest; });
        CollectionAPI.getContent(namespace, name, collection.collection_version.version).then(function (res) {
            var content = res.data.results[0];
            setCollection(collections, collection, content);
        });
    })
        .catch(function () {
        navigate(formatPath(Paths.notFound));
    });
}
//# sourceMappingURL=base.js.map