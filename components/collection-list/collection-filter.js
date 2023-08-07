var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, } from '@patternfly/react-core';
import React from 'react';
import { useEffect, useState } from 'react';
import { AnsibleRepositoryAPI } from 'src/api';
import { AppliedFilters, CompoundFilter } from 'src/components';
import { Constants } from 'src/constants';
import { useContext } from 'src/loaders/app-context';
import './collection-filter.scss';
export var CollectionFilter = function (props) {
    var context = useContext();
    var _a = useState([]), repositories = _a[0], setRepositories = _a[1];
    var _b = useState(''), inputText = _b[0], setInputText = _b[1];
    var _c = useState(null), selectedFilter = _c[0], setSelectedFilter = _c[1];
    var loadRepos = function () {
        AnsibleRepositoryAPI.list({
            name__icontains: inputText,
            pulp_label_select: '!hide_from_search',
        }).then(function (res) {
            var repos = res.data.results.map(function (_a) {
                var name = _a.name;
                return ({
                    id: name,
                    title: name,
                });
            });
            setRepositories(repos);
        });
    };
    useEffect(function () {
        if (selectedFilter === 'repository_name') {
            loadRepos();
        }
    }, [selectedFilter]);
    useEffect(function () {
        setInputText(props.params['keywords'] || '');
    }, [props.params.keywords]);
    useEffect(function () {
        setInputText(props.params['repository_name'] || '');
    }, [props.params.repository_name]);
    useEffect(function () {
        if (inputText != '' && selectedFilter === 'repository_name') {
            loadRepos();
        }
    }, [inputText]);
    var ignoredParams = props.ignoredParams, params = props.params, updateParams = props.updateParams;
    var _d = context.featureFlags, display_signatures = _d.display_signatures, display_repositories = _d.display_repositories;
    var displayTags = ignoredParams.includes('tags') === false;
    var displayRepos = ignoredParams.includes('repository_name') === false && display_repositories;
    var displayNamespaces = ignoredParams.includes('namespace') === false;
    var filterConfig = [
        {
            id: 'keywords',
            title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Keywords"], ["Keywords"]))),
        },
        displayRepos && {
            id: 'repository_name',
            title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Repository"], ["Repository"]))),
            inputType: 'typeahead',
            options: repositories,
        },
        displayNamespaces && {
            id: 'namespace',
            title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Namespace"], ["Namespace"]))),
        },
        displayTags && {
            id: 'tags',
            title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Tag"], ["Tag"]))),
            inputType: 'multiple',
            options: Constants.COLLECTION_FILTER_TAGS.map(function (tag) { return ({
                id: tag,
                title: tag,
            }); }),
        },
        display_signatures && {
            id: 'is_signed',
            title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Sign state"], ["Sign state"]))),
            inputType: 'select',
            options: [
                { id: 'true', title: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Signed"], ["Signed"]))) },
                { id: 'false', title: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Unsigned"], ["Unsigned"]))) },
            ],
        },
    ].filter(Boolean);
    return (React.createElement(Toolbar, null,
        React.createElement(ToolbarContent, null,
            React.createElement(ToolbarGroup, { style: { marginLeft: 0 } },
                React.createElement(ToolbarItem, null,
                    React.createElement(CompoundFilter, { inputText: inputText, onChange: function (text) { return setInputText(text); }, updateParams: updateParams, params: params, filterConfig: filterConfig, selectFilter: function (selected) {
                            setSelectedFilter(selected);
                        } }),
                    React.createElement(ToolbarItem, null,
                        React.createElement(AppliedFilters, { niceNames: {
                                is_signed: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Sign state"], ["Sign state"]))),
                                tags: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Tags"], ["Tags"]))),
                                keywords: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Keywords"], ["Keywords"]))),
                                repository_name: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Repository"], ["Repository"]))),
                                namespace: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Namespace"], ["Namespace"]))),
                            }, niceValues: {
                                is_signed: {
                                    false: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["unsigned"], ["unsigned"]))),
                                    true: t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["signed"], ["signed"]))),
                                },
                            }, style: { marginTop: '16px' }, updateParams: updateParams, params: params, ignoredParams: ignoredParams })))))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
//# sourceMappingURL=collection-filter.js.map