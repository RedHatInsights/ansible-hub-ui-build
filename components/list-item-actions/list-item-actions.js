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
import { List } from '@patternfly/react-core';
import React from 'react';
import { StatefulDropdown } from '../patternfly-wrappers/stateful-dropdown';
var ListItemActions = /** @class */ (function (_super) {
    __extends(ListItemActions, _super);
    function ListItemActions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListItemActions.prototype.render = function () {
        var _a, _b;
        var buttons = (_a = this.props.buttons) === null || _a === void 0 ? void 0 : _a.filter(Boolean);
        var kebabItems = (_b = this.props.kebabItems) === null || _b === void 0 ? void 0 : _b.filter(Boolean);
        var anyButtons = buttons === null || buttons === void 0 ? void 0 : buttons.length;
        var anyKebab = kebabItems === null || kebabItems === void 0 ? void 0 : kebabItems.length;
        return (React.createElement("td", { style: {
                paddingRight: anyKebab ? '0px' : '16px',
                textAlign: 'right',
                display: 'flex',
                justifyContent: 'flex-end',
            } },
            anyButtons ? (React.createElement(React.Fragment, null,
                React.createElement(List, null, buttons),
                ' ')) : null,
            anyKebab ? (React.createElement("div", { "data-cy": 'kebab-toggle' },
                React.createElement(StatefulDropdown, { items: kebabItems }),
                ' ')) : null));
    };
    return ListItemActions;
}(React.Component));
export { ListItemActions };
//# sourceMappingURL=list-item-actions.js.map