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
import * as React from 'react';
import { CollectionContentList, CollectionHeader, LoadingPageWithHeader, Main, } from 'src/components';
import { AppContext } from 'src/loaders/app-context';
import { Paths, formatPath, namespaceBreadcrumb } from 'src/paths';
import { withRouter } from 'src/utilities';
import { ParamHelper } from 'src/utilities/param-helper';
import { loadCollection } from './base';
// renders list of contents in a collection
var CollectionContent = /** @class */ (function (_super) {
    __extends(CollectionContent, _super);
    function CollectionContent(props) {
        var _this = _super.call(this, props) || this;
        var params = ParamHelper.parseParamString(props.location.search);
        _this.state = {
            collections: [],
            collection: null,
            content: null,
            params: params,
        };
        return _this;
    }
    CollectionContent.prototype.componentDidMount = function () {
        this.loadCollections(false);
    };
    CollectionContent.prototype.render = function () {
        var _this = this;
        var _a = this.state, collections = _a.collections, collection = _a.collection, params = _a.params, content = _a.content;
        if (collections.length <= 0) {
            return React.createElement(LoadingPageWithHeader, null);
        }
        var collection_version = collection.collection_version, repository = collection.repository;
        var breadcrumbs = [
            namespaceBreadcrumb,
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
            { name: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Content"], ["Content"]))) },
        ];
        return (React.createElement(React.Fragment, null,
            React.createElement(CollectionHeader, { reload: function () { return _this.loadCollections(true); }, collections: collections, collection: collection, content: content, params: params, updateParams: function (params) {
                    return _this.updateParams(params, function () { return _this.loadCollections(true); });
                }, breadcrumbs: breadcrumbs, activeTab: 'contents' }),
            React.createElement(Main, null,
                React.createElement("section", { className: 'body' },
                    React.createElement(CollectionContentList, { contents: content.contents, collection: collection, params: params, updateParams: function (p) { return _this.updateParams(p); } })))));
    };
    CollectionContent.prototype.loadCollections = function (forceReload) {
        var _this = this;
        loadCollection({
            forceReload: forceReload,
            matchParams: this.props.routeParams,
            navigate: this.props.navigate,
            setCollection: function (collections, collection, content) {
                _this.setState({ collections: collections, collection: collection, content: content });
            },
            stateParams: this.state.params,
        });
    };
    Object.defineProperty(CollectionContent.prototype, "updateParams", {
        get: function () {
            return ParamHelper.updateParamsMixin();
        },
        enumerable: false,
        configurable: true
    });
    return CollectionContent;
}(React.Component));
export default withRouter(CollectionContent);
CollectionContent.contextType = AppContext;
var templateObject_1;
//# sourceMappingURL=collection-content.js.map