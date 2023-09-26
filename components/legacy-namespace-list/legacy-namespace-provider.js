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
import { Trans } from '@lingui/macro';
import { Text, TextContent, TextVariants } from '@patternfly/react-core';
import React from 'react';
import { Link } from 'react-router-dom';
var ProviderLink = /** @class */ (function (_super) {
    __extends(ProviderLink, _super);
    function ProviderLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProviderLink.prototype.render = function () {
        var _a = this.props, name = _a.name, url = _a.url;
        return (React.createElement(TextContent, null,
            React.createElement(Text, { component: TextVariants.small },
                React.createElement(Trans, null,
                    "Provided by ",
                    React.createElement(Link, { to: url }, name)))));
    };
    return ProviderLink;
}(React.Component));
export { ProviderLink };
//# sourceMappingURL=legacy-namespace-provider.js.map