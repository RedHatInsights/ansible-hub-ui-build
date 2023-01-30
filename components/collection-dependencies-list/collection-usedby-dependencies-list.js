var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { SearchInput, Toolbar, ToolbarGroup, ToolbarItem, } from '@patternfly/react-core';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { EmptyStateFilter, EmptyStateNoData, LoadingPageSpinner, Pagination, Sort, } from 'src/components';
import 'src/containers/collection-detail/collection-dependencies.scss';
import { Paths, formatPath } from 'src/paths';
import { ParamHelper, filterIsSet } from 'src/utilities';
export var CollectionUsedbyDependenciesList = function (_a) {
    var params = _a.params, usedByDependencies = _a.usedByDependencies, itemCount = _a.itemCount, updateParams = _a.updateParams, usedByDependenciesLoading = _a.usedByDependenciesLoading;
    var ignoredParams = ['page_size', 'page', 'sort', 'name__icontains'];
    if (!itemCount && !filterIsSet(params, ['name__icontains'])) {
        return (React.createElement(EmptyStateNoData, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Not required for use by other collections"], ["Not required for use by other collections"]))), description: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Collection is not being used by any collection."], ["Collection is not being used by any collection."]))) }));
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'hub-toolbar' },
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
            React.createElement("table", { className: 'hub-c-table-content pf-c-table pf-m-compact' },
                React.createElement("tbody", null, usedByDependencies.map(function (_a, i) {
                    var name = _a.name, namespace = _a.namespace, version = _a.version, repository_list = _a.repository_list;
                    return (React.createElement("tr", { key: i },
                        React.createElement("td", null,
                            React.createElement(Link, { to: formatPath(Paths.collectionByRepo, {
                                    collection: name,
                                    namespace: namespace,
                                    repo: repository_list[0],
                                }, ParamHelper.getReduced({ version: version }, ignoredParams)) },
                                namespace + '.' + name,
                                " v",
                                version))));
                }))),
            React.createElement(Pagination, { params: params, updateParams: function (params) { return updateParams(params); }, count: itemCount })))))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=collection-usedby-dependencies-list.js.map