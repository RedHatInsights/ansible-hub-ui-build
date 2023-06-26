var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { t } from '@lingui/macro';
import { FileUpload as PFFileUpload, } from '@patternfly/react-core';
import React from 'react';
export var FileUpload = function (props) { return (React.createElement(PFFileUpload, __assign({ browseButtonText: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Browse..."], ["Browse..."]))), clearButtonText: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Clear"], ["Clear"]))), filenamePlaceholder: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Drag a file here or browse to upload"], ["Drag a file here or browse to upload"]))) }, props))); };
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=fileupload.js.map