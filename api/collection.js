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
import { HubAPI } from './hub';
import axios from 'axios';
function filterContents(contents) {
    if (contents) {
        return contents.filter(function (item) { return !['doc_fragments', 'module_utils'].includes(item.content_type); });
    }
    return contents;
}
function filterListItem(item) {
    return __assign(__assign({}, item), { latest_version: __assign(__assign({}, item.latest_version), { contents: null, metadata: __assign(__assign({}, item.latest_version.metadata), { contents: filterContents(item.latest_version.metadata.contents) }) }) });
}
function filterDetailItem(item) {
    return __assign(__assign({}, item), { latest_version: __assign(__assign({}, item.latest_version), { contents: null, docs_blob: __assign(__assign({}, item.latest_version.docs_blob), { contents: filterContents(item.latest_version.docs_blob.contents) }), metadata: __assign(__assign({}, item.latest_version.metadata), { contents: filterContents(item.latest_version.metadata.contents) }) }) });
}
var API = /** @class */ (function (_super) {
    __extends(API, _super);
    function API() {
        var _this = _super.call(this) || this;
        _this.apiPath = _this.getUIPath('repo/');
        return _this;
    }
    API.prototype.list = function (params, repo) {
        var path = this.apiPath + repo + '/';
        return _super.prototype.list.call(this, params, path).then(function (response) { return (__assign(__assign({}, response), { data: __assign(__assign({}, response.data), { 
                // remove module_utils, doc_fragments from each item
                data: response.data.data.map(filterListItem) }) })); });
    };
    API.prototype.setDeprecation = function (collection, isDeprecated, repo) {
        var path = "content/" + repo + "/v3/collections/";
        return this.patch(collection.namespace.name + "/" + collection.name, {
            deprecated: isDeprecated,
        }, path);
    };
    API.prototype.upload = function (repositoryPath, data, progressCallback, cancelToken) {
        var formData = new FormData();
        formData.append('file', data.file);
        // formData.append('sha256', artifact.sha256);
        var config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: progressCallback,
        };
        if (cancelToken) {
            config['cancelToken'] = cancelToken.token;
        }
        return this.http.post('content/' + repositoryPath + '/v3/artifacts/collections/', formData, config);
    };
    API.prototype.getCancelToken = function () {
        var CancelToken = axios.CancelToken;
        var source = CancelToken.source();
        return source;
    };
    // Caches the last collection returned from the server. If the requested
    // collection matches the cache, return it, if it doesn't query the API
    // for the collection and replace the old cache with the new value.
    // This allows the collection page to be broken into separate components
    // and routed separately without fetching redundant data from the API
    API.prototype.getCached = function (namespace, name, repo, params, forceReload) {
        var _this = this;
        if (!forceReload &&
            this.cachedCollection &&
            this.cachedCollection.name === name &&
            this.cachedCollection.namespace.name === namespace) {
            return Promise.resolve(this.cachedCollection);
        }
        var path = "" + this.apiPath + repo + "/" + namespace + "/" + name + "/";
        return this.http
            .get(path, {
            params: params,
        })
            .then(function (result) {
            // remove module_utils, doc_fragments from item
            var item = filterDetailItem(result.data);
            _this.cachedCollection = item;
            return item;
        });
    };
    API.prototype.getDownloadURL = function (distro_base_path, namespace, name, version) {
        var _this = this;
        // UI API doesn't have tarball download link, so query it separately here
        return new Promise(function (resolve, reject) {
            _this.http
                .get("content/" + distro_base_path + "/v3/collections/" + namespace + "/" + name + "/versions/" + version + "/")
                .then(function (result) {
                resolve(result.data['download_url']);
            })
                .catch(function (err) { return reject(err); });
        });
    };
    return API;
}(HubAPI));
export { API };
export var CollectionAPI = new API();
//# sourceMappingURL=collection.js.map