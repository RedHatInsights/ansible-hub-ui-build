var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { LockIcon } from '@patternfly/react-icons';
import * as React from 'react';
import { LoginLink } from 'src/components';
import { EmptyStateCustom } from './empty-state-custom';
export var EmptyStateUnauthorized = function () {
    return (React.createElement(EmptyStateCustom, { icon: LockIcon, title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["You do not have access to Automation Hub"], ["You do not have access to Automation Hub"]))), description: React.createElement(React.Fragment, null, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Contact your organization administrator for more information."], ["Contact your organization administrator for more information."]))),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(LoginLink, { button: true })) }));
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=empty-state-unauthorized.js.map