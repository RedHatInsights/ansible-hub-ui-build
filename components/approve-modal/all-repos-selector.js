import { Dropdown, DropdownItem, DropdownSeparator, DropdownToggle, DropdownToggleCheckbox, } from '@patternfly/react-core';
import React from 'react';
export var AllReposSelector = function () {
    var _a = React.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var onToggle = function (isOpen) {
        setIsOpen(isOpen);
    };
    var onFocus = function () {
        var element = document.getElementById('toggle-split-button');
        element.focus();
    };
    var onSelect = function () {
        setIsOpen(false);
        onFocus();
    };
    var dropdownItems = [
        React.createElement(DropdownItem, { key: 'link' }, "Link"),
        React.createElement(DropdownSeparator, { key: 'separator' }),
    ];
    return (React.createElement(Dropdown, { onSelect: onSelect, toggle: React.createElement(DropdownToggle, { splitButtonItems: [
                React.createElement(DropdownToggleCheckbox, { id: 'split-button-toggle-checkbox', key: 'split-checkbox', "aria-label": 'Select all' }),
            ], onToggle: onToggle, id: 'toggle-split-button' }), isOpen: isOpen, dropdownItems: dropdownItems }));
};
//# sourceMappingURL=all-repos-selector.js.map