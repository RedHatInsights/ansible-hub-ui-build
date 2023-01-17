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
import { EmptyState, EmptyStateBody, EmptyStateIcon, EmptyStatePrimary, EmptyStateVariant, Title, } from '@patternfly/react-core';
import * as React from 'react';
var EmptyStateCustom = /** @class */ (function (_super) {
    __extends(EmptyStateCustom, _super);
    function EmptyStateCustom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmptyStateCustom.prototype.render = function () {
        return (React.createElement(EmptyState, { variant: EmptyStateVariant[this.props.variant], "data-cy": 'EmptyState' },
            React.createElement(EmptyStateIcon, { icon: this.props.icon }),
            React.createElement(Title, { headingLevel: 'h4', size: 'lg' }, this.props.title),
            React.createElement(EmptyStateBody, null, this.props.description),
            this.props.button && (React.createElement(EmptyStatePrimary, null, this.props.button))));
    };
    EmptyStateCustom.defaultProps = {
        variant: 'small',
    };
    return EmptyStateCustom;
}(React.Component));
export { EmptyStateCustom };
//# sourceMappingURL=empty-state-custom.js.map