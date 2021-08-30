import { CollectionAPI } from 'src/api';
import { Paths } from 'src/paths';
export function loadCollection(repo, forceReload, callback) {
    var _this = this;
    if (forceReload === void 0) { forceReload = false; }
    if (callback === void 0) { callback = function () { return null; }; }
    CollectionAPI.getCached(this.props.match.params['namespace'], this.props.match.params['collection'], repo, this.state.params, forceReload)
        .then(function (result) {
        _this.setState({ collection: result }, callback);
    })
        .catch(function (result) {
        _this.props.history.push(Paths.notFound);
    });
}
//# sourceMappingURL=base.js.map