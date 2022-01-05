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
import * as React from 'react';
import { t } from '@lingui/macro';
import { Popover, PopoverPosition, Button } from '@patternfly/react-core';
import { OutlinedQuestionCircleIcon } from '@patternfly/react-icons';
import './helper-text.scss';
var HelperText = /** @class */ (function (_super) {
    __extends(HelperText, _super);
    function HelperText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelperText.prototype.render = function () {
        return (React.createElement(Popover, { "aria-label": t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["popover example"], ["popover example"]))), position: PopoverPosition.top, bodyContent: this.props.content, headerContent: this.props.header },
            React.createElement(Button, { iconPosition: 'left', variant: 'plain', className: 'helper' },
                React.createElement(OutlinedQuestionCircleIcon, null))));
    };
    return HelperText;
}(React.Component));
export { HelperText };
var templateObject_1;
//# sourceMappingURL=helper-text.js.map