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
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { isEqual } from 'lodash';
import { CollectionHeader, CollectionInfo, LoadingPageWithHeader, Main, } from 'src/components';
import { loadCollection } from './base';
import { ParamHelper } from 'src/utilities/param-helper';
import { formatPath, namespaceBreadcrumb, Paths } from 'src/paths';
import { AppContext } from 'src/loaders/app-context';
// renders collection level information
var CollectionDetail = /** @class */ (function (_super) {
    __extends(CollectionDetail, _super);
    function CollectionDetail(props) {
        var _this = _super.call(this, props) || this;
        var params = ParamHelper.parseParamString(props.location.search);
        _this.state = {
            collection: undefined,
            params: params,
        };
        return _this;
    }
    CollectionDetail.prototype.componentDidMount = function () {
        this.loadCollection(this.context.selectedRepo, true);
    };
    CollectionDetail.prototype.componentDidUpdate = function (prevProps) {
        if (!isEqual(prevProps.location, this.props.location))
            this.loadCollection(this.context.selectedRepo);
    };
    CollectionDetail.prototype.render = function () {
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
                name: collection.name,
            },
        ];
        return (React.createElement(React.Fragment, null,
            React.createElement(CollectionHeader, { collection: collection, params: params, updateParams: function (p) {
                    return _this.updateParams(p, function () {
                        return _this.loadCollection(_this.context.selectedRepo, true);
                    });
                }, breadcrumbs: breadcrumbs, activeTab: 'install', repo: this.context.selectedRepo }),
            React.createElement(Main, null,
                React.createElement("section", { className: 'body' },
                    React.createElement(CollectionInfo, __assign({}, collection, { updateParams: function (p) { return _this.updateParams(p); }, params: this.state.params }))))));
    };
    Object.defineProperty(CollectionDetail.prototype, "loadCollection", {
        get: function () {
            return loadCollection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CollectionDetail.prototype, "updateParams", {
        get: function () {
            return ParamHelper.updateParamsMixin();
        },
        enumerable: false,
        configurable: true
    });
    return CollectionDetail;
}(React.Component));
export default withRouter(CollectionDetail);
CollectionDetail.contextType = AppContext;
//# sourceMappingURL=collection-detail.js.map