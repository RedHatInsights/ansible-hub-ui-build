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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { t } from '@lingui/macro';
import { Toolbar, ToolbarGroup, ToolbarItem } from '@patternfly/react-core';
import React, { useEffect, useState } from 'react';
import { AnsibleDistributionAPI } from 'src/api';
import { AppliedFilters, ClipboardCopy, CollectionHeader, CompoundFilter, DateComponent, EmptyStateFilter, EmptyStateNoData, LoadingPageSpinner, LoadingPageWithHeader, Main, Pagination, SortTable, } from 'src/components';
import { Paths, formatPath, namespaceBreadcrumb } from 'src/paths';
import { ParamHelper, filterIsSet, getRepoUrl, withRouter, } from 'src/utilities';
import { loadCollection } from './base';
var CollectionDistributions = function (props) {
    var routeParams = ParamHelper.parseParamString(props.location.search);
    var _a = useState([]), collections = _a[0], setCollections = _a[1];
    var _b = useState(null), collection = _b[0], setCollection = _b[1];
    var _c = useState(null), content = _c[0], setContent = _c[1];
    var _d = useState(''), inputText = _d[0], setInputText = _d[1];
    var _e = useState(null), distributions = _e[0], setDistributions = _e[1];
    var _f = useState(0), count = _f[0], setCount = _f[1];
    var _g = useState(true), loading = _g[0], setLoading = _g[1];
    var _h = useState(Object.keys(routeParams).length
        ? routeParams
        : {
            sort: '-pulp_created',
        }), params = _h[0], setParams = _h[1];
    var loadCollections = function (forceReload) {
        loadCollection({
            forceReload: forceReload,
            matchParams: props.routeParams,
            navigate: props.navigate,
            setCollection: function (collections, collection, content) {
                setCollections(collections);
                setCollection(collection);
                setContent(content);
                loadDistributions(collection.repository.pulp_href);
            },
            stateParams: params,
        });
    };
    var loadDistributions = function (repositoryHref) { return __awaiter(void 0, void 0, void 0, function () {
        var distroList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    return [4 /*yield*/, AnsibleDistributionAPI.list(__assign({ repository: repositoryHref }, ParamHelper.getReduced(params, ['version'])))];
                case 1:
                    distroList = _a.sent();
                    setDistributions(distroList.data.results);
                    setCount(distroList.data.count);
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        loadCollections(false);
    }, []);
    useEffect(function () {
        loadCollections(false);
    }, [params]);
    if (!collection || !content || collections.length <= 0) {
        return React.createElement(LoadingPageWithHeader, null);
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
        { name: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Distributions"], ["Distributions"]))) },
    ];
    var cliConfig = function (distribution) {
        return [
            '[galaxy]',
            "server_list = ".concat(distribution.base_path),
            '',
            "[galaxy_server.".concat(distribution.base_path, "]"),
            "url=".concat(getRepoUrl()),
            'token=<put your token here>',
        ].join('\n');
    };
    var updateParamsMixin = function (params) {
        props.navigate({
            search: '?' + ParamHelper.getQueryString(params || []),
        });
        setParams(params);
    };
    var renderTable = function (distributions, params) {
        if (distributions.length === 0) {
            return filterIsSet(params, [
                'name__icontains',
                'base_path__icontains',
            ]) ? (React.createElement(EmptyStateFilter, null)) : (React.createElement(EmptyStateNoData, { title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["No distributions yet"], ["No distributions yet"]))), description: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Collection doesn't have any distribution assigned."], ["Collection doesn't have any distribution assigned."]))) }));
        }
        var sortTableOptions = {
            headers: [
                {
                    title: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Name"], ["Name"]))),
                    type: 'alpha',
                    id: 'name',
                },
                {
                    title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Base path"], ["Base path"]))),
                    type: 'alpha',
                    id: 'base_path',
                },
                {
                    title: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Created"], ["Created"]))),
                    type: 'alpha',
                    id: 'pulp_created',
                },
                {
                    title: t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["CLI configuration"], ["CLI configuration"]))),
                    type: 'none',
                    id: '',
                },
            ],
        };
        return (React.createElement("table", { "aria-label": t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Collection distributions"], ["Collection distributions"]))), className: 'hub-c-table-content pf-c-table' },
            React.createElement(SortTable, { options: sortTableOptions, params: params, updateParams: function (params) {
                    updateParamsMixin(params);
                } }),
            React.createElement("tbody", null, distributions.map(function (distribution, i) { return (React.createElement("tr", { key: i },
                React.createElement("td", null, distribution.name),
                React.createElement("td", null, distribution.base_path),
                React.createElement("td", null,
                    React.createElement(DateComponent, { date: distribution.pulp_created })),
                React.createElement("td", null,
                    React.createElement(ClipboardCopy, { isCode: true, isReadOnly: true, variant: 'expansion', key: i }, cliConfig(distribution))))); }))));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(CollectionHeader, { reload: function () { return loadCollections(true); }, collections: collections, collection: collection, content: content, params: params, updateParams: function (params) {
                updateParamsMixin(ParamHelper.setParam(params, 'version', params.version));
            }, breadcrumbs: breadcrumbs, activeTab: 'distributions' }),
        React.createElement(Main, null,
            React.createElement("section", { className: 'body' },
                React.createElement("div", { className: 'toolbar hub-toolbar' },
                    React.createElement(Toolbar, null,
                        React.createElement(ToolbarGroup, null,
                            React.createElement(ToolbarItem, null,
                                React.createElement(CompoundFilter, { inputText: inputText, onChange: function (text) {
                                        setInputText(text);
                                    }, updateParams: function (p) {
                                        updateParamsMixin(p);
                                    }, params: params, filterConfig: [
                                        {
                                            id: 'name__icontains',
                                            title: t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Name"], ["Name"]))),
                                        },
                                        {
                                            id: 'base_path__icontains',
                                            title: t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Base path"], ["Base path"]))),
                                        },
                                    ] })))),
                    React.createElement(Pagination, { params: params, updateParams: function (p) {
                            updateParamsMixin(p);
                        }, count: count, isTop: true })),
                React.createElement(AppliedFilters, { updateParams: function (p) {
                        updateParamsMixin(p);
                        setInputText('');
                    }, params: params, ignoredParams: ['page_size', 'page', 'sort', 'version'], niceNames: {
                        base_path__icontains: t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Base path"], ["Base path"]))),
                        name__icontains: t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Name"], ["Name"]))),
                    } }),
                loading ? (React.createElement(LoadingPageSpinner, null)) : (renderTable(distributions, params)),
                React.createElement(Pagination, { params: params, updateParams: function (p) {
                        updateParamsMixin(p);
                    }, count: count })))));
};
export default withRouter(CollectionDistributions);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
//# sourceMappingURL=collection-distributions.js.map