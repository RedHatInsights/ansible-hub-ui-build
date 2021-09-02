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
import * as React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Section } from '@redhat-cloud-services/frontend-components';
import { Toolbar, ToolbarGroup, ToolbarItem, ToolbarContent, Tooltip, Button, } from '@patternfly/react-core';
import { ExecutionEnvironmentAPI } from 'src/api';
import { filterIsSet, ParamHelper } from 'src/utilities';
import { CompoundFilter, LoadingPageSpinner, AppliedFilters, Pagination, SortTable, AlertList, closeAlertMixin, BaseHeader, Main, EmptyStateFilter, EmptyStateNoData, DateComponent, } from 'src/components';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import { formatPath, Paths } from '../../paths';
var ExecutionEnvironmentList = /** @class */ (function (_super) {
    __extends(ExecutionEnvironmentList, _super);
    function ExecutionEnvironmentList(props) {
        var _this = _super.call(this, props) || this;
        var params = ParamHelper.parseParamString(props.location.search, [
            'page',
            'page_size',
        ]);
        if (!params['page_size']) {
            params['page_size'] = 10;
        }
        if (!params['sort']) {
            params['sort'] = 'name';
        }
        _this.state = {
            params: params,
            items: [],
            loading: true,
            itemCount: 0,
            alerts: [],
        };
        return _this;
    }
    ExecutionEnvironmentList.prototype.componentDidMount = function () {
        this.queryEnvironments();
    };
    ExecutionEnvironmentList.prototype.render = function () {
        var _this = this;
        var _a = this.state, params = _a.params, itemCount = _a.itemCount, loading = _a.loading, alerts = _a.alerts, items = _a.items;
        var noData = items.length === 0 && !filterIsSet(params, ['name']);
        var pushImagesButton = (React.createElement(Button, { variant: 'link', onClick: function () {
                return window.open('https://access.redhat.com/documentation/en-us/red_hat_ansible_automation_platform/2.0-ea/html-single/managing_containers_in_private_automation_hub/index', '_blank');
            } },
            "Push container images ",
            React.createElement(ExternalLinkAltIcon, null)));
        return (React.createElement(React.Fragment, null,
            React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            React.createElement(BaseHeader, { title: 'Container Registry' }),
            noData && !loading ? (React.createElement(EmptyStateNoData, { title: 'No container repositories yet', description: 'You currently have no container repositories. Add a container repository via the CLI to get started.', button: pushImagesButton })) : (React.createElement(Main, null, loading ? (React.createElement(LoadingPageSpinner, null)) : (React.createElement(Section, { className: 'body' },
                React.createElement("div", { className: 'toolbar' },
                    React.createElement(Toolbar, null,
                        React.createElement(ToolbarContent, null,
                            React.createElement(ToolbarGroup, null,
                                React.createElement(ToolbarItem, null,
                                    React.createElement(CompoundFilter, { updateParams: function (p) {
                                            p['page'] = 1;
                                            _this.updateParams(p, function () {
                                                return _this.queryEnvironments();
                                            });
                                        }, params: params, filterConfig: [
                                            {
                                                id: 'name',
                                                title: 'Container repository name',
                                            },
                                        ] })),
                                React.createElement(ToolbarItem, null, pushImagesButton)))),
                    React.createElement(Pagination, { params: params, updateParams: function (p) {
                            return _this.updateParams(p, function () { return _this.queryEnvironments(); });
                        }, count: itemCount, isTop: true })),
                React.createElement("div", null,
                    React.createElement(AppliedFilters, { updateParams: function (p) {
                            return _this.updateParams(p, function () { return _this.queryEnvironments(); });
                        }, params: params, ignoredParams: ['page_size', 'page', 'sort'] })),
                this.renderTable(params),
                React.createElement("div", { style: { paddingTop: '24px', paddingBottom: '8px' } },
                    React.createElement(Pagination, { params: params, updateParams: function (p) {
                            return _this.updateParams(p, function () { return _this.queryEnvironments(); });
                        }, count: itemCount }))))))));
    };
    ExecutionEnvironmentList.prototype.renderTable = function (params) {
        var _this = this;
        var items = this.state.items;
        if (items.length === 0) {
            return React.createElement(EmptyStateFilter, null);
        }
        var sortTableOptions = {
            headers: [
                {
                    title: 'Container repository name',
                    type: 'alpha',
                    id: 'name',
                },
                {
                    title: 'Description',
                    type: 'alpha',
                    id: 'description',
                },
                {
                    title: 'Created',
                    type: 'numeric',
                    id: 'created',
                },
                {
                    title: 'Last modified',
                    type: 'alpha',
                    id: 'updated',
                },
            ],
        };
        return (React.createElement("table", { "aria-label": 'User list', className: 'content-table pf-c-table' },
            React.createElement(SortTable, { options: sortTableOptions, params: params, updateParams: function (p) {
                    return _this.updateParams(p, function () { return _this.queryEnvironments(); });
                } }),
            React.createElement("tbody", null, items.map(function (user, i) { return _this.renderTableRow(user, i); }))));
    };
    ExecutionEnvironmentList.prototype.renderTableRow = function (item, index) {
        var description = item.description;
        return (React.createElement("tr", { "aria-labelledby": item.name, key: index },
            React.createElement("td", null,
                React.createElement(Link, { to: formatPath(Paths.executionEnvironmentDetail, {
                        container: item.pulp.distribution.base_path,
                    }) }, item.name)),
            description ? (React.createElement(Tooltip, { content: description },
                React.createElement("td", { className: 'pf-m-truncate' }, description))) : (React.createElement("td", null)),
            React.createElement("td", null,
                React.createElement(DateComponent, { date: item.created })),
            React.createElement("td", null,
                React.createElement(DateComponent, { date: item.updated }))));
    };
    ExecutionEnvironmentList.prototype.queryEnvironments = function () {
        var _this = this;
        this.setState({ loading: true }, function () {
            return ExecutionEnvironmentAPI.list(_this.state.params).then(function (result) {
                return _this.setState({
                    items: result.data.data,
                    itemCount: result.data.meta.count,
                    loading: false,
                });
            });
        });
    };
    Object.defineProperty(ExecutionEnvironmentList.prototype, "updateParams", {
        get: function () {
            return ParamHelper.updateParamsMixin();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExecutionEnvironmentList.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    return ExecutionEnvironmentList;
}(React.Component));
export default withRouter(ExecutionEnvironmentList);
//# sourceMappingURL=execution_environment_list.js.map