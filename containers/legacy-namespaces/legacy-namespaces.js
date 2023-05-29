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
import { t } from '@lingui/macro';
import { DataList } from '@patternfly/react-core';
import React from 'react';
import { LegacyNamespaceAPI } from 'src/api/legacynamespace';
import { AlertList, BaseHeader, CollectionFilter, EmptyStateNoData, LegacyNamespaceListItem, LoadingPageSpinner, Pagination, WisdomModal, closeAlertMixin, } from 'src/components';
import { AppContext } from 'src/loaders/app-context';
import { withRouter } from 'src/utilities';
import './legacy-namespaces.scss';
var LegacyNamespaces = /** @class */ (function (_super) {
    __extends(LegacyNamespaces, _super);
    function LegacyNamespaces(props) {
        var _this = _super.call(this, props) || this;
        _this.updateParams = function (p) {
            var page = p.page, page_size = p.page_size, order_by = p.order_by, keywords = p.keywords;
            _this.setState({ loading: true }, function () {
                LegacyNamespaceAPI.list({
                    page: page,
                    page_size: page_size,
                    order_by: order_by,
                    keywords: keywords,
                }).then(function (response) {
                    _this.setState(function () { return ({
                        mounted: true,
                        loading: false,
                        params: {
                            page: page,
                            page_size: page_size,
                            order_by: order_by,
                            keywords: keywords,
                        },
                        count: response.data.count,
                        legacynamespaces: response.data.results,
                    }); });
                });
            });
        };
        _this.state = __assign(__assign({}, props), { params: {
                page: 1,
                page_size: 10,
                order_by: 'name',
                keywords: null,
            }, loading: true, mounted: false, count: 0, legacynamespaces: [], isOpenWisdomModal: false, wisdomReference: null, alerts: [] });
        return _this;
    }
    LegacyNamespaces.prototype.componentDidMount = function () {
        var thisQS = window.location.search;
        var urlParams = new URLSearchParams(thisQS);
        this.updateParams({
            page: parseInt(urlParams.get('page'), 10) || 1,
            page_size: parseInt(urlParams.get('page_size'), 10) || 10,
            order_by: urlParams.get('order_by') || 'name',
            keywords: urlParams.get('keywords') || null,
        });
    };
    LegacyNamespaces.prototype.openModal = function (namespace) {
        this.setState({ isOpenWisdomModal: true, wisdomReference: namespace.name });
    };
    LegacyNamespaces.prototype.addAlert = function (alert) {
        this.setState({
            alerts: __spreadArray(__spreadArray([], this.state.alerts, true), [alert], false),
        });
    };
    Object.defineProperty(LegacyNamespaces.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    LegacyNamespaces.prototype.render = function () {
        var _this = this;
        var ignoredParams = [
            'namespace',
            'repository__name',
            'page',
            'page_size',
            'sort',
            'tag',
            'tags',
            'view_type',
            'order_by',
        ];
        // do not pass null'ish params to the filter widget
        var cleanParams = {};
        for (var _i = 0, _a = Object.entries(this.state.params); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (ignoredParams.includes(key)) {
                continue;
            }
            if (value !== undefined && value !== null && value !== '') {
                cleanParams[key] = value;
            }
        }
        var _c = this.state, loading = _c.loading, legacynamespaces = _c.legacynamespaces;
        var noData = legacynamespaces.length === 0;
        return (React.createElement("div", null,
            React.createElement(AlertList, { alerts: this.state.alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            this.state.isOpenWisdomModal && (React.createElement(WisdomModal, { addAlert: function (alert) { return _this.addAlert(alert); }, closeAction: function () { return _this.setState({ isOpenWisdomModal: false }); }, scope: 'legacy_namespace', reference: this.state.wisdomReference })),
            React.createElement(BaseHeader, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Legacy Namespaces"], ["Legacy Namespaces"]))) }),
            React.createElement(React.Fragment, null, loading ? (React.createElement(LoadingPageSpinner, null)) : noData ? (React.createElement(EmptyStateNoData, { title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["No namespaces yet"], ["No namespaces yet"]))), description: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Namespaces will appear once created or roles are imported"], ["Namespaces will appear once created or roles are imported"]))) })) : (React.createElement("div", null,
                React.createElement(CollectionFilter, { ignoredParams: ignoredParams, params: cleanParams, updateParams: this.updateParams }),
                React.createElement(Pagination, { params: this.state.params, updateParams: this.updateParams, count: this.state.count }),
                React.createElement(DataList, { "aria-label": t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["List of Legacy Namespaces"], ["List of Legacy Namespaces"]))) }, this.state.legacynamespaces &&
                    this.state.legacynamespaces.map(function (lnamespace) { return (React.createElement(LegacyNamespaceListItem, { key: lnamespace.id, namespace: lnamespace, openModal: function (namespace) { return _this.openModal(namespace); } })); })),
                React.createElement(Pagination, { params: this.state.params, updateParams: this.updateParams, count: this.state.count }))))));
    };
    return LegacyNamespaces;
}(React.Component));
export default withRouter(LegacyNamespaces);
LegacyNamespaces.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=legacy-namespaces.js.map