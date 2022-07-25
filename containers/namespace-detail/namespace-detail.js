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
import './namespace-detail.scss';
import { parsePulpIDFromURL } from 'src/utilities/parse-pulp-id';
import { withRouter, Link, Redirect, } from 'react-router-dom';
import { Alert, AlertActionCloseButton, Button, DropdownItem, Tooltip, Text, Checkbox, } from '@patternfly/react-core';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import ReactMarkdown from 'react-markdown';
import { CollectionAPI, NamespaceAPI, MyNamespaceAPI, SignCollectionAPI, } from 'src/api';
import { CollectionFilter, CollectionList, ImportModal, LoadingPageWithHeader, Main, Pagination, PartnerHeader, EmptyStateNoData, RepoSelector, StatefulDropdown, ClipboardCopy, AlertList, closeAlertMixin, DeleteModal, SignAllCertificatesModal, DeleteCollectionModal, } from 'src/components';
import { ParamHelper, getRepoUrl, filterIsSet, errorMessage, waitForTask, canSign as canSignNS, DeleteCollectionUtils, } from 'src/utilities';
import { Constants } from 'src/constants';
import { formatPath, namespaceBreadcrumb, Paths } from 'src/paths';
import { AppContext } from 'src/loaders/app-context';
var NamespaceDetail = /** @class */ (function (_super) {
    __extends(NamespaceDetail, _super);
    function NamespaceDetail(props) {
        var _this = _super.call(this, props) || this;
        _this.nonAPIParams = ['tab'];
        // namespace is a positional url argument, so don't include it in the
        // query params
        _this.nonQueryStringParams = ['namespace'];
        _this.deleteNamespace = function () {
            var name = _this.state.namespace.name;
            _this.setState({ isNamespacePending: true }, function () {
                return NamespaceAPI.delete(name)
                    .then(function () {
                    _this.setState({
                        redirect: formatPath(namespaceBreadcrumb.url, {}),
                        confirmDelete: false,
                        isNamespacePending: false,
                    });
                    _this.context.setAlerts(__spreadArray(__spreadArray([], _this.context.alerts, true), [
                        {
                            variant: 'success',
                            title: (React.createElement(Trans, null,
                                "Namespace \"",
                                name,
                                "\" has been successfully deleted.")),
                        },
                    ], false));
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
        params['namespace'] = props.match.params['namespace'];
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
            isNamespaceEmpty: false,
            confirmDelete: false,
            isNamespacePending: false,
            alerts: [],
            deleteCollection: null,
            isDeletionPending: false,
        };
        return _this;
    }
    NamespaceDetail.prototype.componentDidMount = function () {
        this.load();
        this.setState({ alerts: this.context.alerts || [] });
    };
    NamespaceDetail.prototype.componentWillUnmount = function () {
        this.context.setAlerts([]);
    };
    NamespaceDetail.prototype.render = function () {
        var _this = this;
        var _a = this.state, canSign = _a.canSign, collections = _a.collections, namespace = _a.namespace, params = _a.params, redirect = _a.redirect, itemCount = _a.itemCount, showImportModal = _a.showImportModal, warning = _a.warning, updateCollection = _a.updateCollection, isOpenNamespaceModal = _a.isOpenNamespaceModal, confirmDelete = _a.confirmDelete, isNamespacePending = _a.isNamespacePending, alerts = _a.alerts, deleteCollection = _a.deleteCollection, isDeletionPending = _a.isDeletionPending;
        if (redirect) {
            return React.createElement(Redirect, { push: true, to: redirect });
        }
        if (!namespace) {
            return React.createElement(LoadingPageWithHeader, null);
        }
        var tabs = [{ id: 'collections', name: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Collections"], ["Collections"]))) }];
        if (this.state.showControls) {
            tabs.push({ id: 'cli-configuration', name: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["CLI configuration"], ["CLI configuration"]))) });
        }
        var tab = params['tab'] || 'collections';
        if (namespace.resources) {
            tabs.push({ id: 'resources', name: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Resources"], ["Resources"]))) });
        }
        var repositoryUrl = getRepoUrl('inbound-' + namespace.name);
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
            'view_type',
        ];
        var total_versions = collections.reduce(function (acc, c) { return acc + c.total_versions; }, 0);
        var unsigned_versions = collections.reduce(function (acc, c) { return acc + c.unsigned_versions; }, 0);
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
            isOpenNamespaceModal && (React.createElement(DeleteModal, { spinner: isNamespacePending, cancelAction: this.closeModal, deleteAction: this.deleteNamespace, title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Delete namespace?"], ["Delete namespace?"]))), isDisabled: !confirmDelete || isNamespacePending },
                React.createElement(React.Fragment, null,
                    React.createElement(Text, { className: 'delete-namespace-modal-message' },
                        React.createElement(Trans, null,
                            "Deleting ",
                            React.createElement("b", null, namespace.name),
                            " and its data will be lost.")),
                    React.createElement(Checkbox, { isChecked: confirmDelete, onChange: function (val) { return _this.setState({ confirmDelete: val }); }, label: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["I understand that this action cannot be undone."], ["I understand that this action cannot be undone."]))), id: 'delete_confirm' })))),
            warning ? (React.createElement(Alert, { className: 'hub-c-alert-namespace', variant: 'warning', title: warning, actionClose: React.createElement(AlertActionCloseButton, { onClose: function () { return _this.setState({ warning: '' }); } }) })) : null,
            React.createElement(PartnerHeader, { namespace: namespace, breadcrumbs: [namespaceBreadcrumb, { name: namespace.name }], tabs: tabs, params: params, updateParams: function (p) { return _this.updateParams(p); }, pageControls: this.renderPageControls(), contextSelector: React.createElement(RepoSelector, { selectedRepo: this.context.selectedRepo, path: this.props.match.path, pathParams: { namespace: namespace.name } }), filters: tab.toLowerCase() === 'collections' ? (React.createElement("div", { className: 'hub-toolbar-wrapper namespace-detail' },
                    React.createElement("div", { className: 'toolbar' },
                        React.createElement(CollectionFilter, { ignoredParams: ignoredParams, params: params, updateParams: updateParams }),
                        React.createElement("div", { className: 'hub-pagination-container' },
                            React.createElement(Pagination, { params: params, updateParams: updateParams, count: itemCount, isTop: true }))))) : null }),
            React.createElement(Main, null,
                tab.toLowerCase() === 'collections' ? (noData ? (React.createElement(EmptyStateNoData, { title: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["No collections yet"], ["No collections yet"]))), description: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Collections will appear once uploaded"], ["Collections will appear once uploaded"]))), button: this.state.showControls && (React.createElement(Button, { onClick: function () { return _this.setState({ showImportModal: true }); } }, t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Upload collection"], ["Upload collection"]))))) })) : (React.createElement("section", { className: 'body' },
                    React.createElement(CollectionList, { updateParams: updateParams, params: params, ignoredParams: ignoredParams, collections: collections, itemCount: itemCount, showControls: this.state.showControls, repo: this.context.selectedRepo, renderCollectionControls: function (collection) {
                            return _this.renderCollectionControls(collection);
                        } })))) : null,
                tab.toLowerCase() === 'cli-configuration' ? (React.createElement("section", { className: 'body' },
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
                tab.toLowerCase() === 'resources'
                    ? this.renderResources(namespace)
                    : null),
            canSign && (React.createElement(SignAllCertificatesModal, { name: this.state.namespace.name, numberOfAffected: total_versions, affectedUnsigned: unsigned_versions, isOpen: this.state.isOpenSignModal, onSubmit: function () {
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
                            title: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Deprecation status update starting for collection \"", "\"."], ["Deprecation status update starting for collection \"", "\"."])), collection.name),
                        },
                    ], false),
                });
                CollectionAPI.setDeprecation(collection, !collection.deprecated, this.context.selectedRepo)
                    .then(function (result) {
                    var taskId = parsePulpIDFromURL(result.data.task);
                    return waitForTask(taskId).then(function () {
                        var title = collection.deprecated
                            ? t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Collection \"", "\" has been successfully undeprecated."], ["Collection \"", "\" has been successfully undeprecated."])), collection.name) : t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Collection \"", "\" has been successfully deprecated."], ["Collection \"", "\" has been successfully deprecated."])), collection.name);
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
                        warning: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["API Error: Failed to set deprecation."], ["API Error: Failed to set deprecation."]))),
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
                title: t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["API Error: ", ""], ["API Error: ", ""])), status),
                description: t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Failed to sign all collections."], ["Failed to sign all collections."]))),
            });
        };
        this.setState({
            alerts: __spreadArray(__spreadArray([], this.state.alerts, true), [
                {
                    id: 'loading-signing',
                    variant: 'success',
                    title: t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Signing started for all collections in namespace \"", "\"."], ["Signing started for all collections in namespace \"", "\"."])), namespace.name),
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
            NamespaceAPI.get(this.props.match.params['namespace']),
            MyNamespaceAPI.get(this.props.match.params['namespace'], {
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
                canSign: canSignNS(_this.context, (_a = val[2]) === null || _a === void 0 ? void 0 : _a.data),
            });
            _this.loadAllRepos(val[0].data.meta.count);
        })
            .catch(function () {
            _this.setState({ redirect: Paths.notFound });
        });
    };
    NamespaceDetail.prototype.loadAllRepos = function (currentRepoCount) {
        var _this = this;
        // get collections in namespace from each repo
        // except the one we already have
        var repoPromises = Object.keys(Constants.REPOSITORYNAMES)
            .filter(function (repo) { return repo !== _this.context.selectedRepo; })
            .map(function (repo) {
            return CollectionAPI.list({ namespace: _this.props.match.params['namespace'] }, repo);
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
                        title: t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Collection repositories could not be displayed."], ["Collection repositories could not be displayed."]))),
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
        var _a;
        var _b = this.state, canSign = _b.canSign, collections = _b.collections;
        var can_upload_signatures = (((_a = this.context) === null || _a === void 0 ? void 0 : _a.featureFlags) || {}).can_upload_signatures;
        var dropdownItems = [
            React.createElement(DropdownItem, { key: '1', component: React.createElement(Link, { to: formatPath(Paths.editNamespace, {
                        namespace: this.state.namespace.name,
                    }) }, t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Edit namespace"], ["Edit namespace"])))) }),
            this.context.user.model_permissions.delete_namespace && (React.createElement(React.Fragment, { key: '2' }, this.state.isNamespaceEmpty ? (React.createElement(DropdownItem, { onClick: function () { return _this.setState({ isOpenNamespaceModal: true }); } }, t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Delete namespace"], ["Delete namespace"]))))) : (React.createElement(Tooltip, { isVisible: false, content: React.createElement(Trans, null,
                    "Cannot delete namespace until ",
                    React.createElement("br", null),
                    "collections' dependencies have ",
                    React.createElement("br", null),
                    "been deleted"), position: 'left' },
                React.createElement(DropdownItem, { isDisabled: true }, t(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Delete namespace"], ["Delete namespace"])))))))),
            React.createElement(DropdownItem, { key: '3', component: React.createElement(Link, { to: formatPath(Paths.myImports, {}, {
                        namespace: this.state.namespace.name,
                    }) }, t(templateObject_21 || (templateObject_21 = __makeTemplateObject(["Imports"], ["Imports"])))) }),
            canSign && !can_upload_signatures && (React.createElement(DropdownItem, { key: 'sign-collections', "data-cy": 'sign-all-collections-button', onClick: function () { return _this.setState({ isOpenSignModal: true }); } }, t(templateObject_22 || (templateObject_22 = __makeTemplateObject(["Sign all collections"], ["Sign all collections"]))))),
        ].filter(Boolean);
        if (!this.state.showControls) {
            return React.createElement("div", { className: 'hub-namespace-page-controls' });
        }
        return (React.createElement("div", { className: 'hub-namespace-page-controls', "data-cy": 'kebab-toggle' },
            ' ',
            collections.length !== 0 && (React.createElement(Button, { onClick: function () { return _this.setState({ showImportModal: true }); } }, t(templateObject_23 || (templateObject_23 = __makeTemplateObject(["Upload collection"], ["Upload collection"]))))),
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
        return (React.createElement("div", { style: { display: 'flex', alignItems: 'center' } },
            React.createElement(Button, { onClick: function () { return _this.handleCollectionAction(collection.id, 'upload'); }, variant: 'secondary' }, t(templateObject_24 || (templateObject_24 = __makeTemplateObject(["Upload new version"], ["Upload new version"])))),
            React.createElement(StatefulDropdown, { items: [
                    DeleteCollectionUtils.deleteMenuOption({
                        canDeleteCollection: this.context.user.model_permissions.delete_collection,
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
                        }, key: 'deprecate' }, collection.deprecated ? t(templateObject_25 || (templateObject_25 = __makeTemplateObject(["Undeprecate"], ["Undeprecate"]))) : t(templateObject_26 || (templateObject_26 = __makeTemplateObject(["Deprecate"], ["Deprecate"])))),
                ].filter(Boolean), ariaLabel: 'collection-kebab' })));
    };
    return NamespaceDetail;
}(React.Component));
export { NamespaceDetail };
NamespaceDetail.contextType = AppContext;
export default withRouter(NamespaceDetail);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26;
//# sourceMappingURL=namespace-detail.js.map