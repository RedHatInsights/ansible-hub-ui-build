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
import { withRouter, Link, Redirect, } from 'react-router-dom';
import { Alert, AlertActionCloseButton, Button, DropdownItem, Tooltip, Text, Checkbox, } from '@patternfly/react-core';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import * as ReactMarkdown from 'react-markdown';
import { CollectionAPI, NamespaceAPI, MyNamespaceAPI, } from 'src/api';
import { CollectionList, CollectionFilter, LoadingPageWithHeader, Main, Pagination, PartnerHeader, EmptyStateNoData, RepoSelector, StatefulDropdown, ClipboardCopy, AlertList, closeAlertMixin, ConfirmModal, } from 'src/components';
import { ImportModal } from './import-modal/import-modal';
import { ParamHelper, getRepoUrl, filterIsSet } from 'src/utilities';
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
            _this.setState({ isNamespacePending: true }, function () {
                return NamespaceAPI.delete(_this.state.namespace.name)
                    .then(function () {
                    _this.setState({
                        redirect: formatPath(Paths.namespaces, {}),
                        confirmDelete: false,
                        isNamespacePending: false,
                    });
                    _this.context.setAlerts(__spreadArray(__spreadArray([], _this.context.alerts, true), [
                        {
                            variant: 'success',
                            title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Successfully deleted namespace."], ["Successfully deleted namespace."]))),
                        },
                    ], false));
                })
                    .catch(function (e) {
                    _this.setState({
                        alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                            {
                                variant: 'danger',
                                title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Error deleting namespace."], ["Error deleting namespace."]))),
                                description: e.message,
                            },
                        ], false),
                        isOpenNamespaceModal: false,
                        confirmDelete: false,
                        isNamespacePending: false,
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
            alerts: [],
            isNamespaceEmpty: false,
            confirmDelete: false,
            isNamespacePending: false,
        };
        return _this;
    }
    NamespaceDetail.prototype.componentDidMount = function () {
        this.loadAll();
        if (this.context.alerts)
            this.setState({ alerts: this.context.alerts });
    };
    NamespaceDetail.prototype.componentWillUnmount = function () {
        this.context.setAlerts([]);
    };
    NamespaceDetail.prototype.render = function () {
        var _this = this;
        var _a = this.state, collections = _a.collections, namespace = _a.namespace, params = _a.params, redirect = _a.redirect, itemCount = _a.itemCount, showImportModal = _a.showImportModal, warning = _a.warning, updateCollection = _a.updateCollection, isOpenNamespaceModal = _a.isOpenNamespaceModal, confirmDelete = _a.confirmDelete, isNamespacePending = _a.isNamespacePending;
        if (redirect) {
            return React.createElement(Redirect, { push: true, to: redirect });
        }
        if (!namespace) {
            return React.createElement(LoadingPageWithHeader, null);
        }
        var tabs = [{ id: 'collections', name: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Collections"], ["Collections"]))) }];
        if (this.state.showControls) {
            tabs.push({ id: 'cli-configuration', name: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["CLI configuration"], ["CLI configuration"]))) });
        }
        var tab = params['tab'] || 'collections';
        if (namespace.resources) {
            tabs.push({ id: 'resources', name: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Resources"], ["Resources"]))) });
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
        return (React.createElement(React.Fragment, null,
            React.createElement(ImportModal, { isOpen: showImportModal, onUploadSuccess: function (result) {
                    return _this.setState({
                        redirect: formatPath(Paths.myImports, {}, {
                            namespace: namespace.name,
                        }),
                    });
                }, 
                // onCancel
                setOpen: function (isOpen, warn) { return _this.toggleImportModal(isOpen, warn); }, collection: updateCollection, namespace: namespace.name }),
            isOpenNamespaceModal && (React.createElement(ConfirmModal, { spinner: isNamespacePending, cancelAction: this.closeModal, confirmAction: this.deleteNamespace, title: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Permanently delete namespace?"], ["Permanently delete namespace?"]))), confirmButtonTitle: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Delete"], ["Delete"]))), isDisabled: !confirmDelete || isNamespacePending },
                React.createElement(React.Fragment, null,
                    React.createElement(Text, { className: 'delete-namespace-modal-message' },
                        React.createElement(Trans, null,
                            "Deleting ",
                            React.createElement("b", null, namespace.name),
                            " and its data will be lost.")),
                    React.createElement(Checkbox, { isChecked: confirmDelete, onChange: function (val) { return _this.setState({ confirmDelete: val }); }, label: t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["I understand that this action cannot be undone."], ["I understand that this action cannot be undone."]))), id: 'delete_confirm' })))),
            React.createElement(AlertList, { alerts: this.state.alerts, closeAlert: function (i) { return _this.closeAlert(i); } }),
            warning ? (React.createElement(Alert, { className: 'namespace-warning-alert', variant: 'warning', title: warning, actionClose: React.createElement(AlertActionCloseButton, { onClose: function () { return _this.setState({ warning: '' }); } }) })) : null,
            React.createElement(PartnerHeader, { namespace: namespace, breadcrumbs: [namespaceBreadcrumb, { name: namespace.name }], tabs: tabs, params: params, updateParams: function (p) { return _this.updateParams(p); }, pageControls: this.renderPageControls(), contextSelector: React.createElement(RepoSelector, { selectedRepo: this.context.selectedRepo, path: this.props.match.path, pathParams: { namespace: namespace.name } }), filters: tab.toLowerCase() === 'collections' ? (React.createElement("div", { className: 'toolbar-wrapper namespace-detail' },
                    React.createElement("div", { className: 'toolbar' },
                        React.createElement(CollectionFilter, { ignoredParams: ignoredParams, params: params, updateParams: updateParams }),
                        React.createElement("div", { className: 'pagination-container' },
                            React.createElement(Pagination, { params: params, updateParams: updateParams, count: itemCount, isTop: true }))))) : null }),
            React.createElement(Main, null,
                tab.toLowerCase() === 'collections' ? (noData ? (React.createElement(EmptyStateNoData, { title: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["No collections yet"], ["No collections yet"]))), description: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Collections will appear once uploaded"], ["Collections will appear once uploaded"]))), button: this.state.showControls && (React.createElement(Button, { onClick: function () { return _this.setState({ showImportModal: true }); } }, t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Upload collection"], ["Upload collection"]))))) })) : (React.createElement("section", { className: 'body' },
                    React.createElement(CollectionList, { updateParams: updateParams, params: params, ignoredParams: ignoredParams, collections: collections, itemCount: itemCount, showControls: this.state.showControls, handleControlClick: function (id, action) {
                            return _this.handleCollectionAction(id, action);
                        }, repo: this.context.selectedRepo })))) : null,
                tab.toLowerCase() === 'cli-configuration' ? (React.createElement("section", { className: 'body' },
                    React.createElement("div", null,
                        React.createElement("div", null,
                            React.createElement(Trans, null,
                                React.createElement("b", null, "Note:"),
                                " Use this URL to configure ansible-galaxy to upload collections to this namespace. More information on ansible-galaxy configurations can be found",
                                ' ',
                                React.createElement("a", { href: 'https://docs.ansible.com/ansible/latest/galaxy/user_guide.html#configuring-the-ansible-galaxy-client', target: '_blank' }, "here"),
                                React.createElement("span", null, "\u00A0"),
                                React.createElement(ExternalLinkAltIcon, null),
                                ".")),
                        React.createElement(ClipboardCopy, { isReadOnly: true }, repositoryUrl)))) : null,
                tab.toLowerCase() === 'resources'
                    ? this.renderResources(namespace)
                    : null)));
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
                CollectionAPI.setDeprecation(collection, !collection.deprecated, this.context.selectedRepo)
                    .then(function () { return _this.loadCollections(); })
                    .catch(function (error) {
                    _this.setState({
                        warning: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["API Error: Failed to set deprecation."], ["API Error: Failed to set deprecation."]))),
                    });
                });
                break;
        }
    };
    NamespaceDetail.prototype.renderResources = function (namespace) {
        return (React.createElement("div", { className: 'pf-c-content preview' },
            React.createElement(ReactMarkdown, { source: namespace.resources })));
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
    NamespaceDetail.prototype.loadAll = function () {
        var _this = this;
        Promise.all([
            CollectionAPI.list(__assign({}, ParamHelper.getReduced(this.state.params, this.nonAPIParams)), this.context.selectedRepo),
            NamespaceAPI.get(this.props.match.params['namespace']),
            MyNamespaceAPI.get(this.props.match.params['namespace']).catch(function (e) {
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
            _this.setState({
                collections: val[0].data.data,
                itemCount: val[0].data.meta.count,
                namespace: val[1].data,
                showControls: !!val[2],
            });
            _this.loadAllRepos(val[0].data.meta.count);
        })
            .catch(function (response) {
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
            return _this.setState({
                alerts: __spreadArray(__spreadArray([], _this.state.alerts, true), [
                    {
                        variant: 'danger',
                        title: 'Error loading collection repositories',
                        description: err === null || err === void 0 ? void 0 : err.message,
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
        var collections = this.state.collections;
        var dropdownItems = [
            React.createElement(DropdownItem, { key: '1', component: React.createElement(Link, { to: formatPath(Paths.editNamespace, {
                        namespace: this.state.namespace.name,
                    }) }, t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Edit namespace"], ["Edit namespace"])))) }),
            this.context.user.model_permissions.delete_namespace && (React.createElement(React.Fragment, { key: '2' }, this.state.isNamespaceEmpty ? (React.createElement(DropdownItem, { onClick: function () { return _this.setState({ isOpenNamespaceModal: true }); } }, t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Delete namespace"], ["Delete namespace"]))))) : (React.createElement(Tooltip, { isVisible: false, content: React.createElement(Trans, null,
                    "Cannot delete namespace until ",
                    React.createElement("br", null),
                    "collections' dependencies have ",
                    React.createElement("br", null),
                    "been deleted"), position: 'left' },
                React.createElement(DropdownItem, { isDisabled: true }, t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Delete namespace"], ["Delete namespace"])))))))),
            React.createElement(DropdownItem, { key: '3', component: React.createElement(Link, { to: formatPath(Paths.myImports, {}, {
                        namespace: this.state.namespace.name,
                    }) }, t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Imports"], ["Imports"])))) }),
        ].filter(Boolean);
        if (!this.state.showControls) {
            return React.createElement("div", { className: 'namespace-page-controls' });
        }
        return (React.createElement("div", { className: 'namespace-page-controls', "data-cy": 'kebab-toggle' },
            ' ',
            collections.length !== 0 && (React.createElement(Button, { onClick: function () { return _this.setState({ showImportModal: true }); } }, t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Upload collection"], ["Upload collection"]))))),
            dropdownItems.length > 0 && React.createElement(StatefulDropdown, { items: dropdownItems })));
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
    Object.defineProperty(NamespaceDetail.prototype, "closeAlert", {
        get: function () {
            return closeAlertMixin('alerts');
        },
        enumerable: false,
        configurable: true
    });
    return NamespaceDetail;
}(React.Component));
export { NamespaceDetail };
NamespaceDetail.contextType = AppContext;
export default withRouter(NamespaceDetail);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17;
//# sourceMappingURL=namespace-detail.js.map