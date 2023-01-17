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
import { Label } from '@patternfly/react-core';
import { CheckCircleIcon, ExclamationCircleIcon, ExclamationIcon, OutlinedClockIcon, SyncAltIcon, } from '@patternfly/react-icons';
import * as React from 'react';
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
                    text: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Pending"], ["Pending"]))),
                    icon: React.createElement(OutlinedClockIcon, null),
                };
                break;
            // TODO: what does skipped mean in pulp
            case PulpStatus.skipped:
            case PulpStatus.canceled:
                labelProps = {
                    color: 'orange',
                    text: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Canceled"], ["Canceled"]))),
                    icon: React.createElement(ExclamationIcon, null),
                };
                break;
            case PulpStatus.running:
                labelProps = { color: 'blue', text: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Running"], ["Running"]))), icon: React.createElement(SyncAltIcon, null) };
                break;
            case PulpStatus.completed:
                labelProps = {
                    color: 'green',
                    text: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Completed"], ["Completed"]))),
                    icon: React.createElement(CheckCircleIcon, null),
                };
                break;
            case PulpStatus.failed:
                labelProps = {
                    color: 'red',
                    text: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Failed"], ["Failed"]))),
                    icon: React.createElement(ExclamationCircleIcon, null),
                };
                break;
            default:
                return '---';
        }
        return (React.createElement(Label, { variant: this.typeToVariantMap[type], color: labelProps.color, icon: labelProps.icon, className: this.props.className }, labelProps.text));
    };
    StatusIndicator.defaultProps = {
        type: 'primary',
    };
    return StatusIndicator;
}(React.Component));
export { StatusIndicator };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=status-indicator.js.map