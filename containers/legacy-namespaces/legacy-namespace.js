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
import { DataList, DataListCell, DataListItem, DataListItemCells, DataListItemRow, DropdownItem, } from '@patternfly/react-core';
import React from 'react';
import { Link } from 'react-router-dom';
import { LegacyNamespaceAPI, LegacyRoleAPI, } from 'src/api';
import { AlertList, BaseHeader, EmptyStateNoData, LegacyRoleListItem, LoadingPageSpinner, Logo, Pagination, StatefulDropdown, WisdomModal, closeAlertMixin, } from 'src/components';
import { AppContext } from 'src/loaders/app-context';
import { Paths, formatPath } from 'src/paths';
import { withRouter } from 'src/utilities';
import './legacy-namespace.scss';
var LegacyNamespaceRoles = /** @class */ (function (_super) {
    __extends(LegacyNamespaceRoles, _super);
    // This is the list of roles that is shown on
    // the legacy namespace details page.
    function LegacyNamespaceRoles(props) {
        var _this = _super.call(this, props) || this;
        _this.updateParams = function (p) {
            var page = p.page, page_size = p.page_size, order_by = p.order_by;
            var namespace = _this.state.namespace;
            LegacyRoleAPI.list({
                page: page,
                page_size: page_size,
                order_by: order_by,
                github_user: namespace.name,
            }).then(function (response) {
                _this.setState(function () { return ({
                    mounted: true,
                    loading: false,
                    params: {
                        page: page,
                        page_size: page_size,
                        order_by: order_by,
                    },
                    count: response.data.count,
                    namespace: namespace,
                    roles: response.data.results,
                }); });
            });
        };
        _this.state = {
            mounted: false,
            loading: true,
            count: 0,
            namespace: props.namespace,
            roles: null,
            params: {
                page: 1,
                page_size: 10,
                order_by: 'created',
            },
        };
        return _this;
    }
    LegacyNamespaceRoles.prototype.componentDidMount = function () {
        var _this = this;
        var namespace = this.state.namespace;
        var thisQS = window.location.search;
        var urlParams = new URLSearchParams(thisQS);
        var page = parseInt(urlParams.get('page'), 10) || 1;
        var page_size = parseInt(urlParams.get('page_size'), 10) || 10;
        var order_by = urlParams.get('order_by') || 'created';
        LegacyRoleAPI.list({
            page: page,
            page_size: page_size,
            order_by: order_by,
            github_user: namespace.name,
        }).then(function (response) {
            _this.setState(function () { return ({
                mounted: true,
                loading: false,
                params: {
                    page: page,
                    page_size: page_size,
                    order_by: order_by,
                },
                count: response.data.count,
                namespace: namespace,
                roles: response.data.results,
            }); });
        });
    };
    LegacyNamespaceRoles.prototype.render = function () {
        var _a = this.state, loading = _a.loading, roles = _a.roles;
        var noData = roles === null || roles.length === 0;
        return (React.createElement("div", null,
            React.createElement(React.Fragment, null, loading ? (React.createElement(LoadingPageSpinner, null)) : noData ? (React.createElement(EmptyStateNoData, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["No roles yet"], ["No roles yet"]))), description: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Roles will appear once imported"], ["Roles will appear once imported"]))) })) : (React.createElement("div", null,
                React.createElement(DataList, { "aria-label": t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["List of Legacy Roles"], ["List of Legacy Roles"]))) }, this.state.roles.map(function (lrole, ix) { return (React.createElement(LegacyRoleListItem, { key: ix, role: lrole, show_thumbnail: false })); })),
                React.createElement(Pagination, { params: this.state.params, updateParams: this.updateParams, count: this.state.count }))))));
    };
    return LegacyNamespaceRoles;
}(React.Component));
var LegacyNamespace = /** @class */ (function (_super) {
    __extends(LegacyNamespace, _super);
    // This is the details page for a legacy namespace
    function LegacyNamespace(props) {
        var _this = _super.call(this, props) || this;
        var namespaceid = props.routeParams.namespaceid;
        _this.state = __assign(__assign({}, props), { loading: true, namespaceid: namespaceid, namespace: null, roles: null, isOpenWisdomModal: false, alerts: [] });
        return _this;
    }
    LegacyNamespace.prototype.addAlert = function (alert) {
        this.setState({
            alerts: __spreadArray(__spreadArray([], this.state.alerts, true), [alert], false),
        });
    };
    Object.defineProperty(LegacyNamespace.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    LegacyNamespace.prototype.componentDidMount = function () {
        var _this = this;
        LegacyNamespaceAPI.get('namespaces/' + this.state.namespaceid).then(function (response) {
            // set the user
            _this.setState(function () { return ({
                loading: false,
                namespace: response.data,
            }); });
        });
    };
    LegacyNamespace.prototype.render = function () {
        var _this = this;
        var _a;
        if (this.state.loading === true) {
            return React.createElement(LoadingPageSpinner, null);
        }
        var ai_deny_index = this.context.featureFlags.ai_deny_index;
        var infocells = [];
        var namespace_url = formatPath(Paths.legacyNamespace, {
            namespaceid: this.state.namespace.id,
        });
        if (this.state.namespace !== undefined) {
            infocells.push(React.createElement(DataListCell, { isFilled: false, alignRight: false, key: 'ns-logo' },
                React.createElement(Logo, { alt: 'avatar url', fallbackToDefault: true, image: this.state.namespace.avatar_url, size: '90px', unlockWidth: true, width: '90px' }),
                React.createElement(Link, { to: namespace_url }, this.state.namespace.name)));
            infocells.push(React.createElement(DataListCell, { isFilled: false, alignRight: false, key: 'ns-name' },
                React.createElement(BaseHeader, { title: this.state.namespace.name })));
            var summary_fields = this.state.namespace.summary_fields;
            var userOwnsLegacyNamespace = (_a = summary_fields === null || summary_fields === void 0 ? void 0 : summary_fields.owners) === null || _a === void 0 ? void 0 : _a.filter(function (n) { return n.username == _this.context.user.username; }).length;
            var dropdownItems = [];
            if (ai_deny_index &&
                (this.context.user.is_superuser || userOwnsLegacyNamespace)) {
                dropdownItems.push(React.createElement(DropdownItem, { onClick: function () { return _this.setState({ isOpenWisdomModal: true }); } }, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Ansible Lightspeed settings"], ["Ansible Lightspeed settings"])))));
            }
            if (dropdownItems.length) {
                infocells.push(React.createElement(DataListCell, { isFilled: false, alignRight: true, key: 'kebab' },
                    React.createElement("div", { "data-cy": 'ns-kebab-toggle', className: 'hub-kebab-toggle' },
                        React.createElement(StatefulDropdown, { items: dropdownItems }))));
            }
        }
        return (React.createElement(React.Fragment, null,
            this.state.isOpenWisdomModal && (React.createElement(WisdomModal, { addAlert: function (alert) { return _this.addAlert(alert); }, closeAction: function () { return _this.setState({ isOpenWisdomModal: false }); }, scope: 'legacy_namespace', reference: this.state.namespace.name })),
            React.createElement(AlertList, { alerts: this.state.alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            React.createElement(DataList, { "aria-label": t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Role namespace header"], ["Role namespace header"]))), className: 'hub-legacy-namespace-page' },
                React.createElement(DataListItem, { "data-cy": 'LegacyNamespace' },
                    React.createElement(DataListItemRow, null,
                        React.createElement(DataListItemCells, { dataListCells: infocells })))),
            React.createElement(LegacyNamespaceRoles, { namespace: this.state.namespace })));
    };
    return LegacyNamespace;
}(React.Component));
export default withRouter(LegacyNamespace);
LegacyNamespace.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=legacy-namespace.js.map