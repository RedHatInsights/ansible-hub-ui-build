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
import { Chip, ChipGroup, Button } from '@patternfly/react-core';
import { ParamHelper } from 'src/utilities';
var AppliedFilters = /** @class */ (function (_super) {
    __extends(AppliedFilters, _super);
    function AppliedFilters() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clearAllFilters = function () {
            var params = _this.props.params;
            var deleteKeys = Object.keys(ParamHelper.getReduced(params, _this.props.ignoredParams));
            for (var _i = 0, deleteKeys_1 = deleteKeys; _i < deleteKeys_1.length; _i++) {
                var key = deleteKeys_1[_i];
                params = ParamHelper.deleteParam(params, key);
            }
            _this.props.updateParams(params);
        };
        return _this;
    }
    AppliedFilters.prototype.render = function () {
        var _this = this;
        var _a = this.props, params = _a.params, ignoredParams = _a.ignoredParams, className = _a.className, style = _a.style;
        if (Object.keys(ParamHelper.getReduced(params, ignoredParams)).length > 0) {
            return (React.createElement("div", { className: className, style: style },
                Object.keys(ParamHelper.getReduced(params, ignoredParams)).map(function (key) {
                    return _this.renderGroup(key);
                }),
                React.createElement(Button, { onClick: this.clearAllFilters, variant: 'link' }, "Clear all filters")));
        }
        else {
            return null;
        }
    };
    AppliedFilters.prototype.renderGroup = function (key) {
        var _a = this.props, niceNames = _a.niceNames, params = _a.params, updateParams = _a.updateParams;
        var chips;
        if (Array.isArray(params[key])) {
            chips = params[key];
        }
        else {
            chips = [params[key]];
        }
        return (React.createElement("div", { style: { display: 'inline', marginRight: '8px' }, key: key },
            React.createElement(ChipGroup, { categoryName: (niceNames[key] || key) }, chips.map(function (v, i) { return (React.createElement(Chip, { key: i, onClick: function () {
                    return updateParams(ParamHelper.deleteParam(params, key, v));
                } }, v)); }))));
    };
    AppliedFilters.defaultProps = {
        ignoredParams: [],
        niceNames: {},
    };
    return AppliedFilters;
}(React.Component));
export { AppliedFilters };
//# sourceMappingURL=applied-filters.js.map