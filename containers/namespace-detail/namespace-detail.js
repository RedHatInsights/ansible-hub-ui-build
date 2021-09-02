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
import { t, Trans } from '@lingui/macro';
import * as React from 'react';
import './namespace-detail.scss';
import { withRouter, Link, Redirect, } from 'react-router-dom';
import { Alert, AlertActionCloseButton, Button, ClipboardCopy, DropdownItem, } from '@patternfly/react-core';
import * as ReactMarkdown from 'react-markdown';
import { CollectionAPI, NamespaceAPI, MyNamespaceAPI, } from 'src/api';
import { CollectionList, CollectionFilter, LoadingPageWithHeader, Main, Pagination, PartnerHeader, EmptyStateNoData, RepoSelector, StatefulDropdown, } from 'src/components';
import { ImportModal } from './import-modal/import-modal';
import { ParamHelper, getRepoUrl, filterIsSet } from 'src/utilities';
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
            showControls: false, // becomes true when my-namespaces doesn't 404
        };
        return _this;
    }
    NamespaceDetail.prototype.componentDidMount = function () {
        this.loadAll();
    };
    NamespaceDetail.prototype.render = function () {
        var _this = this;
        var _a = this.state, collections = _a.collections, namespace = _a.namespace, params = _a.params, redirect = _a.redirect, itemCount = _a.itemCount, showImportModal = _a.showImportModal, warning = _a.warning, updateCollection = _a.updateCollection;
        if (redirect) {
            return React.createElement(Redirect, { to: redirect });
        }
        if (!namespace) {
            return React.createElement(LoadingPageWithHeader, null);
        }
        var tabs = [t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Collections"], ["Collections"])))];
        if (this.state.showControls) {
            tabs.push(t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["CLI Configuration"], ["CLI Configuration"]))));
        }
        var tab = params['tab'] || 'collections';
        if (namespace.resources) {
            tabs.push(t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Resources"], ["Resources"]))));
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
            warning ? (React.createElement(Alert, { style: {
                    position: 'fixed',
                    right: '5px',
                    top: '80px',
                    zIndex: 300,
                }, variant: 'warning', title: warning, actionClose: React.createElement(AlertActionCloseButton, { onClose: function () { return _this.setState({ warning: '' }); } }) })) : null,
            React.createElement(PartnerHeader, { namespace: namespace, breadcrumbs: [namespaceBreadcrumb, { name: namespace.name }], tabs: tabs, params: params, updateParams: function (p) { return _this.updateParams(p); }, pageControls: this.renderPageControls(), contextSelector: React.createElement(RepoSelector, { selectedRepo: this.context.selectedRepo, path: this.props.match.path, pathParams: { namespace: namespace.name } }), filters: tab.toLowerCase() === 'collections' ? (React.createElement("div", { className: 'toolbar-wrapper namespace-detail' },
                    React.createElement("div", { className: 'toolbar' },
                        React.createElement(CollectionFilter, { ignoredParams: ignoredParams, params: params, updateParams: updateParams }),
                        React.createElement("div", { className: 'pagination-container' },
                            React.createElement(Pagination, { params: params, updateParams: updateParams, count: itemCount, isTop: true }))))) : null }),
            React.createElement(Main, null,
                tab.toLowerCase() === 'collections' ? (noData ? (React.createElement(EmptyStateNoData, { title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["No collections yet"], ["No collections yet"]))), description: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Collections will appear once uploaded"], ["Collections will appear once uploaded"]))), button: this.state.showControls && (React.createElement(Button, { onClick: function () { return _this.setState({ showImportModal: true }); } }, t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Upload collection"], ["Upload collection"]))))) })) : (React.createElement("section", { className: 'body' },
                    React.createElement(CollectionList, { updateParams: updateParams, params: params, ignoredParams: ignoredParams, collections: collections, itemCount: itemCount, showControls: this.state.showControls, handleControlClick: function (id, action) {
                            return _this.handleCollectionAction(id, action);
                        }, repo: this.context.selectedRepo })))) : null,
                tab.toLowerCase() === 'cli configuration' ? (React.createElement("section", { className: 'body' },
                    React.createElement("div", null,
                        React.createElement(ClipboardCopy, { isReadOnly: true }, repositoryUrl),
                        React.createElement("div", null,
                            React.createElement(Trans, null,
                                React.createElement("b", null, "Note:"),
                                " Use this URL to configure ansible-galaxy to upload collections to this namespace. More information on ansible-galaxy configurations can be found",
                                ' ',
                                React.createElement("a", { href: 'https://docs.ansible.com/ansible/latest/galaxy/user_guide.html#configuring-the-ansible-galaxy-client', target: '_blank' }, "here"),
                                "."))))) : null,
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
                        warning: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["API Error: Failed to set deprecation."], ["API Error: Failed to set deprecation."]))),
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
            MyNamespaceAPI.get(this.props.match.params['namespace']).catch(
            // expecting 404 - it just means we can not edit the namespace (unless both NamespaceAPI and MyNamespaceAPI fail)
            function (e) {
                return e.response && e.response.status === 404 ? null : Promise.reject(e);
            }),
        ])
            .then(function (val) {
            _this.setState({
                collections: val[0].data.data,
                itemCount: val[0].data.meta.count,
                namespace: val[1].data,
                showControls: !!val[2],
            });
        })
            .catch(function (response) {
            _this.setState({ redirect: Paths.notFound });
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
        if (!this.state.showControls) {
            return React.createElement("div", { style: { display: 'flex', alignItems: 'center' } });
        }
        return (React.createElement("div", { style: { display: 'flex', alignItems: 'center' } },
            ' ',
            collections.length !== 0 && (React.createElement(Button, { onClick: function () { return _this.setState({ showImportModal: true }); } }, t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Upload collection"], ["Upload collection"]))))),
            React.createElement(StatefulDropdown, { items: [
                    React.createElement(DropdownItem, { key: '1', component: React.createElement(Link, { to: formatPath(Paths.editNamespace, {
                                namespace: this.state.namespace.name,
                            }) }, t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Edit namespace"], ["Edit namespace"])))) }),
                    React.createElement(DropdownItem, { key: '2', component: React.createElement(Link, { to: formatPath(Paths.myImports, {}, {
                                namespace: this.state.namespace.name,
                            }) }, t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Imports"], ["Imports"])))) }),
                ] })));
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
    return NamespaceDetail;
}(React.Component));
export { NamespaceDetail };
NamespaceDetail.contextType = AppContext;
export default withRouter(NamespaceDetail);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
//# sourceMappingURL=namespace-detail.js.map