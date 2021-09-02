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
var DeprecatedTag = /** @class */ (function (_super) {
    __extends(DeprecatedTag, _super);
    function DeprecatedTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeprecatedTag.prototype.render = function () {
        return (React.createElement("div", { style: {
                display: 'inline-block',
                margin: '4px',
                backgroundColor: '#C9190B',
                color: 'white',
                fontSize: '14px',
                paddingLeft: '5px',
                paddingRight: '5px',
                paddingBottom: '2px',
                paddingTop: '2px',
                borderRadius: '3px',
            } }, "DEPRECATED"));
    };
    return DeprecatedTag;
}(React.Component));
export { DeprecatedTag };
//# sourceMappingURL=deprecated-tag.js.map