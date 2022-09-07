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
import { i18n } from '@lingui/core';
import * as React from 'react';
import { Label, LabelGroup, Select, SelectOption, SelectVariant, } from '@patternfly/react-core';
var PermissionChipSelector = /** @class */ (function (_super) {
    __extends(PermissionChipSelector, _super);
    function PermissionChipSelector(props) {
        var _this = _super.call(this, props) || this;
        _this.clearSelection = function () {
            _this.props.setSelected([]);
        };
        _this.onToggle = function (isOpen) {
            _this.setState({
                isOpen: isOpen,
            });
        };
        _this.onSelect = function (event, selection) {
            // value contains orginal key in english
            if (_this.props.multilingual && selection.value) {
                selection = selection.value;
            }
            if (_this.props.onSelect) {
                _this.props.onSelect(event, selection);
            }
            else {
                var newPerms = new Set(_this.props.selectedPermissions);
                if (newPerms.has(selection)) {
                    newPerms.delete(selection);
                }
                else {
                    newPerms.add(selection);
                }
                _this.props.setSelected(Array.from(newPerms));
            }
        };
        _this.state = { isOpen: false };
        return _this;
    }
    PermissionChipSelector.prototype.render = function () {
        var _this = this;
        if (this.props.isViewOnly) {
            var items = this.props.selectedPermissions.length
                ? this.props.selectedPermissions
                : [this.placeholderText()];
            return (React.createElement(LabelGroup, null, items.map(function (text) { return (React.createElement(Label, { key: text }, _this.props.multilingual ? i18n._(text) : text)); })));
        }
        var selections = [];
        if (this.props.multilingual) {
            selections = this.props.selectedPermissions.map(function (value) { return ({
                // orginal english value
                value: value,
                // translated
                toString: function () { return i18n._(value); },
            }); });
        }
        else {
            selections = this.props.selectedPermissions;
        }
        return (React.createElement(Select, { menuAppendTo: this.props.menuAppendTo, variant: SelectVariant.typeaheadMulti, typeAheadAriaLabel: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Select permissions"], ["Select permissions"]))), onToggle: this.onToggle, onSelect: this.onSelect, onClear: this.props.onClear ? this.props.onClear : this.clearSelection, selections: selections, isOpen: this.state.isOpen, placeholderText: this.placeholderText(), isDisabled: !!this.props.isDisabled }, this.props.availablePermissions.length === 0
            ? [
                React.createElement(SelectOption, { isDisabled: true, key: 'not_found', value: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Not found"], ["Not found"]))) }),
            ]
            : this.props.availablePermissions.map(function (option, index) { return (React.createElement(SelectOption, { key: index, value: option }, _this.props.multilingual ? i18n._(option) : option)); })));
    };
    PermissionChipSelector.prototype.placeholderText = function () {
        if (!this.props.isDisabled && !this.props.isViewOnly) {
            return t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Select permissions"], ["Select permissions"])));
        }
        return this.props.selectedPermissions.length === 0 ? t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["No permission"], ["No permission"]))) : '';
    };
    return PermissionChipSelector;
}(React.Component));
export { PermissionChipSelector };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=permission-chip-selector.js.map