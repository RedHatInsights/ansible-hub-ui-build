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
import './execution-environment.scss';
import { withRouter, Link } from 'react-router-dom';
import { Button, DropdownItem, Label, Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, } from '@patternfly/react-core';
import { ExecutionEnvironmentAPI, ExecutionEnvironmentRemoteAPI, } from 'src/api';
import { filterIsSet, parsePulpIDFromURL, ParamHelper } from 'src/utilities';
import { AlertList, AppliedFilters, BaseHeader, CompoundFilter, DateComponent, DeleteExecutionEnvironmentModal, EmptyStateFilter, EmptyStateNoData, LoadingPageSpinner, Main, Pagination, PublishToControllerModal, RepositoryForm, SortTable, Tooltip, closeAlertMixin, EmptyStateUnauthorized, ListItemActions, } from 'src/components';
import { formatPath, Paths } from '../../paths';
import { AppContext } from 'src/loaders/app-context';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
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
            alerts: [],
            itemCount: 0,
            itemToEdit: null,
            items: [],
            loading: true,
            params: params,
            publishToController: null,
            showRemoteModal: false,
            unauthorized: false,
            showDeleteModal: false,
            selectedItem: null,
            inputText: '',
            formError: [],
        };
        return _this;
    }
    ExecutionEnvironmentList.prototype.componentDidMount = function () {
        if (!this.context.user || this.context.user.is_anonymous) {
            this.setState({ unauthorized: true, loading: false });
        }
        else {
            this.queryEnvironments();
            this.setState({ alerts: this.context.alerts });
        }
    };
    ExecutionEnvironmentList.prototype.componentWillUnmount = function () {
        this.context.setAlerts([]);
    };
    ExecutionEnvironmentList.prototype.render = function () {
        var _this = this;
        var _a;
        var _b = this.state, alerts = _b.alerts, itemCount = _b.itemCount, itemToEdit = _b.itemToEdit, items = _b.items, loading = _b.loading, params = _b.params, publishToController = _b.publishToController, showRemoteModal = _b.showRemoteModal, unauthorized = _b.unauthorized, showDeleteModal = _b.showDeleteModal, selectedItem = _b.selectedItem;
        var user = this.context.user;
        var noData = items.length === 0 && !filterIsSet(params, ['name__icontains']);
        var pushImagesButton = (React.createElement(Button, { variant: 'link', onClick: function () {
                return window.open('https://access.redhat.com/documentation/en-us/red_hat_ansible_automation_platform/2.1/html-single/managing_containers_in_private_automation_hub/index', '_blank');
            }, "data-cy": 'push-images-button' },
            React.createElement(Trans, null, "Push container images"),
            " ",
            React.createElement(ExternalLinkAltIcon, null)));
        var addRemoteButton = ((_a = user === null || user === void 0 ? void 0 : user.model_permissions) === null || _a === void 0 ? void 0 : _a.add_containernamespace) && (React.createElement(Button, { onClick: function () {
                return _this.setState({
                    showRemoteModal: true,
                    itemToEdit: {},
                });
            }, variant: 'primary' },
            React.createElement(Trans, null, "Add execution environment")));
        return (React.createElement(React.Fragment, null,
            React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            React.createElement(PublishToControllerModal, { digest: publishToController === null || publishToController === void 0 ? void 0 : publishToController.digest, image: publishToController === null || publishToController === void 0 ? void 0 : publishToController.image, isOpen: !!publishToController, onClose: function () { return _this.setState({ publishToController: null }); }, tag: publishToController === null || publishToController === void 0 ? void 0 : publishToController.tag }),
            showRemoteModal && this.renderRemoteModal(itemToEdit),
            React.createElement(BaseHeader, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Execution Environments"], ["Execution Environments"]))) }),
            showDeleteModal && (React.createElement(DeleteExecutionEnvironmentModal, { selectedItem: selectedItem ? selectedItem.name : '', closeAction: function () {
                    return _this.setState({ showDeleteModal: false, selectedItem: null });
                }, afterDelete: function () { return _this.queryEnvironments(); }, addAlert: function (text, variant, description) {
                    if (description === void 0) { description = undefined; }
                    return _this.setState({
                        alerts: alerts.concat([
                            { title: text, variant: variant, description: description },
                        ]),
                    });
                } })),
            unauthorized ? (React.createElement(EmptyStateUnauthorized, null)) : noData && !loading ? (React.createElement(EmptyStateNoData, { title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["No container repositories yet"], ["No container repositories yet"]))), description: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["You currently have no container repositories. Add a container repository via the CLI to get started."], ["You currently have no container repositories. Add a container repository via the CLI to get started."]))), button: React.createElement(React.Fragment, null,
                    addRemoteButton,
                    addRemoteButton && pushImagesButton ? React.createElement("div", null, "\u00A0") : null,
                    pushImagesButton) })) : (React.createElement(Main, null, loading ? (React.createElement(LoadingPageSpinner, null)) : (React.createElement("section", { className: 'body' },
                React.createElement("div", { className: 'hub-list-toolbar' },
                    React.createElement(Toolbar, null,
                        React.createElement(ToolbarContent, null,
                            React.createElement(ToolbarGroup, null,
                                React.createElement(ToolbarItem, null,
                                    React.createElement(CompoundFilter, { inputText: this.state.inputText, onChange: function (text) {
                                            return _this.setState({ inputText: text });
                                        }, updateParams: function (p) {
                                            p['page'] = 1;
                                            _this.updateParams(p, function () {
                                                return _this.queryEnvironments();
                                            });
                                        }, params: params, filterConfig: [
                                            {
                                                id: 'name__icontains',
                                                title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Container repository name"], ["Container repository name"]))),
                                            },
                                        ] })),
                                React.createElement(ToolbarItem, null, addRemoteButton),
                                React.createElement(ToolbarItem, null, pushImagesButton)))),
                    React.createElement(Pagination, { params: params, updateParams: function (p) {
                            return _this.updateParams(p, function () { return _this.queryEnvironments(); });
                        }, count: itemCount, isTop: true })),
                React.createElement("div", null,
                    React.createElement(AppliedFilters, { updateParams: function (p) {
                            _this.updateParams(p, function () { return _this.queryEnvironments(); });
                            _this.setState({ inputText: '' });
                        }, params: params, ignoredParams: ['page_size', 'page', 'sort'], niceNames: {
                            name__icontains: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Name"], ["Name"]))),
                        } })),
                this.renderTable(params),
                React.createElement(Pagination, { params: params, updateParams: function (p) {
                        return _this.updateParams(p, function () { return _this.queryEnvironments(); });
                    }, count: itemCount })))))));
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
                    title: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Container registry type"], ["Container registry type"]))),
                    type: 'none',
                    id: 'type',
                },
                {
                    title: '',
                    type: 'none',
                    id: 'controls',
                },
            ],
        };
        return (React.createElement("table", { className: 'hub-c-table-content pf-c-table' },
            React.createElement(SortTable, { options: sortTableOptions, params: params, updateParams: function (p) {
                    return _this.updateParams(p, function () { return _this.queryEnvironments(); });
                } }),
            React.createElement("tbody", null, items.map(function (user, i) { return _this.renderTableRow(user, i); }))));
    };
    ExecutionEnvironmentList.prototype.renderTableRow = function (item, index) {
        var _this = this;
        var description = item.description;
        var permissions = item.namespace.my_permissions;
        var canEdit = permissions.includes('container.change_containernamespace') ||
            permissions.includes('container.namespace_change_containerdistribution');
        var dropdownItems = [
            canEdit && (React.createElement(DropdownItem, { key: 'edit', onClick: function () {
                    return _this.setState({
                        showRemoteModal: true,
                        itemToEdit: __assign({}, item),
                    });
                } }, t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Edit"], ["Edit"]))))),
            item.pulp.repository.remote && canEdit && (React.createElement(DropdownItem, { key: 'sync', onClick: function () { return _this.sync(item.name); } }, t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Sync from registry"], ["Sync from registry"]))))),
            React.createElement(DropdownItem, { key: 'publish-to-controller', onClick: function () {
                    _this.setState({
                        publishToController: {
                            image: item.name,
                        },
                    });
                } }, t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Use in Controller"], ["Use in Controller"])))),
            this.context.user.model_permissions.delete_containerrepository && (React.createElement(DropdownItem, { key: 'delete', onClick: function () {
                    return _this.setState({ selectedItem: item, showDeleteModal: true });
                } }, t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Delete"], ["Delete"]))))),
        ].filter(function (truthy) { return truthy; });
        return (React.createElement("tr", { "data-cy": "ExecutionEnvironmentList-row-".concat(item.name), key: index },
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
            React.createElement("td", null,
                React.createElement(Label, null, item.pulp.repository.remote ? t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Remote"], ["Remote"]))) : t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Local"], ["Local"]))))),
            React.createElement(ListItemActions, { kebabItems: dropdownItems })));
    };
    ExecutionEnvironmentList.prototype.renderRemoteModal = function (itemToEdit) {
        var _this = this;
        var _a, _b, _c;
        var name = itemToEdit.name, namespace = itemToEdit.namespace, description = itemToEdit.description, pulp = itemToEdit.pulp;
        var _d = ((_a = pulp === null || pulp === void 0 ? void 0 : pulp.repository) === null || _a === void 0 ? void 0 : _a.remote) || {}, pulp_id = _d.pulp_id, registry = _d.registry, upstream_name = _d.upstream_name, include_tags = _d.include_tags, exclude_tags = _d.exclude_tags;
        var remote = (pulp === null || pulp === void 0 ? void 0 : pulp.repository) ? !!((_b = pulp === null || pulp === void 0 ? void 0 : pulp.repository) === null || _b === void 0 ? void 0 : _b.remote) : true; // add only supports remote
        var isNew = !(pulp === null || pulp === void 0 ? void 0 : pulp.repository); // only exists in real data
        var distributionPulpId = (_c = pulp === null || pulp === void 0 ? void 0 : pulp.distribution) === null || _c === void 0 ? void 0 : _c.pulp_id;
        var alerts = this.state.alerts;
        return (React.createElement(RepositoryForm, { isRemote: !!remote, isNew: isNew, name: name, namespace: namespace === null || namespace === void 0 ? void 0 : namespace.name, description: description, upstreamName: upstream_name, registry: registry, excludeTags: exclude_tags || [], includeTags: include_tags || [], permissions: (namespace === null || namespace === void 0 ? void 0 : namespace.my_permissions) || [], remotePulpId: pulp_id, distributionPulpId: distributionPulpId, formError: this.state.formError, onSave: function (promise, form) {
                promise
                    .then(function () {
                    _this.setState({
                        showRemoteModal: false,
                        itemToEdit: null,
                        alerts: alerts.concat({
                            variant: 'success',
                            title: isNew ? (React.createElement(Trans, null,
                                "Execution environment \"",
                                form.name,
                                "\" has been added successfully.")) : (React.createElement(Trans, null,
                                "Saved changes to execution environment \"",
                                form.name,
                                "\".")),
                        }),
                    }, function () { return _this.queryEnvironments(); });
                })
                    .catch(function (err) {
                    _this.setState({
                        formError: err.response.data.errors.map(function (error) {
                            return {
                                title: error.title,
                                detail: error.source.parameter + ': ' + error.detail,
                            };
                        }),
                    });
                });
            }, onCancel: function () {
                return _this.setState({
                    showRemoteModal: false,
                    itemToEdit: null,
                });
            }, addAlert: function (variant, title, description) {
                return _this.addAlert(title, variant, description);
            } }));
    };
    ExecutionEnvironmentList.prototype.queryEnvironments = function () {
        var _this = this;
        this.setState({ loading: true }, function () {
            return ExecutionEnvironmentAPI.list(_this.state.params)
                .then(function (result) {
                _this.setState({
                    items: result.data.data,
                    itemCount: result.data.meta.count,
                    loading: false,
                });
            })
                .catch(function (e) {
                return _this.addAlert(t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Error loading environments."], ["Error loading environments."]))), 'danger', e === null || e === void 0 ? void 0 : e.message);
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
    ExecutionEnvironmentList.prototype.addAlert = function (title, variant, description) {
        this.addAlertObj({
            description: description,
            title: title,
            variant: variant,
        });
    };
    ExecutionEnvironmentList.prototype.addAlertObj = function (alert) {
        this.setState({
            alerts: __spreadArray(__spreadArray([], this.state.alerts, true), [alert], false),
        });
    };
    ExecutionEnvironmentList.prototype.sync = function (name) {
        var _this = this;
        ExecutionEnvironmentRemoteAPI.sync(name)
            .then(function (result) {
            var task_id = parsePulpIDFromURL(result.data.task);
            _this.addAlert(React.createElement(Trans, null,
                "Sync started for execution environment \"",
                name,
                "\"."), 'info', React.createElement("span", null,
                React.createElement(Trans, null,
                    "See the task management",
                    ' ',
                    React.createElement(Link, { to: formatPath(Paths.taskDetail, { task: task_id }) },
                        "detail page",
                        ' '),
                    "for the status of this task.")));
        })
            .catch(function () { return _this.addAlert(t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Sync failed for ", ""], ["Sync failed for ", ""])), name), 'danger'); });
    };
    return ExecutionEnvironmentList;
}(React.Component));
export default withRouter(ExecutionEnvironmentList);
ExecutionEnvironmentList.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18;
//# sourceMappingURL=execution_environment_list.js.map