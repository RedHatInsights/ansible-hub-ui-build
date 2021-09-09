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
import { t } from '@lingui/macro';
import * as React from 'react';
import './search.scss';
import { withRouter } from 'react-router-dom';
import { DataList, Switch } from '@patternfly/react-core';
import { BaseHeader, CardListSwitcher, CollectionCard, CollectionFilter, CollectionListItem, EmptyStateFilter, EmptyStateNoData, LoadingPageSpinner, Pagination, RepoSelector, } from 'src/components';
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
        var _a = this.state, loading = _a.loading, collections = _a.collections, params = _a.params, numberOfResults = _a.numberOfResults;
        var noData = collections.length === 0 && !filterIsSet(params, ['keywords', 'tags']);
        var updateParams = function (p) {
            return _this.updateParams(p, function () { return _this.queryCollections(); });
        };
        return (React.createElement("div", { className: 'search-page' },
            React.createElement(BaseHeader, { className: 'header', title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Collections"], ["Collections"]))), contextSelector: React.createElement(RepoSelector, { selectedRepo: this.context.selectedRepo, path: Paths.searchByRepo }) }, !noData && (React.createElement("div", { className: 'toolbar-wrapper' },
                React.createElement("div", { className: 'toolbar' },
                    React.createElement(CollectionFilter, { ignoredParams: ['page', 'page_size', 'sort', 'view_type'], params: params, updateParams: updateParams }),
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
                        React.createElement(Pagination, { params: params, updateParams: updateParams, count: numberOfResults, perPageOptions: Constants.CARD_DEFAULT_PAGINATION_OPTIONS, isTop: true })))))),
            loading ? (React.createElement(LoadingPageSpinner, null)) : noData ? (React.createElement(EmptyStateNoData, { title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["No collections yet"], ["No collections yet"]))), description: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Collections will appear once uploaded"], ["Collections will appear once uploaded"]))) })) : (React.createElement(React.Fragment, null,
                React.createElement("section", { className: 'collection-container' }, this.renderCollections(collections, params, updateParams)),
                React.createElement("section", { className: 'footer' },
                    React.createElement(Pagination, { params: params, updateParams: function (p) {
                            return _this.updateParams(p, function () { return _this.queryCollections(); });
                        }, perPageOptions: Constants.CARD_DEFAULT_PAGINATION_OPTIONS, count: numberOfResults }))))));
    };
    Search.prototype.renderCollections = function (collections, params, updateParams) {
        if (collections.length === 0) {
            return (React.createElement(EmptyStateFilter, { clearAllFilters: function () {
                    ParamHelper.clearAllFilters({
                        params: params,
                        ignoredParams: ['page', 'page_size', 'sort', 'view_type'],
                        updateParams: updateParams,
                    });
                } }));
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
        return (React.createElement(Switch, { id: namespace + '.' + name, className: 'sync-toggle', label: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Sync"], ["Sync"]))), isChecked: this.isCollectionSynced(name, namespace), onChange: function () { return _this.toggleCollectionSync(name, namespace); } }));
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
                React.createElement(DataList, { className: 'data-list', "aria-label": t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["List of Collections"], ["List of Collections"]))) }, collections.map(function (c) { return (React.createElement(CollectionListItem, __assign({ showNamespace: true, key: c.id }, c, { controls: _this.renderSyncToggle(c.name, c.namespace.name), repo: _this.context.selectedRepo }))); })))));
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
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=search.js.map