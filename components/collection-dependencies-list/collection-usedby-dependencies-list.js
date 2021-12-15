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
import { Link } from 'react-router-dom';
import { Toolbar, ToolbarItem, ToolbarGroup, SearchInput, } from '@patternfly/react-core';
import { Pagination, EmptyStateNoData, EmptyStateFilter, Sort, LoadingPageSpinner, } from 'src/components';
import { ParamHelper, filterIsSet } from 'src/utilities';
import { formatPath, Paths } from 'src/paths';
import 'src/containers/collection-detail/collection-dependencies.scss';
var CollectionUsedbyDependenciesList = /** @class */ (function (_super) {
    __extends(CollectionUsedbyDependenciesList, _super);
    function CollectionUsedbyDependenciesList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ignoredParams = ['page_size', 'page', 'sort', 'name__icontains'];
        return _this;
    }
    CollectionUsedbyDependenciesList.prototype.render = function () {
        var _this = this;
        var _a = this.props, params = _a.params, usedByDependencies = _a.usedByDependencies, itemCount = _a.itemCount, updateParams = _a.updateParams, usedByDependenciesLoading = _a.usedByDependenciesLoading;
        if (!itemCount && !filterIsSet(params, ['name__icontains'])) {
            return (React.createElement(EmptyStateNoData, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Not required for use by other collections"], ["Not required for use by other collections"]))), description: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Collection is not being used by any collection."], ["Collection is not being used by any collection."]))) }));
        }
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'usedby-dependencies-header' },
                React.createElement(Toolbar, null,
                    React.createElement(ToolbarGroup, null,
                        React.createElement(ToolbarItem, null,
                            React.createElement(SearchInput, { value: params.name__icontains || '', onChange: function (val) {
                                    return updateParams(ParamHelper.setParam(params, 'name__icontains', val));
                                }, onClear: function () {
                                    return updateParams(ParamHelper.setParam(params, 'name__icontains', ''));
                                }, "aria-label": 'filter-collection-name', placeholder: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Filter by name"], ["Filter by name"]))) })),
                        React.createElement(ToolbarItem, null,
                            React.createElement(Sort, { options: [
                                    { title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Collection"], ["Collection"]))), id: 'collection', type: 'alpha' },
                                ], params: params, updateParams: function (_a) {
                                    var sort = _a.sort;
                                    return updateParams(ParamHelper.setParam(params, 'sort', sort));
                                } })))),
                !!itemCount && (React.createElement(Pagination, { params: params, updateParams: function (p) { return updateParams(p); }, count: itemCount, isTop: true }))),
            usedByDependenciesLoading ? (React.createElement(LoadingPageSpinner, null)) : (React.createElement(React.Fragment, null, !itemCount ? (React.createElement(EmptyStateFilter, null)) : (React.createElement(React.Fragment, null,
                React.createElement("table", { className: 'content-table pf-c-table pf-m-compact' },
                    React.createElement("tbody", null, usedByDependencies.map(function (_a, i) {
                        var name = _a.name, namespace = _a.namespace, version = _a.version, repository_list = _a.repository_list;
                        return (React.createElement("tr", { key: i },
                            React.createElement("td", null,
                                React.createElement(Link, { to: formatPath(Paths.collectionByRepo, {
                                        collection: name,
                                        namespace: namespace,
                                        repo: repository_list[0],
                                    }, ParamHelper.getReduced({ version: version }, _this.ignoredParams)) },
                                    name,
                                    " v",
                                    version))));
                    }))),
                React.createElement(Pagination, { params: params, updateParams: function (params) { return updateParams(params); }, count: itemCount })))))));
    };
    return CollectionUsedbyDependenciesList;
}(React.Component));
export { CollectionUsedbyDependenciesList };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=collection-usedby-dependencies-list.js.map