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
import { t } from '@lingui/macro';
import { DataList } from '@patternfly/react-core';
import * as React from 'react';
import { CollectionListItem, EmptyStateFilter, Pagination, } from 'src/components';
import { ParamHelper } from 'src/utilities/param-helper';
import './list.scss';
// only used in namespace detail, collections uses individual items
var CollectionList = /** @class */ (function (_super) {
    __extends(CollectionList, _super);
    function CollectionList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CollectionList.prototype.render = function () {
        var _this = this;
        var _a = this.props, collections = _a.collections, displaySignatures = _a.displaySignatures, params = _a.params, updateParams = _a.updateParams, ignoredParams = _a.ignoredParams, itemCount = _a.itemCount, showControls = _a.showControls, repo = _a.repo;
        return (React.createElement(React.Fragment, null,
            React.createElement(DataList, { "aria-label": t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["List of Collections"], ["List of Collections"]))) }, collections.length > 0 ? (collections.map(function (c) { return (React.createElement(CollectionListItem, __assign({ controls: showControls ? _this.props.renderCollectionControls(c) : null, key: c.id }, c, { repo: repo, displaySignatures: displaySignatures }))); })) : (React.createElement(EmptyStateFilter, { clearAllFilters: function () {
                    ParamHelper.clearAllFilters({
                        params: params,
                        ignoredParams: ignoredParams,
                        updateParams: updateParams,
                    });
                } }))),
            React.createElement(Pagination, { params: params, updateParams: function (p) { return updateParams(p); }, count: itemCount })));
    };
    return CollectionList;
}(React.Component));
export { CollectionList };
var templateObject_1;
//# sourceMappingURL=collection-list.js.map