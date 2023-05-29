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
import { i18n } from '@lingui/core';
import { t } from '@lingui/macro';
import { Button, Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, } from '@patternfly/react-core';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { MyNamespaceAPI, NamespaceAPI } from 'src/api';
import { AlertList, AppliedFilters, BaseHeader, CompoundFilter, EmptyStateFilter, EmptyStateNoData, LinkTabs, LoadingPageSpinner, LoadingPageWithHeader, NamespaceCard, NamespaceModal, Pagination, Sort, closeAlertMixin, } from 'src/components';
import { Constants } from 'src/constants';
import { AppContext } from 'src/loaders/app-context';
import { Paths, formatPath, namespaceBreadcrumb } from 'src/paths';
import { errorMessage, filterIsSet } from 'src/utilities';
import { ParamHelper } from 'src/utilities/param-helper';
import './namespace-list.scss';
var NamespaceList = /** @class */ (function (_super) {
    __extends(NamespaceList, _super);
    function NamespaceList(props) {
        var _this = _super.call(this, props) || this;
        _this.nonURLParams = ['tenant'];
        _this.handleModalToggle = function () {
            _this.setState(function (_a) {
                var isModalOpen = _a.isModalOpen;
                return ({
                    isModalOpen: !isModalOpen,
                });
            });
        };
        var params = ParamHelper.parseParamString(props.location.search, [
            'page',
            'page_size',
        ]);
        if (!params['page_size']) {
            params['page_size'] = 20;
        }
        if (!params['sort']) {
            params['sort'] = 'name';
        }
        _this.state = {
            alerts: [],
            namespaces: undefined,
            itemCount: 0,
            params: params,
            hasPermission: true,
            isModalOpen: false,
            loading: true,
            inputText: params['keywords'] || '',
        };
        return _this;
    }
    NamespaceList.prototype.componentDidMount = function () {
        var _this = this;
        this.setState({ alerts: this.context.alerts || [] });
        this.context.setAlerts([]);
        if (this.props.filterOwner) {
            // Make a query with no params and see if it returns results to tell
            // if the user can edit namespaces
            MyNamespaceAPI.list({})
                .then(function (results) {
                if (results.data.meta.count !== 0) {
                    _this.loadNamespaces();
                }
                else {
                    _this.setState({
                        hasPermission: false,
                        namespaces: [],
                        loading: false,
                    });
                }
            })
                .catch(function (e) {
                var _a = e.response, status = _a.status, statusText = _a.statusText;
                _this.setState({
                    namespaces: [],
                    itemCount: 0,
                    loading: false,
                }, function () {
                    return _this.addAlert({
                        variant: 'danger',
                        title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Namespaces list could not be displayed."], ["Namespaces list could not be displayed."]))),
                        description: errorMessage(status, statusText),
                    });
                });
            });
        }
        else {
            this.loadNamespaces();
        }
    };
    NamespaceList.prototype.render = function () {
        var _this = this;
        if (this.state.redirect) {
            return React.createElement(Navigate, { to: this.state.redirect });
        }
        var _a = this.state, alerts = _a.alerts, namespaces = _a.namespaces, params = _a.params, itemCount = _a.itemCount, loading = _a.loading, inputText = _a.inputText;
        var filterOwner = this.props.filterOwner;
        var hasPermission = this.context.hasPermission;
        var noData = !filterIsSet(this.state.params, ['keywords']) &&
            namespaces !== undefined &&
            namespaces.length === 0;
        if (loading) {
            return React.createElement(LoadingPageWithHeader, null);
        }
        // Namespaces or Partners
        var title = i18n._(namespaceBreadcrumb.name);
        return (React.createElement("div", { className: 'hub-namespace-page' },
            React.createElement(NamespaceModal, { isOpen: this.state.isModalOpen, toggleModal: this.handleModalToggle, onCreateSuccess: function (result) {
                    return _this.setState({
                        redirect: formatPath(Paths.namespaceDetail, {
                            namespace: result.name,
                        }, { tab: 'collections' }),
                    });
                } }),
            React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            React.createElement(BaseHeader, { title: title },
                !this.context.user.is_anonymous && (React.createElement("div", { className: 'hub-tab-link-container' },
                    React.createElement("div", { className: 'tabs' },
                        React.createElement(LinkTabs, { tabs: [
                                {
                                    title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["All"], ["All"]))),
                                    link: formatPath(Paths[NAMESPACE_TERM]),
                                    active: !filterOwner,
                                },
                                {
                                    title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["My namespaces"], ["My namespaces"]))),
                                    link: formatPath(Paths.myNamespaces),
                                    active: filterOwner,
                                },
                            ] })))),
                noData ? null : (React.createElement("div", { className: 'toolbar' },
                    React.createElement(Toolbar, null,
                        React.createElement(ToolbarContent, null,
                            React.createElement(ToolbarGroup, { style: { marginLeft: 0 } },
                                React.createElement(ToolbarItem, null,
                                    React.createElement(CompoundFilter, { inputText: inputText, onChange: function (text) { return _this.setState({ inputText: text }); }, updateParams: function (p) {
                                            return _this.updateParams(p, function () { return _this.loadNamespaces(); });
                                        }, params: params, filterConfig: [{ id: 'keywords', title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["keywords"], ["keywords"]))) }] }),
                                    React.createElement(AppliedFilters, { style: { marginTop: '16px' }, updateParams: function (p) {
                                            _this.updateParams(p, function () { return _this.loadNamespaces(); });
                                            _this.setState({ inputText: '' });
                                        }, params: params, ignoredParams: ['page_size', 'page', 'sort'], niceNames: { keywords: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["keywords"], ["keywords"]))) } }))),
                            React.createElement(ToolbarGroup, { style: { alignSelf: 'start' } },
                                React.createElement(ToolbarItem, null,
                                    React.createElement(Sort, { options: [
                                            { title: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Name"], ["Name"]))), id: 'name', type: 'alpha' },
                                        ], params: params, updateParams: function (p) {
                                            return _this.updateParams(p, function () { return _this.loadNamespaces(); });
                                        } })),
                                hasPermission('galaxy.add_namespace') && (React.createElement(ToolbarItem, { key: 'create-button' },
                                    React.createElement(Button, { variant: 'primary', onClick: this.handleModalToggle }, t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Create"], ["Create"]))))))))),
                    React.createElement("div", null,
                        React.createElement(Pagination, { params: params, updateParams: function (p) {
                                return _this.updateParams(p, function () { return _this.loadNamespaces(); });
                            }, count: itemCount, isCompact: true, perPageOptions: Constants.CARD_DEFAULT_PAGINATION_OPTIONS }))))),
            React.createElement("section", { className: 'card-area' }, this.renderBody()),
            noData || loading ? null : (React.createElement("section", { className: 'footer' },
                React.createElement(Pagination, { params: params, updateParams: function (p) {
                        return _this.updateParams(p, function () { return _this.loadNamespaces(); });
                    }, perPageOptions: Constants.CARD_DEFAULT_PAGINATION_OPTIONS, count: itemCount })))));
    };
    NamespaceList.prototype.renderBody = function () {
        var _this = this;
        var _a = this.state, namespaces = _a.namespaces, loading = _a.loading;
        var _b = this.props, namespacePath = _b.namespacePath, filterOwner = _b.filterOwner;
        var hasPermission = this.context.hasPermission;
        var noDataTitle = t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["No namespaces yet"], ["No namespaces yet"])));
        var noDataDescription = !filterOwner
            ? t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Namespaces will appear once created"], ["Namespaces will appear once created"]))) : t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["This account is not set up to manage any namespaces"], ["This account is not set up to manage any namespaces"])));
        var noDataButton = hasPermission('galaxy.add_namespace') ? (React.createElement(Button, { variant: 'primary', onClick: function () { return _this.handleModalToggle(); } }, t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Create"], ["Create"]))))) : null;
        if (loading) {
            return (React.createElement("section", null,
                React.createElement(LoadingPageSpinner, null),
                ";"));
        }
        if (namespaces.length === 0) {
            return (React.createElement("section", null, filterIsSet(this.state.params, ['keywords']) ? (React.createElement(EmptyStateFilter, null)) : (React.createElement(EmptyStateNoData, { title: noDataTitle, description: noDataDescription, button: noDataButton }))));
        }
        return (React.createElement("section", { className: 'card-layout' }, namespaces.map(function (ns, i) { return (React.createElement("div", { key: i, className: 'card-wrapper' },
            React.createElement(NamespaceCard, __assign({ namespaceURL: formatPath(namespacePath, {
                    namespace: ns.name,
                }), key: i }, ns)))); })));
    };
    NamespaceList.prototype.loadNamespaces = function () {
        var _this = this;
        var filterOwner = this.props.filterOwner;
        var api = filterOwner ? MyNamespaceAPI : NamespaceAPI;
        this.setState({ loading: true }, function () {
            api
                .list(_this.state.params)
                .then(function (results) {
                _this.setState({
                    namespaces: results.data.data,
                    itemCount: results.data.meta.count,
                    loading: false,
                });
            })
                .catch(function (e) {
                var _a = e.response, status = _a.status, statusText = _a.statusText;
                _this.setState({
                    namespaces: [],
                    itemCount: 0,
                    loading: false,
                }, function () {
                    return _this.addAlert({
                        variant: 'danger',
                        title: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Namespaces list could not be displayed."], ["Namespaces list could not be displayed."]))),
                        description: errorMessage(status, statusText),
                    });
                });
            });
        });
    };
    Object.defineProperty(NamespaceList.prototype, "updateParams", {
        get: function () {
            return ParamHelper.updateParamsMixin(this.nonURLParams);
        },
        enumerable: false,
        configurable: true
    });
    NamespaceList.prototype.addAlert = function (alert) {
        this.setState({
            alerts: __spreadArray(__spreadArray([], this.state.alerts, true), [alert], false),
        });
    };
    Object.defineProperty(NamespaceList.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    return NamespaceList;
}(React.Component));
export { NamespaceList };
NamespaceList.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
//# sourceMappingURL=namespace-list.js.map