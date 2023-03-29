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
import axios from 'axios';
import { HubAPI } from './hub';
var API = /** @class */ (function (_super) {
    __extends(API, _super);
    function API() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // contains collection versions
        _this.cachedCollection = [];
        _this.apiPath = 'v3/plugin/ansible/search/collection-versions/';
        return _this;
    }
    API.prototype.setRepository = function (namespace, name, version, originalRepo, destinationRepo) {
        var path = "v3/collections/".concat(namespace, "/").concat(name, "/versions/").concat(version, "/move/").concat(originalRepo, "/").concat(destinationRepo, "/");
        return this.create({}, path);
    };
    API.prototype.copyToRepository = function (namespace, name, version, originalRepo, destinationRepo) {
        var path = "v3/collections/".concat(namespace, "/").concat(name, "/versions/").concat(version, "/copy/").concat(originalRepo, "/").concat(destinationRepo, "/");
        return this.create({}, path);
    };
    API.prototype.get = function (id) {
        return _super.prototype.get.call(this, id, 'pulp/api/v3/content/ansible/collection_versions/');
    };
    // Caches the collection returned from the server.
    // collection is array of collection versions
    // If the requested collection matches the cache, return it,
    // if it doesn't, query the API for the collection versions and
    // replace the old cache with the new value.
    // This allows the collection page to be broken into separate components
    // and routed separately without fetching redundant data from the API
    API.prototype.getCached = function (params, forceReload) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var name = params.name, namespace = params.namespace, repository_name = params.repository_name;
            var collection = _this.cachedCollection[0];
            if (!forceReload &&
                collection &&
                collection.collection_version.name === name &&
                collection.collection_version.namespace === namespace &&
                collection.repository.name === repository_name) {
                return resolve(_this.cachedCollection);
            }
            _super.prototype.list.call(_this, params)
                .then(function (result) {
                var data = result.data.data;
                _this.cachedCollection = data;
                return resolve(data);
            })
                .catch(function (err) { return reject(err); });
        });
    };
    API.prototype.getUsedDependenciesByCollection = function (namespace, collection, params, cancelToken) {
        if (params === void 0) { params = {}; }
        if (cancelToken === void 0) { cancelToken = undefined; }
        return this.http.get("".concat(this.apiPath, "?dependency=").concat(namespace, ".").concat(collection), { params: this.mapPageToOffset(params), cancelToken: cancelToken === null || cancelToken === void 0 ? void 0 : cancelToken.token });
    };
    API.prototype.getCancelToken = function () {
        return axios.CancelToken.source();
    };
    return API;
}(HubAPI));
export { API };
export var CollectionVersionAPI = new API();
//# sourceMappingURL=collection-version.js.map