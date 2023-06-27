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
import React from 'react';
import { CollectionListItem, EmptyStateFilter, Pagination, } from 'src/components';
import { ParamHelper } from 'src/utilities/param-helper';
import './list.scss';
// only used in namespace detail, collections uses individual items
export var CollectionList = function (props) {
    var collections = props.collections, collectionControls = props.collectionControls, displaySignatures = props.displaySignatures, params = props.params, updateParams = props.updateParams, ignoredParams = props.ignoredParams, itemCount = props.itemCount;
    return (React.createElement(React.Fragment, null,
        React.createElement(DataList, { "aria-label": t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["List of Collections"], ["List of Collections"]))) }, collections.length > 0 ? (collections.map(function (c, i) { return (React.createElement(CollectionListItem, __assign({ key: i, collection: c, displaySignatures: displaySignatures, showNamespace: true }, collectionControls(c)))); })) : (React.createElement(EmptyStateFilter, { clearAllFilters: function () {
                ParamHelper.clearAllFilters({
                    params: params,
                    ignoredParams: ignoredParams,
                    updateParams: updateParams,
                });
            } }))),
        React.createElement(Pagination, { params: params, updateParams: function (p) { return updateParams(p); }, count: itemCount })));
};
var templateObject_1;
//# sourceMappingURL=collection-list.js.map