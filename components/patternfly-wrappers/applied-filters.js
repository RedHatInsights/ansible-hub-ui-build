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
import { Button, Chip, ChipGroup } from '@patternfly/react-core';
import React from 'react';
import { ParamHelper, chipGroupProps } from 'src/utilities';
export var AppliedFilters = function (_a) {
    var className = _a.className, _b = _a.ignoredParams, ignoredParams = _b === void 0 ? [] : _b, _c = _a.niceNames, niceNames = _c === void 0 ? {} : _c, niceValues = _a.niceValues, params = _a.params, style = _a.style, updateParams = _a.updateParams;
    var filters = Object.keys(ParamHelper.getReduced(params, ignoredParams));
    if (!filters.length) {
        return null;
    }
    var renderGroup = function (key) {
        var chips = Array.isArray(params[key])
            ? params[key]
            : [params[key]];
        var unsetFilter = function (v) {
            return updateParams(__assign(__assign({}, ParamHelper.deleteParam(params, key, v)), { page: 1 }));
        };
        return (React.createElement("div", { style: { display: 'inline', marginRight: '8px' }, key: key },
            React.createElement(ChipGroup, __assign({ categoryName: niceNames[key] || key }, chipGroupProps()), chips.map(function (v, i) {
                var _a;
                return (React.createElement(Chip, { key: i, onClick: function () { return unsetFilter(v); } }, ((_a = niceValues === null || niceValues === void 0 ? void 0 : niceValues[key]) === null || _a === void 0 ? void 0 : _a[v]) || v));
            }))));
    };
    return (React.createElement("div", { className: className, style: style },
        filters.map(function (key) { return renderGroup(key); }),
        React.createElement(Button, { onClick: function () {
                return ParamHelper.clearAllFilters({ params: params, ignoredParams: ignoredParams, updateParams: updateParams });
            }, variant: 'link' }, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Clear all filters"], ["Clear all filters"]))))));
};
var templateObject_1;
//# sourceMappingURL=applied-filters.js.map