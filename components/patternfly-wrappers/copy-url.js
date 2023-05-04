var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { ClipboardCopy } from '@patternfly/react-core';
import React from 'react';
export var CopyURL = function (_a) {
    var url = _a.url, _b = _a.fallback, fallback = _b === void 0 ? null : _b;
    if (fallback === true) {
        fallback = t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["None"], ["None"])));
    }
    return url ? (React.createElement(ClipboardCopy, { hoverTip: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Copy"], ["Copy"]))), clickTip: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Copied"], ["Copied"]))), variant: 'inline-compact', isCode: true }, url)) : (React.createElement(React.Fragment, null, fallback));
};
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=copy-url.js.map