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
import { i18n } from '@lingui/core';
import { Trans, t } from '@lingui/macro';
import { Button, CodeBlock, DescriptionList, DescriptionListDescription, DescriptionListGroup, DescriptionListTerm, Flex, FlexItem, Title, } from '@patternfly/react-core';
import { CubesIcon } from '@patternfly/react-icons';
import { capitalize } from 'lodash';
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { GenericPulpAPI, TaskManagementAPI } from 'src/api';
import { AlertList, BaseHeader, Breadcrumbs, ConfirmModal, DateComponent, EmptyStateCustom, LoadingPageSpinner, Main, StatusIndicator, closeAlertMixin, } from 'src/components';
import { Constants } from 'src/constants';
import { Paths, formatPath } from 'src/paths';
import { errorMessage, parsePulpIDFromURL, withRouter, } from 'src/utilities';
import './task.scss';
var maybeTranslate = function (name) {
    return (Constants.TASK_NAMES[name] && i18n._(Constants.TASK_NAMES[name])) || name;
};
var TaskDetail = /** @class */ (function (_super) {
    __extends(TaskDetail, _super);
    function TaskDetail(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            loading: true,
            task: null,
            parentTask: null,
            childTasks: [],
            alerts: [],
            cancelModalVisible: false,
            taskName: '',
            resources: [],
            redirect: null,
            polling: null,
        };
        return _this;
    }
    TaskDetail.prototype.componentDidMount = function () {
        this.loadContent();
    };
    TaskDetail.prototype.componentWillUnmount = function () {
        if (this.state.polling) {
            clearInterval(this.state.polling);
        }
    };
    TaskDetail.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.routeParams.task !== this.props.routeParams.task) {
            this.setState({ loading: true });
            this.loadContent();
        }
    };
    TaskDetail.prototype.render = function () {
        var _this = this;
        var _a = this.state, loading = _a.loading, task = _a.task, parentTask = _a.parentTask, childTasks = _a.childTasks, cancelModalVisible = _a.cancelModalVisible, alerts = _a.alerts, taskName = _a.taskName, resources = _a.resources, redirect = _a.redirect;
        var breadcrumbs = [
            { url: formatPath(Paths.taskList), name: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Task management"], ["Task management"]))) },
            { name: task ? taskName : '' },
        ];
        var parentTaskId = null;
        if (parentTask) {
            parentTaskId = parsePulpIDFromURL(parentTask.pulp_href);
        }
        if (redirect) {
            return React.createElement(Navigate, { to: redirect });
        }
        return loading ? (React.createElement(LoadingPageSpinner, null)) : (React.createElement(React.Fragment, null,
            React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            cancelModalVisible ? this.renderCancelModal() : null,
            React.createElement(BaseHeader, { title: taskName, breadcrumbs: React.createElement(Breadcrumbs, { links: breadcrumbs }), pageControls: ['running', 'waiting'].includes(task.state) && (React.createElement(Button, { variant: 'secondary', onClick: function () { return _this.setState({ cancelModalVisible: true }); } }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Stop task"], ["Stop task"]))))), status: React.createElement(StatusIndicator, { className: 'hub-c-task-status', status: task.state }) }),
            React.createElement(Main, null,
                React.createElement(Flex, null,
                    React.createElement(Flex, { direction: { default: 'column' }, flex: { default: 'flex_1' } },
                        React.createElement(FlexItem, null,
                            React.createElement("section", { className: 'body card-area' },
                                React.createElement(Title, { headingLevel: 'h2', size: 'lg' }, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Task detail"], ["Task detail"])))),
                                React.createElement("br", null),
                                React.createElement(DescriptionList, { isHorizontal: true },
                                    React.createElement(DescriptionListGroup, null,
                                        React.createElement(DescriptionListTerm, null, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Task name"], ["Task name"])))),
                                        React.createElement(DescriptionListDescription, null, task.name)),
                                    task.name !== taskName && (React.createElement(DescriptionListGroup, null,
                                        React.createElement(DescriptionListTerm, null, t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Descriptive name"], ["Descriptive name"])))),
                                        React.createElement(DescriptionListDescription, null, taskName))),
                                    React.createElement(DescriptionListGroup, null,
                                        React.createElement(DescriptionListTerm, null, t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Finished at"], ["Finished at"])))),
                                        React.createElement(DescriptionListDescription, null,
                                            React.createElement(DateComponent, { date: task.finished_at }))),
                                    React.createElement(DescriptionListGroup, null,
                                        React.createElement(DescriptionListTerm, null, t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Created on"], ["Created on"])))),
                                        React.createElement(DescriptionListDescription, null,
                                            React.createElement(DateComponent, { date: task.pulp_created })))))),
                        React.createElement(FlexItem, null,
                            React.createElement("section", { className: 'body card-area' },
                                React.createElement(Title, { headingLevel: 'h2', size: 'lg' }, t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Task groups"], ["Task groups"])))),
                                React.createElement("br", null),
                                React.createElement(DescriptionList, { isHorizontal: true },
                                    React.createElement(DescriptionListGroup, null,
                                        React.createElement(DescriptionListTerm, null, t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Task group"], ["Task group"])))),
                                        React.createElement(DescriptionListDescription, null, task.task_group ? task.task_group : t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["No task group"], ["No task group"]))))),
                                    React.createElement(DescriptionListGroup, null,
                                        React.createElement(DescriptionListTerm, null, t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Parent task"], ["Parent task"])))),
                                        React.createElement(DescriptionListDescription, null, parentTask ? (React.createElement(Link, { to: formatPath(Paths.taskDetail, {
                                                task: parentTaskId,
                                            }) }, maybeTranslate(parentTask.name))) : (t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["No parent task"], ["No parent task"])))))),
                                    React.createElement(DescriptionListGroup, null,
                                        React.createElement(DescriptionListTerm, null, t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Child tasks"], ["Child tasks"])))),
                                        React.createElement(DescriptionListDescription, null, childTasks.length
                                            ? childTasks.map(function (childTask) {
                                                var childTaskId = parsePulpIDFromURL(childTask.pulp_href);
                                                return (React.createElement(React.Fragment, { key: childTaskId },
                                                    React.createElement(Link, { to: formatPath(Paths.taskDetail, {
                                                            task: childTaskId,
                                                        }) }, maybeTranslate(childTask.name)),
                                                    React.createElement("br", null)));
                                            })
                                            : t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["No child task"], ["No child task"])))))))),
                        React.createElement(FlexItem, null,
                            React.createElement("section", { className: 'body card-area' },
                                React.createElement(Title, { headingLevel: 'h2', size: 'lg' }, t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Reserve resources"], ["Reserve resources"])))),
                                React.createElement("br", null),
                                resources.length ? (React.createElement(DescriptionList, { isHorizontal: true }, resources.map(function (resource, index) {
                                    return (React.createElement(React.Fragment, { key: resource.type + index },
                                        React.createElement("hr", null),
                                        React.createElement(DescriptionListGroup, null,
                                            React.createElement(DescriptionListTerm, null, t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Type"], ["Type"])))),
                                            React.createElement(DescriptionListDescription, null, resource.type)),
                                        resource.pluginName && (React.createElement(DescriptionListGroup, null,
                                            React.createElement(DescriptionListTerm, null, t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Plugin"], ["Plugin"])))),
                                            React.createElement(DescriptionListDescription, null, resource.pluginName))),
                                        resource.name && (React.createElement(DescriptionListGroup, null,
                                            React.createElement(DescriptionListTerm, null, t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Name"], ["Name"])))),
                                            React.createElement(DescriptionListDescription, null, resource.name)))));
                                }))) : (t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["There's no resource record"], ["There's no resource record"]))))))),
                    React.createElement(Flex, { direction: { default: 'column' }, flex: { default: 'flex_1' } },
                        React.createElement(FlexItem, null,
                            !task.error && (React.createElement("section", { className: 'body card-area' },
                                React.createElement(Title, { headingLevel: 'h2', size: 'lg' }, t(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Progress messages"], ["Progress messages"])))),
                                React.createElement("br", null),
                                task.progress_reports.length ? (React.createElement(DescriptionList, { isHorizontal: true }, task.progress_reports
                                    .reverse()
                                    .map(function (report, index) {
                                    return (React.createElement(React.Fragment, { key: index },
                                        React.createElement("hr", null),
                                        Object.keys(report).map(function (key, index) {
                                            return (!!report[key] && (React.createElement(DescriptionListGroup, { key: key + index },
                                                React.createElement(DescriptionListTerm, null, {
                                                    message: t(templateObject_21 || (templateObject_21 = __makeTemplateObject(["Message"], ["Message"]))),
                                                    code: t(templateObject_22 || (templateObject_22 = __makeTemplateObject(["Code"], ["Code"]))),
                                                    state: t(templateObject_23 || (templateObject_23 = __makeTemplateObject(["State"], ["State"]))),
                                                    done: t(templateObject_24 || (templateObject_24 = __makeTemplateObject(["Done"], ["Done"]))),
                                                }[key] || capitalize(key)),
                                                React.createElement(DescriptionListDescription, null, report[key]))));
                                        }),
                                        ' '));
                                }))) : (React.createElement(EmptyStateCustom, { icon: CubesIcon, title: t(templateObject_25 || (templateObject_25 = __makeTemplateObject(["There is no progress message."], ["There is no progress message."]))), description: t(templateObject_26 || (templateObject_26 = __makeTemplateObject(["There is no progress message."], ["There is no progress message."]))) })))),
                            !!task.error && (React.createElement("section", { className: 'body card-area' },
                                React.createElement(Title, { headingLevel: 'h2', size: 'lg' }, t(templateObject_27 || (templateObject_27 = __makeTemplateObject(["Error message"], ["Error message"])))),
                                React.createElement("br", null),
                                React.createElement(React.Fragment, null,
                                    React.createElement(Title, { headingLevel: 'h3' }, t(templateObject_28 || (templateObject_28 = __makeTemplateObject(["Description"], ["Description"])))),
                                    React.createElement(CodeBlock, null, task.error.description),
                                    React.createElement(Title, { headingLevel: 'h3' }, t(templateObject_29 || (templateObject_29 = __makeTemplateObject(["Traceback"], ["Traceback"])))),
                                    React.createElement(CodeBlock, { className: 'hub-code-block' }, task.error.traceback))))))))));
    };
    TaskDetail.prototype.renderCancelModal = function () {
        var _this = this;
        var name = this.state.taskName;
        return (React.createElement(ConfirmModal, { cancelAction: function () { return _this.setState({ cancelModalVisible: false }); }, confirmAction: function () { return _this.cancelTask(); }, title: t(templateObject_30 || (templateObject_30 = __makeTemplateObject(["Stop task"], ["Stop task"]))), confirmButtonTitle: t(templateObject_31 || (templateObject_31 = __makeTemplateObject(["Yes, stop"], ["Yes, stop"]))) }, t(templateObject_32 || (templateObject_32 = __makeTemplateObject(["", " will stop running."], ["", " will stop running."])), name)));
    };
    TaskDetail.prototype.cancelTask = function () {
        var _this = this;
        var _a = this.state, task = _a.task, taskName = _a.taskName;
        TaskManagementAPI.patch(parsePulpIDFromURL(task.pulp_href), {
            state: 'canceled',
        })
            .then(function () {
            _this.setState({
                loading: true,
                cancelModalVisible: false,
                alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                    {
                        variant: 'success',
                        title: taskName,
                        description: (React.createElement(Trans, null,
                            "Task \"",
                            taskName,
                            "\" stopped successfully.")),
                    },
                ], false),
            });
            _this.loadContent();
        })
            .catch(function (e) {
            var _a = e.response, status = _a.status, statusText = _a.statusText;
            _this.setState({
                loading: true,
                cancelModalVisible: false,
                alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                    {
                        variant: 'danger',
                        title: t(templateObject_33 || (templateObject_33 = __makeTemplateObject(["Task \"", "\" could not be stopped."], ["Task \"", "\" could not be stopped."])), taskName),
                        description: errorMessage(status, statusText),
                    },
                ], false),
            });
            _this.loadContent();
        });
    };
    TaskDetail.prototype.loadContent = function () {
        var _this = this;
        if (!this.state.polling && !this.state.task) {
            this.setState({ polling: setInterval(function () { return _this.loadContent(); }, 10000) });
        }
        var taskId = this.props.routeParams.task;
        return TaskManagementAPI.get(taskId)
            .then(function (result) {
            var allRelatedTasks = [];
            var parentTask = null;
            var childTasks = [];
            var resources = [];
            if (['canceled', 'completed', 'failed'].includes(result.data.state)) {
                clearInterval(_this.state.polling);
                _this.setState({ polling: null });
            }
            if (result.data.parent_task) {
                var parentTaskId = parsePulpIDFromURL(result.data.parent_task);
                allRelatedTasks.push(TaskManagementAPI.get(parentTaskId)
                    .then(function (result) {
                    parentTask = result.data;
                })
                    .catch(function () {
                    return true;
                }));
            }
            if (result.data.child_tasks.length) {
                result.data.child_tasks.forEach(function (child) {
                    var childTaskId = parsePulpIDFromURL(child);
                    allRelatedTasks.push(TaskManagementAPI.get(childTaskId)
                        .then(function (result) {
                        childTasks.push(result.data);
                    })
                        .catch(function () {
                        return true;
                    }));
                });
            }
            if (result.data.reserved_resources_record.length) {
                result.data.reserved_resources_record.forEach(function (resource) {
                    var url = resource.replace(PULP_API_BASE_PATH, '');
                    var id = parsePulpIDFromURL(url);
                    var urlParts = url.split('/');
                    var resourceType = '';
                    var pluginName = '';
                    // pulp hrefs follow this pattern for resources added by plugins:
                    // /<resource name>/<plugin name>/<resource type>/<pk>/
                    // Locks can be added on the entire resource (ex /repositories/) or on a specific
                    // instance of a resource (ex /repositories/ansible/ansible/123123/
                    // if the url has 3 or more segements, parse out the resource, plugin name, and resource type
                    if (urlParts.length >= 3) {
                        resourceType = "".concat(urlParts[0], ": ").concat(urlParts[2]);
                        pluginName = urlParts[1];
                        // otherwise, just return the resource type
                    }
                    else {
                        resource = urlParts[0];
                    }
                    if (id) {
                        allRelatedTasks.push(GenericPulpAPI.get(url)
                            .then(function (result) {
                            resources.push({
                                name: result.data.name,
                                type: resourceType,
                                pluginName: pluginName,
                            });
                        })
                            .catch(function () {
                            return true;
                        }));
                    }
                    else {
                        resources.push({ type: resourceType });
                    }
                });
            }
            return Promise.all(allRelatedTasks).then(function () {
                _this.setState({
                    task: result.data,
                    childTasks: childTasks,
                    parentTask: parentTask,
                    loading: false,
                    taskName: maybeTranslate(result.data.name),
                    resources: resources,
                });
            });
        })
            .catch(function () {
            _this.setState({ redirect: formatPath(Paths.notFound) });
        });
    };
    Object.defineProperty(TaskDetail.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    return TaskDetail;
}(React.Component));
export default withRouter(TaskDetail);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33;
//# sourceMappingURL=task_detail.js.map