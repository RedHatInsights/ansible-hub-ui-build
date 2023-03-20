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
import { Alert, AlertActionCloseButton, Button, Checkbox, DropdownItem, Text, Tooltip, } from '@patternfly/react-core';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, Navigate } from 'react-router-dom';
import { CollectionAPI, MyNamespaceAPI, NamespaceAPI, SignCollectionAPI, } from 'src/api';
import { AccessTab, AlertList, ClipboardCopy, CollectionFilter, CollectionList, DeleteCollectionModal, DeleteModal, EmptyStateNoData, ImportModal, LoadingPageWithHeader, Main, Pagination, PartnerHeader, RepoSelector, SignAllCertificatesModal, StatefulDropdown, WisdomModal, closeAlertMixin, } from 'src/components';
import { Constants } from 'src/constants';
import { AppContext } from 'src/loaders/app-context';
import { Paths, formatPath, namespaceBreadcrumb } from 'src/paths';
import { withRouter } from 'src/utilities';
import { DeleteCollectionUtils, ParamHelper, canSignNamespace, errorMessage, filterIsSet, getRepoUrl, waitForTask, } from 'src/utilities';
import { parsePulpIDFromURL } from 'src/utilities/parse-pulp-id';
import './namespace-detail.scss';
var NamespaceDetail = /** @class */ (function (_super) {
    __extends(NamespaceDetail, _super);
    function NamespaceDetail(props) {
        var _this = _super.call(this, props) || this;
        _this.nonAPIParams = ['tab', 'group'];
        // namespace is a positional url argument, so don't include it in the
        // query params
        _this.nonQueryStringParams = ['namespace'];
        _this.deleteNamespace = function () {
            var name = _this.state.namespace.name;
            _this.setState({ isNamespacePending: true }, function () {
                return NamespaceAPI.delete(name)
                    .then(function () {
                    _this.setState({
                        redirect: namespaceBreadcrumb.url,
                        confirmDelete: false,
                        isNamespacePending: false,
                    });
                    _this.context.queueAlert({
                        variant: 'success',
                        title: (React.createElement(Trans, null,
                            "Namespace \"",
                            name,
                            "\" has been successfully deleted.")),
                    });
                })
                    .catch(function (e) {
                    var _a = e.response, status = _a.status, statusText = _a.statusText;
                    _this.setState({
                        isOpenNamespaceModal: false,
                        confirmDelete: false,
                        isNamespacePending: false,
                    }, function () {
                        _this.setState({
                            alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                                {
                                    variant: 'danger',
                                    title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Namespace \"", "\" could not be deleted."], ["Namespace \"", "\" could not be deleted."])), name),
                                    description: errorMessage(status, statusText),
                                },
                            ], false),
                        });
                    });
                });
            });
        };
        _this.closeModal = function () {
            _this.setState({ isOpenNamespaceModal: false, confirmDelete: false });
        };
        var params = ParamHelper.parseParamString(props.location.search, [
            'page',
            'page_size',
        ]);
        params['namespace'] = props.routeParams.namespace;
        _this.state = {
            canSign: false,
            collections: [],
            namespace: null,
            params: params,
            redirect: null,
            itemCount: 0,
            showImportModal: false,
            warning: '',
            updateCollection: null,
            showControls: false,
            isOpenNamespaceModal: false,
            isOpenSignModal: false,
            isOpenWisdomModal: false,
            isNamespaceEmpty: false,
            confirmDelete: false,
            isNamespacePending: false,
            alerts: [],
            deleteCollection: null,
            isDeletionPending: false,
            showGroupRemoveModal: null,
            showGroupSelectWizard: null,
            showRoleRemoveModal: null,
            showRoleSelectWizard: null,
            group: null,
        };
        return _this;
    }
    NamespaceDetail.prototype.componentDidMount = function () {
        this.load();
        this.setState({ alerts: this.context.alerts || [] });
        this.context.setAlerts([]);
    };
    NamespaceDetail.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.location.search !== this.props.location.search) {
            var params = ParamHelper.parseParamString(this.props.location.search, [
                'page',
                'page_size',
            ]);
            params['namespace'] = this.props.routeParams.namespace;
            this.setState({
                params: params,
                group: this.filterGroup(params['group'], this.state.namespace.groups),
            });
        }
    };
    NamespaceDetail.prototype.filterGroup = function (groupId, groups) {
        return groupId ? groups.find(function (_a) {
            var id = _a.id;
            return Number(groupId) === id;
        }) : null;
    };
    NamespaceDetail.prototype.updateGroups = function (_a) {
        var _this = this;
        var groups = _a.groups, alertSuccess = _a.alertSuccess, alertFailure = _a.alertFailure, stateUpdate = _a.stateUpdate;
        var name = this.state.namespace.name;
        MyNamespaceAPI.update(name, __assign(__assign({}, this.state.namespace), { groups: groups }))
            .then(function () {
            _this.addAlert({
                title: alertSuccess,
                variant: 'success',
            });
            _this.load(); // ensure reload() sets groups: null to trigger loading spinner
        })
            .catch(function (_a) {
            var _b = _a.response, status = _b.status, statusText = _b.statusText;
            _this.addAlert({
                title: alertFailure,
                variant: 'danger',
                description: errorMessage(status, statusText),
            });
        })
            .finally(function () {
            _this.setState(stateUpdate);
        });
    };
    NamespaceDetail.prototype.render = function () {
        var _this = this;
        var _a;
        var _b = this.state, canSign = _b.canSign, collections = _b.collections, namespace = _b.namespace, params = _b.params, redirect = _b.redirect, itemCount = _b.itemCount, showControls = _b.showControls, showImportModal = _b.showImportModal, warning = _b.warning, updateCollection = _b.updateCollection, isOpenNamespaceModal = _b.isOpenNamespaceModal, isOpenWisdomModal = _b.isOpenWisdomModal, confirmDelete = _b.confirmDelete, isNamespacePending = _b.isNamespacePending, alerts = _b.alerts, deleteCollection = _b.deleteCollection, isDeletionPending = _b.isDeletionPending;
        if (redirect) {
            return React.createElement(Navigate, { to: redirect });
        }
        if (!namespace) {
            return React.createElement(LoadingPageWithHeader, null);
        }
        var tabs = [
            { id: 'collections', name: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Collections"], ["Collections"]))) },
            showControls && { id: 'cli-configuration', name: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["CLI configuration"], ["CLI configuration"]))) },
            namespace.resources && { id: 'resources', name: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Resources"], ["Resources"]))) },
            { id: 'access', name: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Access"], ["Access"]))) },
        ].filter(Boolean);
        var tab = params['tab'] || 'collections';
        var breadcrumbs = [
            namespaceBreadcrumb,
            {
                name: namespace.name,
                url: tab === 'access'
                    ? formatPath(Paths.namespaceByRepo, {
                        repo: this.context.selectedRepo,
                        namespace: namespace.name,
                    })
                    : null,
            },
            tab === 'access'
                ? {
                    name: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Access"], ["Access"]))),
                    url: params.group
                        ? formatPath(Paths.namespaceByRepo, {
                            repo: this.context.selectedRepo,
                            namespace: namespace.name,
                        }, { tab: 'access' })
                        : null,
                }
                : null,
            tab === 'access' && params.group
                ? { name: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Group ", ""], ["Group ", ""])), params.group) }
                : null,
        ].filter(Boolean);
        var repositoryUrl = getRepoUrl();
        var noData = itemCount === 0 && !filterIsSet(params, ['keywords']);
        var updateParams = function (params) {
            return _this.updateParams(params, function () { return _this.loadCollections(); });
        };
        var ignoredParams = [
            'namespace',
            'page',
            'page_size',
            'sort',
            'tab',
            'group',
            'view_type',
        ];
        var hasPermission = this.context.hasPermission;
        var canEditOwners = ((_a = this.state.namespace.related_fields.my_permissions) === null || _a === void 0 ? void 0 : _a.includes('galaxy.change_namespace')) || hasPermission('galaxy.change_namespace');
        // remove ?group (access tab) when switching tabs
        var tabParams = __assign({}, params);
        delete tabParams.group;
        return (React.createElement(React.Fragment, null,
            React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            React.createElement(ImportModal, { isOpen: showImportModal, onUploadSuccess: function () {
                    return _this.setState({
                        redirect: formatPath(Paths.myImports, {}, {
                            namespace: namespace.name,
                        }),
                    });
                }, 
                // onCancel
                setOpen: function (isOpen, warn) { return _this.toggleImportModal(isOpen, warn); }, collection: updateCollection, namespace: namespace.name }),
            React.createElement(DeleteCollectionModal, { deleteCollection: deleteCollection, isDeletionPending: isDeletionPending, confirmDelete: confirmDelete, setConfirmDelete: function (confirmDelete) { return _this.setState({ confirmDelete: confirmDelete }); }, cancelAction: function () { return _this.setState({ deleteCollection: null }); }, deleteAction: function () {
                    return _this.setState({ isDeletionPending: true }, function () {
                        return DeleteCollectionUtils.deleteCollection({
                            collection: deleteCollection,
                            setState: function (state) { return _this.setState(state); },
                            load: function () { return _this.load(); },
                            redirect: false,
                            selectedRepo: _this.context.selectedRepo,
                            addAlert: function (alert) { return _this.addAlert(alert); },
                        });
                    });
                } }),
            isOpenNamespaceModal && (React.createElement(DeleteModal, { spinner: isNamespacePending, cancelAction: this.closeModal, deleteAction: this.deleteNamespace, title: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Delete namespace?"], ["Delete namespace?"]))), isDisabled: !confirmDelete || isNamespacePending },
                React.createElement(React.Fragment, null,
                    React.createElement(Text, { className: 'delete-namespace-modal-message' },
                        React.createElement(Trans, null,
                            "Deleting ",
                            React.createElement("b", null, namespace.name),
                            " and its data will be lost.")),
                    React.createElement(Checkbox, { isChecked: confirmDelete, onChange: function (val) { return _this.setState({ confirmDelete: val }); }, label: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["I understand that this action cannot be undone."], ["I understand that this action cannot be undone."]))), id: 'delete_confirm' })))),
            isOpenWisdomModal && (React.createElement(WisdomModal, { addAlert: function (alert) { return _this.addAlert(alert); }, closeAction: function () { return _this.setState({ isOpenWisdomModal: false }); }, scope: 'namespace', reference: this.state.namespace.name })),
            warning ? (React.createElement(Alert, { className: 'hub-c-alert-namespace', variant: 'warning', title: warning, actionClose: React.createElement(AlertActionCloseButton, { onClose: function () { return _this.setState({ warning: '' }); } }) })) : null,
            React.createElement(PartnerHeader, { namespace: namespace, breadcrumbs: breadcrumbs, tabs: tabs, params: tabParams, updateParams: function (p) { return _this.updateParams(p); }, pageControls: this.renderPageControls(), contextSelector: React.createElement(RepoSelector, { path: this.props.routePath, pathParams: { namespace: namespace.name }, selectedRepo: this.context.selectedRepo }), filters: tab === 'collections' ? (React.createElement("div", { className: 'hub-toolbar-wrapper namespace-detail' },
                    React.createElement("div", { className: 'toolbar' },
                        React.createElement(CollectionFilter, { ignoredParams: ignoredParams, params: params, updateParams: updateParams }),
                        React.createElement("div", { className: 'hub-pagination-container' },
                            React.createElement(Pagination, { params: params, updateParams: updateParams, count: itemCount, isTop: true }))))) : null }),
            React.createElement(Main, null,
                tab === 'collections' ? (noData ? (React.createElement(EmptyStateNoData, { title: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["No collections yet"], ["No collections yet"]))), description: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Collections will appear once uploaded"], ["Collections will appear once uploaded"]))), button: this.state.showControls && (React.createElement(Button, { onClick: function () { return _this.setState({ showImportModal: true }); } }, t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Upload collection"], ["Upload collection"]))))) })) : (React.createElement("section", { className: 'body' },
                    React.createElement(CollectionList, { updateParams: updateParams, params: params, ignoredParams: ignoredParams, collections: collections, itemCount: itemCount, showControls: this.state.showControls, repo: this.context.selectedRepo, renderCollectionControls: function (collection) {
                            return _this.renderCollectionControls(collection);
                        }, displaySignatures: this.context.featureFlags.display_signatures })))) : null,
                tab === 'cli-configuration' ? (React.createElement("section", { className: 'body' },
                    React.createElement("div", null,
                        React.createElement("div", null,
                            React.createElement(Trans, null,
                                React.createElement("b", null, "Note:"),
                                " Use this URL to configure ansible-galaxy to upload collections to this namespace. More information on ansible-galaxy configurations can be found",
                                ' ',
                                React.createElement("a", { href: 'https://docs.ansible.com/ansible/latest/galaxy/user_guide.html#configuring-the-ansible-galaxy-client', target: '_blank', rel: 'noreferrer' }, "here"),
                                React.createElement("span", null, "\u00A0"),
                                React.createElement(ExternalLinkAltIcon, null),
                                ".")),
                        React.createElement(ClipboardCopy, { isReadOnly: true }, repositoryUrl)))) : null,
                tab === 'resources' ? this.renderResources(namespace) : null,
                tab === 'access' ? (React.createElement(AccessTab, { showGroupRemoveModal: this.state.showGroupRemoveModal, showGroupSelectWizard: this.state.showGroupSelectWizard, showRoleRemoveModal: this.state.showRoleRemoveModal, showRoleSelectWizard: this.state.showRoleSelectWizard, canEditOwners: canEditOwners, group: this.state.group, groups: namespace.groups, name: namespace.name, pulpObjectType: 'pulp_ansible/namespaces', selectRolesMessage: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["The selected roles will be added to this specific namespace."], ["The selected roles will be added to this specific namespace."]))), updateProps: function (prop) {
                        _this.setState(prop);
                    }, addGroup: function (group, roles) {
                        var groups = namespace.groups, name = namespace.name;
                        var newGroup = __assign(__assign({}, group), { object_roles: roles.map(function (_a) {
                                var name = _a.name;
                                return name;
                            }) });
                        var newGroups = __spreadArray(__spreadArray([], groups, true), [newGroup], false);
                        _this.updateGroups({
                            groups: newGroups,
                            alertSuccess: t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Group \"", "\" has been successfully added to \"", "\"."], ["Group \"", "\" has been successfully added to \"", "\"."])), group.name, name),
                            alertFailure: t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Group \"", "\" could not be added to \"", "\"."], ["Group \"", "\" could not be added to \"", "\"."])), group.name, name),
                            stateUpdate: { showGroupSelectWizard: null },
                        });
                    }, removeGroup: function (group) {
                        var name = namespace.name, groups = namespace.groups;
                        var newGroups = groups.filter(function (g) { return g !== group; });
                        _this.updateGroups({
                            groups: newGroups,
                            alertSuccess: t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Group \"", "\" has been successfully removed from \"", "\"."], ["Group \"", "\" has been successfully removed from \"", "\"."])), group.name, name),
                            alertFailure: t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Group \"", "\" could not be removed from \"", "\"."], ["Group \"", "\" could not be removed from \"", "\"."])), group.name, name),
                            stateUpdate: { showGroupRemoveModal: null },
                        });
                    }, addRole: function (group, roles) {
                        var name = namespace.name, groups = namespace.groups;
                        var newGroup = __assign(__assign({}, group), { object_roles: __spreadArray(__spreadArray([], group.object_roles, true), roles.map(function (_a) {
                                var name = _a.name;
                                return name;
                            }), true) });
                        var newGroups = groups.map(function (g) {
                            return g === group ? newGroup : g;
                        });
                        _this.updateGroups({
                            groups: newGroups,
                            alertSuccess: t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Group \"", "\" roles successfully updated in \"", "\"."], ["Group \"", "\" roles successfully updated in \"", "\"."])), group.name, name),
                            alertFailure: t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Group \"", "\" roles could not be update in \"", "\"."], ["Group \"", "\" roles could not be update in \"", "\"."])), group.name, name),
                            stateUpdate: { showRoleSelectWizard: null },
                        });
                    }, removeRole: function (role, group) {
                        var name = namespace.name, groups = namespace.groups;
                        var newGroup = __assign(__assign({}, group), { object_roles: group.object_roles.filter(function (name) { return name !== role; }) });
                        var newGroups = groups.map(function (g) {
                            return g === group ? newGroup : g;
                        });
                        _this.updateGroups({
                            groups: newGroups,
                            alertSuccess: t(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Group \"", "\" roles successfully updated in \"", "\"."], ["Group \"", "\" roles successfully updated in \"", "\"."])), group.name, name),
                            alertFailure: t(templateObject_21 || (templateObject_21 = __makeTemplateObject(["Group \"", "\" roles could not be update in \"", "\"."], ["Group \"", "\" roles could not be update in \"", "\"."])), group.name, name),
                            stateUpdate: { showRoleRemoveModal: null },
                        });
                    }, urlPrefix: formatPath(Paths.namespaceByRepo, {
                        repo: this.context.selectedRepo,
                        namespace: namespace.name,
                    }) })) : null),
            canSign && (React.createElement(SignAllCertificatesModal, { name: this.state.namespace.name, isOpen: this.state.isOpenSignModal, onSubmit: function () {
                    _this.signAllCertificates(namespace);
                }, onCancel: function () {
                    _this.setState({ isOpenSignModal: false });
                } }))));
    };
    NamespaceDetail.prototype.handleCollectionAction = function (id, action) {
        var _this = this;
        var collection = this.state.collections.find(function (x) { return x.id === id; });
        switch (action) {
            case 'upload':
                this.setState({
                    updateCollection: collection,
                    showImportModal: true,
                });
                break;
            case 'deprecate':
                this.setState({
                    alerts: __spreadArray(__spreadArray([], this.state.alerts, true), [
                        {
                            variant: 'info',
                            title: t(templateObject_22 || (templateObject_22 = __makeTemplateObject(["Deprecation status update starting for collection \"", "\"."], ["Deprecation status update starting for collection \"", "\"."])), collection.name),
                        },
                    ], false),
                });
                CollectionAPI.setDeprecation(collection, !collection.deprecated, this.context.selectedRepo)
                    .then(function (result) {
                    var taskId = parsePulpIDFromURL(result.data.task);
                    return waitForTask(taskId).then(function () {
                        var title = collection.deprecated
                            ? t(templateObject_23 || (templateObject_23 = __makeTemplateObject(["Collection \"", "\" has been successfully undeprecated."], ["Collection \"", "\" has been successfully undeprecated."])), collection.name) : t(templateObject_24 || (templateObject_24 = __makeTemplateObject(["Collection \"", "\" has been successfully deprecated."], ["Collection \"", "\" has been successfully deprecated."])), collection.name);
                        _this.setState({
                            alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                                {
                                    title: title,
                                    variant: 'success',
                                },
                            ], false),
                        });
                        return _this.loadCollections();
                    });
                })
                    .catch(function () {
                    _this.setState({
                        warning: t(templateObject_25 || (templateObject_25 = __makeTemplateObject(["API Error: Failed to set deprecation."], ["API Error: Failed to set deprecation."]))),
                    });
                });
                break;
        }
    };
    NamespaceDetail.prototype.renderResources = function (namespace) {
        return (React.createElement("div", { className: 'pf-c-content preview' },
            React.createElement(ReactMarkdown, null, namespace.resources)));
    };
    NamespaceDetail.prototype.signAllCertificates = function (namespace) {
        var _this = this;
        var errorAlert = function (status) {
            if (status === void 0) { status = 500; }
            return ({
                variant: 'danger',
                title: t(templateObject_26 || (templateObject_26 = __makeTemplateObject(["Failed to sign all collections."], ["Failed to sign all collections."]))),
                description: t(templateObject_27 || (templateObject_27 = __makeTemplateObject(["API Error: ", ""], ["API Error: ", ""])), status),
            });
        };
        this.setState({
            alerts: __spreadArray(__spreadArray([], this.state.alerts, true), [
                {
                    id: 'loading-signing',
                    variant: 'success',
                    title: t(templateObject_28 || (templateObject_28 = __makeTemplateObject(["Signing started for all collections in namespace \"", "\"."], ["Signing started for all collections in namespace \"", "\"."])), namespace.name),
                },
            ], false),
            isOpenSignModal: false,
        });
        SignCollectionAPI.sign({
            signing_service: this.context.settings.GALAXY_COLLECTION_SIGNING_SERVICE,
            distro_base_path: this.context.selectedRepo,
            namespace: namespace.name,
        })
            .then(function (result) {
            waitForTask(result.data.task_id)
                .then(function () {
                _this.load();
            })
                .catch(function (error) {
                _this.setState({
                    alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [errorAlert(error)], false),
                });
            })
                .finally(function () {
                _this.setState({
                    alerts: _this.state.alerts.filter(function (x) { return (x === null || x === void 0 ? void 0 : x.id) !== 'loading-signing'; }),
                });
            });
        })
            .catch(function (error) {
            // The request failed in the first place
            _this.setState({
                alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [errorAlert(error.response.status)], false),
            });
        });
    };
    NamespaceDetail.prototype.loadCollections = function () {
        var _this = this;
        CollectionAPI.list(__assign({}, ParamHelper.getReduced(this.state.params, this.nonAPIParams)), this.context.selectedRepo).then(function (result) {
            _this.setState({
                collections: result.data.data,
                itemCount: result.data.meta.count,
            });
        });
    };
    NamespaceDetail.prototype.load = function () {
        var _this = this;
        Promise.all([
            CollectionAPI.list(__assign({}, ParamHelper.getReduced(this.state.params, this.nonAPIParams)), this.context.selectedRepo),
            NamespaceAPI.get(this.props.routeParams.namespace, {
                include_related: 'my_permissions',
            }),
            MyNamespaceAPI.get(this.props.routeParams.namespace, {
                include_related: 'my_permissions',
            }).catch(function (e) {
                // TODO this needs fixing on backend to return nothing in these cases with 200 status
                // if view only mode is enabled disregard errors and hope
                if (_this.context.user.is_anonymous &&
                    _this.context.settings.GALAXY_ENABLE_UNAUTHENTICATED_COLLECTION_ACCESS) {
                    return null;
                }
                // expecting 404 - it just means we can not edit the namespace (unless both NamespaceAPI and MyNamespaceAPI fail)
                return e.response && e.response.status === 404
                    ? null
                    : Promise.reject(e);
            }),
        ])
            .then(function (val) {
            var _a;
            _this.setState({
                collections: val[0].data.data,
                itemCount: val[0].data.meta.count,
                namespace: val[1].data,
                showControls: !!val[2],
                canSign: canSignNamespace(_this.context, (_a = val[2]) === null || _a === void 0 ? void 0 : _a.data),
                group: _this.filterGroup(_this.state.params['group'], val[1].data['groups']),
            });
            _this.loadAllRepos(val[0].data.meta.count);
        })
            .catch(function () {
            _this.setState({ redirect: formatPath(Paths.notFound) });
        });
    };
    NamespaceDetail.prototype.loadAllRepos = function (currentRepoCount) {
        var _this = this;
        // get collections in namespace from each repo
        // except the one we already have
        var repoPromises = Object.keys(Constants.REPOSITORYNAMES)
            .filter(function (repo) { return repo !== _this.context.selectedRepo; })
            .map(function (repo) {
            return CollectionAPI.list({ namespace: _this.props.routeParams.namespace }, repo);
        });
        Promise.all(repoPromises)
            .then(function (results) {
            return _this.setState({
                isNamespaceEmpty: results.every(function (val) { return val.data.meta.count === 0; }) &&
                    currentRepoCount === 0,
            });
        })
            .catch(function (err) {
            var _a = err.response, status = _a.status, statusText = _a.statusText;
            _this.setState({
                alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                    {
                        variant: 'danger',
                        title: t(templateObject_29 || (templateObject_29 = __makeTemplateObject(["Collection repositories could not be displayed."], ["Collection repositories could not be displayed."]))),
                        description: errorMessage(status, statusText),
                    },
                ], false),
            });
        });
    };
    Object.defineProperty(NamespaceDetail.prototype, "updateParams", {
        get: function () {
            return ParamHelper.updateParamsMixin(this.nonQueryStringParams);
        },
        enumerable: false,
        configurable: true
    });
    NamespaceDetail.prototype.renderPageControls = function () {
        var _this = this;
        var _a = this.state, canSign = _a.canSign, collections = _a.collections;
        var can_upload_signatures = this.context.featureFlags.can_upload_signatures;
        var ai_deny_index = this.context.featureFlags.ai_deny_index;
        var hasPermission = this.context.hasPermission;
        var dropdownItems = [
            React.createElement(DropdownItem, { key: '1', component: React.createElement(Link, { to: formatPath(Paths.editNamespace, {
                        namespace: this.state.namespace.name,
                    }) }, t(templateObject_30 || (templateObject_30 = __makeTemplateObject(["Edit namespace"], ["Edit namespace"])))) }),
            hasPermission('galaxy.delete_namespace') && (React.createElement(React.Fragment, { key: '2' }, this.state.isNamespaceEmpty ? (React.createElement(DropdownItem, { onClick: function () { return _this.setState({ isOpenNamespaceModal: true }); } }, t(templateObject_31 || (templateObject_31 = __makeTemplateObject(["Delete namespace"], ["Delete namespace"]))))) : (React.createElement(Tooltip, { isVisible: false, content: React.createElement(Trans, null,
                    "Cannot delete namespace until ",
                    React.createElement("br", null),
                    "collections' dependencies have ",
                    React.createElement("br", null),
                    "been deleted"), position: 'left' },
                React.createElement(DropdownItem, { isDisabled: true }, t(templateObject_32 || (templateObject_32 = __makeTemplateObject(["Delete namespace"], ["Delete namespace"])))))))),
            React.createElement(DropdownItem, { key: '3', component: React.createElement(Link, { to: formatPath(Paths.myImports, {}, {
                        namespace: this.state.namespace.name,
                    }) }, t(templateObject_33 || (templateObject_33 = __makeTemplateObject(["Imports"], ["Imports"])))) }),
            canSign && !can_upload_signatures && (React.createElement(DropdownItem, { key: 'sign-collections', "data-cy": 'sign-all-collections-button', onClick: function () { return _this.setState({ isOpenSignModal: true }); } }, t(templateObject_34 || (templateObject_34 = __makeTemplateObject(["Sign all collections"], ["Sign all collections"]))))),
            ai_deny_index && (React.createElement(DropdownItem, { key: 'wisdom-settings', onClick: function () { return _this.setState({ isOpenWisdomModal: true }); } }, t(templateObject_35 || (templateObject_35 = __makeTemplateObject(["Wisdom settings"], ["Wisdom settings"]))))),
        ].filter(Boolean);
        if (!this.state.showControls) {
            return React.createElement("div", { className: 'hub-namespace-page-controls' });
        }
        return (React.createElement("div", { className: 'hub-namespace-page-controls', "data-cy": 'kebab-toggle' },
            ' ',
            collections.length !== 0 && (React.createElement(Button, { onClick: function () { return _this.setState({ showImportModal: true }); } }, t(templateObject_36 || (templateObject_36 = __makeTemplateObject(["Upload collection"], ["Upload collection"]))))),
            dropdownItems.length > 0 && (React.createElement("div", { "data-cy": 'ns-kebab-toggle' },
                React.createElement(StatefulDropdown, { items: dropdownItems })))));
    };
    NamespaceDetail.prototype.toggleImportModal = function (isOpen, warning) {
        var newState = { showImportModal: isOpen };
        if (warning) {
            newState['warning'] = warning;
        }
        if (!isOpen) {
            newState['updateCollection'] = null;
        }
        this.setState(newState);
    };
    NamespaceDetail.prototype.addAlert = function (alert) {
        this.setState({
            alerts: __spreadArray(__spreadArray([], this.state.alerts, true), [alert], false),
        });
    };
    Object.defineProperty(NamespaceDetail.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    NamespaceDetail.prototype.renderCollectionControls = function (collection) {
        var _this = this;
        var hasPermission = this.context.hasPermission;
        return (React.createElement("div", { style: { display: 'flex', alignItems: 'center' } },
            React.createElement(Button, { onClick: function () { return _this.handleCollectionAction(collection.id, 'upload'); }, variant: 'secondary' }, t(templateObject_37 || (templateObject_37 = __makeTemplateObject(["Upload new version"], ["Upload new version"])))),
            React.createElement(StatefulDropdown, { items: [
                    DeleteCollectionUtils.deleteMenuOption({
                        canDeleteCollection: hasPermission('ansible.delete_collection'),
                        noDependencies: null,
                        onClick: function () {
                            return DeleteCollectionUtils.tryOpenDeleteModalWithConfirm({
                                addAlert: function (alert) { return _this.addAlert(alert); },
                                setState: function (state) { return _this.setState(state); },
                                collection: collection,
                            });
                        },
                    }),
                    React.createElement(DropdownItem, { onClick: function () {
                            return _this.handleCollectionAction(collection.id, 'deprecate');
                        }, key: 'deprecate' }, collection.deprecated ? t(templateObject_38 || (templateObject_38 = __makeTemplateObject(["Undeprecate"], ["Undeprecate"]))) : t(templateObject_39 || (templateObject_39 = __makeTemplateObject(["Deprecate"], ["Deprecate"])))),
                ].filter(Boolean), ariaLabel: 'collection-kebab' })));
    };
    return NamespaceDetail;
}(React.Component));
export { NamespaceDetail };
NamespaceDetail.contextType = AppContext;
export default withRouter(NamespaceDetail);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36, templateObject_37, templateObject_38, templateObject_39;
//# sourceMappingURL=namespace-detail.js.map