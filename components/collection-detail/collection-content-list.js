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
import cx from 'classnames';
import './collection-content-list.scss';
import { Link } from 'react-router-dom';
import { TextInput, Toolbar, ToolbarGroup, ToolbarItem, } from '@patternfly/react-core';
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
        var _a = this.props, contents = _a.contents, collection = _a.collection, namespace = _a.namespace, params = _a.params, updateParams = _a.updateParams;
        var toShow = [];
        var summary = { all: 0 };
        var showing = params.showing || 'all';
        var keywords = params.keywords || '';
        for (var _i = 0, contents_1 = contents; _i < contents_1.length; _i++) {
            var c = contents_1[_i];
            summary['all']++;
            if (summary[c.content_type]) {
                summary[c.content_type]++;
            }
            else {
                summary[c.content_type] = 1;
            }
            var typeMatch = showing === 'all' ? true : c.content_type === showing;
            if (typeMatch && c.name.match(keywords)) {
                toShow.push(c);
            }
        }
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement(Toolbar, null,
                    React.createElement(ToolbarGroup, null,
                        React.createElement(ToolbarItem, null,
                            React.createElement(TextInput, { value: params.keywords || '', onChange: function (val) {
                                    return updateParams(ParamHelper.setParam(params, 'keywords', val));
                                }, "aria-label": 'find-content', placeholder: 'Find content' }))),
                    React.createElement(ToolbarGroup, null,
                        React.createElement(ToolbarItem, null, "Showing:"),
                        Object.keys(summary).map(function (key) { return (React.createElement(ToolbarItem, { key: key, className: cx({
                                clickable: true,
                                'selected-item': key === showing,
                                'type-selector': true,
                            }), onClick: function () {
                                return updateParams(ParamHelper.setParam(params, 'showing', key));
                            } },
                            key,
                            " (",
                            summary[key],
                            ")")); })))),
            React.createElement("table", { className: 'content-table pf-c-table pf-m-compact' },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Name"),
                        React.createElement("th", null, "Type"),
                        React.createElement("th", null, "Description"))),
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
                    React.createElement("td", null, content.description))); })))));
    };
    CollectionContentList.contextType = AppContext;
    return CollectionContentList;
}(React.Component));
export { CollectionContentList };
//# sourceMappingURL=collection-content-list.js.map