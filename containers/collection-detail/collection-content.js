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
import { withRouter } from 'src/utilities';
import { CollectionHeader, CollectionContentList, LoadingPageWithHeader, Main, } from 'src/components';
import { loadCollection } from './base';
import { ParamHelper } from 'src/utilities/param-helper';
import { formatPath, namespaceBreadcrumb, Paths } from 'src/paths';
import { AppContext } from 'src/loaders/app-context';
// renders list of contents in a collection
var CollectionContent = /** @class */ (function (_super) {
    __extends(CollectionContent, _super);
    function CollectionContent(props) {
        var _this = _super.call(this, props) || this;
        var params = ParamHelper.parseParamString(props.location.search);
        _this.state = {
            collection: undefined,
            params: params,
        };
        return _this;
    }
    CollectionContent.prototype.componentDidMount = function () {
        this.loadCollection(false);
    };
    CollectionContent.prototype.render = function () {
        var _this = this;
        var _a = this.state, collection = _a.collection, params = _a.params;
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
            { name: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Content"], ["Content"]))) },
        ];
        return (React.createElement(React.Fragment, null,
            React.createElement(CollectionHeader, { reload: function () { return _this.loadCollection(true); }, collection: collection, params: params, updateParams: function (params) {
                    return _this.updateParams(params, function () { return _this.loadCollection(true); });
                }, breadcrumbs: breadcrumbs, activeTab: 'contents', repo: this.context.selectedRepo }),
            React.createElement(Main, null,
                React.createElement("section", { className: 'body' },
                    React.createElement(CollectionContentList, { contents: collection.latest_version.metadata.contents, collection: collection.name, namespace: collection.namespace.name, params: params, updateParams: function (p) { return _this.updateParams(p); } })))));
    };
    CollectionContent.prototype.loadCollection = function (forceReload) {
        var _this = this;
        loadCollection({
            forceReload: forceReload,
            matchParams: this.props.routeParams,
            navigate: this.props.navigate,
            selectedRepo: this.context.selectedRepo,
            setCollection: function (collection) { return _this.setState({ collection: collection }); },
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