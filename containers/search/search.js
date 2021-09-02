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
import * as React from 'react';
import './search.scss';
import { withRouter } from 'react-router-dom';
import { Section } from '@redhat-cloud-services/frontend-components';
import { DataList, Toolbar, ToolbarGroup, ToolbarItem, ToolbarContent, Switch, } from '@patternfly/react-core';
import { BaseHeader, CollectionCard, CardListSwitcher, CollectionListItem, CompoundFilter, Pagination, LoadingPageSpinner, AppliedFilters, EmptyStateFilter, EmptyStateNoData, RepoSelector, } from 'src/components';
import { CollectionAPI, MySyncListAPI, } from 'src/api';
import { ParamHelper } from 'src/utilities/param-helper';
import { Constants } from 'src/constants';
import { AppContext } from 'src/loaders/app-context';
import { filterIsSet } from 'src/utilities';
import { Paths } from 'src/paths';
var Search = /** @class */ (function (_super) {
    __extends(Search, _super);
    function Search(props) {
        var _this = _super.call(this, props) || this;
        var params = ParamHelper.parseParamString(props.location.search, [
            'page',
            'page_size',
        ]);
        if (!params['page_size']) {
            params['page_size'] = Constants.CARD_DEFAULT_PAGE_SIZE;
        }
        // Load view type from local storage if it's not set. This allows a
        // user's view type preference to persist
        if (!params['view_type']) {
            params['view_type'] = localStorage.getItem(Constants.SEARCH_VIEW_TYPE_LOCAL_KEY);
        }
        _this.state = {
            collections: [],
            params: params,
            numberOfResults: 0,
            loading: true,
            synclist: undefined,
        };
        return _this;
    }
    Search.prototype.componentDidMount = function () {
        this.queryCollections();
        if (DEPLOYMENT_MODE === Constants.INSIGHTS_DEPLOYMENT_MODE)
            this.getSynclist();
    };
    Search.prototype.render = function () {
        var _this = this;
        var _a = this.state, collections = _a.collections, params = _a.params, numberOfResults = _a.numberOfResults;
        var noData = collections.length === 0 && !filterIsSet(params, ['keywords', 'tags']);
        var tags = [
            'cloud',
            'linux',
            'networking',
            'storage',
            'security',
            'windows',
            'infrastructure',
            'monitoring',
            'tools',
            'database',
            'application',
        ];
        return (React.createElement("div", { className: 'search-page' },
            React.createElement(BaseHeader, { className: 'header', title: 'Collections', contextSelector: React.createElement(RepoSelector, { selectedRepo: this.context.selectedRepo, path: Paths.searchByRepo }) }, !noData && (React.createElement("div", { className: 'toolbar-wrapper' },
                React.createElement("div", { className: 'toolbar' },
                    React.createElement(Toolbar, null,
                        React.createElement(ToolbarContent, null,
                            React.createElement(ToolbarGroup, null,
                                React.createElement(ToolbarItem, null,
                                    React.createElement(CompoundFilter, { updateParams: function (p) {
                                            return _this.updateParams(p, function () { return _this.queryCollections(); });
                                        }, params: params, filterConfig: [
                                            {
                                                id: 'keywords',
                                                title: 'Keywords',
                                            },
                                            {
                                                id: 'tags',
                                                title: 'Tag',
                                                inputType: 'multiple',
                                                options: tags.map(function (tag) { return ({
                                                    id: tag,
                                                    title: tag,
                                                }); }),
                                            },
                                        ] }),
                                    React.createElement(ToolbarItem, null,
                                        React.createElement(AppliedFilters, { style: { marginTop: '16px' }, updateParams: function (p) {
                                                return _this.updateParams(p, function () {
                                                    return _this.queryCollections();
                                                });
                                            }, params: params, ignoredParams: [
                                                'page_size',
                                                'page',
                                                'sort',
                                                'view_type',
                                            ] })))))),
                    React.createElement("div", { className: 'pagination-container' },
                        React.createElement("div", { className: 'card-list-switcher' },
                            React.createElement(CardListSwitcher, { size: 'sm', params: params, updateParams: function (p) {
                                    return _this.updateParams(p, function () {
                                        // Note, we have to use this.state.params instead
                                        // of params in the callback because the callback
                                        // executes before the page can re-run render
                                        // which means params doesn't contain the most
                                        // up to date state
                                        return localStorage.setItem(Constants.SEARCH_VIEW_TYPE_LOCAL_KEY, _this.state.params.view_type);
                                    });
                                } })),
                        React.createElement(Pagination, { params: params, updateParams: function (p) {
                                return _this.updateParams(p, function () { return _this.queryCollections(); });
                            }, count: numberOfResults, perPageOptions: Constants.CARD_DEFAULT_PAGINATION_OPTIONS, isTop: true })))))),
            noData ? (React.createElement(EmptyStateNoData, { title: 'No collections yet', description: 'Collections will appear once uploaded' })) : (React.createElement(React.Fragment, null,
                React.createElement(Section, { className: 'collection-container' }, this.renderCollections(collections, params)),
                React.createElement(Section, { className: 'footer' },
                    React.createElement(Pagination, { params: params, updateParams: function (p) {
                            return _this.updateParams(p, function () { return _this.queryCollections(); });
                        }, perPageOptions: Constants.CARD_DEFAULT_PAGINATION_OPTIONS, count: numberOfResults }))))));
    };
    Search.prototype.renderCollections = function (collections, params) {
        if (this.state.loading) {
            return React.createElement(LoadingPageSpinner, null);
        }
        if (collections.length === 0) {
            return React.createElement(EmptyStateFilter, null);
        }
        if (params.view_type === 'list') {
            return this.renderList(collections);
        }
        else {
            return this.renderCards(collections);
        }
    };
    Search.prototype.renderCards = function (collections) {
        var _this = this;
        return (React.createElement("div", { className: 'cards' }, collections.map(function (c) {
            return (React.createElement(CollectionCard, __assign({ className: 'card', key: c.id }, c, { footer: _this.renderSyncToggle(c.name, c.namespace.name), repo: _this.context.selectedRepo })));
        })));
    };
    Search.prototype.renderSyncToggle = function (name, namespace) {
        var _this = this;
        var synclist = this.state.synclist;
        if (!synclist) {
            return null;
        }
        return (React.createElement(Switch, { id: namespace + '.' + name, className: 'sync-toggle', label: 'Sync', isChecked: this.isCollectionSynced(name, namespace), onChange: function () { return _this.toggleCollectionSync(name, namespace); } }));
    };
    Search.prototype.toggleCollectionSync = function (name, namespace) {
        var _this = this;
        var synclist = __assign({}, this.state.synclist);
        var colIndex = synclist.collections.findIndex(function (el) { return el.name === name && el.namespace === namespace; });
        if (colIndex < 0) {
            synclist.collections.push({ name: name, namespace: namespace });
        }
        else {
            synclist.collections.splice(colIndex, 1);
        }
        MySyncListAPI.update(synclist.id, synclist).then(function (response) {
            _this.setState({ synclist: response.data });
            MySyncListAPI.curate(synclist.id).then(function () { return null; });
        });
    };
    Search.prototype.isCollectionSynced = function (name, namespace) {
        var synclist = this.state.synclist;
        var found = synclist.collections.find(function (el) { return el.name === name && el.namespace === namespace; });
        if (synclist.policy === 'include') {
            return !(found === undefined);
        }
        else {
            return found === undefined;
        }
    };
    Search.prototype.renderList = function (collections) {
        var _this = this;
        return (React.createElement("div", { className: 'list-container' },
            React.createElement("div", { className: 'list' },
                React.createElement(DataList, { className: 'data-list', "aria-label": 'List of Collections' }, collections.map(function (c) { return (React.createElement(CollectionListItem, __assign({ showNamespace: true, key: c.id }, c, { controls: _this.renderSyncToggle(c.name, c.namespace.name), repo: _this.context.selectedRepo }))); })))));
    };
    Search.prototype.getSynclist = function () {
        var _this = this;
        MySyncListAPI.list().then(function (result) {
            // ignore results if more than 1 is returned
            // TODO: should we throw an error for this or just ignore it?
            if (result.data.meta.count === 1) {
                _this.setState({ synclist: result.data.data[0] });
            }
            else {
                console.error("my-synclist returned " + result.data.meta.count + " synclists");
            }
        });
    };
    Search.prototype.queryCollections = function () {
        var _this = this;
        this.setState({ loading: true }, function () {
            CollectionAPI.list(__assign(__assign({}, ParamHelper.getReduced(_this.state.params, ['view_type'])), { deprecated: false }), _this.context.selectedRepo).then(function (result) {
                _this.setState({
                    collections: result.data.data,
                    numberOfResults: result.data.meta.count,
                    loading: false,
                });
            });
        });
    };
    Object.defineProperty(Search.prototype, "updateParams", {
        get: function () {
            return ParamHelper.updateParamsMixin();
        },
        enumerable: false,
        configurable: true
    });
    return Search;
}(React.Component));
export default withRouter(Search);
Search.contextType = AppContext;
//# sourceMappingURL=search.js.map