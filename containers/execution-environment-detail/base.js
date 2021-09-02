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
import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { ExecutionEnvironmentAPI, ContainerDistributionAPI, ExecutionEnvironmentNamespaceAPI, TaskAPI, } from 'src/api';
import { formatPath, Paths } from '../../paths';
import { Button } from '@patternfly/react-core';
import { LoadingPageWithHeader, ExecutionEnvironmentHeader, Main, RepositoryForm, AlertList, closeAlertMixin, } from 'src/components';
import { isEqual, isEmpty, xorWith, cloneDeep } from 'lodash';
// A higher order component to wrap individual detail pages
export function withContainerRepo(WrappedComponent) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                repo: undefined,
                loading: true,
                redirect: undefined,
                editing: false,
                selectedGroups: [],
                alerts: [],
            };
            return _this;
        }
        class_1.prototype.componentDidMount = function () {
            this.loadRepo();
        };
        class_1.prototype.render = function () {
            var _this = this;
            if (this.state.redirect === 'activity') {
                return (React.createElement(Redirect, { to: formatPath(Paths.executionEnvironmentDetailActivities, {
                        container: this.props.match.params['container'],
                    }) }));
            }
            else if (this.state.redirect === 'detail') {
                return (React.createElement(Redirect, { to: formatPath(Paths.executionEnvironmentDetail, {
                        container: this.props.match.params['container'],
                    }) }));
            }
            else if (this.state.redirect === 'images') {
                return (React.createElement(Redirect, { to: formatPath(Paths.executionEnvironmentDetailImages, {
                        container: this.props.match.params['container'],
                    }) }));
            }
            else if (this.state.redirect === 'notFound') {
                return React.createElement(Redirect, { to: Paths.notFound });
            }
            if (this.state.loading) {
                return React.createElement(LoadingPageWithHeader, null);
            }
            var permissions = this.state.repo.namespace.my_permissions;
            return (React.createElement(React.Fragment, null,
                React.createElement(AlertList, { alerts: this.state.alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
                React.createElement(ExecutionEnvironmentHeader, { id: this.props.match.params['container'], updateState: function (change) { return _this.setState(change); }, tab: this.getTab(), container: this.state.repo, pageControls: permissions.includes('container.namespace_change_containerdistribution') ||
                        permissions.includes('container.change_containernamespace') ? (React.createElement(Button, { onClick: function () { return _this.setState({ editing: true }); } }, "Edit")) : null }),
                React.createElement(Main, null,
                    this.state.editing && (React.createElement(RepositoryForm, { name: this.state.repo.name, namespace: this.state.repo.namespace.name, selectedGroups: cloneDeep(this.state.selectedGroups), description: this.state.repo.description, permissions: permissions, onSave: function (description, selectedGroups) {
                            var promises = [];
                            if (description !== _this.state.repo.description) {
                                promises.push(ContainerDistributionAPI.patch(_this.state.repo.pulp.distribution.pulp_id, {
                                    description: description,
                                }));
                            }
                            if (!_this.compareGroupsAndPerms(selectedGroups.sort(), _this.state.selectedGroups.sort())) {
                                promises.push(ExecutionEnvironmentNamespaceAPI.update(_this.state.repo.namespace.name, { groups: selectedGroups }));
                            }
                            Promise.all(promises)
                                .then(function (results) {
                                var task = results.find(function (x) { return x.data && x.data.task; });
                                _this.setState({ editing: false, loading: true });
                                if (!!task) {
                                    _this.waitForTask(task.data.task.split('tasks/')[1].replace('/', '')).then(function () {
                                        _this.loadRepo();
                                    });
                                }
                                else {
                                    _this.loadRepo();
                                }
                            })
                                .catch(function () {
                                return _this.setState({
                                    editing: false,
                                    alerts: _this.state.alerts.concat({
                                        variant: 'danger',
                                        title: "Error: changes weren't saved",
                                    }),
                                });
                            });
                        }, onCancel: function () { return _this.setState({ editing: false }); } })),
                    React.createElement(WrappedComponent, __assign({ containerRepository: this.state.repo, editing: this.state.editing }, this.props)))));
        };
        //Compare groups and compare their permissions
        class_1.prototype.compareGroupsAndPerms = function (original, newOne) {
            var same = true;
            if (original.length === newOne.length) {
                original.forEach(function (x, index) {
                    if (!isEmpty(xorWith(x.object_permissions.sort(), newOne[index].object_permissions.sort(), isEqual))) {
                        same = false;
                    }
                });
            }
            return isEmpty(xorWith(original, newOne, isEqual)) && same;
        };
        class_1.prototype.loadRepo = function () {
            var _this = this;
            ExecutionEnvironmentAPI.get(this.props.match.params['container'])
                .then(function (result) {
                var repo = result;
                return ExecutionEnvironmentNamespaceAPI.get(result.data.namespace.name).then(function (result) {
                    return _this.setState({
                        loading: false,
                        repo: repo.data,
                        selectedGroups: result.data.groups,
                    });
                });
            })
                .catch(function (e) { return _this.setState({ redirect: 'notFound' }); });
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
        class_1.prototype.waitForTask = function (task) {
            var _this = this;
            return TaskAPI.get(task).then(function (result) {
                if (result.data.state !== 'completed') {
                    return new Promise(function (r) { return setTimeout(r, 500); }).then(function () {
                        return _this.waitForTask(task);
                    });
                }
            });
        };
        Object.defineProperty(class_1.prototype, "closeAlert", {
            get: function () {
                return closeAlertMixin('alerts');
            },
            enumerable: false,
            configurable: true
        });
        return class_1;
    }(React.Component));
}
//# sourceMappingURL=base.js.map