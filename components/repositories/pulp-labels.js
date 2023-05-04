var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { Label, LabelGroup } from '@patternfly/react-core';
import React from 'react';
export var PulpLabels = function (_a) {
    var labels = _a.labels;
    if (!labels || !Object.keys(labels).length) {
        return React.createElement(React.Fragment, null, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["None"], ["None"]))));
    }
    return (React.createElement(LabelGroup, null, Object.entries(labels).map(function (_a) {
        var k = _a[0], v = _a[1];
        return (React.createElement(Label, { key: k },
            k,
            v ? ': ' + v : null));
    })));
};
var templateObject_1;
//# sourceMappingURL=pulp-labels.js.map