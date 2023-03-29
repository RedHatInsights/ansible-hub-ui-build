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
import { Button, ButtonVariant, DropdownItem, InputGroup, Select, SelectGroup, SelectOption, SelectVariant, TextInput, } from '@patternfly/react-core';
import { FilterIcon, SearchIcon } from '@patternfly/react-icons';
import * as React from 'react';
import { APISearchTypeAhead, StatefulDropdown } from 'src/components';
import { ParamHelper } from 'src/utilities';
var FilterOption = /** @class */ (function () {
    function FilterOption() {
    }
    return FilterOption;
}());
export { FilterOption };
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
            isExpanded: false,
            isCreatable: false,
            isOpen: false,
            hasOnCreateOption: false,
        };
        return _this;
    }
    CompoundFilter.prototype.render = function () {
        var _this = this;
        var _a = this.props, filterConfig = _a.filterConfig, selectFilter = _a.selectFilter;
        var selectedFilter = this.state.selectedFilter;
        if (filterConfig.length === 0) {
            return null;
        }
        var filterOptions = filterConfig.map(function (v) { return (React.createElement(DropdownItem, { onClick: function () {
                _this.props.onChange('');
                _this.setState({ selectedFilter: v });
                selectFilter && selectFilter(v.id);
            }, key: v.id }, v.title)); });
        return (React.createElement(InputGroup, { "data-cy": 'compound_filter' },
            filterConfig.length !== 1 && (React.createElement(StatefulDropdown, { toggleType: 'dropdown', defaultText: React.createElement("span", null,
                    React.createElement(FilterIcon, null),
                    '   ',
                    selectedFilter.title), position: 'left', isPlain: false, items: filterOptions })),
            this.renderInput(selectedFilter),
            React.createElement(Button, { onClick: function () { return _this.submitFilter(); }, variant: ButtonVariant.control, isDisabled: !this.props.inputText.trim().length },
                React.createElement(SearchIcon, null))));
    };
    CompoundFilter.prototype.renderInput = function (selectedFilter) {
        var _this = this;
        switch (selectedFilter.inputType) {
            case 'multiple':
                return (React.createElement(Select, { variant: SelectVariant.checkbox, onToggle: this.onToggle, onSelect: this.onSelectMultiple, isOpen: this.state.isOpen, placeholderText: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Filter by ", ""], ["Filter by ", ""])), selectedFilter.id.toLowerCase()), selections: this.props.params[this.state.selectedFilter.id], isGrouped: true }, [
                    React.createElement(SelectGroup, { label: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Filter by ", ""], ["Filter by ", ""])), selectedFilter.id), key: selectedFilter.id }, selectedFilter.options.map(function (option) { return (
                    // patternfly does not allow for us to set a display name aside from the ID
                    // which unfortunately means that multiple select will ignore the human readable
                    // option.title
                    React.createElement(SelectOption, { key: option.id, value: option.id })); })),
                ]));
            case 'select':
                return (React.createElement(StatefulDropdown, { toggleType: 'dropdown', defaultText: this.selectTitleById(this.props.inputText, selectedFilter) ||
                        selectedFilter.placeholder ||
                        selectedFilter.title, isPlain: false, position: 'left', items: selectedFilter.options.map(function (v) { return (React.createElement(DropdownItem, { onClick: function () {
                            _this.props.onChange(v.id);
                            _this.submitFilter(v.id);
                        }, key: v.id }, v.title)); }) }));
            case 'typeahead': {
                var typeAheadResults = this.props.filterConfig
                    .find(function (_a) {
                    var id = _a.id;
                    return id === selectedFilter.id;
                })
                    .options.map(function (_a) {
                    var id = _a.id, title = _a.title;
                    return ({ id: id, name: title });
                });
                return (React.createElement(APISearchTypeAhead, { multiple: false, loadResults: function (name) {
                        _this.props.onChange(name);
                    }, onClear: function () {
                        _this.props.onChange('');
                    }, onSelect: function (event, value) {
                        _this.submitFilter(value);
                    }, placeholderText: (selectedFilter === null || selectedFilter === void 0 ? void 0 : selectedFilter.placeholder) || t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Filter by ", ""], ["Filter by ", ""])), selectedFilter.title.toLowerCase()), results: typeAheadResults }));
            }
            default:
                return (React.createElement(TextInput, { "aria-label": selectedFilter.id, placeholder: selectedFilter.placeholder || t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Filter by ", ""], ["Filter by ", ""])), selectedFilter.title.toLowerCase()), value: this.props.inputText, onChange: function (k) { return _this.props.onChange(k); }, onKeyPress: function (e) { return _this.handleEnter(e); } }));
        }
    };
    CompoundFilter.prototype.handleEnter = function (e) {
        // l10n: don't translate
        if (e.key === 'Enter' && this.props.inputText.trim().length > 0) {
            this.submitFilter();
        }
    };
    CompoundFilter.prototype.submitMultiple = function (newValues) {
        this.props.updateParams(__assign(__assign({}, ParamHelper.setParam(this.props.params, this.state.selectedFilter.id, newValues)), { page: 1 }));
    };
    CompoundFilter.prototype.submitFilter = function (id) {
        if (id === void 0) { id = undefined; }
        this.props.updateParams(__assign(__assign({}, ParamHelper.setParam(this.props.params, this.state.selectedFilter.id, id ? id : this.props.inputText)), { page: 1 }));
    };
    CompoundFilter.prototype.selectTitleById = function (inputText, selectedFilter) {
        if (!inputText || !(selectedFilter === null || selectedFilter === void 0 ? void 0 : selectedFilter.options)) {
            return inputText;
        }
        return selectedFilter.options.find(function (opt) { return opt.id === inputText; }).title;
    };
    return CompoundFilter;
}(React.Component));
export { CompoundFilter };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=compound-filter.js.map