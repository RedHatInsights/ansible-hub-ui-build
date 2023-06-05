import { i18n } from '@lingui/core';
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
    var buttonVariant = _a.buttonVariant, _b = _a.condition, condition = _b === void 0 ? function () { return true; } : _b, _c = _a.disabled, disabled = _c === void 0 ? function () { return null; } : _c, _d = _a.modal, modal = _d === void 0 ? null : _d, onClick = _a.onClick, title = _a.title, _e = _a.visible, visible = _e === void 0 ? function () { return true; } : _e;
    return ({
        title: i18n._(title),
        button: function (item, actionContext) {
            return condition(actionContext, item) && visible(item, actionContext) ? (disabled(item, actionContext) ? (React.createElement(Tooltip, { content: disabled(item, actionContext), key: i18n._(title) },
                React.createElement(Button, { variant: buttonVariant, isDisabled: true }, i18n._(title)))) : (React.createElement(Button, { variant: buttonVariant, key: i18n._(title), onClick: function () { return onClick(item, actionContext); } }, i18n._(title)))) : null;
        },
        dropdownItem: function (item, actionContext) {
            return condition(actionContext, item) && visible(item, actionContext) ? (disabled(item, actionContext) ? (React.createElement(DropdownItem, { key: i18n._(title), description: disabled(item, actionContext), isDisabled: true }, i18n._(title))) : (React.createElement(DropdownItem, { key: i18n._(title), onClick: function () { return onClick(item, actionContext); } }, i18n._(title)))) : null;
        },
        modal: modal,
        visible: visible,
        disabled: disabled,
    });
};
//# sourceMappingURL=action.js.map