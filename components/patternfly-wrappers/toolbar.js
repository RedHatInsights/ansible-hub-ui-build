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
import * as React from 'react';
import { t } from '@lingui/macro';
import { Toolbar as ToolbarPF, ToolbarGroup, ToolbarItem, ToolbarContent, TextInput, InputGroup, Button, ButtonVariant, } from '@patternfly/react-core';
import { SearchIcon } from '@patternfly/react-icons';
import { ParamHelper } from 'src/utilities/param-helper';
import { Sort } from 'src/components';
// FIXME: only used in collection-list & namespace-list, other Toolbar is unrelated; merge
var Toolbar = /** @class */ (function (_super) {
    __extends(Toolbar, _super);
    function Toolbar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            kwField: props.params.keywords || '',
        };
        return _this;
    }
    Toolbar.prototype.render = function () {
        var _this = this;
        var _a = this.props, params = _a.params, sortOptions = _a.sortOptions, updateParams = _a.updateParams, searchPlaceholder = _a.searchPlaceholder, extraInputs = _a.extraInputs;
        var kwField = this.state.kwField;
        return (React.createElement(ToolbarPF, null,
            React.createElement(ToolbarContent, null,
                React.createElement(ToolbarGroup, { style: { marginLeft: 0 } },
                    React.createElement(ToolbarItem, null,
                        React.createElement(InputGroup, null,
                            React.createElement(TextInput, { value: kwField, onChange: function (k) { return _this.setState({ kwField: k }); }, onKeyPress: function (e) { return _this.handleEnter(e); }, type: 'search', "aria-label": t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["search text input"], ["search text input"]))), placeholder: searchPlaceholder }),
                            React.createElement(Button, { variant: ButtonVariant.control, "aria-label": t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["search button"], ["search button"]))), onClick: function () { return _this.submitKeywords(); } },
                                React.createElement(SearchIcon, null))))),
                sortOptions && (React.createElement(ToolbarGroup, null,
                    React.createElement(ToolbarItem, null,
                        React.createElement(Sort, { options: sortOptions, params: params, updateParams: updateParams })))),
                extraInputs)));
    };
    Toolbar.prototype.handleEnter = function (e) {
        // l10n: don't translate
        if (e.key === 'Enter') {
            this.submitKeywords();
        }
    };
    Toolbar.prototype.submitKeywords = function () {
        this.props.updateParams(__assign(__assign({}, ParamHelper.setParam(this.props.params, 'keywords', this.state.kwField)), { page: 1 }));
    };
    Toolbar.defaultProps = {
        extraInputs: [],
    };
    return Toolbar;
}(React.Component));
export { Toolbar };
var templateObject_1, templateObject_2;
//# sourceMappingURL=toolbar.js.map