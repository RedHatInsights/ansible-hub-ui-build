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
import { Button, Chip, ChipGroup } from '@patternfly/react-core';
import * as React from 'react';
import { ParamHelper } from 'src/utilities';
var AppliedFilters = /** @class */ (function (_super) {
    __extends(AppliedFilters, _super);
    function AppliedFilters() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clearAllFilters = function () {
            var _a = _this.props, params = _a.params, ignoredParams = _a.ignoredParams, updateParams = _a.updateParams;
            ParamHelper.clearAllFilters({ params: params, ignoredParams: ignoredParams, updateParams: updateParams });
        };
        return _this;
    }
    AppliedFilters.prototype.render = function () {
        var _this = this;
        var _a = this.props, params = _a.params, ignoredParams = _a.ignoredParams, className = _a.className, style = _a.style;
        if (Object.keys(ParamHelper.getReduced(params, ignoredParams)).length > 0) {
            return (React.createElement("div", { className: className, style: style },
                Object.keys(ParamHelper.getReduced(params, ignoredParams)).map(function (key) { return _this.renderGroup(key); }),
                React.createElement(Button, { onClick: this.clearAllFilters, variant: 'link' }, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Clear all filters"], ["Clear all filters"]))))));
        }
        else {
            return null;
        }
    };
    AppliedFilters.prototype.renderGroup = function (key) {
        var _a = this.props, niceNames = _a.niceNames, niceValues = _a.niceValues, params = _a.params, updateParams = _a.updateParams;
        var chips;
        if (Array.isArray(params[key])) {
            chips = params[key];
        }
        else {
            chips = [params[key]];
        }
        return (React.createElement("div", { style: { display: 'inline', marginRight: '8px' }, key: key },
            React.createElement(ChipGroup, { categoryName: niceNames[key] || key }, chips.map(function (v, i) {
                var _a;
                return (React.createElement(Chip, { key: i, onClick: function () {
                        return updateParams(__assign(__assign({}, ParamHelper.deleteParam(params, key, v)), { page: 1 }));
                    } }, ((_a = niceValues === null || niceValues === void 0 ? void 0 : niceValues[key]) === null || _a === void 0 ? void 0 : _a[v]) || v));
            }))));
    };
    AppliedFilters.defaultProps = {
        ignoredParams: [],
        niceNames: {},
    };
    return AppliedFilters;
}(React.Component));
export { AppliedFilters };
var templateObject_1;
//# sourceMappingURL=applied-filters.js.map