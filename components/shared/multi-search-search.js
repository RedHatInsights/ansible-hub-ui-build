var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, } from '@patternfly/react-core';
import React, { useState } from 'react';
import { AppliedFilters, CompoundFilter } from 'src/components';
var PageSection = function (_a) {
    var children = _a.children, style = _a.style;
    return (React.createElement("section", { className: 'body', style: style }, children));
};
export var MultiSearchSearch = function (_a) {
    var params = _a.params, style = _a.style, updateParams = _a.updateParams;
    var _b = useState(''), inputText = _b[0], setInputText = _b[1];
    return (React.createElement(PageSection, { style: style },
        React.createElement("div", { className: 'hub-toolbar' },
            React.createElement(Toolbar, null,
                React.createElement(ToolbarContent, null,
                    React.createElement(ToolbarGroup, null,
                        React.createElement(ToolbarItem, null,
                            React.createElement(CompoundFilter, { inputText: inputText, onChange: setInputText, updateParams: function (p) { return updateParams(p); }, params: params || {}, filterConfig: [
                                    {
                                        id: 'keywords',
                                        title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Keywords"], ["Keywords"]))),
                                    },
                                ] })))))),
        React.createElement("div", null,
            React.createElement(AppliedFilters, { updateParams: function (p) {
                    updateParams(p);
                    setInputText('');
                }, params: params || {}, ignoredParams: ['page_size', 'page', 'sort', 'ordering'], niceNames: {
                    keywords: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Keywords"], ["Keywords"]))),
                } }))));
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=multi-search-search.js.map