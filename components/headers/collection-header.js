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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as React from 'react';
import './header.scss';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import { FormSelect, FormSelectOption, Alert } from '@patternfly/react-core';
import { AppContext } from 'src/loaders/app-context';
import { BaseHeader, Breadcrumbs, LinkTabs, RepoSelector, } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { ParamHelper } from 'src/utilities/param-helper';
var CollectionHeader = /** @class */ (function (_super) {
    __extends(CollectionHeader, _super);
    function CollectionHeader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ignoreParams = ['showing', 'keyords'];
        return _this;
    }
    CollectionHeader.prototype.render = function () {
        var _a = this.props, collection = _a.collection, params = _a.params, updateParams = _a.updateParams, breadcrumbs = _a.breadcrumbs, activeTab = _a.activeTab, className = _a.className;
        var all_versions = __spreadArray([], collection.all_versions, true);
        var match = all_versions.find(function (x) { return x.version === collection.latest_version.version; });
        if (!match) {
            all_versions.push({
                id: collection.latest_version.id,
                version: collection.latest_version.version,
                created: collection.latest_version.created_at,
            });
        }
        var urlKeys = [
            { key: 'documentation', name: 'Docs site' },
            { key: 'homepage', name: 'Website' },
            { key: 'issues', name: 'Issue tracker' },
            { key: 'repository', name: 'Repo' },
        ];
        return (React.createElement(BaseHeader, { className: className, title: collection.name, imageURL: collection.namespace.avatar_url, contextSelector: React.createElement(RepoSelector, { selectedRepo: this.context.selectedRepo, path: Paths.searchByRepo, isDisabled: true }), breadcrumbs: React.createElement(Breadcrumbs, { links: breadcrumbs }), pageControls: React.createElement("div", { style: { display: 'flex', alignItems: 'center' } },
                React.createElement(FormSelect, { onChange: function (val) {
                        return updateParams(ParamHelper.setParam(params, 'version', val));
                    }, value: collection.latest_version.version, "aria-label": 'Select collection version' }, all_versions.map(function (v) { return (React.createElement(FormSelectOption, { key: v.version, value: v.version, label: 'v' + v.version })); }))) },
            collection.deprecated && (React.createElement(Alert, { variant: 'danger', isInline: true, title: 'This collection has been deprecated.' })),
            React.createElement("div", { className: 'tab-link-container' },
                React.createElement("div", { className: 'tabs' }, this.renderTabs(activeTab)),
                React.createElement("div", { className: 'links' },
                    React.createElement("div", null,
                        React.createElement(ExternalLinkAltIcon, null)),
                    urlKeys.map(function (link) {
                        var l = collection.latest_version.metadata[link.key];
                        if (!l) {
                            return null;
                        }
                        return (React.createElement("div", { className: 'link', key: link.key },
                            React.createElement("a", { href: l, target: '_blank' }, link.name)));
                    })))));
    };
    CollectionHeader.prototype.renderTabs = function (active) {
        var _a = this.props, params = _a.params, repo = _a.repo;
        var pathParams = {
            namespace: this.props.collection.namespace.name,
            collection: this.props.collection.name,
            repo: repo,
        };
        var reduced = ParamHelper.getReduced(params, this.ignoreParams);
        var tabs = [
            {
                active: active === 'details',
                title: 'Details',
                link: formatPath(Paths.collectionByRepo, pathParams, reduced),
            },
            {
                active: active === 'documentation',
                title: 'Documentation',
                link: formatPath(Paths.collectionDocsIndexByRepo, pathParams, reduced),
            },
            {
                active: active === 'contents',
                title: 'Contents',
                link: formatPath(Paths.collectionContentListByRepo, pathParams, reduced),
            },
            {
                active: active === 'import-log',
                title: 'Import log',
                link: formatPath(Paths.collectionImportLogByRepo, pathParams, reduced),
            },
        ];
        return React.createElement(LinkTabs, { tabs: tabs });
    };
    CollectionHeader.contextType = AppContext;
    return CollectionHeader;
}(React.Component));
export { CollectionHeader };
//# sourceMappingURL=collection-header.js.map