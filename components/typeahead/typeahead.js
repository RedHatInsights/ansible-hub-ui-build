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
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core';
var APISearchTypeAhead = /** @class */ (function (_super) {
    __extends(APISearchTypeAhead, _super);
    function APISearchTypeAhead(props) {
        var _this = _super.call(this, props) || this;
        _this.onClear = function () {
            _this.props.loadResults('');
            if (_this.props.onClear) {
                _this.props.onClear();
            }
        };
        _this.onFilter = function (evt) {
            if (evt !== null) {
                var textInput = evt.target.value;
                _this.props.loadResults(textInput);
            }
            return _this.getOptions();
        };
        _this.onToggle = function (isOpen) {
            _this.setState({
                isOpen: isOpen,
            });
        };
        _this.onSelect = function (event, selection, isPlaceholder) {
            _this.props.onSelect(event, selection, isPlaceholder);
            if (!_this.props.multiple) {
                _this.setState({
                    isOpen: false,
                }, function () { return _this.props.loadResults(''); });
            }
        };
        _this.state = {
            isOpen: false,
        };
        return _this;
    }
    APISearchTypeAhead.prototype.render = function () {
        var selected = null;
        if (this.props.selections) {
            selected = this.props.selections.map(function (group) { return group.name; });
        }
        var isOpen = this.state.isOpen;
        var variant = this.props.multiple
            ? SelectVariant.typeaheadMulti
            : SelectVariant.typeahead;
        return (React.createElement(Select, { menuAppendTo: this.props.menuAppendTo, onClear: this.onClear, onSelect: this.onSelect, onToggle: this.onToggle, variant: variant, selections: selected, isOpen: isOpen, hasInlineFilter: true, onFilter: this.onFilter, placeholderText: this.props.placeholderText, isDisabled: this.props.isDisabled, toggleIcon: this.props.toggleIcon }, this.getOptions()));
    };
    APISearchTypeAhead.prototype.getOptions = function () {
        var options = [];
        for (var _i = 0, _a = this.props.results; _i < _a.length; _i++) {
            var option = _a[_i];
            options.push(React.createElement(SelectOption, { key: option.id, value: option.name }));
        }
        if (options.length === 0) {
            options.push(React.createElement(SelectOption, { key: 'not_found', value: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Not found"], ["Not found"]))), isDisabled: true }));
        }
        return options;
    };
    return APISearchTypeAhead;
}(React.Component));
export { APISearchTypeAhead };
var templateObject_1;
//# sourceMappingURL=typeahead.js.map