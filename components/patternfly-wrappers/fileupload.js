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
import * as React from 'react';
import { t } from '@lingui/macro';
import { FileUpload as PFFileUpload, } from '@patternfly/react-core';
var FileUpload = /** @class */ (function (_super) {
    __extends(FileUpload, _super);
    function FileUpload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileUpload.prototype.render = function () {
        return (React.createElement(PFFileUpload, __assign({ browseButtonText: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Browse..."], ["Browse..."]))), clearButtonText: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Clear"], ["Clear"]))), filenamePlaceholder: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Drag a file here or browse to upload"], ["Drag a file here or browse to upload"]))) }, this.props)));
    };
    return FileUpload;
}(React.Component));
export { FileUpload };
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=fileupload.js.map