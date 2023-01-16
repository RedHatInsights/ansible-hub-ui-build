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
import { CollectionAPI } from 'src/api';
import { Paths, formatPath } from 'src/paths';
export function loadCollection(_a) {
    var forceReload = _a.forceReload, matchParams = _a.matchParams, navigate = _a.navigate, selectedRepo = _a.selectedRepo, setCollection = _a.setCollection, stateParams = _a.stateParams;
    CollectionAPI.getCached(matchParams['namespace'], matchParams['collection'], selectedRepo, __assign(__assign({}, stateParams), { include_related: 'my_permissions' }), forceReload)
        .then(function (result) {
        return CollectionAPI.list({
            name: matchParams['collection'],
        }, selectedRepo).then(function (collections) {
            result.deprecated = collections.data.data[0].deprecated;
            setCollection(result);
        });
    })
        .catch(function () {
        navigate(formatPath(Paths.notFound));
    });
}
//# sourceMappingURL=base.js.map