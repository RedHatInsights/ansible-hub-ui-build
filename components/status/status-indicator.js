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
import * as React from 'react';
import { Label } from '@patternfly/react-core';
import { OutlinedClockIcon, ExclamationIcon, SyncAltIcon, CheckCircleIcon, ExclamationCircleIcon, } from '@patternfly/react-icons';
import { PulpStatus } from 'src/api';
var StatusIndicator = /** @class */ (function (_super) {
    __extends(StatusIndicator, _super);
    function StatusIndicator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.typeToVariantMap = {
            primary: 'outline',
            secondary: 'filled',
        };
        return _this;
    }
    StatusIndicator.prototype.render = function () {
        var labelProps;
        var _a = this.props, status = _a.status, type = _a.type;
        switch (status) {
            case PulpStatus.waiting:
                labelProps = {
                    color: 'blue',
                    text: 'Pending',
                    icon: React.createElement(OutlinedClockIcon, null),
                };
                break;
            // TODO: what does skipped mean in pulp
            case PulpStatus.skipped:
            case PulpStatus.canceled:
                labelProps = {
                    color: 'orange',
                    text: 'Canceled',
                    icon: React.createElement(ExclamationIcon, null),
                };
                break;
            case PulpStatus.running:
                labelProps = { color: 'blue', text: 'Running', icon: React.createElement(SyncAltIcon, null) };
                break;
            case PulpStatus.completed:
                labelProps = {
                    color: 'green',
                    text: 'Completed',
                    icon: React.createElement(CheckCircleIcon, null),
                };
                break;
            case PulpStatus.failed:
                labelProps = {
                    color: 'red',
                    text: 'Failed',
                    icon: React.createElement(ExclamationCircleIcon, null),
                };
                break;
            default:
                return '---';
        }
        return (React.createElement(Label, { variant: this.typeToVariantMap[type], color: labelProps.color, icon: labelProps.icon }, labelProps.text));
    };
    StatusIndicator.defaultProps = {
        type: 'primary',
    };
    return StatusIndicator;
}(React.Component));
export { StatusIndicator };
//# sourceMappingURL=status-indicator.js.map