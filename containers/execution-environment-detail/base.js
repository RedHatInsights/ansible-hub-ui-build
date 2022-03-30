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
import { t, Trans } from '@lingui/macro';
import * as React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ExecutionEnvironmentAPI, ExecutionEnvironmentRemoteAPI, } from 'src/api';
import { formatPath, Paths } from '../../paths';
import { Button, DropdownItem } from '@patternfly/react-core';
import { AlertList, DeleteExecutionEnvironmentModal, ExecutionEnvironmentHeader, LoadingPageWithHeader, Main, PublishToControllerModal, RepositoryForm, StatefulDropdown, closeAlertMixin, } from 'src/components';
import { parsePulpIDFromURL, waitForTask } from 'src/utilities';
import { AppContext } from 'src/loaders/app-context';
// A higher order component to wrap individual detail pages
export function withContainerRepo(WrappedComponent) {
    var _a;
    return _a = /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1(props) {
                var _this = _super.call(this, props) || this;
                _this.state = {
                    publishToController: null,
                    repo: undefined,
                    loading: true,
                    redirect: undefined,
                    editing: false,
                    alerts: [],
                    showDeleteModal: false,
                    formError: [],
                };
                return _this;
            }
            class_1.prototype.componentDidMount = function () {
                this.loadRepo();
            };
            class_1.prototype.render = function () {
                var _this = this;
                var _a, _b, _c, _d, _e, _f, _g;
                if (this.state.redirect === 'list') {
                    return (React.createElement(Redirect, { push: true, to: formatPath(Paths.executionEnvironments, {}) }));
                }
                if (this.state.redirect === 'activity') {
                    return (React.createElement(Redirect, { push: true, to: formatPath(Paths.executionEnvironmentDetailActivities, {
                            container: this.props.match.params['container'],
                        }) }));
                }
                else if (this.state.redirect === 'detail') {
                    return (React.createElement(Redirect, { push: true, to: formatPath(Paths.executionEnvironmentDetail, {
                            container: this.props.match.params['container'],
                        }) }));
                }
                else if (this.state.redirect === 'images') {
                    return (React.createElement(Redirect, { push: true, to: formatPath(Paths.executionEnvironmentDetailImages, {
                            container: this.props.match.params['container'],
                        }) }));
                }
                else if (this.state.redirect === 'notFound') {
                    return React.createElement(Redirect, { push: true, to: Paths.notFound });
                }
                if (this.state.loading) {
                    return React.createElement(LoadingPageWithHeader, null);
                }
                var permissions = this.state.repo.namespace.my_permissions;
                var showEdit = permissions.includes('container.namespace_change_containerdistribution') || permissions.includes('container.change_containernamespace');
                var dropdownItems = [
                    this.state.repo.pulp.repository.remote && (React.createElement(DropdownItem, { key: 'sync', onClick: function () { return _this.sync(_this.state.repo.name); }, isDisabled: ['running', 'waiting'].includes((_b = (_a = this.state.repo.pulp.repository.remote) === null || _a === void 0 ? void 0 : _a.last_sync_task) === null || _b === void 0 ? void 0 : _b.state) }, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Sync from registry"], ["Sync from registry"]))))),
                    React.createElement(DropdownItem, { key: 'publish-to-controller', onClick: function () {
                            _this.setState({
                                publishToController: {
                                    image: _this.state.repo.name,
                                },
                            });
                        } }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Use in Controller"], ["Use in Controller"])))),
                    this.context.user.model_permissions.delete_containerrepository && (React.createElement(DropdownItem, { key: 'delete', onClick: function () {
                            _this.setState({ showDeleteModal: true });
                        } }, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Delete"], ["Delete"]))))),
                ].filter(function (truthy) { return truthy; });
                var _h = this.state, alerts = _h.alerts, repo = _h.repo, publishToController = _h.publishToController, showDeleteModal = _h.showDeleteModal;
                return (React.createElement(React.Fragment, null,
                    React.createElement(AlertList, { alerts: this.state.alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
                    React.createElement(PublishToControllerModal, { digest: publishToController === null || publishToController === void 0 ? void 0 : publishToController.digest, image: publishToController === null || publishToController === void 0 ? void 0 : publishToController.image, isOpen: !!publishToController, onClose: function () { return _this.setState({ publishToController: null }); }, tag: publishToController === null || publishToController === void 0 ? void 0 : publishToController.tag }),
                    showDeleteModal && (React.createElement(DeleteExecutionEnvironmentModal, { selectedItem: repo.name, closeAction: function () { return _this.setState({ showDeleteModal: false }); }, afterDelete: function () {
                            _this.context.setAlerts(_this.state.alerts);
                            _this.setState({ redirect: 'list' });
                        }, addAlert: function (text, variant, description) {
                            if (description === void 0) { description = undefined; }
                            return _this.setState({
                                alerts: alerts.concat([
                                    { title: text, variant: variant, description: description },
                                ]),
                            });
                        } })),
                    React.createElement(ExecutionEnvironmentHeader, { id: this.props.match.params['container'], updateState: function (change) { return _this.setState(change); }, tab: this.getTab(), container: this.state.repo, pageControls: React.createElement(React.Fragment, null,
                            showEdit ? (React.createElement(Button, { onClick: function () { return _this.setState({ editing: true }); }, variant: 'secondary', "data-cy": 'edit-container' }, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Edit"], ["Edit"]))))) : null,
                            React.createElement(StatefulDropdown, { items: dropdownItems })) }),
                    React.createElement(Main, null,
                        this.state.editing && (React.createElement(RepositoryForm, { name: this.state.repo.name, namespace: this.state.repo.namespace.name, description: this.state.repo.description, permissions: permissions, formError: this.state.formError, onSave: function (promise) {
                                promise
                                    .then(function (results) {
                                    var task = results.find(function (x) { return x.data && x.data.task; });
                                    _this.setState({
                                        editing: false,
                                        loading: true,
                                        alerts: alerts.concat({
                                            variant: 'success',
                                            title: (React.createElement(Trans, null,
                                                "Saved changes to execution environment \"",
                                                _this.state.repo.name,
                                                "\".")),
                                        }),
                                    });
                                    if (task) {
                                        waitForTask(task.data.task.split('tasks/')[1].replace('/', '')).then(function () {
                                            _this.loadRepo();
                                        });
                                    }
                                    else {
                                        _this.loadRepo();
                                    }
                                })
                                    .catch(function (err) {
                                    return _this.setState({
                                        formError: err.response.data.errors.map(function (error) {
                                            return {
                                                title: error.title,
                                                detail: error.source.parameter + ': ' + error.detail,
                                            };
                                        }),
                                    });
                                });
                            }, onCancel: function () { return _this.setState({ editing: false }); }, distributionPulpId: this.state.repo.pulp.distribution.pulp_id, isRemote: !!this.state.repo.pulp.repository.remote, isNew: false, upstreamName: (_c = this.state.repo.pulp.repository.remote) === null || _c === void 0 ? void 0 : _c.upstream_name, registry: (_d = this.state.repo.pulp.repository.remote) === null || _d === void 0 ? void 0 : _d.registry, excludeTags: ((_e = this.state.repo.pulp.repository.remote) === null || _e === void 0 ? void 0 : _e.exclude_tags) || [], includeTags: ((_f = this.state.repo.pulp.repository.remote) === null || _f === void 0 ? void 0 : _f.include_tags) || [], remotePulpId: (_g = this.state.repo.pulp.repository.remote) === null || _g === void 0 ? void 0 : _g.pulp_id })),
                        React.createElement(WrappedComponent, __assign({ containerRepository: this.state.repo, editing: this.state.editing }, this.props)))));
            };
            class_1.prototype.loadRepo = function () {
                var _this = this;
                ExecutionEnvironmentAPI.get(this.props.match.params['container'])
                    .then(function (result) {
                    var _a;
                    _this.setState({
                        loading: false,
                        repo: result.data,
                    });
                    var last_sync_task = ((_a = result.data.pulp.repository.remote) === null || _a === void 0 ? void 0 : _a.last_sync_task) || {};
                    if (last_sync_task.state &&
                        ['running', 'waiting'].includes(last_sync_task.state)) {
                        // keep refreshing while a remove repo is being synced
                        setTimeout(function () { return _this.loadRepo(); }, 10000);
                    }
                })
                    .catch(function () { return _this.setState({ redirect: 'notFound' }); });
            };
            class_1.prototype.getTab = function () {
                var tabs = ['detail', 'images', 'activity'];
                var location = this.props.location.pathname.split('/').pop();
                for (var _i = 0, tabs_1 = tabs; _i < tabs_1.length; _i++) {
                    var tab = tabs_1[_i];
                    if (location.includes(tab)) {
                        return tab;
                    }
                }
                return 'detail';
            };
            Object.defineProperty(class_1.prototype, "closeAlert", {
                get: function () {
                    return closeAlertMixin('alerts');
                },
                enumerable: false,
                configurable: true
            });
            class_1.prototype.addAlert = function (title, variant, description) {
                this.setState({
                    alerts: __spreadArray(__spreadArray([], this.state.alerts, true), [
                        {
                            description: description,
                            title: title,
                            variant: variant,
                        },
                    ], false),
                });
            };
            class_1.prototype.sync = function (name) {
                var _this = this;
                ExecutionEnvironmentRemoteAPI.sync(name)
                    .then(function (result) {
                    var task_id = parsePulpIDFromURL(result.data.task);
                    _this.addAlert(React.createElement(Trans, null,
                        "Sync started for remote registry \"",
                        name,
                        "\"."), 'info', React.createElement("span", null,
                        React.createElement(Trans, null,
                            "See the task management",
                            ' ',
                            React.createElement(Link, { to: formatPath(Paths.taskDetail, { task: task_id }) },
                                "detail page",
                                ' '),
                            "for the status of this task.")));
                    _this.loadRepo();
                })
                    .catch(function () { return _this.addAlert(t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Sync failed for ", ""], ["Sync failed for ", ""])), name), 'danger'); });
            };
            return class_1;
        }(React.Component)),
        _a.contextType = AppContext,
        _a.displayName = "withContainerRepo(".concat(WrappedComponent.displayName, ")"),
        _a;
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=base.js.map