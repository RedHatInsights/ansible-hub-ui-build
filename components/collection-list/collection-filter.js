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
import './collection-filter.scss';
import { Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, } from '@patternfly/react-core';
import { AppliedFilters, CompoundFilter } from 'src/components';
import { Constants } from 'src/constants';
var CollectionFilter = /** @class */ (function (_super) {
    __extends(CollectionFilter, _super);
    function CollectionFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CollectionFilter.prototype.render = function () {
        var _a = this.props, ignoredParams = _a.ignoredParams, params = _a.params, updateParams = _a.updateParams;
        var filterConfig = [
            {
                id: 'keywords',
                title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Keywords"], ["Keywords"]))),
            },
            {
                id: 'tags',
                title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Tag"], ["Tag"]))),
                inputType: 'multiple',
                options: Constants.COLLECTION_FILTER_TAGS.map(function (tag) { return ({
                    id: tag,
                    title: tag,
                }); }),
            },
        ];
        return (React.createElement(Toolbar, null,
            React.createElement(ToolbarContent, null,
                React.createElement(ToolbarGroup, null,
                    React.createElement(ToolbarItem, null,
                        React.createElement(CompoundFilter, { updateParams: updateParams, params: params, filterConfig: filterConfig }),
                        React.createElement(ToolbarItem, null,
                            React.createElement(AppliedFilters, { style: { marginTop: '16px' }, updateParams: updateParams, params: params, ignoredParams: ignoredParams })))))));
    };
    return CollectionFilter;
}(React.Component));
export { CollectionFilter };
var templateObject_1, templateObject_2;
//# sourceMappingURL=collection-filter.js.map