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
import { t, Trans } from '@lingui/macro';
import * as React from 'react';
import './execution-environment.scss';
import { withRouter, Link } from 'react-router-dom';
import { Button, Checkbox, DropdownItem, Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, } from '@patternfly/react-core';
import { ExecutionEnvironmentAPI, TaskAPI, } from 'src/api';
import { filterIsSet, ParamHelper } from 'src/utilities';
import { AlertList, AppliedFilters, BaseHeader, CompoundFilter, DateComponent, EmptyStateFilter, EmptyStateNoData, LoadingPageSpinner, Main, Pagination, PublishToControllerModal, SortTable, StatefulDropdown, Tooltip, closeAlertMixin, EmptyStateUnauthorized, } from 'src/components';
import { formatPath, Paths } from '../../paths';
import { AppContext } from 'src/loaders/app-context';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import { DeleteModal } from 'src/components/delete-modal/delete-modal';
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
            publishToController: null,
            items: [],
            loading: true,
            itemCount: 0,
            alerts: [],
            unauthorized: false,
            deleteModalVisible: false,
            selectedItem: null,
            confirmDelete: false,
        };
        return _this;
    }
    ExecutionEnvironmentList.prototype.componentDidMount = function () {
        if (!this.context.user || this.context.user.is_anonymous) {
            this.setState({ unauthorized: true, loading: false });
        }
        else {
            this.queryEnvironments();
        }
    };
    ExecutionEnvironmentList.prototype.render = function () {
        var _this = this;
        var _a = this.state, params = _a.params, publishToController = _a.publishToController, itemCount = _a.itemCount, loading = _a.loading, alerts = _a.alerts, items = _a.items, unauthorized = _a.unauthorized, deleteModalVisible = _a.deleteModalVisible, selectedItem = _a.selectedItem, confirmDelete = _a.confirmDelete;
        var noData = items.length === 0 && !filterIsSet(params, ['name']);
        var pushImagesButton = (React.createElement(Button, { variant: 'link', onClick: function () {
                return window.open('https://access.redhat.com/documentation/en-us/red_hat_ansible_automation_platform/2.0-ea/html-single/managing_containers_in_private_automation_hub/index', '_blank');
            } },
            "Push container images ",
            React.createElement(ExternalLinkAltIcon, null)));
        var name = !!selectedItem ? selectedItem.name : '';
        return (React.createElement(React.Fragment, null,
            React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            React.createElement(PublishToControllerModal, { digest: publishToController === null || publishToController === void 0 ? void 0 : publishToController.digest, image: publishToController === null || publishToController === void 0 ? void 0 : publishToController.image, isOpen: !!publishToController, onClose: function () { return _this.setState({ publishToController: null }); }, tag: publishToController === null || publishToController === void 0 ? void 0 : publishToController.tag }),
            React.createElement(BaseHeader, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Execution Environments"], ["Execution Environments"]))) }),
            deleteModalVisible && (React.createElement(DeleteModal, { title: 'Permanently delete container', cancelAction: function () {
                    return _this.setState({ deleteModalVisible: false, selectedItem: null });
                }, deleteAction: function () { return _this.deleteContainer(); }, isDisabled: !confirmDelete },
                React.createElement(Trans, null,
                    "Deleting ",
                    React.createElement("b", null, name),
                    " and its data will be lost."),
                React.createElement(Checkbox, { isChecked: confirmDelete, onChange: function (value) { return _this.setState({ confirmDelete: value }); }, label: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["I understand that this action cannot be undone."], ["I understand that this action cannot be undone."]))), id: 'delete_confirm' }))),
            unauthorized ? (React.createElement(EmptyStateUnauthorized, null)) : noData && !loading ? (React.createElement(EmptyStateNoData, { title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["No container repositories yet"], ["No container repositories yet"]))), description: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["You currently have no container repositories. Add a container repository via the CLI to get started."], ["You currently have no container repositories. Add a container repository via the CLI to get started."]))), button: pushImagesButton })) : (React.createElement(Main, null, loading ? (React.createElement(LoadingPageSpinner, null)) : (React.createElement("section", { className: 'body' },
                React.createElement("div", { className: 'container-list-toolbar' },
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
                                                title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Container repository name"], ["Container repository name"]))),
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
                    title: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Container repository name"], ["Container repository name"]))),
                    type: 'alpha',
                    id: 'name',
                },
                {
                    title: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Description"], ["Description"]))),
                    type: 'alpha',
                    id: 'description',
                },
                {
                    title: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Created"], ["Created"]))),
                    type: 'numeric',
                    id: 'created',
                },
                {
                    title: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Last modified"], ["Last modified"]))),
                    type: 'alpha',
                    id: 'updated',
                },
                {
                    title: '',
                    type: 'none',
                    id: 'controls',
                },
            ],
        };
        return (React.createElement("table", { "aria-label": t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["User list"], ["User list"]))), className: 'content-table pf-c-table' },
            React.createElement(SortTable, { options: sortTableOptions, params: params, updateParams: function (p) {
                    return _this.updateParams(p, function () { return _this.queryEnvironments(); });
                } }),
            React.createElement("tbody", null, items.map(function (user, i) { return _this.renderTableRow(user, i); }))));
    };
    ExecutionEnvironmentList.prototype.renderTableRow = function (item, index) {
        var _this = this;
        var description = item.description;
        var dropdownItems = [
            React.createElement(DropdownItem, { key: 'publish-to-controller', onClick: function () {
                    _this.setState({
                        publishToController: {
                            image: item.name,
                        },
                    });
                } }, t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Use in Controller"], ["Use in Controller"])))),
            React.createElement(DropdownItem, { key: 'delete', onClick: function () {
                    return _this.setState({ selectedItem: item, deleteModalVisible: true });
                } }, t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Delete"], ["Delete"])))),
        ].filter(function (truthy) { return truthy; });
        return (React.createElement("tr", { "aria-labelledby": item.name, key: index },
            React.createElement("td", null,
                React.createElement(Link, { to: formatPath(Paths.executionEnvironmentDetail, {
                        container: item.pulp.distribution.base_path,
                    }) }, item.name)),
            description ? (React.createElement("td", { className: 'pf-m-truncate' },
                React.createElement(Tooltip, { content: description }, description))) : (React.createElement("td", null)),
            React.createElement("td", null,
                React.createElement(DateComponent, { date: item.created })),
            React.createElement("td", null,
                React.createElement(DateComponent, { date: item.updated })),
            React.createElement("td", { style: { paddingRight: '0px', textAlign: 'right' } }, !!dropdownItems.length && React.createElement(StatefulDropdown, { items: dropdownItems }))));
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
    ExecutionEnvironmentList.prototype.deleteContainer = function () {
        var _this = this;
        var selectedItem = this.state.selectedItem;
        var name = selectedItem.name;
        ExecutionEnvironmentAPI.deleteExecutionEnvironment(selectedItem.name)
            .then(function (result) {
            var taskId = result.data.task.split('tasks/')[1].replace('/', '');
            _this.setState({
                loading: true,
                deleteModalVisible: false,
                selectedItem: null,
                confirmDelete: false,
            });
            _this.waitForTask(taskId).then(function () {
                _this.setState({
                    alerts: _this.state.alerts.concat([
                        {
                            variant: 'success',
                            title: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Success: ", " was deleted"], ["Success: ", " was deleted"])), name),
                        },
                    ]),
                });
                _this.queryEnvironments();
            });
        })
            .catch(function () {
            _this.setState({
                deleteModalVisible: false,
                selectedItem: null,
                confirmDelete: false,
                alerts: _this.state.alerts.concat([
                    { variant: 'danger', title: t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Error: delete failed"], ["Error: delete failed"]))) },
                ]),
            });
        });
    };
    ExecutionEnvironmentList.prototype.waitForTask = function (task) {
        var _this = this;
        return TaskAPI.get(task).then(function (result) {
            if (result.data.state !== 'completed') {
                return new Promise(function (r) { return setTimeout(r, 500); }).then(function () {
                    return _this.waitForTask(task);
                });
            }
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
ExecutionEnvironmentList.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
//# sourceMappingURL=execution_environment_list.js.map