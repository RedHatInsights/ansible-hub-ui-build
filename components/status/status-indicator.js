var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { Label } from '@patternfly/react-core';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import ExclamationIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-icon';
import OutlinedClockIcon from '@patternfly/react-icons/dist/esm/icons/outlined-clock-icon';
import SyncAltIcon from '@patternfly/react-icons/dist/esm/icons/sync-alt-icon';
import React from 'react';
import { PulpStatus } from 'src/api';
var typeToVariantMap = {
    primary: 'outline',
    secondary: 'filled',
};
var statusToProps = function (status) {
    switch (status) {
        case PulpStatus.waiting:
            return {
                color: 'blue',
                text: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Pending"], ["Pending"]))),
                icon: React.createElement(OutlinedClockIcon, null),
            };
        // TODO: what does skipped mean in pulp
        case PulpStatus.skipped:
        case PulpStatus.canceled:
            return {
                color: 'orange',
                text: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Canceled"], ["Canceled"]))),
                icon: React.createElement(ExclamationIcon, null),
            };
        case PulpStatus.running:
            return { color: 'blue', text: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Running"], ["Running"]))), icon: React.createElement(SyncAltIcon, null) };
        case PulpStatus.completed:
            return {
                color: 'green',
                text: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Completed"], ["Completed"]))),
                icon: React.createElement(CheckCircleIcon, null),
            };
        case PulpStatus.failed:
            return {
                color: 'red',
                text: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Failed"], ["Failed"]))),
                icon: React.createElement(ExclamationCircleIcon, null),
            };
    }
    return null;
};
export var StatusIndicator = function (_a) {
    var status = _a.status, _b = _a.type, type = _b === void 0 ? 'primary' : _b, className = _a.className;
    var labelProps = statusToProps(status);
    if (!labelProps) {
        return React.createElement(React.Fragment, null, "---");
    }
    return (React.createElement(Label, { variant: typeToVariantMap[type], color: labelProps.color, icon: labelProps.icon, className: className }, labelProps.text));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=status-indicator.js.map