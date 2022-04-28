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
import { Paths } from 'src/paths';
export function loadCollection(repo, forceReload, callback) {
    var _this = this;
    if (forceReload === void 0) { forceReload = false; }
    if (callback === void 0) { callback = function () { return null; }; }
    CollectionAPI.getCached(this.props.match.params['namespace'], this.props.match.params['collection'], repo, __assign(__assign({}, this.state.params), { include_related: 'my_permissions' }), forceReload)
        .then(function (result) {
        _this.setState({ collection: result }, callback);
    })
        .catch(function () {
        _this.props.history.push(Paths.notFound);
    });
}
//# sourceMappingURL=base.js.map