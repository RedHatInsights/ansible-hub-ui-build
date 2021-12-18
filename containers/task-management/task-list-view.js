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
import * as React from 'react';
import './task.scss';
import { Constants } from 'src/constants';
import { withRouter, Link } from 'react-router-dom';
import { Button, Toolbar, ToolbarGroup, ToolbarItem, ToolbarContent, } from '@patternfly/react-core';
import { ParamHelper, filterIsSet } from '../../utilities';
import { parsePulpIDFromURL } from 'src/utilities/parse-pulp-id';
import { AlertList, AppliedFilters, BaseHeader, closeAlertMixin, ConfirmModal, CompoundFilter, DateComponent, EmptyStateFilter, EmptyStateNoData, EmptyStateUnauthorized, LoadingPageSpinner, Main, Pagination, SortTable, Tooltip, StatusIndicator, } from 'src/components';
import { TaskManagementAPI } from 'src/api';
import { formatPath, Paths } from 'src/paths';
import { AppContext } from 'src/loaders/app-context';
var TaskListView = /** @class */ (function (_super) {
    __extends(TaskListView, _super);
    function TaskListView(props) {
        var _this = _super.call(this, props) || this;
        var params = ParamHelper.parseParamString(props.location.search, [
            'page',
            'page_size',
        ]);
        if (!params['page_size']) {
            params['page_size'] = 10;
        }
        if (!params['sort']) {
            params['sort'] = '-pulp_created';
        }
        _this.state = {
            params: params,
            items: [],
            loading: true,
            itemCount: 0,
            alerts: [],
            cancelModalVisible: false,
            selectedTask: null,
            unauthorised: false,
            inputText: '',
        };
        return _this;
    }
    TaskListView.prototype.componentDidMount = function () {
        if (!this.context.user || this.context.user.is_anonymous) {
            this.setState({ loading: false, unauthorised: true });
        }
        else {
            this.queryTasks();
        }
    };
    TaskListView.prototype.render = function () {
        var _this = this;
        var _a = this.state, params = _a.params, itemCount = _a.itemCount, loading = _a.loading, items = _a.items, alerts = _a.alerts, cancelModalVisible = _a.cancelModalVisible, unauthorised = _a.unauthorised;
        var noData = items.length === 0 && !filterIsSet(params, ['name__contains', 'state']);
        return (React.createElement(React.Fragment, null,
            React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            cancelModalVisible ? this.renderCancelModal() : null,
            React.createElement(BaseHeader, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Task Management"], ["Task Management"]))) }),
            unauthorised ? (React.createElement(EmptyStateUnauthorized, null)) : noData && !loading ? (React.createElement(EmptyStateNoData, { title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["No tasks yet"], ["No tasks yet"]))), description: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Tasks will appear once created."], ["Tasks will appear once created."]))) })) : (React.createElement(Main, null, loading ? (React.createElement(LoadingPageSpinner, null)) : (React.createElement("section", { className: 'body' },
                React.createElement("div", { className: 'hub-task-list' },
                    React.createElement(Toolbar, null,
                        React.createElement(ToolbarContent, null,
                            React.createElement(ToolbarGroup, null,
                                React.createElement(ToolbarItem, null,
                                    React.createElement(CompoundFilter, { inputText: this.state.inputText, onChange: function (text) {
                                            return _this.setState({ inputText: text });
                                        }, updateParams: function (p) {
                                            p['page'] = 1;
                                            _this.updateParams(p, function () { return _this.queryTasks(); });
                                        }, params: params, filterConfig: [
                                            {
                                                id: 'name__contains',
                                                title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Task name"], ["Task name"]))),
                                            },
                                            {
                                                id: 'state',
                                                title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Status"], ["Status"]))),
                                                inputType: 'select',
                                                options: [
                                                    {
                                                        id: 'completed',
                                                        title: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Completed"], ["Completed"]))),
                                                    },
                                                    {
                                                        id: 'failed',
                                                        title: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Failed"], ["Failed"]))),
                                                    },
                                                    {
                                                        id: 'running',
                                                        title: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Running"], ["Running"]))),
                                                    },
                                                    {
                                                        id: 'waiting',
                                                        title: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Waiting"], ["Waiting"]))),
                                                    },
                                                ],
                                            },
                                        ] }))))),
                    React.createElement(Pagination, { params: params, updateParams: function (p) {
                            return _this.updateParams(p, function () { return _this.queryTasks(); });
                        }, count: itemCount, isTop: true })),
                React.createElement("div", null,
                    React.createElement(AppliedFilters, { updateParams: function (p) {
                            _this.updateParams(p, function () { return _this.queryTasks(); });
                            _this.setState({ inputText: '' });
                        }, params: params, ignoredParams: ['page_size', 'page', 'sort', 'ordering'], niceNames: {
                            name__contains: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Task name"], ["Task name"]))),
                            state: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Status"], ["Status"]))),
                        } })),
                loading ? React.createElement(LoadingPageSpinner, null) : this.renderTable(params),
                React.createElement(Pagination, { params: params, updateParams: function (p) {
                        return _this.updateParams(p, function () { return _this.queryTasks(); });
                    }, count: itemCount })))))));
    };
    TaskListView.prototype.renderTable = function (params) {
        var _this = this;
        var items = this.state.items;
        if (items.length === 0) {
            return React.createElement(EmptyStateFilter, null);
        }
        var sortTableOptions = {
            headers: [
                {
                    title: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Task name"], ["Task name"]))),
                    type: 'alpha',
                    id: 'name',
                },
                {
                    title: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Created on"], ["Created on"]))),
                    type: 'numeric',
                    id: 'pulp_created',
                },
                {
                    title: t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Started at"], ["Started at"]))),
                    type: 'numeric',
                    id: 'started_at',
                },
                {
                    title: t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Finished at"], ["Finished at"]))),
                    type: 'numeric',
                    id: 'finished_at',
                },
                {
                    title: t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Status"], ["Status"]))),
                    type: 'alpha',
                    id: 'state',
                },
            ],
        };
        return (React.createElement("table", { "aria-label": t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Task list"], ["Task list"]))), className: 'hub-c-table-content pf-c-table' },
            React.createElement(SortTable, { options: sortTableOptions, params: params, updateParams: function (p) {
                    p['page'] = 1;
                    _this.updateParams(p, function () { return _this.queryTasks(); });
                } }),
            React.createElement("tbody", null, items.map(function (item, i) { return _this.renderTableRow(item, i); }))));
    };
    TaskListView.prototype.renderTableRow = function (item, index) {
        var name = item.name, state = item.state, pulp_created = item.pulp_created, started_at = item.started_at, finished_at = item.finished_at, pulp_href = item.pulp_href;
        var taskId = parsePulpIDFromURL(pulp_href);
        return (React.createElement("tr", { "aria-labelledby": name, key: index },
            React.createElement("td", null,
                React.createElement(Link, { to: formatPath(Paths.taskDetail, { task: taskId }) },
                    React.createElement(Tooltip, { content: Constants.TASK_NAMES[name] || name }, name))),
            React.createElement("td", null,
                React.createElement(DateComponent, { date: pulp_created })),
            React.createElement("td", null,
                React.createElement(DateComponent, { date: started_at })),
            React.createElement("td", null,
                React.createElement(DateComponent, { date: finished_at })),
            React.createElement("td", null,
                React.createElement(StatusIndicator, { status: state })),
            React.createElement("td", null, this.cancelButton(state, item))));
    };
    TaskListView.prototype.cancelButton = function (state, selectedTask) {
        var _this = this;
        switch (state) {
            case 'running':
                return (React.createElement(Button, { variant: 'secondary', "aria-label": t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Delete"], ["Delete"]))), key: 'delete', onClick: function () {
                        return _this.setState({
                            cancelModalVisible: true,
                            selectedTask: selectedTask,
                        });
                    } }, t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Stop task"], ["Stop task"])))));
            case 'waiting':
                return (React.createElement(Button, { variant: 'secondary', "aria-label": t(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Delete"], ["Delete"]))), key: 'delete', onClick: function () {
                        return _this.setState({
                            cancelModalVisible: true,
                            selectedTask: selectedTask,
                        });
                    } }, t(templateObject_21 || (templateObject_21 = __makeTemplateObject(["Stop task"], ["Stop task"])))));
        }
    };
    TaskListView.prototype.renderCancelModal = function () {
        var _this = this;
        var name = Constants.TASK_NAMES[this.state.selectedTask.name] ||
            this.state.selectedTask.name;
        return (React.createElement(ConfirmModal, { cancelAction: function () { return _this.setState({ cancelModalVisible: false }); }, title: t(templateObject_22 || (templateObject_22 = __makeTemplateObject(["Stop task?"], ["Stop task?"]))), children: t(templateObject_23 || (templateObject_23 = __makeTemplateObject(["", " will be cancelled."], ["", " will be cancelled."])), name), confirmAction: function () { return _this.selectedTask(_this.state.selectedTask, name); }, confirmButtonTitle: t(templateObject_24 || (templateObject_24 = __makeTemplateObject(["Yes, stop"], ["Yes, stop"]))) }));
    };
    TaskListView.prototype.selectedTask = function (task, name) {
        var _this = this;
        TaskManagementAPI.patch(parsePulpIDFromURL(task.pulp_href), {
            state: 'canceled',
        })
            .then(function () {
            _this.setState({
                loading: true,
                selectedTask: null,
                cancelModalVisible: false,
                alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                    {
                        variant: 'success',
                        title: name,
                        description: t(templateObject_25 || (templateObject_25 = __makeTemplateObject(["Successfully stopped task."], ["Successfully stopped task."]))),
                    },
                ], false),
            });
            _this.queryTasks();
        })
            .catch(function () {
            return _this.setState({
                loading: true,
                cancelModalVisible: false,
                alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                    {
                        variant: 'danger',
                        title: name,
                        description: t(templateObject_26 || (templateObject_26 = __makeTemplateObject(["Error stopping task."], ["Error stopping task."]))),
                    },
                ], false),
            });
        });
    };
    Object.defineProperty(TaskListView.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    TaskListView.prototype.queryTasks = function () {
        var _this = this;
        this.setState({ loading: true }, function () {
            TaskManagementAPI.list(_this.state.params)
                .then(function (result) {
                _this.setState({
                    items: result.data.results,
                    itemCount: result.data.count,
                    loading: false,
                });
            })
                .catch(function (e) {
                return _this.setState({
                    loading: false,
                    items: [],
                    itemCount: 0,
                    alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                        {
                            variant: 'danger',
                            title: t(templateObject_27 || (templateObject_27 = __makeTemplateObject(["Error loading tasks."], ["Error loading tasks."]))),
                            description: e === null || e === void 0 ? void 0 : e.message,
                        },
                    ], false),
                });
            });
        });
    };
    Object.defineProperty(TaskListView.prototype, "updateParams", {
        get: function () {
            return ParamHelper.updateParamsMixin();
        },
        enumerable: false,
        configurable: true
    });
    return TaskListView;
}(React.Component));
export { TaskListView };
export default withRouter(TaskListView);
TaskListView.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27;
//# sourceMappingURL=task-list-view.js.map