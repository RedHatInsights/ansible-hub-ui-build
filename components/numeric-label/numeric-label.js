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
import { plural } from '@lingui/macro';
var NumericLabel = /** @class */ (function (_super) {
    __extends(NumericLabel, _super);
    function NumericLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumericLabel.prototype.render = function () {
        var _a = this.props, number = _a.number, newline = _a.newline, label = _a.label;
        var numberElem = (React.createElement("span", { key: 'number' },
            NumericLabel.roundNumber(number),
            " "));
        var labelElem = (React.createElement("span", { key: 'label', className: 'hub-numeric-label-label' }, label));
        if (newline) {
            numberElem = React.createElement("div", null, numberElem);
            labelElem = React.createElement("div", null, labelElem);
        }
        return (React.createElement("div", null,
            numberElem,
            labelElem));
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
var CollectionNumericLabel = /** @class */ (function (_super) {
    __extends(CollectionNumericLabel, _super);
    function CollectionNumericLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CollectionNumericLabel.prototype.render = function () {
        var _a = this.props, count = _a.count, newline = _a.newline, type = _a.type;
        var label = {
            module: plural(count, {
                one: 'Module',
                other: 'Modules',
            }),
            role: plural(count, {
                one: 'Role',
                other: 'Roles',
            }),
            plugin: plural(count, {
                one: 'Plugin',
                other: 'Plugins',
            }),
            dependency: plural(count, {
                one: 'Dependency',
                other: 'Dependencies',
            }),
        }[type] || type;
        return React.createElement(NumericLabel, { number: count, newline: newline, label: label });
    };
    return CollectionNumericLabel;
}(React.Component));
export { CollectionNumericLabel };
//# sourceMappingURL=numeric-label.js.map