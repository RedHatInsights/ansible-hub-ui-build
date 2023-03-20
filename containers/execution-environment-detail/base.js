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
import { Trans, t } from '@lingui/macro';
import { Button, DropdownItem } from '@patternfly/react-core';
import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { ExecutionEnvironmentAPI, ExecutionEnvironmentRemoteAPI, } from 'src/api';
import { AlertList, DeleteExecutionEnvironmentModal, ExecutionEnvironmentHeader, LoadingPageWithHeader, Main, PublishToControllerModal, RepositoryForm, StatefulDropdown, closeAlertMixin, } from 'src/components';
import { AppContext } from 'src/loaders/app-context';
import { Paths, formatEEPath, formatPath } from 'src/paths';
import { ParamHelper, RepoSigningUtils, canSignEE, taskAlert, waitForTask, } from 'src/utilities';
// opposite of formatEEPath - converts routeParams from {namespace, container} to {container: "namespace/container"}
export function withContainerParamFix(WrappedComponent) {
    var Component = function (props) {
        var newProps = __assign(__assign({}, props), { routeParams: __assign(__assign({}, props.routeParams), { container: [props.routeParams.namespace, props.routeParams.container]
                    .filter(Boolean)
                    .join('/') }) });
        return React.createElement(WrappedComponent, __assign({}, newProps));
    };
    Component.displayName = "withContainerParamFix(".concat(WrappedComponent.displayName || WrappedComponent.name, ")");
    return Component;
}
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
                };
                return _this;
            }
            class_1.prototype.componentDidMount = function () {
                this.loadRepo();
            };
            class_1.prototype.componentDidUpdate = function () {
                // when reloading the same tab, state doesn't reset
                if (this.state.redirect) {
                    this.setState({ redirect: null });
                }
            };
            class_1.prototype.render = function () {
                var _this = this;
                var _a, _b, _c, _d, _e, _f, _g;
                var container = this.props.routeParams.container;
                var redirect = {
                    list: formatEEPath(Paths.executionEnvironments, {}),
                    activity: formatEEPath(Paths.executionEnvironmentDetailActivities, {
                        container: container,
                    }),
                    detail: formatEEPath(Paths.executionEnvironmentDetail, {
                        container: container,
                    }),
                    images: formatEEPath(Paths.executionEnvironmentDetailImages, {
                        container: container,
                    }),
                    owners: formatEEPath(Paths.executionEnvironmentDetailOwners, {
                        container: container,
                    }),
                    notFound: formatPath(Paths.notFound),
                }[this.state.redirect];
                if (redirect) {
                    return React.createElement(Navigate, { to: redirect });
                }
                if (this.state.loading) {
                    return React.createElement(LoadingPageWithHeader, null);
                }
                var permissions = this.state.repo.namespace.my_permissions;
                var showEdit = permissions.includes('container.namespace_change_containerdistribution') || permissions.includes('container.change_containernamespace');
                var canSync = permissions.includes('container.change_containernamespace');
                var hasPermission = this.context.hasPermission;
                var dropdownItems = [
                    this.state.repo.pulp.repository.remote && canSync && (React.createElement(DropdownItem, { key: 'sync', onClick: function () { return _this.sync(_this.state.repo.name); }, isDisabled: ['running', 'waiting'].includes((_b = (_a = this.state.repo.pulp.repository.remote) === null || _a === void 0 ? void 0 : _a.last_sync_task) === null || _b === void 0 ? void 0 : _b.state) }, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Sync from registry"], ["Sync from registry"]))))),
                    React.createElement(DropdownItem, { key: 'publish-to-controller', onClick: function () {
                            _this.setState({
                                publishToController: {
                                    image: _this.state.repo.name,
                                },
                            });
                        } }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Use in Controller"], ["Use in Controller"])))),
                    hasPermission('container.delete_containerrepository') && (React.createElement(DropdownItem, { key: 'delete', onClick: function () {
                            _this.setState({ showDeleteModal: true });
                        } }, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Delete"], ["Delete"]))))),
                    this.state.repo && canSignEE(this.context, this.state.repo) && (React.createElement(DropdownItem, { key: 'sign', onClick: function () {
                            _this.sign();
                        } }, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Sign"], ["Sign"]))))),
                ].filter(function (truthy) { return truthy; });
                var _h = this.state, alerts = _h.alerts, repo = _h.repo, publishToController = _h.publishToController, showDeleteModal = _h.showDeleteModal;
                // move to Owner tab when it can have its own breadcrumbs
                var groupId = ParamHelper.parseParamString(this.props.location.search).group;
                return (React.createElement(React.Fragment, null,
                    React.createElement(AlertList, { alerts: this.state.alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
                    React.createElement(PublishToControllerModal, { digest: publishToController === null || publishToController === void 0 ? void 0 : publishToController.digest, image: publishToController === null || publishToController === void 0 ? void 0 : publishToController.image, isOpen: !!publishToController, onClose: function () { return _this.setState({ publishToController: null }); }, tag: publishToController === null || publishToController === void 0 ? void 0 : publishToController.tag }),
                    showDeleteModal && (React.createElement(DeleteExecutionEnvironmentModal, { selectedItem: repo.name, closeAction: function () { return _this.setState({ showDeleteModal: false }); }, afterDelete: function () {
                            _this.context.setAlerts(_this.state.alerts);
                            _this.setState({ redirect: 'list' });
                        }, addAlert: function (text, variant, description) {
                            if (description === void 0) { description = undefined; }
                            return _this.addAlert(text, variant, description);
                        } })),
                    React.createElement(ExecutionEnvironmentHeader, { id: this.props.routeParams.container, updateState: function (change) { return _this.setState(change); }, tab: this.getTab(), groupId: groupId, container: this.state.repo, displaySignatures: this.context.featureFlags.container_signing, pageControls: React.createElement(React.Fragment, null,
                            showEdit ? (React.createElement(Button, { onClick: function () { return _this.setState({ editing: true }); }, variant: 'secondary', "data-cy": 'edit-container' }, t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Edit"], ["Edit"]))))) : null,
                            React.createElement(StatefulDropdown, { items: dropdownItems })) }),
                    React.createElement(Main, null,
                        this.state.editing && (React.createElement(RepositoryForm, { name: this.state.repo.name, namespace: this.state.repo.namespace.name, description: this.state.repo.description, permissions: permissions, onSave: function (promise) {
                                promise.then(function (results) {
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
                                });
                            }, onCancel: function () { return _this.setState({ editing: false }); }, distributionPulpId: this.state.repo.pulp.distribution.id, isRemote: !!this.state.repo.pulp.repository.remote, isNew: false, upstreamName: (_c = this.state.repo.pulp.repository.remote) === null || _c === void 0 ? void 0 : _c.upstream_name, registry: (_d = this.state.repo.pulp.repository.remote) === null || _d === void 0 ? void 0 : _d.registry, excludeTags: ((_e = this.state.repo.pulp.repository.remote) === null || _e === void 0 ? void 0 : _e.exclude_tags) || [], includeTags: ((_f = this.state.repo.pulp.repository.remote) === null || _f === void 0 ? void 0 : _f.include_tags) || [], remoteId: (_g = this.state.repo.pulp.repository.remote) === null || _g === void 0 ? void 0 : _g.id })),
                        React.createElement(WrappedComponent, __assign({ containerRepository: this.state.repo, editing: this.state.editing, addAlert: function (_a) {
                                var title = _a.title, variant = _a.variant, _b = _a.description, description = _b === void 0 ? null : _b;
                                return _this.addAlert(title, variant, description);
                            } }, this.props)))));
            };
            class_1.prototype.loadRepo = function () {
                var _this = this;
                ExecutionEnvironmentAPI.get(this.props.routeParams.container)
                    .then(function (result) {
                    var _a;
                    _this.setState({
                        repo: result.data,
                        loading: false,
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
                var tabs = ['detail', 'images', 'activity', 'owners'];
                var location = this.props.location.pathname.split('/');
                var index = location.findIndex(function (s) { return s === '_content'; });
                // match /containers/owners/_content/owners but not /containers/owners
                // also handles /containers/:name/_content/images/:digest
                if (index !== -1) {
                    var loc = location[index + 1];
                    for (var _i = 0, tabs_1 = tabs; _i < tabs_1.length; _i++) {
                        var tab = tabs_1[_i];
                        if (loc === tab) {
                            return tab;
                        }
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
                this.addAlertObj({
                    description: description,
                    title: title,
                    variant: variant,
                });
            };
            class_1.prototype.addAlertObj = function (alert) {
                this.setState({
                    alerts: __spreadArray(__spreadArray([], this.state.alerts, true), [alert], false),
                });
            };
            class_1.prototype.sync = function (name) {
                var _this = this;
                ExecutionEnvironmentRemoteAPI.sync(name)
                    .then(function (_a) {
                    var data = _a.data;
                    _this.addAlertObj(taskAlert(data.task, t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Sync started for remote registry \"", "\"."], ["Sync started for remote registry \"", "\"."])), name)));
                    _this.loadRepo();
                })
                    .catch(function () { return _this.addAlert(t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Sync failed for ", ""], ["Sync failed for ", ""])), name), 'danger'); });
            };
            class_1.prototype.sign = function () {
                var _this = this;
                RepoSigningUtils.sign(this.state.repo, this.context, function (alert) { return _this.addAlertObj(alert); }, function () { return _this.loadRepo(); });
            };
            return class_1;
        }(React.Component)),
        _a.contextType = AppContext,
        _a.displayName = "withContainerRepo(".concat(WrappedComponent.displayName || WrappedComponent.name, ")"),
        _a;
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=base.js.map