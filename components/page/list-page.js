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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, } from '@patternfly/react-core';
import React from 'react';
import { AlertList, AppliedFilters, BaseHeader, CompoundFilter, EmptyStateFilter, EmptyStateNoData, EmptyStateUnauthorized, LoadingPageSpinner, Main, Pagination, SortTable, closeAlertMixin, } from 'src/components';
import { AppContext } from 'src/loaders/app-context';
import { ParamHelper, errorMessage, filterIsSet, withRouter, } from 'src/utilities';
export var ListPage = function (_a) {
    var _b;
    var 
    // { featureFlags, settings, user } => bool
    condition = _a.condition, 
    // extra code to run on mount
    didMount = _a.didMount, 
    // component name for debugging
    displayName = _a.displayName, 
    // initial page size
    defaultPageSize = _a.defaultPageSize, 
    // initial sort ordering
    defaultSort = _a.defaultSort, 
    // alert on query failure
    errorTitle = _a.errorTitle, 
    // extra initial state
    extraState = _a.extraState, 
    // filters
    filterConfig = _a.filterConfig, 
    // displayed after filters
    headerActions = _a.headerActions, 
    // only used for modals; renderTableRow handles the rest
    listItemActions = _a.listItemActions, 
    // EmptyStateNoData
    noDataButton = _a.noDataButton, noDataDescription = _a.noDataDescription, noDataTitle = _a.noDataTitle, 
    // ({ params }) => Promise<{ data: { count, results[] } }>
    query = _a.query, 
    // ({ addAlert, state, setState, query }) => <ConfirmationModal... />
    renderModals = _a.renderModals, 
    // (item, index) => <tr>...</tr>
    renderTableRow = _a.renderTableRow, 
    // table headers
    sortHeaders = _a.sortHeaders, 
    // container title
    title = _a.title;
    renderModals || (renderModals = function (actionContext) {
        return (React.createElement(React.Fragment, null,
            (headerActions === null || headerActions === void 0 ? void 0 : headerActions.length)
                ? headerActions.map(function (action) { var _a; return (_a = action === null || action === void 0 ? void 0 : action.modal) === null || _a === void 0 ? void 0 : _a.call(action, actionContext); })
                : null,
            (listItemActions === null || listItemActions === void 0 ? void 0 : listItemActions.length)
                ? listItemActions.map(function (action) { var _a; return (_a = action === null || action === void 0 ? void 0 : action.modal) === null || _a === void 0 ? void 0 : _a.call(action, actionContext); })
                : null));
    });
    var klass = (_b = /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1(props) {
                var _this = _super.call(this, props) || this;
                var params = ParamHelper.parseParamString(props.location.search, [
                    'page',
                    'page_size',
                ]);
                if (!params['page_size']) {
                    params['page_size'] = defaultPageSize;
                }
                if (!params['sort'] && defaultSort) {
                    params['sort'] = defaultSort;
                }
                _this.state = __assign({ alerts: [], inputText: '', itemCount: 0, items: [], loading: true, params: params, unauthorised: false }, extraState);
                return _this;
            }
            class_1.prototype.componentDidMount = function () {
                var _this = this;
                if (!condition(this.context)) {
                    this.setState({ loading: false, unauthorised: true });
                }
                else {
                    this.query();
                }
                this.setState({ alerts: this.context.alerts || [] });
                this.context.setAlerts([]);
                if (didMount) {
                    didMount({
                        context: this.context,
                        addAlert: function (alert) { return _this.addAlert(alert); },
                    });
                }
            };
            class_1.prototype.render = function () {
                var _this = this;
                var _a = this.state, alerts = _a.alerts, itemCount = _a.itemCount, items = _a.items, loading = _a.loading, params = _a.params, unauthorised = _a.unauthorised;
                var knownFilters = (filterConfig || []).map(function (_a) {
                    var id = _a.id;
                    return id;
                });
                var noData = items.length === 0 && !filterIsSet(params, knownFilters);
                var updateParams = function (p) { return _this.updateParams(p, function () { return _this.query(); }); };
                var niceNames = Object.fromEntries((filterConfig || []).map(function (_a) {
                    var id = _a.id, title = _a.title;
                    return [id, title];
                }));
                var actionContext = {
                    addAlert: function (alert) { return _this.addAlert(alert); },
                    hasObjectPermission: function () { return false; },
                    hasPermission: this.context.hasPermission,
                    navigate: this.props.navigate,
                    query: function () { return _this.query(); },
                    queueAlert: this.context.queueAlert,
                    setState: function (s) { return _this.setState(s); },
                    state: this.state,
                    user: this.context.user,
                };
                return (React.createElement(React.Fragment, null,
                    React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
                    React.createElement(BaseHeader, { title: title }), renderModals === null || renderModals === void 0 ? void 0 :
                    renderModals(actionContext),
                    unauthorised ? (React.createElement(EmptyStateUnauthorized, null)) : noData && !loading ? (React.createElement(EmptyStateNoData, { button: React.createElement(React.Fragment, null, noDataButton === null || noDataButton === void 0 ? void 0 : noDataButton(null, actionContext)), description: noDataDescription, title: noDataTitle })) : (React.createElement(Main, null, loading ? (React.createElement(LoadingPageSpinner, null)) : (React.createElement("section", { className: 'body', "data-cy": "ListPage-".concat(displayName) },
                        React.createElement("div", { className: 'hub-list-toolbar' },
                            React.createElement(Toolbar, null,
                                React.createElement(ToolbarContent, null,
                                    React.createElement(ToolbarGroup, null,
                                        React.createElement(ToolbarItem, null,
                                            React.createElement(CompoundFilter, { inputText: this.state.inputText, onChange: function (inputText) {
                                                    return _this.setState({ inputText: inputText });
                                                }, updateParams: updateParams, params: params, filterConfig: filterConfig })),
                                        (headerActions === null || headerActions === void 0 ? void 0 : headerActions.length) &&
                                            headerActions.map(function (action) { return (React.createElement(ToolbarItem, { key: action.title }, action.button(null, actionContext))); })))),
                            React.createElement(Pagination, { params: params, updateParams: updateParams, count: itemCount, isTop: true })),
                        React.createElement("div", null,
                            React.createElement(AppliedFilters, { updateParams: function (p) {
                                    updateParams(p);
                                    _this.setState({ inputText: '' });
                                }, params: params, ignoredParams: ['page_size', 'page', 'sort', 'ordering'], niceNames: niceNames })),
                        loading ? (React.createElement(LoadingPageSpinner, null)) : (this.renderTable(params, updateParams, actionContext)),
                        React.createElement(Pagination, { params: params, updateParams: updateParams, count: itemCount })))))));
            };
            class_1.prototype.renderTable = function (params, updateParams, actionContext) {
                var items = this.state.items;
                if (!items.length) {
                    return React.createElement(EmptyStateFilter, null);
                }
                return (React.createElement("table", { "aria-label": title, className: 'hub-c-table-content pf-c-table' },
                    React.createElement(SortTable, { options: { headers: sortHeaders }, params: params, updateParams: updateParams }),
                    React.createElement("tbody", null, items.map(function (item, i) { return renderTableRow(item, i, actionContext); }))));
            };
            class_1.prototype.query = function () {
                var _this = this;
                this.setState({ loading: true }, function () {
                    query({ params: _this.state.params })
                        .then(function (result) {
                        _this.setState({
                            items: result.data.results,
                            itemCount: result.data.count,
                            loading: false,
                        });
                    })
                        .catch(function (e) {
                        var _a = e.response, status = _a.status, statusText = _a.statusText;
                        _this.setState({
                            loading: false,
                            items: [],
                            itemCount: 0,
                        });
                        _this.addAlert({
                            title: errorTitle,
                            variant: 'danger',
                            description: errorMessage(status, statusText),
                        });
                    });
                });
            };
            class_1.prototype.addAlert = function (alert) {
                this.setState({
                    alerts: __spreadArray(__spreadArray([], this.state.alerts, true), [alert], false),
                });
            };
            Object.defineProperty(class_1.prototype, "closeAlert", {
                get: function () {
                    return closeAlertMixin('alerts');
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(class_1.prototype, "updateParams", {
                get: function () {
                    return ParamHelper.updateParamsMixin();
                },
                enumerable: false,
                configurable: true
            });
            return class_1;
        }(React.Component)),
        _b.displayName = displayName,
        _b.contextType = AppContext,
        _b);
    return withRouter(klass);
};
//# sourceMappingURL=list-page.js.map