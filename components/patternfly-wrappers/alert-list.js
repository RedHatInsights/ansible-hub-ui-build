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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import * as React from 'react';
import { Alert, AlertActionCloseButton, } from '@patternfly/react-core';
var AlertType = /** @class */ (function () {
    function AlertType() {
    }
    return AlertType;
}());
export { AlertType };
var AlertList = /** @class */ (function (_super) {
    __extends(AlertList, _super);
    function AlertList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AlertList.prototype.render = function () {
        var _a = this.props, alerts = _a.alerts, closeAlert = _a.closeAlert;
        return (React.createElement("div", { style: {
                position: 'fixed',
                right: '5px',
                top: '80px',
                zIndex: 300,
                display: 'flex',
                flexDirection: 'column',
            } }, alerts.map(function (alert, i) { return (React.createElement(Alert, { style: { marginBottom: '16px' }, key: i, title: alert.title, variant: alert.variant, actionClose: React.createElement(AlertActionCloseButton, { onClose: function () { return closeAlert(i); } }) }, alert.description)); })));
    };
    return AlertList;
}(React.Component));
export { AlertList };
export function closeAlertMixin(alertStateVariable) {
    return function (alertIndex) {
        var newList = __spreadArray([], this.state['alerts']);
        newList.splice(alertIndex, 1);
        var newState = {};
        newState[alertStateVariable] = newList;
        this.setState(newState);
    };
}
//# sourceMappingURL=alert-list.js.map