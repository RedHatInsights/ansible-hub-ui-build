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
// had to declare *.svg in src/index.d.ts
import DefaultLogo from 'src/../static/images/default-logo.svg';
var Logo = /** @class */ (function (_super) {
    __extends(Logo, _super);
    function Logo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Logo.prototype.render = function () {
        var _a = this.props, size = _a.size, image = _a.image, alt = _a.alt, className = _a.className, unlockWidth = _a.unlockWidth, width = _a.width;
        var style = {
            height: size,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: width,
        };
        if (unlockWidth) {
            style['minWidth'] = size;
        }
        else {
            style['width'] = size;
        }
        // use inline css so we can set size
        return (React.createElement("div", { className: className, style: style },
            React.createElement("img", { style: { objectFit: 'contain', maxHeight: size }, src: image || DefaultLogo, alt: alt })));
    };
    return Logo;
}(React.Component));
export { Logo };
//# sourceMappingURL=logo.js.map