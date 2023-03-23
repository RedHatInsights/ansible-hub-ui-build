import { Button, DropdownItem } from '@patternfly/react-core';
import React from 'react';
import { Tooltip } from 'src/components';
var ActionType = /** @class */ (function () {
    function ActionType() {
    }
    return ActionType;
}());
export { ActionType };
export var Action = function (_a) {
    var buttonVariant = _a.buttonVariant, title = _a.title, onClick = _a.onClick, _b = _a.modal, modal = _b === void 0 ? null : _b, _c = _a.visible, visible = _c === void 0 ? function () { return true; } : _c, _d = _a.disabled, disabled = _d === void 0 ? function () { return null; } : _d;
    return ({
        title: title,
        button: function (item, actionContext) {
            return visible(item, actionContext) ? (disabled(item, actionContext) ? (React.createElement(Tooltip, { content: disabled(item, actionContext), key: title },
                React.createElement(Button, { variant: buttonVariant, isDisabled: true }, title))) : (React.createElement(Button, { variant: buttonVariant, key: title, onClick: function () { return onClick(item, actionContext); } }, title))) : null;
        },
        dropdownItem: function (item, actionContext) {
            return visible(item, actionContext) ? (disabled(item, actionContext) ? (React.createElement(DropdownItem, { key: title, description: disabled(item, actionContext), isDisabled: true }, title)) : (React.createElement(DropdownItem, { key: title, onClick: function () { return onClick(item, actionContext); } }, title))) : null;
        },
        modal: modal,
        visible: visible,
        disabled: disabled,
    });
};
//# sourceMappingURL=action.js.map