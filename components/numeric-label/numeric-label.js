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
var NumericLabel = /** @class */ (function (_super) {
    __extends(NumericLabel, _super);
    function NumericLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumericLabel.prototype.render = function () {
        var _a = this.props, number = _a.number, label = _a.label, hideNumber = _a.hideNumber;
        var convertedNum;
        if (typeof number === 'string') {
            convertedNum = Number(number);
        }
        else {
            convertedNum = number;
        }
        var plural = number === 1 ? '' : 's';
        return (React.createElement("span", null,
            hideNumber ? null : NumericLabel.roundNumber(convertedNum),
            ' ',
            label ? label + plural : null));
    };
    // Make this a static property so that we can use this function outside of
    // rendering the whole component
    NumericLabel.roundNumber = function (n) {
        if (n < 1000) {
            // returns 1 to 999
            return n.toString();
        }
        else if (n < 10000) {
            // returns 1K to 9.9K
            return (Math.floor(n / 100) / 10).toString() + 'K';
        }
        else if (n < 1000000) {
            // returns 10K to 999K
            return Math.floor(n / 1000).toString() + 'K';
        }
        else if (n < 100000000) {
            // returns 1M to 9.9M
            return (Math.floor(n / 100000) / 10).toString() + 'M';
        }
        else if (n < 1000000000) {
            return Math.floor(n / 1000000).toString() + 'M';
        }
        // If larger than a billion, don't even bother.
        return '1B+';
    };
    return NumericLabel;
}(React.Component));
export { NumericLabel };
//# sourceMappingURL=numeric-label.js.map