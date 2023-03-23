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
import { LoadingPageSpinner } from 'src/components';
import { AlertList, BaseHeader, Breadcrumbs, EmptyStateUnauthorized, Main, Tabs, closeAlertMixin, } from 'src/components';
import { AppContext } from 'src/loaders/app-context';
import { ParamHelper, errorMessage, withRouter, } from 'src/utilities';
export var PageWithTabs = function (_a) {
    var _b;
    var 
    // ({ name }) => [{ url?, name }]
    breadcrumbs = _a.breadcrumbs, 
    // { featureFlags, settings, user } => bool
    condition = _a.condition, 
    // extra code to run on mount
    didMount = _a.didMount, 
    // component name for debugging
    displayName = _a.displayName, 
    // alert on query failure
    errorTitle = _a.errorTitle, 
    // extra initial state
    extraState = _a.extraState, 
    // displayed after filters
    headerActions = _a.headerActions, 
    // under title
    headerDetails = _a.headerDetails, 
    // () => Promise<T>
    query = _a.query, 
    // ({ addAlert, state, setState, query }) => <ConfirmationModal... />
    renderModals = _a.renderModals, renderTab = _a.renderTab, 
    // [{ id, name }]
    tabs = _a.tabs;
    renderModals || (renderModals = function (actionContext) {
        return (React.createElement(React.Fragment, null, (headerActions === null || headerActions === void 0 ? void 0 : headerActions.length) &&
            headerActions.map(function (action) { var _a; return (_a = action === null || action === void 0 ? void 0 : action.modal) === null || _a === void 0 ? void 0 : _a.call(action, actionContext); })));
    });
    var klass = (_b = /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1(props) {
                var _this = _super.call(this, props) || this;
                var params = ParamHelper.parseParamString(props.location.search, [
                    'tab',
                ]);
                if (!params['tab']) {
                    params['tab'] = tabs[0].id;
                }
                _this.state = __assign({ alerts: [], item: null, loading: true, unauthorised: false, params: params }, extraState);
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
                var routeParams = this.props.routeParams;
                var _a = this.state, alerts = _a.alerts, item = _a.item, loading = _a.loading, params = _a.params, unauthorised = _a.unauthorised;
                var actionContext = {
                    addAlert: function (alert) { return _this.addAlert(alert); },
                    hasPermission: this.context.hasPermission,
                    navigate: this.props.navigate,
                    query: function () { return _this.query(); },
                    queueAlert: this.context.queueAlert,
                    setState: function (s) { return _this.setState(s); },
                    state: this.state,
                };
                var name = (item === null || item === void 0 ? void 0 : item.name) || routeParams.name;
                var tab = tabs.find(function (t) { return t.id == params.tab; }) || tabs[0];
                return (React.createElement(React.Fragment, null,
                    React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
                    React.createElement(BaseHeader, { title: name, breadcrumbs: React.createElement(Breadcrumbs, { links: breadcrumbs({
                                name: name,
                                tab: tab,
                            }) }), pageControls: loading ? null : (React.createElement("div", { className: 'hub-list-toolbar' },
                            React.createElement(Toolbar, null,
                                React.createElement(ToolbarContent, null,
                                    React.createElement(ToolbarGroup, null, (headerActions === null || headerActions === void 0 ? void 0 : headerActions.length) &&
                                        headerActions.map(function (action) {
                                            return action.visible(item, actionContext) ? (React.createElement(ToolbarItem, { key: action.title }, action.button(item, actionContext))) : null;
                                        })))))) }, headerDetails === null || headerDetails === void 0 ? void 0 :
                        headerDetails(item),
                        React.createElement("div", { className: 'hub-tab-link-container' },
                            React.createElement("div", { className: 'tabs' },
                                React.createElement(Tabs, { tabs: tabs, params: params, updateParams: function (p) { return _this.updateParams(p); } })))), renderModals === null || renderModals === void 0 ? void 0 :
                    renderModals(actionContext),
                    unauthorised ? (React.createElement(EmptyStateUnauthorized, null)) : (React.createElement(Main, null, loading ? (React.createElement(LoadingPageSpinner, null)) : (React.createElement("section", { className: 'body', "data-cy": "PageWithTabs-".concat(displayName, "-").concat(params.tab) }, this.renderTab(params.tab, actionContext)))))));
            };
            class_1.prototype.renderTab = function (tab, actionContext) {
                var item = this.state.item;
                if (!item) {
                    return null;
                }
                return renderTab(tab, item, actionContext);
            };
            class_1.prototype.query = function () {
                var _this = this;
                var name = this.props.routeParams.name;
                this.setState({ loading: true }, function () {
                    query({ name: name })
                        .then(function (item) {
                        _this.setState({
                            item: item,
                            loading: false,
                        });
                    })
                        .catch(function (e) {
                        var _a = e.response, status = _a.status, statusText = _a.statusText;
                        _this.setState({
                            loading: false,
                            item: null,
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
//# sourceMappingURL=page-with-tabs.js.map