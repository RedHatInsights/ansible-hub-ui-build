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
import './header.scss';
import * as moment from 'moment';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import { Select, SelectOption, SelectVariant, List, ListItem, Modal, Alert, Text, Button, } from '@patternfly/react-core';
import { AppContext } from 'src/loaders/app-context';
import { BaseHeader, Breadcrumbs, LinkTabs, RepoSelector, Pagination, } from 'src/components';
import { Paths, formatPath } from 'src/paths';
import { ParamHelper } from 'src/utilities/param-helper';
import { DateComponent } from '../date-component/date-component';
import { Constants } from 'src/constants';
var CollectionHeader = /** @class */ (function (_super) {
    __extends(CollectionHeader, _super);
    function CollectionHeader(props) {
        var _this = _super.call(this, props) || this;
        _this.ignoreParams = ['showing', 'keywords'];
        _this.updatePaginationParams = function (_a) {
            var page = _a.page, page_size = _a.page_size;
            _this.setState({
                modalPagination: {
                    page: page,
                    pageSize: page_size,
                },
            });
        };
        _this.state = {
            isOpenVersionsSelect: false,
            isOpenVersionsModal: false,
            modalPagination: {
                page: 1,
                pageSize: Constants.DEFAULT_PAGINATION_OPTIONS[1],
            },
        };
        return _this;
    }
    CollectionHeader.prototype.render = function () {
        var _this = this;
        var _a = this.props, collection = _a.collection, params = _a.params, updateParams = _a.updateParams, breadcrumbs = _a.breadcrumbs, activeTab = _a.activeTab, className = _a.className;
        var _b = this.state, modalPagination = _b.modalPagination, isOpenVersionsModal = _b.isOpenVersionsModal, isOpenVersionsSelect = _b.isOpenVersionsSelect;
        var numOfshownVersions = 10;
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
            { key: 'documentation', name: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Docs site"], ["Docs site"]))) },
            { key: 'homepage', name: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Website"], ["Website"]))) },
            { key: 'issues', name: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Issue tracker"], ["Issue tracker"]))) },
            { key: 'repository', name: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Repo"], ["Repo"]))) },
        ];
        var latestVersion = collection.latest_version.created_at;
        var isLatestVersion = function (v) {
            return moment(v.created).fromNow() + " " + (v.version === all_versions[0].version ? t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["(latest)"], ["(latest)"]))) : '');
        };
        var collectionName = collection.name;
        return (React.createElement(React.Fragment, null,
            React.createElement(Modal, { isOpen: isOpenVersionsModal, title: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Collection versions"], ["Collection versions"]))), variant: 'small', onClose: function () { return _this.setState({ isOpenVersionsModal: false }); } },
                React.createElement(List, { isPlain: true },
                    React.createElement("div", { className: 'versions-modal-header' },
                        React.createElement(Text, null, t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["", "'s versions."], ["", "'s versions."])), collectionName)),
                        React.createElement(Pagination, { isTop: true, params: {
                                page: modalPagination.page,
                                page_size: modalPagination.pageSize,
                            }, updateParams: this.updatePaginationParams, count: all_versions.length })),
                    this.paginateVersions(all_versions).map(function (v, i) { return (React.createElement(ListItem, { key: i },
                        React.createElement(Button, { variant: 'link', isInline: true, onClick: function () {
                                updateParams(ParamHelper.setParam(params, 'version', v.version.toString()));
                                _this.setState({ isOpenVersionsModal: false });
                            } },
                            "v",
                            v.version),
                        ' ', t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["released ", ""], ["released ", ""])), isLatestVersion(v)))); })),
                React.createElement(Pagination, { params: {
                        page: modalPagination.page,
                        page_size: modalPagination.pageSize,
                    }, updateParams: this.updatePaginationParams, count: all_versions.length })),
            React.createElement(BaseHeader, { className: className, title: collection.name, imageURL: collection.namespace.avatar_url, contextSelector: React.createElement(RepoSelector, { selectedRepo: this.context.selectedRepo, path: Paths.searchByRepo, isDisabled: true }), breadcrumbs: React.createElement(Breadcrumbs, { links: breadcrumbs }), versionControl: React.createElement("div", { className: 'install-version-column' },
                    React.createElement("span", null, t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Version"], ["Version"])))),
                    React.createElement("div", { className: 'install-version-dropdown' },
                        React.createElement(Select, { isOpen: isOpenVersionsSelect, onToggle: function (isOpenVersionsSelect) {
                                return _this.setState({ isOpenVersionsSelect: isOpenVersionsSelect });
                            }, variant: SelectVariant.single, onSelect: function () {
                                return _this.setState({ isOpenVersionsSelect: false });
                            }, selections: "v" + collection.latest_version.version, "aria-label": t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Select collection version"], ["Select collection version"]))), loadingVariant: numOfshownVersions < all_versions.length
                                ? {
                                    text: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["View more"], ["View more"]))),
                                    onClick: function () {
                                        return _this.setState({
                                            isOpenVersionsModal: true,
                                            isOpenVersionsSelect: false,
                                        });
                                    },
                                }
                                : null }, this.renderSelectVersions(all_versions, numOfshownVersions).map(function (v) { return (React.createElement(SelectOption, { key: v.version, value: "v" + v.version, onClick: function () {
                                return updateParams(ParamHelper.setParam(params, 'version', v.version.toString()));
                            } },
                            React.createElement(Trans, null,
                                v.version,
                                " released ",
                                isLatestVersion(v)))); }))),
                    latestVersion ? (React.createElement("span", { className: 'last-updated' },
                        React.createElement(Trans, null,
                            "Last updated ",
                            React.createElement(DateComponent, { date: latestVersion })))) : null) },
                collection.deprecated && (React.createElement(Alert, { variant: 'danger', isInline: true, title: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["This collection has been deprecated."], ["This collection has been deprecated."]))) })),
                React.createElement("div", { className: 'tab-link-container' },
                    React.createElement("div", { className: 'tabs' }, this.renderTabs(activeTab)),
                    React.createElement("div", { className: 'links' },
                        React.createElement("div", null,
                            React.createElement(ExternalLinkAltIcon, null)),
                        urlKeys.map(function (link) {
                            var url = collection.latest_version.metadata[link.key];
                            if (!url) {
                                return null;
                            }
                            return (React.createElement("div", { className: 'link', key: link.key },
                                React.createElement("a", { href: url, target: '_blank' }, link.name)));
                        }))))));
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
                title: t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Install"], ["Install"]))),
                link: formatPath(Paths.collectionByRepo, pathParams, reduced),
            },
            {
                active: active === 'documentation',
                title: t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Documentation"], ["Documentation"]))),
                link: formatPath(Paths.collectionDocsIndexByRepo, pathParams, reduced),
            },
            {
                active: active === 'contents',
                title: t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Contents"], ["Contents"]))),
                link: formatPath(Paths.collectionContentListByRepo, pathParams, reduced),
            },
            {
                active: active === 'import-log',
                title: t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Import log"], ["Import log"]))),
                link: formatPath(Paths.collectionImportLogByRepo, pathParams, reduced),
            },
            {
                active: active === 'dependencies',
                title: t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Dependencies"], ["Dependencies"]))),
                link: formatPath(Paths.collectionDependenciesByRepo, pathParams, reduced),
            },
        ];
        return React.createElement(LinkTabs, { tabs: tabs });
    };
    CollectionHeader.prototype.renderSelectVersions = function (versions, count) {
        return versions.slice(0, count);
    };
    CollectionHeader.prototype.paginateVersions = function (versions) {
        var modalPagination = this.state.modalPagination;
        return versions.slice(modalPagination.pageSize * (modalPagination.page - 1), modalPagination.pageSize * modalPagination.page);
    };
    CollectionHeader.contextType = AppContext;
    return CollectionHeader;
}(React.Component));
export { CollectionHeader };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17;
//# sourceMappingURL=collection-header.js.map