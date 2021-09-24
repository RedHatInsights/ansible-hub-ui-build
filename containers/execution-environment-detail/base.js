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
import { Redirect } from 'react-router-dom';
import { ExecutionEnvironmentAPI, ExecutionEnvironmentRemoteAPI, } from 'src/api';
import { formatPath, Paths } from '../../paths';
import { Button, DropdownItem } from '@patternfly/react-core';
import { AlertList, ExecutionEnvironmentHeader, LoadingPageWithHeader, Main, PublishToControllerModal, RepositoryForm, StatefulDropdown, closeAlertMixin, } from 'src/components';
import { waitForTask } from 'src/utilities';
// A higher order component to wrap individual detail pages
export function withContainerRepo(WrappedComponent) {
    return /** @class */ (function (_super) {
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
            };
            return _this;
        }
        class_1.prototype.componentDidMount = function () {
            this.loadRepo();
        };
        class_1.prototype.render = function () {
            var _this = this;
            var _a, _b, _c, _d, _e;
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
                this.state.repo.pulp.repository.remote && (React.createElement(DropdownItem, { key: 'sync', onClick: function () {
                        return ExecutionEnvironmentRemoteAPI.sync(_this.state.repo.name);
                    } }, t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Sync from registry"], ["Sync from registry"]))))),
                React.createElement(DropdownItem, { key: 'publish-to-controller', onClick: function () {
                        _this.setState({
                            publishToController: {
                                image: _this.state.repo.name,
                            },
                        });
                    } }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Use in Controller"], ["Use in Controller"])))),
            ].filter(function (truthy) { return truthy; });
            var publishToController = this.state.publishToController;
            return (React.createElement(React.Fragment, null,
                React.createElement(AlertList, { alerts: this.state.alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
                React.createElement(PublishToControllerModal, { digest: publishToController === null || publishToController === void 0 ? void 0 : publishToController.digest, image: publishToController === null || publishToController === void 0 ? void 0 : publishToController.image, isOpen: !!publishToController, onClose: function () { return _this.setState({ publishToController: null }); }, tag: publishToController === null || publishToController === void 0 ? void 0 : publishToController.tag }),
                React.createElement(ExecutionEnvironmentHeader, { id: this.props.match.params['container'], updateState: function (change) { return _this.setState(change); }, tab: this.getTab(), container: this.state.repo, pageControls: React.createElement(React.Fragment, null,
                        showEdit ? (React.createElement(Button, { onClick: function () { return _this.setState({ editing: true }); } }, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Edit"], ["Edit"]))))) : null,
                        React.createElement(StatefulDropdown, { items: dropdownItems })) }),
                React.createElement(Main, null,
                    this.state.editing && (React.createElement(RepositoryForm, { name: this.state.repo.name, namespace: this.state.repo.namespace.name, description: this.state.repo.description, permissions: permissions, onSave: function (promise) {
                            promise
                                .then(function (results) {
                                var task = results.find(function (x) { return x.data && x.data.task; });
                                _this.setState({ editing: false, loading: true });
                                if (!!task) {
                                    waitForTask(task.data.task.split('tasks/')[1].replace('/', '')).then(function () {
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
                                        title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Error: changes weren't saved"], ["Error: changes weren't saved"]))),
                                    }),
                                });
                            });
                        }, onCancel: function () { return _this.setState({ editing: false }); }, distributionPulpId: this.state.repo.pulp.distribution.pulp_id, isRemote: !!this.state.repo.pulp.repository.remote, isNew: false, upstreamName: (_a = this.state.repo.pulp.repository.remote) === null || _a === void 0 ? void 0 : _a.upstream_name, registry: (_b = this.state.repo.pulp.repository.remote) === null || _b === void 0 ? void 0 : _b.registry, excludeTags: (_c = this.state.repo.pulp.repository.remote) === null || _c === void 0 ? void 0 : _c.exclude_tags, includeTags: (_d = this.state.repo.pulp.repository.remote) === null || _d === void 0 ? void 0 : _d.include_tags, remotePulpId: (_e = this.state.repo.pulp.repository.remote) === null || _e === void 0 ? void 0 : _e.pulp_id })),
                    React.createElement(WrappedComponent, __assign({ containerRepository: this.state.repo, editing: this.state.editing }, this.props)))));
        };
        class_1.prototype.loadRepo = function () {
            var _this = this;
            ExecutionEnvironmentAPI.get(this.props.match.params['container'])
                .then(function (result) {
                _this.setState({
                    loading: false,
                    repo: result.data,
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
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=base.js.map