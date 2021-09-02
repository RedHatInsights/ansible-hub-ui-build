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
import { Button, InputGroup, TextInput } from '@patternfly/react-core';
var WriteOnlyField = /** @class */ (function (_super) {
    __extends(WriteOnlyField, _super);
    function WriteOnlyField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WriteOnlyField.prototype.render = function () {
        var _a = this.props, onClear = _a.onClear, isValueSet = _a.isValueSet, children = _a.children;
        if (!isValueSet) {
            return children;
        }
        return (React.createElement(InputGroup, null,
            React.createElement(TextInput, { "aria-label": 'hidden value', placeholder: '\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022', type: 'password', isDisabled: isValueSet }),
            isValueSet && (React.createElement(Button, { onClick: function () { return onClear(); }, variant: 'control' }, "Clear"))));
    };
    return WriteOnlyField;
}(React.Component));
export { WriteOnlyField };
//# sourceMappingURL=write-only-field.js.map