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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import * as React from 'react';
import { Button } from '@patternfly/react-core';
import { SearchIcon } from '@patternfly/react-icons';
import { EmptyStateCustom } from './empty-state-custom';
var EmptyStateFilter = /** @class */ (function (_super) {
    __extends(EmptyStateFilter, _super);
    function EmptyStateFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmptyStateFilter.prototype.render = function () {
        return (React.createElement(EmptyStateCustom, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["No results found"], ["No results found"]))), description: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["No results match the filter criteria. Try changing your filter settings."], ["No results match the filter criteria. Try changing your filter settings."]))), icon: SearchIcon, button: this.props.clearAllFilters ? (React.createElement(Button, { onClick: this.props.clearAllFilters, variant: 'link' }, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Clear all filters"], ["Clear all filters"]))))) : null }));
    };
    return EmptyStateFilter;
}(React.Component));
export { EmptyStateFilter };
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=empty-state-filter.js.map