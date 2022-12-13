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
import { AppContext } from 'src/loaders/app-context';
var CollectionFilter = /** @class */ (function (_super) {
    __extends(CollectionFilter, _super);
    function CollectionFilter(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            inputText: props.params.keywords || '',
        };
        return _this;
    }
    CollectionFilter.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.params.keywords !== this.props.params['keywords']) {
            this.setState({ inputText: this.props.params['keywords'] || '' });
        }
    };
    CollectionFilter.prototype.render = function () {
        var _this = this;
        var _a;
        var _b = this.props, ignoredParams = _b.ignoredParams, params = _b.params, updateParams = _b.updateParams;
        var display_signatures = (((_a = this.context) === null || _a === void 0 ? void 0 : _a.featureFlags) || {}).display_signatures;
        var display_tags = ignoredParams.includes('tags') === false;
        var filterConfig = [
            {
                id: 'keywords',
                title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Keywords"], ["Keywords"]))),
            },
            display_tags && {
                id: 'tags',
                title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Tag"], ["Tag"]))),
                inputType: 'multiple',
                options: Constants.COLLECTION_FILTER_TAGS.map(function (tag) { return ({
                    id: tag,
                    title: tag,
                }); }),
            },
            display_signatures && {
                id: 'sign_state',
                title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Sign state"], ["Sign state"]))),
                inputType: 'select',
                options: [
                    { id: 'signed', title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Signed"], ["Signed"]))) },
                    { id: 'unsigned', title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Unsigned"], ["Unsigned"]))) },
                ],
            },
        ].filter(Boolean);
        return (React.createElement(Toolbar, null,
            React.createElement(ToolbarContent, null,
                React.createElement(ToolbarGroup, { style: { marginLeft: 0 } },
                    React.createElement(ToolbarItem, null,
                        React.createElement(CompoundFilter, { inputText: this.state.inputText, onChange: function (text) { return _this.setState({ inputText: text }); }, updateParams: updateParams, params: params, filterConfig: filterConfig }),
                        React.createElement(ToolbarItem, null,
                            React.createElement(AppliedFilters, { niceNames: {
                                    sign_state: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["sign state"], ["sign state"]))),
                                    tags: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["tags"], ["tags"]))),
                                    keywords: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["keywords"], ["keywords"]))),
                                }, style: { marginTop: '16px' }, updateParams: updateParams, params: params, ignoredParams: ignoredParams })))))));
    };
    CollectionFilter.contextType = AppContext;
    return CollectionFilter;
}(React.Component));
export { CollectionFilter };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=collection-filter.js.map