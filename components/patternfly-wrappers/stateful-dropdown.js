var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { Dropdown, DropdownPosition, DropdownToggle, KebabToggle, } from '@patternfly/react-core';
import React, { useState } from 'react';
export var StatefulDropdown = function (_a) {
    var items = _a.items, onSelectProp = _a.onSelect, _b = _a.toggleType, toggleType = _b === void 0 ? 'kebab' : _b, position = _a.position, defaultText = _a.defaultText, _c = _a.isPlain, isPlain = _c === void 0 ? true : _c, ariaLabel = _a.ariaLabel;
    var _d = useState(false), isOpen = _d[0], setOpen = _d[1];
    var _e = useState(undefined), selected = _e[0], setSelected = _e[1];
    var onToggle = function (open) { return setOpen(open); };
    return (React.createElement(Dropdown, { onSelect: function (e) {
            return onSelect(e, { isOpen: isOpen, onSelectProp: onSelectProp, setOpen: setOpen, setSelected: setSelected });
        }, toggle: renderToggle({ toggleType: toggleType, defaultText: defaultText, onToggle: onToggle, selected: selected }), isOpen: isOpen, isPlain: isPlain, dropdownItems: items, position: position || DropdownPosition.right, autoFocus: false, "aria-label": ariaLabel }));
};
function renderToggle(_a) {
    var toggleType = _a.toggleType, defaultText = _a.defaultText, onToggle = _a.onToggle, selected = _a.selected;
    switch (toggleType) {
        case 'dropdown':
            return (React.createElement(DropdownToggle, { onToggle: onToggle }, selected ? selected : defaultText || t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Dropdown"], ["Dropdown"])))));
        case 'icon':
            return (React.createElement(DropdownToggle, { toggleIndicator: null, onToggle: onToggle }, selected ? selected : defaultText || t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Dropdown"], ["Dropdown"])))));
        case 'kebab':
            return React.createElement(KebabToggle, { onToggle: onToggle });
    }
}
function onSelect(event, _a) {
    var isOpen = _a.isOpen, onSelectProp = _a.onSelectProp, setOpen = _a.setOpen, setSelected = _a.setSelected;
    setOpen(!isOpen);
    setSelected(event.currentTarget.value);
    if (onSelectProp) {
        onSelectProp(event);
    }
}
var templateObject_1, templateObject_2;
//# sourceMappingURL=stateful-dropdown.js.map