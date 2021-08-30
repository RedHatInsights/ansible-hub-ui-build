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
import { EmptyStateCustom } from './empty-state-custom';
import { LockIcon } from '@patternfly/react-icons';
var EmptyStateUnauthorized = /** @class */ (function (_super) {
    __extends(EmptyStateUnauthorized, _super);
    function EmptyStateUnauthorized() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmptyStateUnauthorized.prototype.render = function () {
        return (React.createElement(EmptyStateCustom, { icon: LockIcon, title: _(templateObject_1 || (templateObject_1 = __makeTemplateObject(["You do not have access to Automation Hub"], ["You do not have access to Automation Hub"]))), description: _(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Contact you organization administrator for more information."], ["Contact you organization administrator for more information."]))) }));
    };
    return EmptyStateUnauthorized;
}(React.Component));
export { EmptyStateUnauthorized };
var templateObject_1, templateObject_2;
//# sourceMappingURL=empty-state-unauthorized.js.map