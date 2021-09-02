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
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { Section } from '@redhat-cloud-services/frontend-components';
import { ImportAPI } from 'src/api';
import { CollectionHeader, LoadingPageWithHeader, ImportConsole, Main, } from 'src/components';
import { loadCollection } from './base';
import { ParamHelper } from 'src/utilities/param-helper';
import { formatPath, namespaceBreadcrumb, Paths } from 'src/paths';
import { AppContext } from 'src/loaders/app-context';
var CollectionImportLog = /** @class */ (function (_super) {
    __extends(CollectionImportLog, _super);
    function CollectionImportLog(props) {
        var _this = _super.call(this, props) || this;
        var params = ParamHelper.parseParamString(props.location.search);
        _this.state = {
            collection: undefined,
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
        var _a = this.state, collection = _a.collection, params = _a.params, loadingImports = _a.loadingImports, selectedImportDetail = _a.selectedImportDetail, selectedImport = _a.selectedImport, apiError = _a.apiError;
        if (!collection) {
            return React.createElement(LoadingPageWithHeader, null);
        }
        var breadcrumbs = [
            namespaceBreadcrumb,
            {
                url: formatPath(Paths.namespaceByRepo, {
                    namespace: collection.namespace.name,
                    repo: this.context.selectedRepo,
                }),
                name: collection.namespace.name,
            },
            {
                url: formatPath(Paths.collectionByRepo, {
                    namespace: collection.namespace.name,
                    collection: collection.name,
                    repo: this.context.selectedRepo,
                }),
                name: collection.name,
            },
            { name: 'Import log' },
        ];
        return (React.createElement(React.Fragment, null,
            React.createElement(CollectionHeader, { collection: collection, params: params, updateParams: function (params) {
                    return _this.updateParams(params, function () { return _this.loadData(true); });
                }, breadcrumbs: breadcrumbs, activeTab: 'import-log', repo: this.context.selectedRepo }),
            React.createElement(Main, null,
                React.createElement(Section, { className: 'body' },
                    React.createElement(ImportConsole, { loading: loadingImports, task: selectedImportDetail, followMessages: false, setFollowMessages: function (_) { return null; }, selectedImport: selectedImport, apiError: apiError, hideCollectionName: true })))));
    };
    CollectionImportLog.prototype.loadData = function (forceReload) {
        var _this = this;
        if (forceReload === void 0) { forceReload = false; }
        var failMsg = 'Could not load import log';
        this.setState({ loadingImports: true }, function () {
            _this.loadCollection(_this.context.selectedRepo, forceReload, function () {
                ImportAPI.list({
                    namespace: _this.state.collection.namespace.name,
                    name: _this.state.collection.name,
                    version: _this.state.collection.latest_version.version,
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
                        .catch(function (err) {
                        _this.setState({
                            apiError: failMsg,
                            loadingImports: false,
                        });
                    });
                })
                    .catch(function (err) {
                    _this.setState({
                        apiError: failMsg,
                        loadingImports: false,
                    });
                });
            });
        });
    };
    Object.defineProperty(CollectionImportLog.prototype, "loadCollection", {
        get: function () {
            return loadCollection;
        },
        enumerable: false,
        configurable: true
    });
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
//# sourceMappingURL=collection-import-log.js.map