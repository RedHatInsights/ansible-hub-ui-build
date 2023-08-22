var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { Alert, AlertActionCloseButton, } from '@patternfly/react-core';
import React from 'react';
import { Constants } from 'src/constants';
var AlertType = /** @class */ (function () {
    function AlertType() {
    }
    return AlertType;
}());
export { AlertType };
export var AlertList = function (_a) {
    var alerts = _a.alerts, closeAlert = _a.closeAlert;
    return (React.createElement("div", { style: {
            position: 'fixed',
            right: '5px',
            top: DEPLOYMENT_MODE === Constants.INSIGHTS_DEPLOYMENT_MODE
                ? '124px' // 70 + 50 + 4
                : '80px',
            zIndex: 300,
            display: 'flex',
            flexDirection: 'column',
        }, "data-cy": 'AlertList' }, alerts.map(function (alert, i) { return (React.createElement(Alert, { style: { marginBottom: '16px' }, key: i, title: alert.title, variant: alert.variant, actionClose: React.createElement(AlertActionCloseButton, { onClose: function () { return closeAlert(i); } }) }, alert.description)); })));
};
export function closeAlert(alertIndex, _a) {
    var alerts = _a.alerts, setAlerts = _a.setAlerts;
    var newList = __spreadArray([], alerts, true);
    newList.splice(alertIndex, 1);
    setAlerts(newList);
}
export function closeAlertMixin(alertStateVariable) {
    return function (alertIndex) {
        var _this = this;
        closeAlert(alertIndex, {
            alerts: this.state[alertStateVariable],
            setAlerts: function (newList) {
                var _a;
                return _this.setState((_a = {}, _a[alertStateVariable] = newList, _a));
            },
        });
    };
}
//# sourceMappingURL=alert-list.js.map