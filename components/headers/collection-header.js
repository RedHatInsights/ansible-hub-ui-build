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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import * as React from 'react';
import './header.scss';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import { FormSelect, FormSelectOption, Alert } from '@patternfly/react-core';
import { AppContext } from 'src/loaders/app-context';
import { BaseHeader, Breadcrumbs, LinkTabs, RepoSelector, } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { ParamHelper } from 'src/utilities/param-helper';
import { DateComponent } from '../date-component/date-component';
var CollectionHeader = /** @class */ (function (_super) {
    __extends(CollectionHeader, _super);
    function CollectionHeader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ignoreParams = ['showing', 'keyords'];
        return _this;
    }
    CollectionHeader.prototype.render = function () {
        var _a = this.props, collection = _a.collection, params = _a.params, updateParams = _a.updateParams, breadcrumbs = _a.breadcrumbs, activeTab = _a.activeTab, className = _a.className;
        var all_versions = __spreadArray([], collection.all_versions);
        var match = all_versions.find(function (x) { return x.version === collection.latest_version.version; });
        if (!match) {
            all_versions.push({
                id: collection.latest_version.id,
                version: collection.latest_version.version,
                created: collection.latest_version.created_at,
            });
        }
        var urlKeys = [
            { key: 'documentation', name: _(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Docs site"], ["Docs site"]))) },
            { key: 'homepage', name: _(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Website"], ["Website"]))) },
            { key: 'issues', name: _(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Issue tracker"], ["Issue tracker"]))) },
            { key: 'repository', name: _(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Repo"], ["Repo"]))) },
        ];
        var latestVersion = collection.latest_version.created_at;
        return (React.createElement(BaseHeader, { className: className, title: collection.name, imageURL: collection.namespace.avatar_url, contextSelector: React.createElement(RepoSelector, { selectedRepo: this.context.selectedRepo, path: Paths.searchByRepo, isDisabled: true }), breadcrumbs: React.createElement(Breadcrumbs, { links: breadcrumbs }), versionControl: React.createElement("div", { className: 'install-version-column' },
                React.createElement("span", null, _(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Version"], ["Version"])))),
                React.createElement("div", { className: 'install-version-dropdown' },
                    React.createElement(FormSelect, { onChange: function (val) {
                            return updateParams(ParamHelper.setParam(params, 'version', val));
                        }, value: collection.latest_version.version, "aria-label": _(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Select collection version"], ["Select collection version"]))) }, all_versions.map(function (v) { return (React.createElement(FormSelectOption, { key: v.version, value: v.version, label: 'v' + v.version })); }))),
                latestVersion ? (React.createElement("span", { className: 'last-updated' },
                    "Last updated",
                    ' ',
                    React.createElement(DateComponent, { date: latestVersion }))) : null) },
            collection.deprecated && (React.createElement(Alert, { variant: 'danger', isInline: true, title: _(templateObject_7 || (templateObject_7 = __makeTemplateObject(["This collection has been deprecated."], ["This collection has been deprecated."]))) })),
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
                active: active === 'install',
                title: _(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Install"], ["Install"]))),
                link: formatPath(Paths.collectionByRepo, pathParams, reduced),
            },
            {
                active: active === 'documentation',
                title: _(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Documentation"], ["Documentation"]))),
                link: formatPath(Paths.collectionDocsIndexByRepo, pathParams, reduced),
            },
            {
                active: active === 'contents',
                title: _(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Contents"], ["Contents"]))),
                link: formatPath(Paths.collectionContentListByRepo, pathParams, reduced),
            },
            {
                active: active === 'import-log',
                title: _(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Import log"], ["Import log"]))),
                link: formatPath(Paths.collectionImportLogByRepo, pathParams, reduced),
            },
        ];
        return React.createElement(LinkTabs, { tabs: tabs });
    };
    CollectionHeader.contextType = AppContext;
    return CollectionHeader;
}(React.Component));
export { CollectionHeader };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
//# sourceMappingURL=collection-header.js.map