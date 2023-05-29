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
import React from 'react';
import SmallLogoImage from 'src/../static/images/logo_small.svg';
var SmallLogo = /** @class */ (function (_super) {
    __extends(SmallLogo, _super);
    function SmallLogo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmallLogo.prototype.render = function () {
        return (React.createElement("img", { style: { height: '35px' }, src: SmallLogoImage, alt: this.props.alt }));
    };
    return SmallLogo;
}(React.Component));
export { SmallLogo };
//# sourceMappingURL=small-logo.js.map