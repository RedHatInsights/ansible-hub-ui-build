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
import * as React from 'react';
import { TextInput, InputGroup, Button, ButtonVariant, DropdownItem, Select, SelectGroup, SelectOption, SelectVariant, } from '@patternfly/react-core';
import { FilterIcon, SearchIcon } from '@patternfly/react-icons';
import { StatefulDropdown } from 'src/components';
import { ParamHelper } from 'src/utilities';
var FilterOption = /** @class */ (function () {
    function FilterOption() {
    }
    return FilterOption;
}());
var CompoundFilter = /** @class */ (function (_super) {
    __extends(CompoundFilter, _super);
    function CompoundFilter(props) {
        var _this = _super.call(this, props) || this;
        _this.onToggle = function () {
            _this.setState({
                isOpen: !_this.state.isOpen,
            });
        };
        _this.onSelectMultiple = function (event) {
            var newParams = _this.props.params[_this.state.selectedFilter.id];
            if (!newParams) {
                newParams = [];
            }
            // TODO: Remove this replace after patternfly fixes the pf-random-id issue
            var selectedID = event.currentTarget.id.replace(/pf-random-id-\d+-/, '');
            if (newParams.includes(selectedID)) {
                var index = newParams.indexOf(selectedID);
                if (index > -1) {
                    newParams.splice(index, 1);
                }
            }
            else {
                newParams.push(selectedID);
            }
            _this.submitMultiple(newParams);
        };
        _this.state = {
            selectedFilter: props.filterConfig[0],
            inputText: '',
            isExpanded: false,
            isCreatable: false,
            isOpen: false,
            hasOnCreateOption: false,
        };
        return _this;
    }
    CompoundFilter.prototype.render = function () {
        var _this = this;
        var filterConfig = this.props.filterConfig;
        var selectedFilter = this.state.selectedFilter;
        var filterOptions = filterConfig.map(function (v) { return (React.createElement(DropdownItem, { onClick: function () { return _this.setState({ selectedFilter: v, inputText: '' }); }, key: v.id }, v.title)); });
        return (React.createElement(InputGroup, null,
            React.createElement(StatefulDropdown, { toggleType: 'dropdown', defaultText: React.createElement("span", null,
                    React.createElement(FilterIcon, null),
                    '   ',
                    selectedFilter.title), position: 'left', isPlain: false, items: filterOptions }),
            this.renderInput(selectedFilter),
            React.createElement(Button, { onClick: function () { return _this.submitFilter(); }, variant: ButtonVariant.control, isDisabled: !this.state.inputText },
                React.createElement(SearchIcon, null))));
    };
    CompoundFilter.prototype.renderInput = function (selectedFilter) {
        var _this = this;
        switch (selectedFilter.inputType) {
            case 'multiple':
                var options = selectedFilter.options.map(function (option) { return (
                // patternfly does not allow for us to set a display name aside from the ID
                // which unfortunately means that multiple select will ignore the human readable
                // option.title
                React.createElement(SelectOption, { key: option.id, value: option.id })); });
                var toggle = [
                    React.createElement(SelectGroup, { label: _(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Filter by "], ["Filter by "]))) + selectedFilter.id, key: selectedFilter.id }, options),
                ];
                return (React.createElement(Select, { variant: SelectVariant.checkbox, onToggle: this.onToggle, onSelect: this.onSelectMultiple, isOpen: this.state.isOpen, placeholderText: _(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Filter by "], ["Filter by "]))) + selectedFilter.id.toLowerCase(), selections: this.props.params[this.state.selectedFilter.id], isGrouped: true }, toggle));
            case 'select':
                return (React.createElement(StatefulDropdown, { toggleType: 'dropdown', defaultText: this.selectTitleById(this.state.inputText, selectedFilter) ||
                        selectedFilter.placeholder ||
                        selectedFilter.title, isPlain: false, position: 'left', items: selectedFilter.options.map(function (v, i) { return (React.createElement(DropdownItem, { onClick: function () {
                            return _this.setState({ inputText: v.id }, function () { return _this.submitFilter(); });
                        }, key: v.id }, v.title)); }) }));
            default:
                return (React.createElement(TextInput, { "aria-label": selectedFilter.id, placeholder: selectedFilter.placeholder || _(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Filter by ", ""], ["Filter by ", ""])), selectedFilter.title.toLowerCase()), value: this.state.inputText, onChange: function (k) { return _this.setState({ inputText: k }); }, onKeyPress: function (e) { return _this.handleEnter(e); } }));
        }
    };
    CompoundFilter.prototype.handleEnter = function (e) {
        // l10n: don't translate
        if (e.key === 'Enter') {
            this.submitFilter();
        }
    };
    CompoundFilter.prototype.submitMultiple = function (newValues) {
        this.props.updateParams(ParamHelper.setParam(this.props.params, this.state.selectedFilter.id, newValues));
    };
    CompoundFilter.prototype.submitFilter = function () {
        this.props.updateParams(ParamHelper.setParam(this.props.params, this.state.selectedFilter.id, this.state.inputText));
    };
    CompoundFilter.prototype.selectTitleById = function (inputText, selectedFilter) {
        if (!inputText || !(selectedFilter === null || selectedFilter === void 0 ? void 0 : selectedFilter.options))
            return inputText;
        return selectedFilter.options.find(function (opt) { return opt.id === inputText; }).title;
    };
    return CompoundFilter;
}(React.Component));
export { CompoundFilter };
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=compound-filter.js.map