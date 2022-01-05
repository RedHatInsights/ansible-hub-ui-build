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
import * as React from 'react';
import { Bullseye, Spinner } from '@patternfly/react-core';
var LoadingPageSpinner = /** @class */ (function (_super) {
    __extends(LoadingPageSpinner, _super);
    function LoadingPageSpinner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadingPageSpinner.prototype.render = function () {
        return (React.createElement(Bullseye, { style: { width: '100%', height: '100%' } },
            React.createElement(Spinner, null)));
    };
    return LoadingPageSpinner;
}(React.Component));
export { LoadingPageSpinner };
//# sourceMappingURL=loading-page-spinner.js.map