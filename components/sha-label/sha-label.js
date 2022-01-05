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
import { Label, Tooltip } from '@patternfly/react-core';
import { truncateSha } from 'src/utilities';
var ShaLabel = /** @class */ (function (_super) {
    __extends(ShaLabel, _super);
    function ShaLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShaLabel.prototype.render = function () {
        var _a = this.props, digest = _a.digest, grey = _a.grey, long = _a.long;
        return (React.createElement(Tooltip, { content: digest },
            React.createElement(Label, { color: grey ? 'grey' : 'blue' }, long ? digest : truncateSha(digest))));
    };
    return ShaLabel;
}(React.Component));
export { ShaLabel };
//# sourceMappingURL=sha-label.js.map