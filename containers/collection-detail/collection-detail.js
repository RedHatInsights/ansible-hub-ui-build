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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { isEqual } from 'lodash';
import React from 'react';
import { AlertList, CollectionHeader, CollectionInfo, LoadingPageWithHeader, Main, closeAlertMixin, } from 'src/components';
import { AppContext } from 'src/loaders/app-context';
import { Paths, formatPath, namespaceBreadcrumb } from 'src/paths';
import { withRouter } from 'src/utilities';
import { ParamHelper } from 'src/utilities/param-helper';
import { loadCollection } from './base';
// renders collection level information
var CollectionDetail = /** @class */ (function (_super) {
    __extends(CollectionDetail, _super);
    function CollectionDetail(props) {
        var _this = _super.call(this, props) || this;
        var params = ParamHelper.parseParamString(props.location.search);
        _this.state = {
            collections: [],
            collectionsCount: 0,
            collection: null,
            content: null,
            distroBasePath: null,
            params: params,
            alerts: [],
        };
        return _this;
    }
    CollectionDetail.prototype.componentDidMount = function () {
        this.loadCollections(true);
    };
    CollectionDetail.prototype.componentDidUpdate = function (prevProps) {
        if (!isEqual(prevProps.location, this.props.location)) {
            this.loadCollections(false);
        }
    };
    CollectionDetail.prototype.render = function () {
        var _this = this;
        var _a = this.state, collections = _a.collections, collectionsCount = _a.collectionsCount, collection = _a.collection, content = _a.content, params = _a.params, alerts = _a.alerts;
        if (collections.length <= 0) {
            return React.createElement(LoadingPageWithHeader, null);
        }
        var version = collection.collection_version;
        var breadcrumbs = [
            namespaceBreadcrumb,
            {
                url: formatPath(Paths.namespaceDetail, {
                    namespace: version.namespace,
                }),
                name: version.namespace,
            },
            {
                name: version.name,
            },
        ];
        return (React.createElement(React.Fragment, null,
            React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            React.createElement(CollectionHeader, { reload: function () { return _this.loadCollections(true); }, collections: collections, collectionsCount: collectionsCount, collection: collection, content: content, params: params, updateParams: function (p) {
                    return _this.updateParams(p, function () { return _this.loadCollections(true); });
                }, breadcrumbs: breadcrumbs, activeTab: 'install', repo: this.props.routeParams.repo }),
            React.createElement(Main, null,
                React.createElement("section", { className: 'body' },
                    React.createElement(CollectionInfo, __assign({}, collection, { content: content, updateParams: function (p) { return _this.updateParams(p); }, params: this.state.params, addAlert: function (variant, title, description) {
                            return _this.setState({
                                alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                                    {
                                        variant: variant,
                                        title: title,
                                        description: description,
                                    },
                                ], false),
                            });
                        } }))))));
    };
    CollectionDetail.prototype.loadCollections = function (forceReload) {
        var _this = this;
        loadCollection({
            forceReload: forceReload,
            matchParams: this.props.routeParams,
            navigate: this.props.navigate,
            setCollection: function (collections, collection, content, collectionsCount) {
                return _this.setState({
                    collections: collections,
                    collection: collection,
                    content: content,
                    collectionsCount: collectionsCount,
                });
            },
            stateParams: this.state.params,
        });
    };
    Object.defineProperty(CollectionDetail.prototype, "updateParams", {
        get: function () {
            return ParamHelper.updateParamsMixin();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CollectionDetail.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    return CollectionDetail;
}(React.Component));
export default withRouter(CollectionDetail);
CollectionDetail.contextType = AppContext;
//# sourceMappingURL=collection-detail.js.map