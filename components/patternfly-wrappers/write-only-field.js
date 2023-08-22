var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { Button, InputGroup, TextInput } from '@patternfly/react-core';
import React from 'react';
export var WriteOnlyField = function (_a) {
    var onClear = _a.onClear, isValueSet = _a.isValueSet, children = _a.children;
    return !isValueSet ? (React.createElement(React.Fragment, null, children)) : (React.createElement(InputGroup, null,
        React.createElement(TextInput, { "aria-label": t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["hidden value"], ["hidden value"]))), placeholder: '\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022', type: 'password', autoComplete: 'off', isDisabled: isValueSet }),
        isValueSet && (React.createElement(Button, { onClick: function () { return onClear(); }, variant: 'control' }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Clear"], ["Clear"])))))));
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=write-only-field.js.map