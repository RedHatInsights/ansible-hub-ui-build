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
import { Dropdown, DropdownPosition, DropdownToggle, KebabToggle, } from '@patternfly/react-core';
import * as React from 'react';
var StatefulDropdown = /** @class */ (function (_super) {
    __extends(StatefulDropdown, _super);
    function StatefulDropdown(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isOpen: false,
            selected: undefined,
        };
        return _this;
    }
    StatefulDropdown.prototype.render = function () {
        var _this = this;
        var isOpen = this.state.isOpen;
        var _a = this.props, items = _a.items, toggleType = _a.toggleType, defaultText = _a.defaultText, position = _a.position, isPlain = _a.isPlain, ariaLabel = _a.ariaLabel;
        return (React.createElement(Dropdown, { onSelect: function (e) { return _this.onSelect(e); }, toggle: this.renderToggle(toggleType, defaultText), isOpen: isOpen, isPlain: isPlain, dropdownItems: items, position: position || DropdownPosition.right, autoFocus: false, "aria-label": ariaLabel }));
    };
    StatefulDropdown.prototype.renderToggle = function (toggleType, defaultText) {
        var _this = this;
        switch (toggleType) {
            case 'dropdown':
                return (React.createElement(DropdownToggle, { onToggle: function (e) { return _this.onToggle(e); } }, this.state.selected
                    ? this.state.selected
                    : defaultText || t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Dropdown"], ["Dropdown"])))));
            case 'icon':
                return (React.createElement(DropdownToggle, { toggleIndicator: null, onToggle: function (e) { return _this.onToggle(e); } }, this.state.selected
                    ? this.state.selected
                    : defaultText || t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Dropdown"], ["Dropdown"])))));
            case 'kebab':
                return React.createElement(KebabToggle, { onToggle: function (e) { return _this.onToggle(e); } });
        }
    };
    StatefulDropdown.prototype.onToggle = function (isOpen) {
        this.setState({
            isOpen: isOpen,
        });
    };
    StatefulDropdown.prototype.onSelect = function (event) {
        var _this = this;
        this.setState({
            isOpen: !this.state.isOpen,
            selected: event.currentTarget.value,
        }, function () {
            if (_this.props.onSelect) {
                _this.props.onSelect(event);
            }
        });
    };
    StatefulDropdown.defaultProps = {
        isPlain: true,
        toggleType: 'kebab',
    };
    return StatefulDropdown;
}(React.Component));
export { StatefulDropdown };
var templateObject_1, templateObject_2;
//# sourceMappingURL=stateful-dropdown.js.map