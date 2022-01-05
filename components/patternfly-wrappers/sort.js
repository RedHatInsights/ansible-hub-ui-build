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
import { t } from '@lingui/macro';
import * as React from 'react';
import './sort.scss';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core';
import { SortAmountDownIcon, SortAmountUpIcon, SortAlphaDownIcon, SortAlphaUpIcon, } from '@patternfly/react-icons';
import { ParamHelper } from 'src/utilities/param-helper';
var SortFieldType = /** @class */ (function () {
    function SortFieldType() {
    }
    return SortFieldType;
}());
export { SortFieldType };
var Sort = /** @class */ (function (_super) {
    __extends(Sort, _super);
    function Sort(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isExpanded: false,
        };
        return _this;
    }
    Sort.prototype.onToggle = function (isExpanded) {
        this.setState({
            isExpanded: isExpanded,
        });
    };
    Sort.prototype.onSelect = function (name) {
        var _this = this;
        var isDescending = this.getIsDescending(this.props.params);
        var option = this.props.options.find(function (i) { return i.title === name; });
        // Alphabetical sorting is inverted in Django, so flip it here to make
        // things match up with the UI.
        if (option.type === 'alpha') {
            isDescending = !isDescending;
        }
        var desc = isDescending ? '-' : '';
        this.setState({ isExpanded: false }, function () {
            return _this.props.updateParams(ParamHelper.setParam(_this.props.params, _this.props.sortParamName, desc + option.id));
        });
    };
    Sort.prototype.setDescending = function () {
        var field = this.getSelected(this.props.params);
        var descending = !this.getIsDescending(this.props.params);
        this.props.updateParams(ParamHelper.setParam(this.props.params, this.props.sortParamName, (descending ? '-' : '') + field.id));
    };
    Sort.prototype.getIsDescending = function (params) {
        var sort = params[this.props.sortParamName];
        // The ?sort= url param is not always guaranteed to be set. If it's
        // not set, return the default
        if (!sort) {
            return true;
        }
        return sort.startsWith('-');
    };
    Sort.prototype.getSelected = function (params) {
        var sort = params[this.props.sortParamName];
        var def = this.props.options[0];
        if (!sort) {
            return def;
        }
        if (sort.startsWith('-')) {
            sort = sort.substring(1, sort.length);
        }
        var option = this.props.options.find(function (x) { return x.id === sort; });
        return option ? option : def;
    };
    Sort.prototype.render = function () {
        var _this = this;
        var _a = this.props, options = _a.options, params = _a.params;
        var isExpanded = this.state.isExpanded;
        var selectedOption = this.getSelected(params);
        var IconDesc;
        var IconAsc;
        if (selectedOption.type === 'alpha') {
            IconAsc = SortAlphaDownIcon;
            IconDesc = SortAlphaUpIcon;
        }
        else {
            IconDesc = SortAmountDownIcon;
            IconAsc = SortAmountUpIcon;
        }
        return (React.createElement("div", { className: 'sort-wrapper' },
            options.length > 1 ? (React.createElement(Select, { variant: SelectVariant.single, "aria-label": t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Select input"], ["Select input"]))), onToggle: function (e) { return _this.onToggle(e); }, onSelect: function (_, name) { return _this.onSelect(name); }, selections: selectedOption.title, isOpen: isExpanded, "aria-labelledby": 'Sort results' }, options.map(function (option) { return (React.createElement(SelectOption, { key: option.id, value: option.title })); }))) : null,
            this.getIsDescending(params) ? (React.createElement(IconDesc, { className: 'clickable asc-button', size: 'md', onClick: function () { return _this.setDescending(); } })) : (React.createElement(IconAsc, { className: 'clickable asc-button', size: 'md', onClick: function () { return _this.setDescending(); } }))));
    };
    Sort.defaultProps = {
        sortParamName: 'sort',
    };
    return Sort;
}(React.Component));
export { Sort };
var templateObject_1;
//# sourceMappingURL=sort.js.map