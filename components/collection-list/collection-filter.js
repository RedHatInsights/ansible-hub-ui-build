var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, } from '@patternfly/react-core';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { AppliedFilters, CompoundFilter } from 'src/components';
import { Constants } from 'src/constants';
import { useContext } from 'src/loaders/app-context';
import './collection-filter.scss';
export var CollectionFilter = function (props) {
    var context = useContext();
    var _a = useState(props.params.keywords || ''), inputText = _a[0], setInputText = _a[1];
    useEffect(function () {
        setInputText(props.params['keywords'] || '');
    }, [props.params.keywords]);
    var ignoredParams = props.ignoredParams, params = props.params, updateParams = props.updateParams;
    var display_signatures = context.featureFlags.display_signatures;
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
                    React.createElement(CompoundFilter, { inputText: inputText, onChange: function (text) { return setInputText(text); }, updateParams: updateParams, params: params, filterConfig: filterConfig }),
                    React.createElement(ToolbarItem, null,
                        React.createElement(AppliedFilters, { niceNames: {
                                sign_state: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["sign state"], ["sign state"]))),
                                tags: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["tags"], ["tags"]))),
                                keywords: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["keywords"], ["keywords"]))),
                            }, style: { marginTop: '16px' }, updateParams: updateParams, params: params, ignoredParams: ignoredParams })))))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=collection-filter.js.map