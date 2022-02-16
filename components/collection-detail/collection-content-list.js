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
import cx from 'classnames';
import './collection-content-list.scss';
import { Link } from 'react-router-dom';
import { SearchInput, Toolbar, ToolbarGroup, ToolbarItem, } from '@patternfly/react-core';
import { ExclamationTriangleIcon } from '@patternfly/react-icons';
import { EmptyStateCustom } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { ParamHelper } from 'src/utilities/param-helper';
import { AppContext } from 'src/loaders/app-context';
var CollectionContentList = /** @class */ (function (_super) {
    __extends(CollectionContentList, _super);
    function CollectionContentList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ignoredParams = ['keywords', 'showing'];
        return _this;
    }
    CollectionContentList.prototype.render = function () {
        var _this = this;
        var _a;
        var _b = this.props, contents = _b.contents, collection = _b.collection, namespace = _b.namespace, params = _b.params, updateParams = _b.updateParams;
        var toShow = [];
        var summary = { all: 0 };
        var showing = params.showing || 'all';
        var keywords = params.keywords || '';
        for (var _i = 0, contents_1 = contents; _i < contents_1.length; _i++) {
            var c = contents_1[_i];
            summary[_a = c.content_type] || (summary[_a] = 0);
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
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement(Toolbar, null,
                    React.createElement(ToolbarGroup, null,
                        React.createElement(ToolbarItem, null,
                            React.createElement(SearchInput, { value: params.keywords || '', onChange: function (val) {
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
                                collection: collection,
                                namespace: namespace,
                                type: content.content_type,
                                name: content.name,
                                repo: _this.context.selectedRepo,
                            }, ParamHelper.getReduced(params, _this.ignoredParams)) }, content.name)),
                    React.createElement("td", null, content.content_type),
                    React.createElement("td", null, content.description))); }))),
            summary.all <= 0 &&
                this.context.selectedRepo === 'community' &&
                this.renderCommunityWarningMessage()));
    };
    CollectionContentList.prototype.renderCommunityWarningMessage = function () {
        return (React.createElement(EmptyStateCustom, { title: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Warning"], ["Warning"]))), description: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Community collections do not have docs nor content counts, but all content gets synchronized"], ["Community collections do not have docs nor content counts, but all content gets synchronized"]))), icon: ExclamationTriangleIcon }));
    };
    CollectionContentList.contextType = AppContext;
    return CollectionContentList;
}(React.Component));
export { CollectionContentList };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=collection-content-list.js.map