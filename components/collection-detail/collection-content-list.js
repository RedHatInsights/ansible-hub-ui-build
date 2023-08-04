var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { SearchInput, Toolbar, ToolbarGroup, ToolbarItem, } from '@patternfly/react-core';
import { ExclamationTriangleIcon } from '@patternfly/react-icons';
import cx from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { EmptyStateCustom } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { ParamHelper } from 'src/utilities';
import './collection-content-list.scss';
export var CollectionContentList = function (_a) {
    var _b;
    var contents = _a.contents, collection = _a.collection, params = _a.params, updateParams = _a.updateParams;
    var ignoredParams = ['keywords', 'showing'];
    var toShow = [];
    var summary = { all: 0 };
    var showing = params.showing || 'all';
    var keywords = params.keywords || '';
    for (var _i = 0, contents_1 = contents; _i < contents_1.length; _i++) {
        var c = contents_1[_i];
        summary[_b = c.content_type] || (summary[_b] = 0);
        var keywordMatch = c.name.match(keywords);
        var typeMatch = showing === 'all' ? true : c.content_type === showing;
        // count only items matching keyword
        if (keywordMatch) {
            summary[c.content_type]++;
            summary['all']++;
        }
        // show only items matching keyword + type
        if (keywordMatch && typeMatch) {
            toShow.push(c);
        }
    }
    var collection_version = collection.collection_version, repository = collection.repository;
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement(Toolbar, null,
                React.createElement(ToolbarGroup, null,
                    React.createElement(ToolbarItem, null,
                        React.createElement(SearchInput, { value: params.keywords || '', onChange: function (_e, val) {
                                return updateParams(ParamHelper.setParam(params, 'keywords', val));
                            }, onClear: function () {
                                return updateParams(ParamHelper.setParam(params, 'keywords', ''));
                            }, "aria-label": t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["find-content"], ["find-content"]))), placeholder: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Find content"], ["Find content"]))) }))),
                React.createElement(ToolbarGroup, null,
                    React.createElement(ToolbarItem, null, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Showing:"], ["Showing:"])))),
                    Object.keys(summary).map(function (key) { return (React.createElement(ToolbarItem, { key: key, className: cx({
                            clickable: true,
                            'hub-c-toolbar__item-selected-item': key === showing,
                            'hub-c-toolbar__item-type-selector': true,
                        }), onClick: function () {
                            return updateParams(ParamHelper.setParam(params, 'showing', key));
                        } },
                        key,
                        " (",
                        summary[key],
                        ")")); })))),
        React.createElement("table", { className: 'hub-c-table-content pf-c-table pf-m-compact' },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Name"], ["Name"])))),
                    React.createElement("th", null, t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Type"], ["Type"])))),
                    React.createElement("th", null, t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Description"], ["Description"])))))),
            React.createElement("tbody", null, toShow.map(function (content, i) { return (React.createElement("tr", { key: i },
                React.createElement("td", null,
                    React.createElement(Link, { to: formatPath(Paths.collectionContentDocsByRepo, {
                            collection: collection_version.name,
                            namespace: collection_version.namespace,
                            type: content.content_type,
                            name: content.name,
                            repo: repository.name,
                        }, ParamHelper.getReduced(params, ignoredParams)) }, content.name)),
                React.createElement("td", null, content.content_type),
                React.createElement("td", null, content.description))); }))),
        summary.all <= 0 &&
            repository.name === 'community' &&
            renderCommunityWarningMessage()));
};
function renderCommunityWarningMessage() {
    return (React.createElement(EmptyStateCustom, { title: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Warning"], ["Warning"]))), description: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Community collections do not have docs nor content counts, but all content gets synchronized"], ["Community collections do not have docs nor content counts, but all content gets synchronized"]))), icon: ExclamationTriangleIcon }));
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=collection-content-list.js.map