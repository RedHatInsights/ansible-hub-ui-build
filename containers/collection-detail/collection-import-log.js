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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import React from 'react';
import { ImportAPI } from 'src/api';
import { CollectionHeader, ImportConsole, LoadingPageWithHeader, Main, } from 'src/components';
import { AppContext } from 'src/loaders/app-context';
import { Paths, formatPath, namespaceBreadcrumb } from 'src/paths';
import { withRouter } from 'src/utilities';
import { ParamHelper } from 'src/utilities/param-helper';
import { loadCollection } from './base';
var CollectionImportLog = /** @class */ (function (_super) {
    __extends(CollectionImportLog, _super);
    function CollectionImportLog(props) {
        var _this = _super.call(this, props) || this;
        var params = ParamHelper.parseParamString(props.location.search);
        _this.state = {
            collection: null,
            collections: [],
            collectionsCount: 0,
            content: null,
            params: params,
            loadingImports: true,
            selectedImportDetail: undefined,
            selectedImport: undefined,
            apiError: undefined,
        };
        return _this;
    }
    CollectionImportLog.prototype.componentDidMount = function () {
        this.loadData();
    };
    CollectionImportLog.prototype.render = function () {
        var _this = this;
        var _a = this.state, collection = _a.collection, collections = _a.collections, collectionsCount = _a.collectionsCount, params = _a.params, loadingImports = _a.loadingImports, selectedImportDetail = _a.selectedImportDetail, selectedImport = _a.selectedImport, apiError = _a.apiError, content = _a.content;
        if (!collection) {
            return React.createElement(LoadingPageWithHeader, null);
        }
        var collection_version = collection.collection_version, repository = collection.repository;
        var breadcrumbs = [
            namespaceBreadcrumb(),
            {
                url: formatPath(Paths.namespaceDetail, {
                    namespace: collection_version.namespace,
                }),
                name: collection_version.namespace,
            },
            {
                url: formatPath(Paths.collectionByRepo, {
                    namespace: collection_version.namespace,
                    collection: collection_version.name,
                    repo: repository.name,
                }),
                name: collection_version.name,
            },
            { name: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Import log"], ["Import log"]))) },
        ];
        return (React.createElement(React.Fragment, null,
            React.createElement(CollectionHeader, { reload: function () { return _this.loadData(true); }, collections: collections, collectionsCount: collectionsCount, collection: collection, content: content, params: params, updateParams: function (params) {
                    return _this.updateParams(params, function () { return _this.loadData(true); });
                }, breadcrumbs: breadcrumbs, activeTab: 'import-log' }),
            React.createElement(Main, null,
                React.createElement("section", { className: 'body' },
                    React.createElement(ImportConsole, { empty: false, loading: loadingImports, task: selectedImportDetail, followMessages: false, setFollowMessages: function () { return null; }, selectedImport: selectedImport, apiError: apiError, hideCollectionName: true })))));
    };
    CollectionImportLog.prototype.loadData = function (forceReload) {
        var _this = this;
        if (forceReload === void 0) { forceReload = false; }
        var failMsg = t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Could not load import log"], ["Could not load import log"])));
        this.setState({ loadingImports: true }, function () {
            _this.loadCollection(forceReload, function () {
                ImportAPI.list({
                    namespace: _this.state.collection.collection_version.namespace,
                    name: _this.state.collection.collection_version.name,
                    version: _this.state.collection.collection_version.version,
                    sort: '-created',
                })
                    .then(function (importListResult) {
                    var importObj = importListResult.data.data[0];
                    ImportAPI.get(importObj.id)
                        .then(function (importDetailResult) {
                        _this.setState({
                            apiError: undefined,
                            loadingImports: false,
                            selectedImport: importObj,
                            selectedImportDetail: importDetailResult.data,
                        });
                    })
                        .catch(function () {
                        _this.setState({
                            apiError: failMsg,
                            loadingImports: false,
                        });
                    });
                })
                    .catch(function () {
                    _this.setState({
                        apiError: failMsg,
                        loadingImports: false,
                    });
                });
            });
        });
    };
    CollectionImportLog.prototype.loadCollection = function (forceReload, callback) {
        var _this = this;
        loadCollection({
            forceReload: forceReload,
            matchParams: this.props.routeParams,
            navigate: this.props.navigate,
            setCollection: function (collections, collection, content, collectionsCount) {
                return _this.setState({ collections: collections, collection: collection, content: content, collectionsCount: collectionsCount }, callback);
            },
            stateParams: this.state.params,
        });
    };
    Object.defineProperty(CollectionImportLog.prototype, "updateParams", {
        get: function () {
            return ParamHelper.updateParamsMixin();
        },
        enumerable: false,
        configurable: true
    });
    return CollectionImportLog;
}(React.Component));
export default withRouter(CollectionImportLog);
CollectionImportLog.contextType = AppContext;
var templateObject_1, templateObject_2;
//# sourceMappingURL=collection-import-log.js.map