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
import * as React from 'react';
import './list.scss';
import { Button, DropdownItem, DataList } from '@patternfly/react-core';
import { Constants } from 'src/constants';
import { CollectionListItem, Pagination, StatefulDropdown, EmptyStateFilter, } from 'src/components';
import { ParamHelper } from 'src/utilities/param-helper';
// only used in namespace detail, collections uses individual items
var CollectionList = /** @class */ (function (_super) {
    __extends(CollectionList, _super);
    function CollectionList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CollectionList.prototype.render = function () {
        var _this = this;
        var _a = this.props, collections = _a.collections, params = _a.params, updateParams = _a.updateParams, ignoredParams = _a.ignoredParams, itemCount = _a.itemCount, showControls = _a.showControls, repo = _a.repo;
        return (React.createElement(React.Fragment, null,
            React.createElement(DataList, { "aria-label": t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["List of Collections"], ["List of Collections"]))) }, collections.length > 0 ? (collections.map(function (c) { return (React.createElement(CollectionListItem, __assign({ controls: showControls ? _this.renderCollectionControls(c) : null, key: c.id }, c, { repo: repo }))); })) : (React.createElement(EmptyStateFilter, { clearAllFilters: function () {
                    ParamHelper.clearAllFilters({
                        params: params,
                        ignoredParams: ignoredParams,
                        updateParams: updateParams,
                    });
                } }))),
            React.createElement(Pagination, { params: params, updateParams: function (p) { return updateParams(p); }, count: itemCount })));
    };
    CollectionList.prototype.renderCollectionControls = function (collection) {
        var _this = this;
        return (React.createElement("div", { style: { display: 'flex', alignItems: 'center' } },
            React.createElement(Button, { onClick: function () { return _this.props.handleControlClick(collection.id, 'upload'); }, variant: 'secondary' }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Upload new version"], ["Upload new version"])))),
            React.createElement(StatefulDropdown, { items: [
                    React.createElement(DropdownItem, { onClick: function () {
                            return _this.props.handleControlClick(collection.id, 'deprecate');
                        }, key: 'deprecate', isDisabled: DEPLOYMENT_MODE === Constants.INSIGHTS_DEPLOYMENT_MODE, description: DEPLOYMENT_MODE === Constants.INSIGHTS_DEPLOYMENT_MODE
                            ? t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Temporarily disabled due to sync issues. (AAH-1237)"], ["Temporarily disabled due to sync issues. (AAH-1237)"]))) : null }, collection.deprecated ? t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Undeprecate"], ["Undeprecate"]))) : t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Deprecate"], ["Deprecate"])))),
                ] })));
    };
    return CollectionList;
}(React.Component));
export { CollectionList };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=collection-list.js.map