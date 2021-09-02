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
import * as React from 'react';
import './collection-detail.scss';
import { withRouter, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Alert } from '@patternfly/react-core';
import { CollectionHeader, TableOfContents, LoadingPageWithHeader, Main, EmptyStateCustom, } from 'src/components';
import { RenderPluginDoc } from '@ansible/galaxy-doc-builder';
import { loadCollection } from './base';
import { ParamHelper, sanitizeDocsUrls } from 'src/utilities';
import { formatPath, namespaceBreadcrumb, Paths } from 'src/paths';
import { AppContext } from 'src/loaders/app-context';
import { ExclamationCircleIcon } from '@patternfly/react-icons';
// renders markdown files in collection docs/ directory
var CollectionDocs = /** @class */ (function (_super) {
    __extends(CollectionDocs, _super);
    function CollectionDocs(props) {
        var _this = _super.call(this, props) || this;
        var params = ParamHelper.parseParamString(props.location.search);
        _this.state = {
            collection: undefined,
            params: params,
        };
        _this.docsRef = React.createRef();
        _this.searchBarRef = React.createRef();
        return _this;
    }
    CollectionDocs.prototype.componentDidMount = function () {
        this.loadCollection(this.context.selectedRepo);
    };
    CollectionDocs.prototype.render = function () {
        var _this = this;
        var _a = this.state, params = _a.params, collection = _a.collection;
        var urlFields = this.props.match.params;
        if (!collection) {
            return React.createElement(LoadingPageWithHeader, null);
        }
        // If the parser can't find anything that matches the URL, neither of
        // these variables should be set
        var displayHTML;
        var pluginData;
        var contentType = urlFields['type'] || 'docs';
        var contentName = urlFields['name'] || urlFields['page'] || null;
        if (contentType === 'docs' && contentName) {
            if (collection.latest_version.docs_blob.documentation_files) {
                var file = collection.latest_version.docs_blob.documentation_files.find(function (x) { return sanitizeDocsUrls(x.name) === urlFields['page']; });
                if (file) {
                    displayHTML = file.html;
                }
            }
        }
        else if (contentName) {
            // check if contents exists
            if (collection.latest_version.docs_blob.contents) {
                var content = collection.latest_version.docs_blob.contents.find(function (x) {
                    return x.content_type === contentType && x.content_name === contentName;
                });
                if (content) {
                    if (contentType === 'role') {
                        displayHTML = content['readme_html'];
                    }
                    else {
                        pluginData = content;
                    }
                }
            }
        }
        else {
            if (collection.latest_version.docs_blob.collection_readme) {
                displayHTML =
                    collection.latest_version.docs_blob.collection_readme.html;
            }
        }
        var breadcrumbs = [
            namespaceBreadcrumb,
            {
                url: formatPath(Paths.namespaceByRepo, {
                    namespace: collection.namespace.name,
                    repo: this.context.selectedRepo,
                }),
                name: collection.namespace.name,
            },
            {
                url: formatPath(Paths.collectionByRepo, {
                    namespace: collection.namespace.name,
                    collection: collection.name,
                    repo: this.context.selectedRepo,
                }),
                name: collection.name,
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
            React.createElement(CollectionHeader, { collection: collection, params: params, updateParams: function (p) {
                    return _this.updateParams(p, function () {
                        return _this.loadCollection(_this.context.selectedRepo, true);
                    });
                }, breadcrumbs: breadcrumbs, activeTab: 'documentation', className: 'header', repo: this.context.selectedRepo }),
            React.createElement(Main, { className: 'main' },
                React.createElement("section", { className: 'docs-container' },
                    React.createElement(TableOfContents, { className: 'sidebar', namespace: collection.namespace.name, collection: collection.name, docs_blob: collection.latest_version.docs_blob, selectedName: contentName, selectedType: contentType, params: params, updateParams: function (p) { return _this.updateParams(p); }, searchBarRef: this.searchBarRef }),
                    React.createElement("div", { className: 'body docs pf-c-content', ref: this.docsRef }, displayHTML || pluginData ? (
                    // if neither variable is set, render not found
                    displayHTML ? (
                    // if displayHTML is set, render it
                    React.createElement("div", { dangerouslySetInnerHTML: {
                            __html: displayHTML,
                        } })) : (
                    // if plugin data is set render it
                    React.createElement(RenderPluginDoc, { plugin: pluginData, renderModuleLink: function (moduleName) {
                            return _this.renderModuleLink(moduleName, collection, params, collection.latest_version.metadata.contents);
                        }, renderDocLink: function (name, href) {
                            return _this.renderDocLink(name, href, collection, params);
                        }, renderTableOfContentsLink: function (title, section) { return (React.createElement(HashLink, { to: '#' + section }, title)); }, renderWarning: function (text) { return (React.createElement(Alert, { isInline: true, variant: 'warning', title: text })); } }))) : (this.renderNotFound(collection.name)))))));
    };
    CollectionDocs.prototype.renderDocLink = function (name, href, collection, params) {
        if (!!href && href.startsWith('http')) {
            return (React.createElement("a", { href: href, target: '_blank' }, name));
        }
        else if (!!href) {
            // TODO: right now this will break if people put
            // ../ at the front of their urls. Need to find a
            // way to document this
            return (React.createElement(Link, { to: formatPath(Paths.collectionDocsPageByRepo, {
                    namespace: collection.namespace.name,
                    collection: collection.name,
                    page: sanitizeDocsUrls(href),
                    repo: this.context.selectedRepo,
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
                    namespace: collection.namespace.name,
                    collection: collection.name,
                    type: 'module',
                    name: moduleName,
                    repo: this.context.selectedRepo,
                }, params) }, moduleName));
        }
        else {
            return moduleName;
        }
    };
    CollectionDocs.prototype.renderNotFound = function (collectionName) {
        return (React.createElement(EmptyStateCustom, { title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Not found"], ["Not found"]))), description: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["The file is not available for this version of ", ""], ["The file is not available for this version of ", ""])), collectionName), icon: ExclamationCircleIcon }));
    };
    Object.defineProperty(CollectionDocs.prototype, "loadCollection", {
        get: function () {
            return loadCollection;
        },
        enumerable: false,
        configurable: true
    });
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
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=collection-docs.js.map