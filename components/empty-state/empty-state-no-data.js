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
import { PlusCircleIcon, SearchIcon } from '@patternfly/react-icons';
import { EmptyStateCustom } from './empty-state-custom';
var EmptyStateNoData = /** @class */ (function (_super) {
    __extends(EmptyStateNoData, _super);
    function EmptyStateNoData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmptyStateNoData.prototype.render = function () {
        return (React.createElement(EmptyStateCustom, { icon: this.props.button ? PlusCircleIcon : SearchIcon, title: this.props.title, description: this.props.description, button: this.props.button }));
    };
    return EmptyStateNoData;
}(React.Component));
export { EmptyStateNoData };
//# sourceMappingURL=empty-state-no-data.js.map