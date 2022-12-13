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
import { t } from '@lingui/macro';
import * as React from 'react';
import './legacy-roles.scss';
import { withRouter } from 'react-router-dom';
import { DataList } from '@patternfly/react-core';
import { BaseHeader, CollectionFilter, EmptyStateNoData, LegacyRoleListItem, LoadingPageSpinner, Pagination, } from 'src/components';
import { LegacyRoleAPI } from 'src/api/legacyrole';
import { AppContext } from 'src/loaders/app-context';
var LegacyRoles = /** @class */ (function (_super) {
    __extends(LegacyRoles, _super);
    // This is the main roles page
    function LegacyRoles(props) {
        var _this = _super.call(this, props) || this;
        _this.updateParams = function (p) {
            var page = p.page, page_size = p.page_size, order_by = p.order_by, keywords = p.keywords, tags = p.tags;
            LegacyRoleAPI.list({
                page: page,
                page_size: page_size,
                order_by: order_by,
                tags: tags,
                keywords: keywords,
            }).then(function (response) {
                _this.setState(function () { return ({
                    mounted: true,
                    params: {
                        page: page,
                        page_size: page_size,
                        order_by: order_by,
                        keywords: keywords,
                        tags: tags,
                    },
                    count: response.data.count,
                    legacyroles: response.data.results,
                }); });
            });
        };
        _this.state = __assign(__assign({}, props), { params: {
                page: 1,
                page_size: 10,
                order_by: 'created',
                keywords: null,
            }, loading: true, mounted: false, count: 0, legacyroles: [] });
        return _this;
    }
    LegacyRoles.prototype.componentDidMount = function () {
        var _this = this;
        var thisQS = window.location.search;
        var urlParams = new URLSearchParams(thisQS);
        var page = parseInt(urlParams.get('page')) || 1;
        var page_num = parseInt(urlParams.get('page')) || 1;
        var page_size = parseInt(urlParams.get('page_size')) || 10;
        var order_by = urlParams.get('order_by') || 'created';
        var keywords = urlParams.get('keywords');
        var tags = urlParams.get('tags');
        LegacyRoleAPI.list({
            page: page,
            page_size: page_size,
            order_by: order_by,
            tags: tags,
            keywords: keywords,
        }).then(function (response) {
            _this.setState(function () { return ({
                mounted: true,
                loading: false,
                params: {
                    page: page_num,
                    page_size: page_size,
                    order_by: order_by,
                    keywords: keywords,
                },
                count: response.data.count,
                legacyroles: response.data.results,
            }); });
        });
    };
    LegacyRoles.prototype.render = function () {
        var _a = this.state, loading = _a.loading, legacyroles = _a.legacyroles;
        // prevent these params from showing up in the filter widget
        var ignoredParams = [
            'order_by',
            'namespace',
            'page',
            'page_size',
            'sort',
            'view_type',
        ];
        // do not pass null'ish params to the filter widget
        var cleanParams = {};
        for (var _i = 0, _b = Object.entries(this.state.params); _i < _b.length; _i++) {
            var _c = _b[_i], key = _c[0], value = _c[1];
            if (ignoredParams.includes(key)) {
                continue;
            }
            if (value !== undefined && value !== null && value !== '') {
                cleanParams[key] = value;
            }
        }
        // this seems tricky to get right ...
        var noData = !loading &&
            cleanParams['keywords'] === undefined &&
            cleanParams['tag'] == undefined &&
            legacyroles.length == 0;
        return (React.createElement("div", null,
            React.createElement(BaseHeader, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Legacy Roles"], ["Legacy Roles"]))) }),
            React.createElement(React.Fragment, null, loading ? (React.createElement(LoadingPageSpinner, null)) : noData ? (React.createElement(EmptyStateNoData, { title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["No roles yet"], ["No roles yet"]))), description: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Roles will appear once imported"], ["Roles will appear once imported"]))) })) : (React.createElement("div", null,
                React.createElement(CollectionFilter, { ignoredParams: ignoredParams, params: cleanParams, updateParams: this.updateParams }),
                React.createElement(Pagination, { params: this.state.params, 
                    //updateParams={(p) => this.updateParams(p)}
                    updateParams: this.updateParams, count: this.state.count }),
                React.createElement(DataList, { "aria-label": t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["List of Legacy Roles"], ["List of Legacy Roles"]))) }, this.state.legacyroles &&
                    this.state.legacyroles.map(function (lrole) { return (React.createElement(LegacyRoleListItem, { key: lrole.github_user + lrole.name + lrole.id, role: lrole, show_thumbnail: true })); })),
                React.createElement(Pagination, { params: this.state.params, 
                    //updateParams={(p) => this.updateParams(p)}
                    updateParams: this.updateParams, count: this.state.count }))))));
    };
    return LegacyRoles;
}(React.Component));
export default withRouter(LegacyRoles);
LegacyRoles.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=legacy-roles.js.map