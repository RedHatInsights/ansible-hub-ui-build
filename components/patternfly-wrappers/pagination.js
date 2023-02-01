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
import { Trans, t } from '@lingui/macro';
import { Pagination as PaginationPF, PaginationVariant, } from '@patternfly/react-core';
import * as React from 'react';
import { Constants } from 'src/constants';
import { ParamHelper } from 'src/utilities/param-helper';
// AAP-3737 - support both "1 - 2 of 3" and "3 的 1 - 2"
var ToggleTemplate = function (_a) {
    var _b = _a.firstIndex, firstIndex = _b === void 0 ? 0 : _b, _c = _a.lastIndex, lastIndex = _c === void 0 ? 0 : _c, _d = _a.itemCount, itemCount = _d === void 0 ? 0 : _d;
    return (React.createElement(Trans, null,
        React.createElement("b", null,
            firstIndex,
            " - ",
            lastIndex),
        ' ',
        "of ",
        React.createElement("b", null, itemCount)));
};
var Pagination = /** @class */ (function (_super) {
    __extends(Pagination, _super);
    function Pagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pagination.prototype.render = function () {
        var _a = this.props, count = _a.count, params = _a.params, updateParams = _a.updateParams, isTop = _a.isTop, perPageOptions = _a.perPageOptions, isCompact = _a.isCompact;
        var extraProps = {};
        if (!isTop) {
            extraProps['widgetId'] = 'pagination-options-menu-bottom';
            extraProps['variant'] = PaginationVariant.bottom;
        }
        return (React.createElement(PaginationPF, __assign({ itemCount: count, perPage: params.page_size || Constants.DEFAULT_PAGE_SIZE, page: params.page || 1, onSetPage: function (_, p) {
                return updateParams(ParamHelper.setParam(params, 'page', p));
            }, onPerPageSelect: function (_, p) {
                updateParams(__assign(__assign({}, params), { page: 1, page_size: p }));
            } }, extraProps, { isCompact: isTop || isCompact, perPageOptions: this.mapPerPageOptions(perPageOptions || Constants.DEFAULT_PAGINATION_OPTIONS), titles: {
                ofWord: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["of"], ["of"]))),
                perPageSuffix: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["per page"], ["per page"]))),
                items: null,
            }, toggleTemplate: function (props) { return React.createElement(ToggleTemplate, __assign({}, props)); } })));
    };
    Pagination.prototype.mapPerPageOptions = function (options) {
        return options.map(function (option) { return ({
            title: String(option),
            value: option,
        }); });
    };
    return Pagination;
}(React.Component));
export { Pagination };
var templateObject_1, templateObject_2;
//# sourceMappingURL=pagination.js.map