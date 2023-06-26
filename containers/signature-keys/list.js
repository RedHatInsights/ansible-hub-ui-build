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
import { DropdownItem, Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, } from '@patternfly/react-core';
import React from 'react';
import { SigningServiceAPI } from 'src/api';
import { AlertList, AppliedFilters, BaseHeader, ClipboardCopy, CompoundFilter, DateComponent, EmptyStateFilter, EmptyStateNoData, EmptyStateUnauthorized, ListItemActions, LoadingPageSpinner, Main, Pagination, SortTable, closeAlertMixin, } from 'src/components';
import { AppContext } from 'src/loaders/app-context';
import { withRouter } from 'src/utilities';
import { ParamHelper, errorMessage, filterIsSet } from 'src/utilities';
var SignatureKeysList = /** @class */ (function (_super) {
    __extends(SignatureKeysList, _super);
    function SignatureKeysList(props) {
        var _this = _super.call(this, props) || this;
        var params = ParamHelper.parseParamString(props.location.search, [
            'page',
            'page_size',
        ]);
        if (!params['page_size']) {
            params['page_size'] = 100;
        }
        _this.state = {
            params: params,
            items: [],
            loading: true,
            itemCount: 0,
            alerts: [],
            unauthorised: false,
            inputText: '',
        };
        return _this;
    }
    SignatureKeysList.prototype.componentDidMount = function () {
        if (!this.context.user || this.context.user.is_anonymous) {
            this.setState({ loading: false, unauthorised: true });
        }
        else {
            this.query();
        }
    };
    SignatureKeysList.prototype.render = function () {
        var _this = this;
        var _a = this.state, params = _a.params, itemCount = _a.itemCount, loading = _a.loading, items = _a.items, alerts = _a.alerts, unauthorised = _a.unauthorised;
        var noData = items.length === 0 && !filterIsSet(params, ['name']);
        return (React.createElement(React.Fragment, null,
            React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            React.createElement(BaseHeader, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Signature Keys"], ["Signature Keys"]))) }),
            unauthorised ? (React.createElement(EmptyStateUnauthorized, null)) : noData && !loading ? (React.createElement(EmptyStateNoData, { title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["No signature keys yet"], ["No signature keys yet"]))), description: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Signature keys will appear once created."], ["Signature keys will appear once created."]))) })) : (React.createElement(Main, null, loading ? (React.createElement(LoadingPageSpinner, null)) : (React.createElement("section", { className: 'body' },
                React.createElement("div", { className: 'hub-list-toolbar' },
                    React.createElement(Toolbar, null,
                        React.createElement(ToolbarContent, null,
                            React.createElement(ToolbarGroup, null,
                                React.createElement(ToolbarItem, null,
                                    React.createElement(CompoundFilter, { inputText: this.state.inputText, onChange: function (text) {
                                            return _this.setState({ inputText: text });
                                        }, updateParams: function (p) {
                                            p['page'] = 1;
                                            _this.updateParams(p, function () { return _this.query(); });
                                        }, params: params, filterConfig: [
                                            {
                                                id: 'name',
                                                title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Name"], ["Name"]))),
                                            },
                                        ] }))))),
                    React.createElement(Pagination, { params: params, updateParams: function (p) {
                            return _this.updateParams(p, function () { return _this.query(); });
                        }, count: itemCount, isTop: true })),
                React.createElement("div", null,
                    React.createElement(AppliedFilters, { updateParams: function (p) {
                            _this.updateParams(p, function () { return _this.query(); });
                            _this.setState({ inputText: '' });
                        }, params: params, ignoredParams: ['page_size', 'page', 'sort', 'ordering'], niceNames: {
                            name: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Name"], ["Name"]))),
                        } })),
                loading ? React.createElement(LoadingPageSpinner, null) : this.renderTable(params),
                React.createElement(Pagination, { params: params, updateParams: function (p) { return _this.updateParams(p, function () { return _this.query(); }); }, count: itemCount })))))));
    };
    SignatureKeysList.prototype.renderTable = function (params) {
        var _this = this;
        var items = this.state.items;
        if (!items.length) {
            return React.createElement(EmptyStateFilter, null);
        }
        var sortTableOptions = {
            headers: [
                {
                    title: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Name"], ["Name"]))),
                    type: 'none',
                    id: 'name',
                },
                {
                    title: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Key fingerprint"], ["Key fingerprint"]))),
                    type: 'none',
                    id: 'pubkey_fingerprint',
                },
                {
                    title: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Created on"], ["Created on"]))),
                    type: 'none',
                    id: 'pulp_created',
                },
                {
                    title: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Public key"], ["Public key"]))),
                    type: 'none',
                    id: 'public_key',
                },
                {
                    title: '',
                    type: 'none',
                    id: 'kebab',
                },
            ],
        };
        return (React.createElement("table", { "aria-label": t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Signature keys"], ["Signature keys"]))), className: 'hub-c-table-content pf-c-table' },
            React.createElement(SortTable, { options: sortTableOptions, params: params, updateParams: function (p) {
                    p['page'] = 1;
                    _this.updateParams(p, function () { return _this.query(); });
                } }),
            React.createElement("tbody", null, items.map(function (item, i) { return _this.renderTableRow(item, i); }))));
    };
    SignatureKeysList.prototype.renderTableRow = function (item, index) {
        var name = item.name, pubkey_fingerprint = item.pubkey_fingerprint, public_key = item.public_key, pulp_created = item.pulp_created;
        var dropdownItems = [
            React.createElement(DropdownItem, { key: 'download-key', onClick: function () {
                    document.location =
                        'data:application/octet-stream,' + encodeURIComponent(public_key);
                } }, t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Download key"], ["Download key"])))),
        ];
        return (React.createElement("tr", { key: index },
            React.createElement("td", null, name),
            React.createElement("td", null, pubkey_fingerprint),
            React.createElement("td", null,
                React.createElement(DateComponent, { date: pulp_created })),
            React.createElement("td", null,
                React.createElement(ClipboardCopy, { isCode: true, isReadOnly: true, variant: 'expansion' }, public_key)),
            React.createElement(ListItemActions, { kebabItems: dropdownItems })));
    };
    Object.defineProperty(SignatureKeysList.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    SignatureKeysList.prototype.query = function () {
        var _this = this;
        this.setState({ loading: true }, function () {
            SigningServiceAPI.list(_this.state.params)
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
                    title: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Signature keys could not be displayed."], ["Signature keys could not be displayed."]))),
                    variant: 'danger',
                    description: errorMessage(status, statusText),
                });
            });
        });
    };
    SignatureKeysList.prototype.addAlert = function (alert) {
        this.setState({
            alerts: __spreadArray(__spreadArray([], this.state.alerts, true), [alert], false),
        });
    };
    Object.defineProperty(SignatureKeysList.prototype, "updateParams", {
        get: function () {
            return ParamHelper.updateParamsMixin();
        },
        enumerable: false,
        configurable: true
    });
    return SignatureKeysList;
}(React.Component));
export { SignatureKeysList };
export default withRouter(SignatureKeysList);
SignatureKeysList.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
//# sourceMappingURL=list.js.map