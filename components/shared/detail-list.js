import { Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, } from '@patternfly/react-core';
import React, { useEffect, useState } from 'react';
import { AppliedFilters, CompoundFilter, EmptyStateFilter, EmptyStateNoData, LoadingPageSpinner, Pagination, SortTable, } from 'src/components';
import { filterIsSet, handleHttpError } from 'src/utilities';
export function DetailList(_a) {
    var actionContext = _a.actionContext, defaultPageSize = _a.defaultPageSize, defaultSort = _a.defaultSort, errorTitle = _a.errorTitle, filterConfig = _a.filterConfig, headerActions = _a.headerActions, listItemActions = _a.listItemActions, noDataButton = _a.noDataButton, noDataDescription = _a.noDataDescription, noDataTitle = _a.noDataTitle, query = _a.query, renderTableRow = _a.renderTableRow, sortHeaders = _a.sortHeaders, title = _a.title;
    var addAlert = actionContext.addAlert;
    var _b = useState([]), items = _b[0], setItems = _b[1];
    var _c = useState({
        page: 1,
        page_size: defaultPageSize,
        sort: defaultSort,
    }), params = _c[0], setParams = _c[1];
    var _d = useState(''), inputText = _d[0], setInputText = _d[1];
    var _e = useState(0), itemCount = _e[0], setItemCount = _e[1];
    var _f = useState(true), loading = _f[0], setLoading = _f[1];
    useEffect(function () {
        query({ params: params })
            .then(function (_a) {
            var _b = _a.data, count = _b.count, results = _b.results;
            setItems(results);
            setItemCount(count);
        })
            .catch(handleHttpError(errorTitle, function () { return setItems([]); }, addAlert))
            .then(function () { return setLoading(false); });
    }, [params]);
    var renderModals = function (actionContext) { return (React.createElement(React.Fragment, null,
        (headerActions === null || headerActions === void 0 ? void 0 : headerActions.length)
            ? headerActions.map(function (action) { var _a; return (_a = action === null || action === void 0 ? void 0 : action.modal) === null || _a === void 0 ? void 0 : _a.call(action, actionContext); })
            : null,
        (listItemActions === null || listItemActions === void 0 ? void 0 : listItemActions.length)
            ? listItemActions.map(function (action) { var _a; return (_a = action === null || action === void 0 ? void 0 : action.modal) === null || _a === void 0 ? void 0 : _a.call(action, actionContext); })
            : null)); };
    var knownFilters = (filterConfig || []).map(function (_a) {
        var id = _a.id;
        return id;
    });
    var noData = items.length === 0 && !filterIsSet(params, knownFilters);
    var niceNames = Object.fromEntries((filterConfig || []).map(function (_a) {
        var id = _a.id, title = _a.title;
        return [id, title];
    }));
    return (React.createElement(React.Fragment, null, renderModals === null || renderModals === void 0 ? void 0 :
        renderModals(actionContext),
        noData && !loading ? (React.createElement(EmptyStateNoData, { button: React.createElement(React.Fragment, null, noDataButton === null || noDataButton === void 0 ? void 0 : noDataButton(null, actionContext)), description: noDataDescription, title: noDataTitle })) : loading ? (React.createElement(LoadingPageSpinner, null)) : (React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'hub-list-toolbar', "data-cy": "DetailList" },
                React.createElement(Toolbar, null,
                    React.createElement(ToolbarContent, null,
                        React.createElement(ToolbarGroup, null,
                            React.createElement(ToolbarItem, null,
                                React.createElement(CompoundFilter, { inputText: inputText, onChange: setInputText, updateParams: setParams, params: params, filterConfig: filterConfig || [] })),
                            (headerActions === null || headerActions === void 0 ? void 0 : headerActions.length) &&
                                headerActions.map(function (action) { return (React.createElement(ToolbarItem, { key: action.title }, action.button(null, actionContext))); })))),
                React.createElement(Pagination, { params: params, updateParams: setParams, count: itemCount, isTop: true })),
            React.createElement("div", null,
                React.createElement(AppliedFilters, { updateParams: function (p) {
                        setParams(p);
                        setInputText('');
                    }, params: params, ignoredParams: ['page_size', 'page', 'sort', 'ordering'], niceNames: niceNames })),
            loading ? (React.createElement(LoadingPageSpinner, null)) : !items.length ? (React.createElement(EmptyStateFilter, null)) : (React.createElement("table", { "aria-label": title, className: 'hub-c-table-content pf-c-table' },
                React.createElement(SortTable, { options: { headers: sortHeaders }, params: params, updateParams: setParams }),
                React.createElement("tbody", null, items.map(function (item, i) {
                    return renderTableRow(item, i, actionContext, listItemActions);
                })))),
            React.createElement(Pagination, { params: params, updateParams: setParams, count: itemCount })))));
}
//# sourceMappingURL=detail-list.js.map