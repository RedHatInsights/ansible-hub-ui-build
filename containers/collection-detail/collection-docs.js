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
import { t } from '@lingui/macro';
import { Alert } from '@patternfly/react-core';
import { ExclamationCircleIcon, ExclamationTriangleIcon, } from '@patternfly/react-icons';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { CollectionHeader, EmptyStateCustom, LoadingPageWithHeader, Main, RenderPluginDoc, TableOfContents, } from 'src/components';
import { AppContext } from 'src/loaders/app-context';
import { Paths, formatPath, namespaceBreadcrumb } from 'src/paths';
import { withRouter } from 'src/utilities';
import { ParamHelper, sanitizeDocsUrls } from 'src/utilities';
import { loadCollection } from './base';
import './collection-detail.scss';
// renders markdown files in collection docs/ directory
var CollectionDocs = /** @class */ (function (_super) {
    __extends(CollectionDocs, _super);
    function CollectionDocs(props) {
        var _this = _super.call(this, props) || this;
        var params = ParamHelper.parseParamString(props.location.search);
        _this.state = {
            collections: [],
            collection: null,
            content: null,
            params: params,
        };
        _this.docsRef = React.createRef();
        _this.searchBarRef = React.createRef();
        return _this;
    }
    CollectionDocs.prototype.componentDidMount = function () {
        this.loadCollection(false);
    };
    CollectionDocs.prototype.render = function () {
        var _this = this;
        var _a = this.state, params = _a.params, collection = _a.collection, collections = _a.collections, content = _a.content;
        var urlFields = this.props.routeParams;
        if (!collection || !content) {
            return React.createElement(LoadingPageWithHeader, null);
        }
        // If the parser can't find anything that matches the URL, neither of
        // these variables should be set
        var displayHTML;
        var pluginData;
        var contentType = urlFields['type'] || 'docs';
        var contentName = urlFields['name'] || urlFields['page'] || null;
        if (contentType === 'docs' && contentName) {
            if (content.docs_blob.documentation_files) {
                var file = content.docs_blob.documentation_files.find(function (x) { return sanitizeDocsUrls(x.name) === urlFields['page']; });
                if (file) {
                    displayHTML = file.html;
                }
            }
        }
        else if (contentName) {
            // check if contents exists
            if (content.docs_blob.contents) {
                var selectedContent = content.docs_blob.contents.find(function (x) {
                    return x.content_type === contentType && x.content_name === contentName;
                });
                if (selectedContent) {
                    if (contentType === 'role') {
                        displayHTML = selectedContent['readme_html'];
                    }
                    else {
                        pluginData = selectedContent;
                    }
                }
            }
        }
        else {
            if (content.docs_blob.collection_readme) {
                displayHTML = content.docs_blob.collection_readme.html;
            }
        }
        var collection_version = collection.collection_version, repository = collection.repository;
        var breadcrumbs = [
            namespaceBreadcrumb,
            {
                url: formatPath(Paths.namespaceDetail, {
                    namespace: collection_version.namespace,
                }),
                name: collection_version.namespace,
            },
            {
                url: formatPath(Paths.collectionByRepo, {
                    namespace: collection_version.namespace,
                    collection: collection_version.name,
                    repo: repository.name,
                }),
                name: collection_version.name,
            },
            { name: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Documentation"], ["Documentation"]))) },
        ];
        // scroll to top of page
        // if (
        //   this.docsRef.current &&
        //   this.searchBarRef.current !== window.document.activeElement
        // ) {
        //   this.docsRef.current.scrollIntoView();
        // }
        return (React.createElement(React.Fragment, null,
            React.createElement(CollectionHeader, { reload: function () { return _this.loadCollection(true); }, collection: collection, collections: collections, content: content, params: params, updateParams: function (p) {
                    return _this.updateParams(p, function () { return _this.loadCollection(true); });
                }, breadcrumbs: breadcrumbs, activeTab: 'documentation', className: 'header' }),
            React.createElement(Main, { className: 'main' },
                React.createElement("section", { className: 'docs-container' },
                    React.createElement(TableOfContents, { className: 'sidebar', namespace: collection.collection_version.namespace, collection: collection.collection_version.name, repository: collection.repository.name, docs_blob: content.docs_blob, selectedName: contentName, selectedType: contentType, params: params, updateParams: function (p) { return _this.updateParams(p); }, searchBarRef: this.searchBarRef }),
                    React.createElement("div", { className: 'body docs pf-c-content', ref: this.docsRef }, displayHTML || pluginData ? (
                    // if neither variable is set, render not found
                    displayHTML ? (
                    // if displayHTML is set, render it
                    React.createElement("div", { dangerouslySetInnerHTML: {
                            __html: displayHTML,
                        } })) : (
                    // if plugin data is set render it
                    React.createElement(RenderPluginDoc, { plugin: pluginData, renderModuleLink: function (moduleName) {
                            return _this.renderModuleLink(moduleName, collection, params, content.contents);
                        }, renderDocLink: function (name, href) {
                            return _this.renderDocLink(name, href, collection, params);
                        }, renderTableOfContentsLink: function (title, section) { return (React.createElement(HashLink, { to: '#' + section }, title)); }, renderWarning: function (text) { return (React.createElement(Alert, { isInline: true, variant: 'warning', title: text })); } }))) : collection.repository.name === 'community' &&
                        !content.docs_blob.contents ? (this.renderCommunityWarningMessage()) : (this.renderNotFound(collection.collection_version.name)))))));
    };
    CollectionDocs.prototype.renderDocLink = function (name, href, collection, params) {
        if (!!href && href.startsWith('http')) {
            return (React.createElement("a", { href: href, target: '_blank', rel: 'noreferrer' }, name));
        }
        else if (href) {
            // TODO: right now this will break if people put
            // ../ at the front of their urls. Need to find a
            // way to document this
            var collection_version = collection.collection_version, repository = collection.repository;
            return (React.createElement(Link, { to: formatPath(Paths.collectionDocsPageByRepo, {
                    namespace: collection_version.namespace,
                    collection: collection_version.name,
                    page: sanitizeDocsUrls(href),
                    repo: repository.name,
                }, params) }, name));
        }
        else {
            return null;
        }
    };
    CollectionDocs.prototype.renderModuleLink = function (moduleName, collection, params, allContent) {
        var module = allContent.find(function (x) { return x.content_type === 'module' && x.name === moduleName; });
        if (module) {
            return (React.createElement(Link, { to: formatPath(Paths.collectionContentDocsByRepo, {
                    namespace: collection.collection_version.namespace,
                    collection: collection.collection_version.name,
                    type: 'module',
                    name: moduleName,
                    repo: this.props.routeParams.repo,
                }, params) }, moduleName));
        }
        else {
            return moduleName;
        }
    };
    CollectionDocs.prototype.renderNotFound = function (collectionName) {
        return (React.createElement(EmptyStateCustom, { title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Not found"], ["Not found"]))), description: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["The file is not available for this version of ", ""], ["The file is not available for this version of ", ""])), collectionName), icon: ExclamationCircleIcon }));
    };
    CollectionDocs.prototype.renderCommunityWarningMessage = function () {
        return (React.createElement(EmptyStateCustom, { title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Warning"], ["Warning"]))), description: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Community collections do not have docs nor content counts, but all content gets synchronized"], ["Community collections do not have docs nor content counts, but all content gets synchronized"]))), icon: ExclamationTriangleIcon }));
    };
    CollectionDocs.prototype.loadCollection = function (forceReload) {
        var _this = this;
        loadCollection({
            forceReload: forceReload,
            matchParams: this.props.routeParams,
            navigate: this.props.navigate,
            setCollection: function (collections, collection, content) {
                _this.setState({ collections: collections, collection: collection, content: content });
            },
            stateParams: this.state.params,
        });
    };
    Object.defineProperty(CollectionDocs.prototype, "updateParams", {
        get: function () {
            return ParamHelper.updateParamsMixin();
        },
        enumerable: false,
        configurable: true
    });
    return CollectionDocs;
}(React.Component));
export default withRouter(CollectionDocs);
CollectionDocs.contextType = AppContext;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=collection-docs.js.map