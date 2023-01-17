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
import { Label } from '@patternfly/react-core';
import { TagIcon } from '@patternfly/react-icons';
import * as React from 'react';
var TagLabel = /** @class */ (function (_super) {
    __extends(TagLabel, _super);
    function TagLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TagLabel.prototype.render = function () {
        var tag = this.props.tag;
        return (React.createElement(Label, { variant: 'outline', icon: React.createElement(TagIcon, null) }, tag));
    };
    return TagLabel;
}(React.Component));
export { TagLabel };
//# sourceMappingURL=tag-label.js.map